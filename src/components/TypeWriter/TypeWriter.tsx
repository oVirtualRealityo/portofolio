// components/Typewriter.tsx
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  startDelay?: number; // delay before starting (ms)
  speed?: number;      // time per letter (ms)
  className?: string;
}

const Typewriter = ({
  text,
  startDelay = 0,
  speed = 50,
  className,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startTimeout);
    };
  }, [text, startDelay, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;
