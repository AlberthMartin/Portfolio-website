import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({menuOpen, setMenuOpen}) =>{

    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(()=>{
        const updateScrollProgress = () =>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight-window.innerHeight;
            const progress = (scrollTop/docHeight)*100;
            setScrollProgress(progress)
        }
        window.addEventListener("scroll",updateScrollProgress)
        return () => window.removeEventListener("scroll",updateScrollProgress)
    }, []);

    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])



    return(

    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">

            {/* Progress Bar */}
            <div
            className="absolute bottom-0 left-0 h-1 bg-indigo-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
      >     </div>

            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono-text-xl font-bold text-white">
                    <FontAwesomeIcon icon={faHouse} />
                </a>

                {/* mobile menu */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    {/* hamburger icon */}
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" 
                    className="text-gray-300 hove:text-white transition-colors"
                    >
                        Home {" "}

                    </a>
                    <a href="#about" 
                    className="text-gray-300 hove:text-white transition-colors"
                    >
                        About {" "}

                    </a>
                    <a href="#projects" 
                    className="text-gray-300 hove:text-white transition-colors"
                    >
                        Projects {" "}

                    </a>
                    <a href="#contact" 
                    className="text-gray-300 hove:text-white transition-colors"
                    >
                        Contact {" "}

                    </a>
                </div>

            </div>
        </div>

    </nav>
    ) 
}