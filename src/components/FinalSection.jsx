import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun } from 'lucide-react';
import { finale } from '../data/content';

const ease = [0.22, 1, 0.36, 1];
const SPARKLES = 10;

function SparkleBloom() {
  return (
    <div className="bloom" aria-hidden="true">
      {Array.from({ length: SPARKLES }, (_, i) => {
        const angle = (i / SPARKLES) * Math.PI * 2;
        const distance = 90 + (i % 3) * 22;
        return (
          <motion.span
            key={i}
            className="bloom-spark"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: [0.4, 1, 0.6],
            }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.1 + (i % 4) * 0.05 }}
          >
            ✦
          </motion.span>
        );
      })}
    </div>
  );
}

export default function FinalSection() {
  const [read, setRead] = useState(false);

  return (
    <section className="section final" id="final">
      <motion.div
        className="glass final-card"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease }}
      >
        <AnimatePresence mode="wait">
          {!read ? (
            <motion.div
              key="ask"
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="script heading">{finale.title}</h2>
              <p className="lead">{finale.text}</p>
              <motion.button
                type="button"
                className="btn btn-soft"
                onClick={() => setRead(true)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {finale.button}
              </motion.button>
              <p className="note">{finale.note}</p>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              className="thanks"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease }}
              role="status"
            >
              <SparkleBloom />
              <motion.span
                className="thanks-icon"
                initial={{ rotate: -30, scale: 0.6 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, ease }}
              >
                <Sun size={34} strokeWidth={1.6} />
              </motion.span>
              <p className="thanks-text">{finale.thanks}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <footer className="footer">made with care, for a friend who matters ✦</footer>
    </section>
  );
}
