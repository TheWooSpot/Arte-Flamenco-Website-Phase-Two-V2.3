import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(function run() {
        tick();
        setTimeout(run, delay);
      }, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export default useInterval;