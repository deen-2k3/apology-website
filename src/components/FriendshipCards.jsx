import { motion } from 'framer-motion';
import { Feather, Hourglass, Star } from 'lucide-react';
import { reminder } from '../data/content';
import SectionHeading from './SectionHeading';
import { TwoMugs } from './Illustrations';

const icons = { star: Star, feather: Feather, hourglass: Hourglass };

export default function FriendshipCards() {
  return (
    <section className="section" id="friendship">
      <SectionHeading eyebrow={reminder.eyebrow} title={reminder.title}>
        <TwoMugs className="mugs" />
      </SectionHeading>

      <div className="card-grid">
        {reminder.cards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <motion.div
              key={card.title}
              className={`glass friend-card tint-${i}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <span className="card-icon">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <h3 className="script card-title">{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
