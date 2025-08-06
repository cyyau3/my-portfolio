import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  const rssUrl = 'https://medium.com/feed/@eunice.dev.contact';
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content']
        ]
      }
    });
    
    const feed = await parser.parseURL(rssUrl);
    
    const posts = feed.items
      .map(item => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: new Date(item.pubDate).toLocaleDateString() || '',
        description: item.content || item.description || '',
      }))
      .slice(0, 3); // Gets only the latest 3 posts

    return NextResponse.json(posts);
  } catch (err) {
    console.error('Error fetching Medium feed:', err);
    return NextResponse.json(
      { error: 'Failed to fetch Medium feed.' }, 
      { status: 500 }
    );
  }
}