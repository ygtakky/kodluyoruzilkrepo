import React, { useEffect, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

interface Props {
  children: string;
  duration?: number;
}

const CountUpAnimation = ({ children, duration = 2000 }: Props) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.floor(countTo * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [children]);

  return <div>{count.toLocaleString()}</div>;
};

export default CountUpAnimation;
