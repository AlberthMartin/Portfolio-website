import { RevealOnScroll } from "../RevealOnScroll"
import { useEffect, useState } from "react";

export const Home = () =>{


    return(
        <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>

            <div className="text-center z-10 px-4">
                

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text leading-right text-transparent ">
                    Hi! My name is Alberth Martin 
                </h1>

                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto animate-floating">
                    Computer Engineering Student
                </p>
               
                    
                <div className="flex justify-center space-x-4">
                    <a 
                    href="#projects" className="bg-indigo-500/30 border border-indigo-500/40 text-white py-3 px-6 rounded-full font-medium backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition">
                        View Project
                    </a>
                    <a 
                    href="#contact" className="border border-indigo-500/30 text-indigo-500 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:show-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-500/10">
                        Contact Me
                    </a>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}