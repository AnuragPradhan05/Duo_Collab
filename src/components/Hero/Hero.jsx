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

          <motion.p
            className="hero-description dark-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{
              delay: 0.7,
              duration: 1
            }}
          >
            Fresh perspectives on brand storytelling.
            Organic growth ecosystems and fluid visual
            identities for the modern era.
          </motion.p>

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

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;