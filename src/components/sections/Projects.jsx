import { RevealOnScroll } from "../RevealOnScroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Projects = () =>{
    return(
    <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-center">
                Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
                <div className="relative">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0"></div>
                    
                <div className="relative bg-black z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                    <h3 className="text-xl font-bold mb-2">POS system</h3>
                    <p className="text-gray-400 mb-4">
                        Point of sale system, to manage a stores sales
                    </p>
                    <div>
                        {["JavaFX", "Java", "Github", "Agile Development", "Teamwork", "Presentation"].map((tech, key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                            hover:shadow-[0_2px_8_px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-indigo-500 hover:text-blue-300 transition-colors my-4 ml-3" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>)
    

}