export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <h2 className="section-title">Certificates, Achievements & Works</h2>

      <div className="showcase-container">

        {/* Certificates */}
        <div className="panel">
          <div className="ring">
            <div className="card card1"><video
              className="card-video"
              src="/assets/about1.mp4"  // put your video in public/assets
              autoPlay
              loop
              muted
            /></div>
            <div className="border">
              <p className="title">Certificates</p>
              <div className="slide">
                <div className="line">
                  <h6 className="para">
                    <font color="skyblue">1. Masai</font> – MERN Full-Stack Training (Pursuing)<br />
                    <font color="skyblue">2. HackerRank </font>– Python, JavaScript & <br />Problem Solving
                    <a href="https://www.hackerrank.com/certificates/588bd59a1fb3" target="_blank" rel="noreferrer">
                      Show Credentials
                    </a><br />
                    <font color="skyblue">3. Python | AI </font>– Hardware Technology<br />
                    <font color="skyblue">4. AWS</font> Cloud Practitioner –
                    <a href="https://www.credly.com/badges/81360c21-c061-45d5-b48e-304e5dfec2ff/linked_in_profile" target="_blank" rel="noreferrer">
                      Show Credentials
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="panel">
          <div className="ring">
            <div className="card card2"><video
              className="card-video"
              src="/assets/about.mp4"  // put your video in public/assets
              autoPlay
              loop
              muted
            /></div>
            <div className="border">
              <p className="title">Achievements</p>
              <div className="slide">
                <div className="line">
                  <h6 className="para">
                    Best Paper Presentation Award for the paper titled "Thyroid Disease Classification of Supervised Machine Learning Algorithms"– Aug 2024 International Conference (IQAC & R&D)<br />
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Works / Internships */}
        <div className="panel">
          <div className="ring">
            <div className="card card3"><video
              className="card-video"
              src="/assets/about1.mp4"  // put your video in public/assets
              autoPlay
              loop
              muted
            /></div>
            <div className="border">
              <p className="title">Internships</p>
              <div className="slide">
                <div className="line">
                  <h6 className="para">
                    XCEL Corp – Data Science Intern (Python, ML)<br />
                    🧠 Data Analysis & Cleaning<br/>
                    🤖 Machine Learning Models <br/>
                    📊 Visualization & Insights <br/>
                    💡 Problem Solving
                      <a href="https://nyinst.com/certificate?id=fUCcEG" target="_blank" rel="noreferrer">
                      Show Credentials
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
