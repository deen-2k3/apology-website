import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { envelope } from '../data/content';
import SectionHeading from './SectionHeading';

// Flap opens (0.6s), then the letter slides up (0.9s), then the full letter is revealed below.
const REVEAL_DELAY_MS = 1700;

export default function Envelope({ onOpened }) {
  const [open, setOpen] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    timer.current = setTimeout(onOpened, REVEAL_DELAY_MS);
  };

  return (
    <section className="section envelope-section" id="envelope">
      <SectionHeading eyebrow={envelope.eyebrow} title={envelope.title} />

      <motion.div
        className="envelope-stage"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          className={`envelope ${open ? 'is-open' : ''}`}
          onClick={handleOpen}
          aria-label={open ? 'Envelope opened' : 'Open the envelope'}
          aria-expanded={open}
        >
          <span className="env-back" />
          <span className="env-letter">
            <span className="script letter-greeting">{envelope.greeting}</span>
            <span className="letter-line">I owe you an apology.</span>
            <span className="letter-mini">keep reading ✦</span>
          </span>
          <span className="env-front" />
          <span className="env-flap" />
          <span className="env-seal">
            <Sparkles size={18} strokeWidth={2} />
          </span>
        </button>
      </motion.div>

      <p className="hint" aria-live="polite">
        {open ? envelope.hintOpen : envelope.hintClosed}
      </p>
    </section>
  );
}
