import { useEffect, useState } from "react";

const Count = ({ target = 0, speed = 20, step = 1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) {
      setCount(target);
      return;
    }

    const timer = setTimeout(() => {
      setCount(prev => prev + step);
    }, speed);

    return () => clearTimeout(timer);
  }, [count, target, speed, step]);

  return <span>{count}</span>;
};

export default Count;
