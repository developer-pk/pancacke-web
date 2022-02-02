import { useEffect } from 'react';

const useDetectOutsideClick = (ref, action) => {
  useEffect(() => {
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    };
    window.addEventListener('mousedown', listener);
    return () => {
      window.removeEventListener('mousedown', listener);
    };
  }, [ref, action]);
};

export default useDetectOutsideClick;
