'use client'

import Particles from "./Particles";
import TextType from "./TextType";
import Header from "./Header";
import ChromaGrid from "./ChromeGrid";


export default function Home() {
  const experienceItems = [
  {
    image: "amazonleo.png",
    title: "Amazon",
    subtitle: "SDE Intern - Kuiper E-commerce ",
    handle: "Incoming Summer 2026",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://leo.amazon.com/"
  },
  {
    image: "kuiper.png",
    title: "Amazon",
    subtitle: "SDE Intern - Kuiper Core Networking Services (Tekton)",
    handle: "Summer 2025",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url:  "https://leo.amazon.com/"
  }
];
const researchItems = [
  {
    image: "cdss.png",
    title: "Undergraduate Researcher",
    subtitle: "Computional Approaches to Human Learning Lab - CourseWise ",
    handle: "Aug 2025 - Dec 2025",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.coursewise.com/"
  }
];
const personalProjectItems = [
  {
    image: "2048c.png",
    title: "2048 but in C",
    subtitle: "Made to help me learn the C language",
    handle: "Built in C",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/migedude/2048butinC"
  },
  {
    image: "clash.png",
    title: "GoodClashRoyale",
    subtitle: "Made a overlay  that uses Computer Vision to help out new players learn a popular mobile game, Clash Royale",
    handle: "Swift, Python and Next.js",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/migedude/GoodClashRoyale"
  },
  {
    image: "haircut.png",
    title: "HaircutAnaylzer",
    subtitle: "Co-created a program that determines what hairstyle fits you the best using Computer Vision libraries (OpenCV and MediaPipe)",
    handle: "Python and Next.js",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/johnbruvold/Scary-Stealth-Startup"
  },
];

  
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', overflowX: 'auto', position: 'relative' }}>
      
      {/* BACKGROUND PARTICLES - Moved here to cover full screen */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 20 }}>
        <Header />
      </div>

      <div style={{ width: '100%', height: '800px', position: 'relative', zIndex: 10 }}>
        
        <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', zIndex: 10, fontSize: 60 }}>
          <TextType 
            text={[
              "Hello I am Miguel Contreras", 
              "I am a undergraduate at UC Berkeley Studying Computer Science", 
              "I am interest in the intersection between Computer Sciene and Eduaction!"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', padding: '0 5%', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
        {/* About Twin */}
        <div id="aboutMe">
          <h1 style={{ fontSize: 35, marginBottom: '20px' }}>
            About Me
          </h1>
          <p style={{ fontSize: 20, maxWidth: '1000px', lineHeight: '1.5', marginLeft: '1.2%'}}>
            My name is Miguel Angel Contreras, I am a first generation college student from Salinas, California.
            I am interested in Machine Learning and Education intersection. I am passionate about improving Computer Science 
            education in underpresented communties and making a change in the world!
          </p>
        </div>

        {/* Skills Twin */}
        <div id="skills">
          <h1 style={{ fontSize: 35, marginBottom: '20px' }}>
            My Skills
          </h1>
          <p style={{ fontSize: 20, maxWidth: '1000px', lineHeight: '1.5', marginLeft: '1.2%'}}>
            Programming Languages: Python, Java, Typescript, C, C++, Scheme, Swift, SQL
          </p>
          <p style={{ fontSize: 20, maxWidth: '1000px', lineHeight: '1.5', marginLeft: '1.2%', marginTop: "2%"}}>
            Tools and Frameworks:  React.js, Next.js, Git, LaTex, , Tailwind CSS, Exploratory Data Analysis (EDA), Machine
            Learning, MCP, Natural Language Processing (NLP), Object-Oriented Programming, OpenCV, MediaPipe, FastAPI, PyTorch
          </p>
        </div>

         {/* Experience Twin */}
        <div id="experience">
          <h1 style={{ fontSize: 35, marginBottom: '20px' }}>
            Experience
          </h1>
          <p style={{marginLeft:'20px', fontSize: '17px'}}>
            As a current sophmore, I have gained some experience through industry roles, undergraduate research and
            other personal project I have made! Here are some of these experiences.
          </p>
          
          <h1 style={{ fontSize: 30, marginBottom: '20px' , marginTop:"40"}}>
            Industry
          </h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <ChromaGrid 
              items={experienceItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
          <h1 style={{ fontSize: 30, marginBottom: '20px' }}>
            Research
          </h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <ChromaGrid 
              items={researchItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
          <h1 style={{ fontSize: 30, marginBottom: '20px' }}>
            Personal Projects
          </h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <ChromaGrid 
              items={personalProjectItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
          
        </div>

        {/* Contact Me */}
        <div id="contactMe">
          <h1 style={{ fontSize: 35, marginBottom: '20px' }}>
            Contact Me!
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' , marginLeft:"20px"}}>
             <img src="Screenshot 2025-12-25 at 1.10.46 AM.png" alt="Email" width={30} height={30} style={{ marginRight: '15px' }} />
             <a href="mailto:miguel.contreras@berkeley.edu" style={{ fontSize: 20, color: 'white', textDecoration: 'none' }}>
               miguel.contreras@berkeley.edu
             </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' , marginLeft:"20px"}}>
             <img src="github.png" alt="GitHub" width={30} height={30} style={{ marginRight: '15px' }} />
             <a href="https://github.com/migedude" target="_blank" style={{ fontSize: 20, color: 'white', textDecoration: 'none' }}>
               GitHub
             </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' , marginLeft:"20px"}}>
             <img src="linkedin.png" alt="LinkedIn" width={30} height={30} style={{ marginRight: '15px' }} />
             <a href="https://linkedin.com/in/miguelacontreras" target="_blank" style={{ fontSize: 20, color: 'white', textDecoration: 'none' }}>
              LinkedIn
             </a>
          </div>
        </div>

        {/* Blank Space (The "__" you had) */}
        <div style={{ zIndex: 10 }}>
           <h1 style={{ fontSize: 35 }}></h1>
           <p style={{ fontSize: 20 }}></p>
        </div>

      </div>
    </div>
  );
}