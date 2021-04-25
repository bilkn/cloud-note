import { useEffect, useState } from 'react';

export default function useMouseClick() {
  const [mouseClick, setMouseClick] = useState(true);

  useEffect(() => {
    const handleWindowKeyDown = () => {
      setMouseClick(false);
    };
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

  return { mouseClick, setMouseClick };
}
