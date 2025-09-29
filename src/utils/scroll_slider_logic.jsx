import { useRef } from 'react';

const scrollCarousel = (ref, direction, scrollAmount = 200) => {
  
  if (ref?.current) {
    ref.current.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }

  const el = ref.current;
  const maxScrollLeft = el.scrollWidth - el.clientWidth;

  if (direction === 1 && el.scrollLeft + scrollAmount >= maxScrollLeft) {
    // At end → wrap to start
    el.scrollTo({ left: 0, behavior: 'smooth' });
  } else if (direction === -1 && el.scrollLeft - scrollAmount <= 0) {
    // At start → wrap to end
    el.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  } else {
    // Normal scroll
    el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
};

export default scrollCarousel;