'use client'

import TextType from "./TextType";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full pb-20">
      
      {/* Hero Welcome */}
      <div className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.4] h-[300px]">
        <TextType 
          text={[
            "Hello, I am Miguel Contreras", 
            "I am an undergraduate at UC Berkeley studying Computer Science and Data Science!", 
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>

      {/* About Me */}
      <div id="aboutMe">
        <div className="flex flex-col gap-6 text-xl max-w-[1000px] leading-relaxed text-black">
          <p>
            I am a first-generation college student from Salinas, California, and a 2nd-year undergraduate at the University of California, Berkeley double majoring in Computer Science and Data Science, with a minor in Education.
          </p>
          <p>
            My interests broadly lie in the intersection of Computer Science and Education, technology/AI policy, and Computer Vision. My previous research was on Coursewise with the Computional Approaches to Human Learning Lab in Berkeley's Graduate School of Education.
          </p>
          <p>
            I’m grateful to be supported by the <a href="https://www.amazonfutureengineer.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">Amazon Future Engineer</a> and <a href="https://horatioalger.org/scholarships/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">Horatio Alger</a> Scholarships. I am also supported by the <a href="https://seedscholars.berkeley.edu/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">STEM Excellence through Equity and Diversity (SEED) Scholars Honors Program</a>.
          </p>
          <p>
            In addition to my academic pursuits, I enjoy teaching (especially CS education), running, as well as reading (manga, dystopian).
          </p>
        </div>
      </div>

    </div>
  );
}