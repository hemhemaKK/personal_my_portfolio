export default function AboutMe() {
    const tools = [
        "javascript", "python", "react", "redux", "node", "express",
        "typescript", "html", "css", "canva", "vscode", "mongodb",
        "render", "netlify", "git", "github", "firebase",
        "figma", "mysql", "postgresql", "django"
    ];

    // Duplicate tools for seamless scrolling
    const toolsLTR = [...tools, ...tools];
    const toolsRTL = [...tools.slice().reverse(), ...tools.slice().reverse()];
    return (
        <section id="about" className="about-me">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    I am an <span>MCA graduate</span> from <span>Bangalore</span> and an <span>aspiring Full-Stack Developer</span> with a specialization in the <span>MERN stack</span>. I also bring a strong foundation in <span>Python</span> and have completed an internship in <span>Data Science (Machine Learning</span> & <span>AI)</span>, gaining hands-on experience in <span>problem solving, predictive modeling</span> and <span>data analysis automation</span>.<br /><br />

                    I am skilled in building robust, scalable web applications using <span>React, Redux</span>, <span>Node.js</span>, <span>Express</span>, and <span>MongoDB</span>, and I have experience designing <span>RESTful APIs</span> and implementing <span>secure authentication systems</span>. I am proficient in modern frontend technologies (<span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>) and backend programming, with a keen eye for <span>responsive</span> and <span>intuitive UI design</span>.<br /><br />

                    I thrive in <span>collaborative environments</span>, enjoy solving <span>complex challenges</span>, and continuously strive to <span>learn</span> and <span>adapt to new technologies</span>. My goal is to contribute to <span>impactful projects</span> that combine <span>web development</span> and <span>AI</span> to deliver <span>intelligent, user-friendly solutions</span>.
                </p>

                <section className="tools" id="tools">
                    <h2 className="tools-title">Tools & Technologies I Work With</h2>
                    <div className="tools-marquee">
                        <div className="tools-row left-to-right">
                            {toolsLTR.map((tool, index) => (
                                <div key={index} className="tool-card">
                                    <img src={`/assets/${tool}.png`} alt={tool} />
                                    <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="tools-row right-to-left">
                            {toolsRTL.map((tool, index) => (
                                <div key={index} className="tool-card">
                                    <img src={`/assets/${tool}.png`} alt={tool} />
                                    <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <p className="about-text"><br/>
                    I am passionate about building <span>scalable, user-friendly applications</span>, writing <span>clean and efficient code</span>, and applying Generative AI techniques to enhance solutions. I thrive in <span>collaborative environments</span> and consistently aim to deliver high-quality work.
                </p>
            </div>
        </section>
    );
}
