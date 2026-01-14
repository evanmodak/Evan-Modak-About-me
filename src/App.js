import React from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";

function getEmail() {
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      <a href="mailto:evansmodak@gmail.com">
        <Mail size={16} /> evansmodak@gmail.com
      </a>
      ‎ ‎ ‎ ‎ ‎ ‎ 
      <a
        href="https://www.linkedin.com/in/evan-modak-142191346"
        target="_blank"
      >
        <Linkedin size={16} /> LinkedIn
      </a>
      <br/>
      <br/>
    </div>
  );
}

function getExperience() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">My Experience</h2>
      <ul className="space-y-3 text-sm text-gray-700">
        <li>
          <strong>Tennis Coach</strong> @ Eagle Fustar Tennis Academy
          <br />
          <span className="text-gray-600">Jun 2025 - Aug 2025 · Saratoga, CA</span>
          <p>
            Coached 40+ athletes (ages 7-18), teaching technique, strategy,
            and competitive play while developing leadership and teamwork.
          </p>
        </li>
      </ul>
    </section>
  );
}

function getProjects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">My Projects</h2>
      <div className="space-y-3 text-sm text-gray-700">
        <div>
          <strong>Autonomous Obstacle Avoiding and Target Following RC Car</strong>
          <p className="text-gray-600">Arizona State University · Oct 2025 - Dec 2025</p>
          <p>
            Worked in a team of 4 to design and program an Arduino-based autonomous RC car using ultrasonic sensors.
            Led software architecture, navigation logic, and perception algorithms, and redesigned the system after hardware constraints.
          </p>
          <div className="w-full h-64 md:h-96">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/PgE7NyQTErg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <em>
            <a
              href="https://www.youtube.com/watch?v=PgE7NyQTErg"
              target="_blank"
              className="text-blue-200 hover:underline"
            >
              Click here to view on YouTube!
            </a>
          </em>
        </div>
      </div>
    </section>
  );
}

function getInterests() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">My Interests</h2>
      <p className="text-sm text-gray-700">
        Outside of tech, I’m into basketball 🏀, competitive strategy games,
        and exercising. I enjoy problem solving both on and off the court,
        whether that’s building projects, mentoring teammates, or learning new systems.
      </p>
    </section>
  );
}

function Hero() {
  return (
    <h1>
      I am a&nbsp;
      <Typewriter
        words={["programmer", "creator", "artist", "student"]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={150}
        deleteSpeed={75}
        delaySpeed={2000}
      />
    </h1>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans dynamic-bg text-white">
      <main className="max-w-3xl px-12 pt-40 pb-24 space-y-10 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">Hello! My name is Evan Modak</h1>
          <Hero />
          <p className="text-gray-700">
            I’m a first year computer science student at Arizona State University.  I’m passionate about systems in school, sports, and life. I have played tennis my whole life and recently I have gotten more into basketball. I've worked as a tennis coach during the summer and built teamwork and leadership skills. I’m always looking to expand my technical skill set, with a focus on software and firmware development, machine learning, and building scalable, efficient systems through hands on projects and continuous learning.
          </p>
          <p className="text-gray-600 flex items-center gap-2 text-sm">
            <MapPin size={16} /> San Francisco Bay Area
          </p>
          {getEmail()}
        </header>

        {getExperience()}
        {getProjects()}
        {getInterests()}
        <section>
  <h2 className="text-xl font-semibold mb-2">Computer Science Interests</h2>
  <p className="text-sm">
    I’m especially interested in systems-oriented computer science, including
    low-level software, performance-conscious programming, and how software
    interacts with hardware. I enjoy working close to the machine—whether that’s
    embedded systems, firmware, or building efficient software from first
    principles—and I’m actively exploring areas like operating systems,
    networking, and machine learning through coursework and projects.
  </p>
</section>

        <footer className="pt-6 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} by Evan Modak
        </footer>
      </main>
    </div>
  );
}
