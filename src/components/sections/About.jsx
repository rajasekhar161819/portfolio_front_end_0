import { RevealOnScroll } from "../RevealOnScroll"

export const About = ()=>{
    const frontendSkills = ["Djnago", "Rest Framework", "Python", "PostgresSQL", "Redis", "AWS", "Linux", "MongoDB", "MySQL", "ReactJs", "JavaScript", "CSS", "HTML", "TailwindCss", "Git"]
    const backendSkills = ["Djnago", "Rest Framework", "Python", "MongoDB", "MySQL"]

    return <section id="about" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4 max-h-auto">
                <h2 className="text-3xl fonr-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-traslate-y-1 transition-all">
                    <p className="mx-6 text-gray-300 mb-6"><span className="text-blue-400 mr-2">→</span>
                        Passinate developer with expertice in building a scalable web
                        applications and creating innovative solutions
                    </p>
                    <div className="grid grid-rows-1 md:grid-rows-1 gap-6">
                        <div className="rounded-xl p-6 hover:-traslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-3m
                                    hover:bg-b;ue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-9 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all col-span-2">
                        <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>

                        {/* Make the inner grid horizontal (2 cols on large, 1 col on small) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        
                        {/* Experience 1 */}
                        <div className="bg-black shadow-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                            <h3 className="text-white text-2xl font-bold mb-4">Software Engineer</h3>
                            <div className="flex justify-between items-center mb-5">
                            <span className="text-gray-300 text-lg font-medium">Nexii IT Labs</span>
                            <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">May 2024 - Present</span>
                            </div>
                            <span className="text-gray-300 text-lg font-medium">
                            <a href="https://hiringheroes.ai/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                                HiringHeroes.ai
                            </a>
                            </span>
                            <ul className="space-y-2 text-gray-300 mt-3">
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Developed and maintained RESTful APIs for a large-scale job portal using Django REST Framework.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Designed and implemented database schemas and models to efficiently manage job listings, users, and applications.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Integrated PayU payment gateway for seamless transactions.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Integrated microservices and used Redis for caching API responses, significantly improving system performance.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Implemented pagination and optimized query performance, reducing API response time by over 90%.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Streamlined deployments using AWS EC2, achieving weekly updates with 99.5% uptime</li>
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="text-gray-300 text-xl font-medium">Technologies : </span>
                                {["Django REST Framework", "Redis", "AWS EC2", "PostgreSQL", "Linux", "GitLab", "VsCode"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="bg-black shadow-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                            <h3 className="text-white text-2xl font-bold mb-4">Executive Assistant (Django Developer)</h3>
                            <div className="flex justify-between items-center mb-5">
                            <span className="text-gray-300 text-lg font-medium">Zapuza Technologies</span>
                            <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">July 2023 - December 2023</span>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Developed a user activity tracking web application using Django Framework.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Implemented user authentication system (login, registration, and session management) with Django’s built-in authentication.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Designed responsive front-end interfaces using HTML, CSS, and Bootstrap for improved user experience</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Integrated backend logic to log and monitor user activities within the application.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Collaborated with team members to test, debug, and deploy features effectively.</li>
                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Gained hands-on experience in full-stack web development using Django MVT architecture.</li>
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="text-gray-300 text-xl font-medium">Technologies : </span>
                                {["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL", "GitHub", "PyCharm"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-l transition-all m-auto mt-2">
                        <h3 className="text-xl font-bold mb-4">📗 Education</h3>
                        <ul className="mx-14 list-disk list-inside text-gray-300 space-y-2">
                            <li>
                                <span className="text-blue-400 mr-2">→</span> <strong>B.TECH Electrical and Electronics Engineering</strong> - Anil Neerukonda Institute of
                                Technology and Sciences (2019-2023)
                            </li>
                        </ul>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
