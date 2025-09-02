
import React from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  colorClass?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 120, colorClass = 'text-pink-500' }) => {
  const [typedText, setTypedText] = React.useState('');

  React.useEffect(() => {
    setTypedText(''); // Reset before starting
    let cancelled = false;
    function typeNext(i = 0) {
      setTypedText((prev) => prev + text.charAt(i));
      if (i + 1 < text.length && !cancelled) {
        setTimeout(() => typeNext(i + 1), Math.max(40, speed + Math.floor(Math.random() * 60 - 30)));
      }
    }
    typeNext(0);
    return () => { cancelled = true; };
  }, [text, speed]);

  // Only animated text, no cursor
  return (
    <span className={colorClass}>{typedText}</span>
  );
};

export default TypingAnimation;
