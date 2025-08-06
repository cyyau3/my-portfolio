"use client"
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import ("react-animated-numbers")
    }, 
    {ssr: false}
);

const achievementsList = [
    {
        metric: "Projects",
        value:"10",
        postfix: "+",
    },
    {
        metric: "Certificates",
        value:"15",
        postfix: "+",
    },
    {
        metric: "Languages",
        value:"7"
    },
    {
        metric: "Experience",
        value:"2",
        postfix: "+",
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-12 lg:py-16 px-4 xl:gap-10 xl:px-16">
            <div className="sm:border-[var(--card-border)] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-none sm:gap-0 grid sm:flex bg-[var(--card-bg)]">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="text-[var(--text-primary)] text-4xl font-bold flex flex-row">
                                {/*{achievement.prefix}*/}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-[var(--text-primary)] text-4xl font-bold"
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        };
                                    }}
                                />
                                <span className="text-[var(--text-primary)]">{achievement.postfix}</span>
                            </h2>
                            <p className="text-[var(--text-secondary)] text-base font-body">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;