import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export default function UseTranslateY() {
  const { path } = useLocation();
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    switch (path) {
      case '/':
        setTranslateY(0);
        break;
      case 'deleted':
        setTranslateY(90);
        break;
      default:
        break;
    }
  }, [path]);
  return {translateY};
}
