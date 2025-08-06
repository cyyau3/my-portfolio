"use client";
import React, { useEffect, useState } from "react";

const MEDIUM_RSS = "https://medium.com/feed/@eunice.dev.contact";

function parseRSS(xml) {
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = Array.from(doc.querySelectorAll("item"));
  return items.map(item => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate")?.textContent || "",
    description: item.querySelector("description")?.textContent || "",
    creator: item.querySelector("creator")?.textContent || "",
  }));
}

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRSS() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/medium-feed`);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const data = await res.json();
        setPosts(data.slice(0, 3));
      } catch (err) {
        setError("Could not load blog posts.");
      } finally {
        setLoading(false);
      }
    }
    fetchRSS();
  }, []);

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 text-[var(--text-primary)]">Latest Blog Posts</h2>
          <p className="text-lg text-[var(--text-secondary)]">Thoughts on development, design, and technology</p>
        </div>
        {loading ? (
          <div className="text-center text-[var(--text-secondary)]">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="flex flex-col space-y-6 mx-auto">
            {posts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--card-bg)] rounded-xl p-6 shadow-[var(--shadow)] hover:shadow-[var(--shadow-hover)] transition-shadow group cursor-pointer border border-[var(--card-border)] flex flex-col h-full"
              >
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                  <span>{new Date(post.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[var(--text-secondary)] flex-1" dangerouslySetInnerHTML={{ __html: post.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...' }} />
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[var(--accent)] font-semibold group-hover:underline">Read More</span>
                  <svg className="w-5 h-5 ml-1 text-[var(--accent)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </a>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <a href="https://medium.com/@eunice.dev.contact" target="_blank" rel="noopener noreferrer">
            <button className="text-[var(--text-primary)] px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-md hover:scale-105 transition-transform duration-300">
              View All Posts
            </button>
          </a>
        </div>
      </div>
    </section>
  );
} 