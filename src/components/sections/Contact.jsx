import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () =>{


    return <section 
    id="contact" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

            <div className="px-4 w-150">
            <h3 className="text-xl font-blod text-center mb-8"></h3>

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-center">
                    Get In Touch</h2>

                    <h3 className="text-xl font-bold mb-2 text-center">Call me: <span className="text-indigo-300">040 1915419</span> or Write an Email:</h3>
                <form className="space-y-6">
                    <div className="relative">
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Name..."
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"/>
                    </div>

                    <div className="relative">
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"/>
                    </div>

                    <div className="relative">
                        <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        required 
                        placeholder="Message..."
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5"
                        />
                    </div>

                    <button type="submit" className="w-full bg-indigo-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadew-[0_0_15px_rgba(59,130,246,0.4]">
                        Send Message
                    </button>
                    
                    

                </form>


            </div>


        </RevealOnScroll>
    </section>
}