import { useEffect, useRef } from 'react';

const useOutsideClickListenerRef = (onClose = () => { }) => {
  const ref = useRef(null);

  useEffect(() => {
    const escapeListener = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    const outsideClickListener = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('keydown', escapeListener);
    document.addEventListener('click', outsideClickListener);
    console.log("EVENT LISTENERS ADDED");

    return () => {
      document.removeEventListener('keydown', escapeListener);
      document.removeEventListener('click', outsideClickListener);
    }
  }, [onClose])

  return ref;
}

export default useOutsideClickListenerRef;