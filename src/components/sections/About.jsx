import { RevealOnScroll } from "../RevealOnScroll"
export const About = () =>{

    const frontendSkills = [
        "React",
        "TailwindCSS",
        "JavaFX"
    ]

    const backendSkills = [
        "Java",
        "JavaScript",
        "Python",
    ]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            
<div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_2px_5_px_rgba(59,130,246,0.5)] transition-all">
          <p className="text-gray-300 mb-6 text-center" > 
          <span className="font-bold hover:text-indigo-400">Motivated </span>
          and quick-learning  
          <span className="font-bold hover:text-indigo-400"> Master Computer Engineering Student </span>
           with excellent academic 
          results, GPA 4.2/5. Skilled in 
          <span className="font-bold hover:text-indigo-400"> Algorithms</span>, 
          <span className="font-bold hover:text-indigo-400"> Datastructures </span>
           and <span className="font-bold hover:text-indigo-400">Software Development</span>
          . Fluent in Swedish and  
          <span className="font-bold hover:text-indigo-400"> English </span>
          
          with good proficiency in Finnish. Experienced in working as a
          
           <span className="font-bold hover:text-indigo-400"> Team  </span>
          and eager to contribute my knowledge while growing as a 
          professional in a trainee position.
          </p>
    </div>

    <div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_2px_5_px_rgba(59,130,246,0.5)] transition-all">
    <h2 className="text-xl font-bold mb-4">Technologies</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-blod mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                        hover:shadow-[0_2px_8_px_rgba(59,130,2246,0.2)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-blod mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                        hover:shadow-[0_2px_8_px_rgba(59,130,2246,0.2)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        </div>

    <div className="relative">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0"></div>
            
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="relative bg-black p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_2px_5_px_rgba(59,130,246,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Computer Engineering </strong>
                  (2022 -)
                </li>
                <p className="text-gray-300 pl-6">
                Datastructures: 5/5,
                Algorithms: 5/5,
                  Databases: 5/5,
                  Software Engineering: 5/5,
                  Web Development: 4/5
                </p>
                
              </ul>
            </div>
            </div>
            </div>

        
    </div>

    

    </RevealOnScroll>
    </section>
}