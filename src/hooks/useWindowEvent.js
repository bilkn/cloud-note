import { useCallback, useEffect } from 'react';

export default function useWindowEvent(
  callbacks,
  events,
  condition,
) {
  const handleEvent = useCallback(() => {
    callbacks.forEach((cb) => cb());
  }, [callbacks]);

  useEffect(() => {
    if (condition) {
      events.forEach((event) => window.addEventListener(event, handleEvent));
    }
    return () => {
      events.forEach((event) => window.removeEventListener(event, handleEvent));
    };
  }, [handleEvent, condition, events]);
}
