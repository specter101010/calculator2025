// components/SplitText.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(GSAPSplitText);

export const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.3,
}) => {
  const el = useRef();

  useEffect(() => {
    const split = new GSAPSplitText(el.current, { type: "words,chars" });
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: delay / 1000,
      duration,
      ease: "back.out(1.7)",
    });
  }, []);

  return <div ref={el} className={className}>{text}</div>;
};
