import React from "react";
import Link from "next/link";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  // Define URLs for each feature
  const featureUrls = {
    "Learn to Code Visually": "https://speciallearnn.netlify.app/",
    "AI Interview Coach": "https://speciallearn2.netlify.app/",
    "One-on-One Mentorship": "https://mentor-connec.netlify.app/",
    "Inclusive Learning for Every Child": "https://speciallearnn.netlify.app/inclusive"
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Our <span className="text-purple">Features</span>
      </h1>

      <div className="w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-8">
        {workExperience.map((card) => (
          <Link
            key={card.id}
            href={featureUrls[card.title as keyof typeof featureUrls] || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-[1.02] duration-300"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                minHeight: "280px"
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="w-full h-full"
            >
              <div className="flex flex-col md:flex-row items-start p-8 h-full w-full gap-6">
                <div className="md:w-1/4 flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-24 md:w-32"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-3/4">
                  <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {card.title}
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
