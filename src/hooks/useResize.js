import { useCallback, useEffect, useState } from 'react';

export function useResize() {
  const [resizing, setIsResizing] = useState(false);

  const handleResize = useCallback(() => {
    if (!resizing) {
      setIsResizing(true);
      const callback = () => {
        setIsResizing(false);
        clearTimeout(timeout);
      };
      const timeout = setTimeout(callback, 100);
    }
  }, [resizing]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { resizing };
}

export default useResize;
