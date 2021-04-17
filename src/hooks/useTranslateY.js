import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {HOME, DELETED} from "../constants/routes"

export default function useTranslateY() {
  const { pathname } = useLocation();
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case HOME:
        setTranslateY(0);
        break;
      case DELETED:
        setTranslateY(90);
        break;
      default:
        setTranslateY(-1);
        break;
    }
  }, [pathname]);
  return {translateY};
}
