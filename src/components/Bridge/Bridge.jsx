import "./Bridge.css";

import {
  Blocks,
  Sparkles,
  Orbit,
  Building2
} from "lucide-react";

import { motion } from "framer-motion";

function Bridge() {

  return (

    <section className="bridge">

      <div className="bridge-container">

        {/* LEFT */}

        <motion.div
          className="bridge-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

        <h2>
        Different Minds. <br />
        One Vision.
        </h2>

        <p>
        We come from different creative perspectives,
        but that’s what makes our work unique.
        One focuses on bold structure and precision,
        while the other brings fluid creativity and
        modern storytelling together.
        </p>

          <div className="bridge-line">

            <span className="orange-line"></span>
            <span className="green-line"></span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="bridge-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="bridge-card">
            <Blocks size={60} />
          </div>

          <div className="bridge-card">
            <Sparkles size={60} />
          </div>

          <div className="bridge-card">
            <Orbit size={60} />
          </div>

          <div className="bridge-card">
            <Building2 size={60} />
          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Bridge;