import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = ()=>{

    return <section id="projects" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4px">
                <h2 className="text-3xl fonr-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                    text-transparent text-center">
                        Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* project-1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/3
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Natours</h3>
                        <p className="text-gray-400 mb-4">
                            Platform where user can book tours according to their interests
                            with the accosiated with particular guid user
                        </p>
                        <div className="">
                            {["Node.js", "express.js", "mongodb"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-3m
                                    hover:bg-b;ue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/rajasekhar161819/Natours/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* project-2 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/3
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-2">To-Do</h3>
                        <p className="text-gray-400 mb-4">
                            In which user list task, Create task, delete task, update task
                            basically CRUD operation for the user
                        </p>
                        <div className="">
                            {["Djnago Rest Frame-Work", "ReactJs", "HTML", "CSS"].map((tech, key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-3m
                                    hover:bg-b;ue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/rajasekhar161819/Fto_do/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
} 