export default function Experience() {
  return (
    <div className="flex flex-col gap-10 w-full mb-20">
      <div>
        <h1 className="text-4xl text-black mb-8">Experience</h1>
        <p className="text-xl text-black max-w-[1000px] mb-12">
          As a current sophmore, I have gained some experience through industry roles, undergraduate research and
          other personal project I have made! Here are some of these experiences.
        </p>
        
        <h2 className="text-3xl text-black mb-6">Industry</h2>
        {/* Further industry items will map here */}
      
        <h2 className="text-3xl text-black mb-6 mt-16">Research</h2>
        {/* Further research items will map here */}
      </div>
    </div>
  );
}
