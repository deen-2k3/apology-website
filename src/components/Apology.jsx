import { motion } from 'framer-motion';
import { apology } from '../data/content';
import SectionHeading from './SectionHeading';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Apology() {
  return (
    <section className="section" id="apology">
      <SectionHeading eyebrow={apology.eyebrow} title={apology.title} />

      <motion.article
        className="glass letter-card"
        initial={{ opacity: 0, y: 40, rotate: -0.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p {...fadeUp}>
          {apology.opening}{' '}
          <span className="sorry script">{apology.highlight}</span>
        </motion.p>

        {apology.paragraphs.map((text) => (
          <motion.p key={text} {...fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.p className="closing script" {...fadeUp}>
          {apology.closing}
        </motion.p>
        <motion.p className="signature" {...fadeUp}>
          {apology.signature}
        </motion.p>
      </motion.article>
    </section>
  );
}
