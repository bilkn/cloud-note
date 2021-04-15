import { useLocation } from 'react-router';

export default function UseMatchLastSubpath() {
  const { pathname } = useLocation();
  const matchSubpath = (path) => "/"+pathname.split('/').slice(-1).join('') === path;
  return { matchSubpath };
}
