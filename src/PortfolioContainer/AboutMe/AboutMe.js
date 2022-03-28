import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-heading">
        <h1>ABOUT ME</h1>
      </div>
      <div className="aboutme-body">
        <img className="gif-pic" src="https://i.gifer.com/3IsP.gif" alt="" />
        <div className="aboutme-box">
          <p className="aboutme-title">Let's Get To Know Me</p>

          <div className="aboutme-content">
            <p>
              I'm Madhubala, a Full Stack Developer. I mainly work with the MERN
              stack. I was an Electronics Engineer and for a healthy career
              growth I chose myself as Full Stack Developer. I love creating
              Creative and Responsive web pages
            </p>
            <br />
            <p>Interests:</p>
            <li>Coding</li>
            <li>Designing</li>
            <li>Team Work</li>
            <li>Learning new things</li>
          </div>

          <br />
          <p></p>
        </div>
      </div>
    </div>
  );
}
