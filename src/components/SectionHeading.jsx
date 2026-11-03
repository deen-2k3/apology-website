import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.header
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="script heading">{title}</h2>
      {children}
    </motion.header>
  );
}
