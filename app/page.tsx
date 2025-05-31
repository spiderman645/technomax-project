import { navItems } from "@/data";
import dynamic from "next/dynamic";

// Dynamically import client components
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen animate-pulse bg-gray-800" />
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-800" />
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-800" />
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-800" />
});

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
  ssr: false,
  loading: () => <div className="h-16 w-full animate-pulse bg-gray-800" />
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-800" />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="min-h-[30vh] animate-pulse bg-gray-800" />
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-800" />
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
