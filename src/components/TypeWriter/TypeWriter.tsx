// components/Typewriter.tsx
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  startDelay?: number; // delay before starting (ms)
  speed?: number;      // time per letter (ms)
  className?: string;
}



const Typewriter = ({ text, speed, startDelay} : TypewriterProps) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    // Tokenize the text: HTML tags vs. plain text.
    // This regex matches either an HTML tag (e.g., <strong>) or a text chunk.
    const tokens = text.match(/(<[^>]+>)|([^<]+)/g);
    if (!tokens) return;

    let tokenIndex = 0;
    let charIndex = 0;
    let currentOutput = "";

    // Function that types out text gradually.
    const startTyping = () => {
      const intervalId = setInterval(() => {
        // When all tokens are processed, stop the interval.
        if (tokenIndex >= tokens.length) {
          clearInterval(intervalId);
          return;
        }
        const currentToken = tokens[tokenIndex];

        // If the token is an HTML tag, add it fully and move to the next token.
        if (currentToken.startsWith("<") && currentToken.endsWith(">")) {
          currentOutput += currentToken;
          tokenIndex++;
          setDisplay(currentOutput);
        } else {
          // Otherwise, add one character at a time from the text token.
          currentOutput += currentToken.charAt(charIndex);
          charIndex++;
          setDisplay(currentOutput);
          // If we've finished the current text token, move to the next token.
          if (charIndex >= currentToken.length) {
            tokenIndex++;
            charIndex = 0;
          }
        }
      }, speed);
    };

    // Start after the optional startDelay.
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, startDelay);

    // Clean up on unmount.
    return () => {
      clearTimeout(delayTimeout);
    };
  }, [text, speed, startDelay]);

  // Render the HTML string using dangerouslySetInnerHTML.
  return <span dangerouslySetInnerHTML={{ __html: display }} />;
};

export default Typewriter;

