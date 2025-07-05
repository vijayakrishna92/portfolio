import Image from 'next/image';

export default function Home() {
  const skillsData = [
    { name: 'Programming Languages', items: ['Python', 'Dart', 'HTML', 'CSS'] },
    {
      name: 'Frameworks & Libraries', items: [
        "React", "NodeJS", "Flutter", "Django", "FastAPI", "Selenium",
        "Scikit-learn", "Tensorflow", "Pytorch", "Langchain",
        "CrewAI", "Autogen", "LANGGRAPH", "NLTK"
      ]
    },
    { name: 'Databases', items: ["PostgreSQL", "MongoDB"] },
    {
      name: 'Data Science & ML', items: [
        "Matplotlib", "Numpy", "Pandas", "XGBoost", "Random Forest",
        "Linear Regression", "Polynomial Regression", "Finetuning Model",
        "RAG", "Prompt Engineering"
      ]
    },
    {
      name: 'Version Control & Dev Tools', items: [
        "Git", "GitHub", "Docker", "VSCode", "Dagshub",
        "Google Colab", "Figma", "HuggingFace"
      ]
    },
    {
      name: 'Other Tools & Platforms', items: [
        "ChatGPT", "QGIS", "LABELBOX", "Windows", "HP", "JSON"
      ]
    }
  ];

  return (
    <main className="pt-46 md:pt-42">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20">
  {/* Text: appears below image on mobile, left on desktop */}
  <section className="space-y-2 text-center md:text-left mt-4 md:mt-0">
    <p className='text-3xl md:text-6xl'>Hi, I'm Vijaya krishna </p>
    <p className='text-xl md:text-3xl'>— AI Engineer & Full-Stack Developer</p>
    <p className='text-base md:text-xl'>I build machine learning models and modern web & mobile apps</p>
  </section>
  
  {/* Image: appears first on mobile, right on desktop */}
  <Image 
    src="/images/hero.png" 
    alt="Logo" 
    width={300} 
    height={100}
    className="w-auto h-auto"
  />
</div>


      <div className="pt-10 md:pt-42">
        <div className='flex justify-start'>
<p className='text-3xl md:text-6xl'>Skills</p>
</div>
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-5">
            <div className="pt-5 text-2xl mb-4 flex justify-start">
              {skill.name}
            </div>
            <div className="flex flex-wrap gap-3 justify-start">
              {skill.items.map((sub, index2) => (
                <div
                  key={index2}
                  className="px-3 py-2 border-2 border-amber-700 bg-white/5 backdrop-blur-md shadow-md flex items-center justify-center text-1xl"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </main>
  )
}
