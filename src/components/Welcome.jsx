import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { welcome } from '../data/content';
import { FlowerDoodle, MoonDoodle } from './Illustrations';

const ease = [0.22, 1, 0.36, 1];

export default function Welcome({ onStart }) {
  return (
    <section className="section welcome" id="welcome">
      <motion.div
        className="glass welcome-card"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease }}
      >
        <FlowerDoodle className="doodle doodle-flower" />
        <MoonDoodle className="doodle doodle-moon" />

        <motion.h1
          className="script title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <span className="title-text">{welcome.title}</span>{' '}
          <span className="title-emoji">{welcome.emoji}</span>
        </motion.h1>

        {welcome.lines.map((line, i) => (
          <motion.p
            key={line}
            className="lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 + i * 0.35, ease }}
          >
            {line}
          </motion.p>
        ))}

        <motion.button
          type="button"
          className="btn btn-primary"
          onClick={onStart}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          {welcome.cta}
        </motion.button>
      </motion.div>

      <motion.button
        type="button"
        className="scroll-hint"
        aria-label="Scroll to the letter"
        onClick={onStart}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 2.2 }, y: { repeat: Infinity, duration: 2.4, ease: 'easeInOut' } }}
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}
