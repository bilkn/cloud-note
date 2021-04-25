import { useCallback, useEffect } from 'react';

export default function useWindowKey(params) {
  const { keys, callbacks, condition } = params;

  const mapHandlersWithKeys = keys.reduce((obj, key, i) => {
    obj[key] = callbacks[i];
    return obj;
  }, {});

  console.log(mapHandlersWithKeys);

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
