import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function LoadingIndicator() {
  const [sparkles, setSparkles] = useState([]);

  // Generate sparkles
  useEffect(() => {
    // Create initial sparkles in a wider pattern
    const initialSparkles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      angle: (i * 36 * Math.PI) / 180, // Evenly distribute around the circle (10 sparkles)
      distance: 50 + Math.random() * 30, // Much wider spread
      size: 10 + Math.random() * 10,
      delay: i * 0.1,
    }));

    setSparkles(initialSparkles);

    // Add random sparkles periodically
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        angle: Math.random() * Math.PI * 2,
        distance: 50 + Math.random() * 30, // Wide spread
        size: 10 + Math.random() * 10,
        delay: Math.random() * 0.2,
      };

      setSparkles((prev) => [...prev.slice(-10), newSparkle]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex items-center justify-center h-24 w-24'>
      {/* No background circle */}

      {/* Wider Sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.cos(sparkle.angle) * (sparkle.distance * 0.3),
              y: Math.sin(sparkle.angle) * (sparkle.distance * 0.3),
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.cos(sparkle.angle) * sparkle.distance,
              y: Math.sin(sparkle.angle) * sparkle.distance,
              rotate: Math.random() > 0.5 ? 90 : -90,
            }}
            transition={{
              duration: 1.5,
              delay: sparkle.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.2,
              ease: 'easeOut',
            }}
            className='absolute z-10'
            style={{
              color: `hsl(${260 + Math.random() * 40}, ${
                75 + Math.random() * 25
              }%, ${65 + Math.random() * 25}%)`,
            }}
          >
            <Sparkles size={sparkle.size} />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className='relative z-20'
        animate={{
          rotate: 360,
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          rotate: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          },
          scale: {
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 200 200'
          className='size-20'
        >
          <motion.path
            fill='rgba(103, 75, 255, 1)'
            d='M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z'
            animate={{
              fill: [
                'rgba(103, 75, 255, 1)',
                'rgba(133, 105, 255, 1)',
                'rgba(153, 125, 255, 1)',
                'rgba(103, 75, 255, 1)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </motion.div>

      {/* Static loading text - no animation */}
      <div className='absolute -bottom-8 text-center'>
        <p className='text-purple-400  text-sm font-medium'>Creating Your CV</p>
      </div>
    </div>
  );
}
