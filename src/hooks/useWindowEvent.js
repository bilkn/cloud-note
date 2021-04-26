import { useCallback, useEffect } from 'react';

export default function useWindowEvent(params) {
  const { events, handlers, condition } = params;

  const handleEvent = useCallback(
    (e) => {
      handlers.forEach((cb) => cb(e));
    },
    [handlers]
  );

  useEffect(() => {
    if (condition) {
      events.forEach(({ event, capture = false }) =>
        window.addEventListener(event, handleEvent, capture)
      );
    }
    return () => {
      events.forEach(({ event, capture = false }) =>
        window.removeEventListener(event, handleEvent, capture)
      );
    };
  }, [handleEvent, condition, events]);
}
