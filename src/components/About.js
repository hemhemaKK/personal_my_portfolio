export default function AboutMe() {
    const frontendTools = [
        "javascript", "typescript", "react", "redux", "html", "css"
    ];

    const backendTools = [
        "node", "express", "mongodb", "mysql", "postgresql", "django", "firebase"
    ];

    const otherTools = [
        "canva", "vscode", "render", "netlify", "git", "github", "figma"
    ];

    return (
        <section id="about" className="about-me">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                
               <div className="about-content">
                <img src="/assets/profile.png" alt="Profile" className="profile-img" />

                <div><p className="about-text"><br/>
                    I am an <span>MCA graduate</span> from <span>Bangalore</span> and an <span>aspiring Full-Stack Developer</span> with a specialization in the <span>MERN stack</span>. I also bring a strong foundation in <span>Python</span> and have completed an internship in <span>Data Science (Machine Learning</span> & <span>AI)</span>, gaining hands-on experience in <span>problem solving, predictive modeling</span> and <span>data analysis automation</span>.<br /><br />

                    I am skilled in building robust, scalable web applications using <span>React, Redux</span>, <span>Node.js</span>, <span>Express</span>, and <span>MongoDB</span>, and I have experience designing <span>RESTful APIs</span> and implementing <span>secure authentication systems</span>. I am proficient in modern frontend technologies (<span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>) and backend programming, with a keen eye for <span>responsive</span> and <span>intuitive UI design</span>.<br /><br />

                    I thrive in <span>collaborative environments</span>, enjoy solving <span>complex challenges</span>, and continuously strive to <span>learn</span> and <span>adapt to new technologies</span>. My goal is to contribute to <span>impactful projects</span> that combine <span>web development</span> and <span>AI</span> to deliver <span>intelligent, user-friendly solutions</span>.
                </p>
               
                </div>
                 <p className="about-text"><br />
                    I am passionate about building <span>scalable, user-friendly applications</span>, writing <span>clean and efficient code</span>, and applying Generative AI techniques to enhance solutions. I thrive in <span>collaborative environments</span> and consistently aim to deliver high-quality work.
                </p>
              </div>
                <section className="tools" id="skills">
                    <h2 className="tools-title">Tools & Technologies I Work With</h2>

                    {/* Frontend */}
                    <h1 className="tools-subtitle">Frontend</h1>
                    <div className="tools-grid">
                        {frontendTools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <img src={`/assets/${tool}.png`} alt={tool} />
                                <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Backend */}
                    <h1 className="tools-subtitle">Backend</h1>
                    <div className="tools-grid">
                        {backendTools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <img src={`/assets/${tool}.png`} alt={tool} />
                                <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Other / Tools */}
                    <h1 className="tools-subtitle">Other Tools</h1>
                    <div className="tools-grid">
                        {otherTools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <img src={`/assets/${tool}.png`} alt={tool} />
                                <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                
            </div>
        </section>
    );
}
