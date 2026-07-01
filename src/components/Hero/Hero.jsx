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

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img src="../../../public/arman.jpg" alt="Arman Ahemad Khan" />
          </motion.div>

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
            Full-stack developer and <span className="hl">ethical hacker</span> working at the
            intersection of code and security. I build <span className="hl">secure</span>,
            production-ready web apps — and <span className="hl">break them before attackers can</span>.
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>

            <div className="linkedin-btn">
              <a
                href="https://linkedin.com/in/arman-ahemad-khan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn
              </a>
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;