"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Techs from "@/components/Techs";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex 
    justify-center items-center flex-col  
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Techs />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
