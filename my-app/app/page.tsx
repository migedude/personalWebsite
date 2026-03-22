'use client'

import TextType from "./TextType";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full pb-20">
      
      {/* Hero Welcome */}
      <div className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.4] h-[300px]">
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

      {/* About Me */}
      <div id="aboutMe">
        <h1 className="text-3xl font-bold text-black mb-6">About Me</h1>
        <p className="text-xl max-w-[1000px] leading-relaxed text-black">
          My name is Miguel Angel Contreras, I am a first generation college student from Salinas, California.
          I am interested in Machine Learning and Education intersection. I am passionate about improving Computer Science 
          education in underpresented communties and making a change in the world!
        </p>
      </div>

    </div>
  );
}