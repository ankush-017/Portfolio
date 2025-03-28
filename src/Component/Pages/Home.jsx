import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import Hero from './Hero';
import About from './About';
// import Footer from '../Footer/Footer';
import Skill from './Skill';

function Home() {
  return (
    <>
      <div className="relative h-screen md:h-[80vh] lg:h-[100vh]">
        <div className='z-10 justify-center items-center flex'>
          {/* <h1>Ankush Kumar</h1> */}
          <Hero />
        </div>
        <div className="absolute top-0 left-0 w-full h-screen z-0">
          <ParticlesBackground />
        </div>
      </div>
      <About/>
      <Skill/>
    </>
  );
}
export default Home;