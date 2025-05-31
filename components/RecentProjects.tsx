"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import PinContainer with no SSR
const PinContainer = dynamic(() => import("./ui/Pin").then(mod => mod.PinContainer), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded-lg w-full h-full min-h-[32.5rem]"></div>
  )
});

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
         <span className="text-purple">Courses we provide</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              title={item.title}
            >
              <Suspense fallback={
                <div className="animate-pulse bg-gray-800 rounded-lg w-full h-full min-h-[32.5rem]"></div>
              }>
                <PinContainer title={item.title} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        src="/bg.png"
                        alt="background"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    </div>
                    <div className="z-10 absolute bottom-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={300}
                        height={200}
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={`technology-${index}`}
                            width={24}
                            height={24}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </Suspense>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
