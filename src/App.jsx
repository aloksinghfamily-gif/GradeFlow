import { useState } from "react";
import PortalSelection from "./PortalSelection";
import "./App.css";

function App() {
 const [showSelection, setShowSelection] = useState(false);
if (showSelection) {
  return <PortalSelection />;
}
  return (
    <div className="hero"  id="home" >

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="/assets/GradeFlow-logo.png"
            alt="GradeFlow Logo"
          />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <main className="hero-content" id="home">
        <h1>Welcome to GradeFlow</h1>

        <h2>Your Learning Journey, Made Simpler.</h2>

        <p>
          Every goal starts with a plan. Stay organised,
          keep track of your academic progress and make
          every learning opportunity count.
        </p>

      <button
  className="start-btn"
  onClick={() => setShowSelection(true)}
>
  Get Started →
</button>
<br />
<br />

{/* AI Chatbox */}
      <button className="chatbox" onClick={() => alert("AI Chatbox is under development.")}>
        AI Chatbox
      </button>


      </main>

      {/* About Section */}
      <section id="about">
        <h2>About GradeFlow</h2>

        <p >
          GradeFlow is designed to make student life
          more organised and productive. It brings your
          academic goals, study activities and progress
          together in one place.
        </p><br />

        <p>
          Whether you are preparing for exams or working
          towards better results, GradeFlow helps you
          stay focused on what matters.
        </p><br />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Let's Connect</h2>

        <p>
          Have a question, suggestion or feedback?
          We would love to hear from you.
        </p>
        <br />

        <p>
          Email: support@gradeflow.com
        </p><br />
      </section>

      

    </div>
  );
  
}

export default App;
