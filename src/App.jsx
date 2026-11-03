import { useCallback, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Background from './components/Background';
import Welcome from './components/Welcome';
import Envelope from './components/Envelope';
import Apology from './components/Apology';
import FriendshipCards from './components/FriendshipCards';
import FinalSection from './components/FinalSection';
import { scrollToId } from './utils/scroll';

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false);

  const handleLetterOpened = useCallback(() => {
    setLetterOpen(true);
    // Wait one frame so the apology section exists before scrolling to it.
    requestAnimationFrame(() => setTimeout(() => scrollToId('apology'), 120));
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <main>
        <Welcome onStart={() => scrollToId('envelope')} />
        <Envelope onOpened={handleLetterOpened} />

        <AnimatePresence>
          {letterOpen && (
            <motion.div
              key="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Apology />
              <FriendshipCards />
              <FinalSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
