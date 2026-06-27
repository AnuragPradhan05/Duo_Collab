import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (

    <section className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
        >

          <span className="hero-number">
            01
          </span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1
            }}
          >
            ANURAG <br />
            <span>PRADHAN</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{
              delay: 0.5,
              duration: 1
            }}
          >
            Rigorous minimalism meets high-voltage expression.
            Architectural precision and structural narrative
            redefined through digital clarity.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1
            }}
          >

            <div className="primary-btn">
              <a
                href="https://anuragsite-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </a>
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >

          <motion.span
            className="hero-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1
            }}
          >
            <span className="dot"></span>
            Open to Jobs 2026
          </motion.span>

          <span className="hero-number green-text">
            02
          </span>

          <motion.h1
            className="hero-title dark"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1
            }}
          >
            ARMAN <br />
            <span className="green-text">
              AHEMAD KHAN
            </span>
          </motion.h1>

          <motion.span
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.55,
              duration: 1
            }}
          >
            Full-Stack Developer · Ethical Hacker
          </motion.span>

          <motion.p
            className="hero-description dark-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{
              delay: 0.7,
              duration: 1
            }}
          >
            Full-stack developer and ethical hacker working at the
            intersection of code and security. I build secure,
            production-ready web apps — and break them before attackers can.
          </motion.p>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.85,
              duration: 1
            }}
          >
            <span>VAPT</span>
            <span>Red Team</span>
            <span>React</span>
            <span>Java</span>
            <span>FastAPI</span>
            <span>Kali</span>
            <span>C++</span>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1
            }}
          >

            <div className="secondary-btn">
              <a
                href="https://arman-portfolio.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </a>
            </div>

            <div className="ghost-btn">
              <a
                href="https://github.com/arman080325"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <div className="linkedin-btn">
              <a
                href="https://linkedin.com/in/arman-ahemad-khan"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;
