import { RevealOnScroll } from "../RevealOnScroll"

export const About = ()=>{
    const frontendSkills = ["ReactJs", "JavaScript", "CSS", "HTML", "TailwindCss"]
    const backendSkills = ["Djnago", "Rest Framework", "Python", "MongoDB", "MySQL"]

    return <section id="about" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl fonr-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-traslate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passinate developer with expertice in building a scalable web
                        applications and creating innovative solutions
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-traslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frotend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-3m
                                    hover:bg-b;ue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-traslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-3m
                                    hover:bg-b;ue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all">
                        <h3 className="text-xl font-bold mb-4">🏢 Work Experiance</h3>
                        <div className="grid grid-rows-1 md:grid-rows-2 gap-6 mt-8">
                            <div className="bg-black shadow-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                                
                                <h3 className="text-white text-2xl font-bold mb-4">Software Engineer</h3>
                                
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-gray-300 text-lg font-medium">Nexii IT Labs</span>
                                    <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    May 2024 - Present
                                    </span>
                                </div>
                                
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span>
                                        Developed backend features for <a href="https://hiringheroes.ai/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">HiringHeroes.ai</a>, including a token-based rewards system for recruiters, using Django REST API's.
                                    </span>
                                    </li>
                                    <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span>
                                        Built and integrated a "Hiring Heroes Bank" for token management, allowing users to redeem tokens for fixed deposits or withdraw via UPI.
                                    </span>
                                    </li>
                                    <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                        <span>
                                            Developed <a href="https://bharatcv.ai/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">BhartCv.ai</a>, a platform for building voice-based resumes, leveraging Django ASGI and WebSockets for real-time audio-to-text conversion and seamless user interaction.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black shadow-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300 mb-12">
                                
                                <h3 className="text-white text-2xl font-bold mb-4">Intern</h3>
                                
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-gray-300 text-lg font-medium">Zapuza Technologies</span>
                                    <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                                    july 2023 - December 2023
                                    </span>
                                </div>
                                
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span>
                                        Developed an employer task tracking system using Django, allowing for efficient management and monitoring of tasks and deadlines.
                                    </span>
                                    </li>
                                    <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span>
                                        Designed and implemented a user-friendly front-end with HTML, CSS, and Bootstrap for seamless interaction and responsive design.
                                    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all m-auto mt-2">
                        <h3 className="text-xl font-bold mb-4">📗 Education</h3>
                        <ul className="list-disk list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.TECH Electrical and Electronics Engineering</strong> - Anil Neerukonda Institute of
                                Technology and Sciences (2019-2023)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}