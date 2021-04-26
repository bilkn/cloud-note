import { useCallback, useEffect } from 'react';

export default function useWindowKey(params) {
  const { keys, handlers, condition } = params;

  const mapHandlersWithKeys = keys.reduce((obj, key, i) => {
    obj[key] = handlers[i];
    return obj;
  }, {});


  const handleKeyDown = useCallback(
    (e) => {
      const handler = mapHandlersWithKeys[e.key];
      if (handler) handler();
    },
    [mapHandlersWithKeys]
  );

  useEffect(() => {
    if (condition) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [condition, handleKeyDown]);
}
