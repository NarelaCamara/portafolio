export const PAGE_TRANSITIONS = {
  DURATION: 1.6,
  ERASE: [1.93, 0, 0.17, 1],
};

export const NAV_TRANSITION = {
  initial: { opacity: 0, duration: PAGE_TRANSITIONS.DURATION },
  animate: {
    opacity: 1,
    y: [370, 0],
    duration: PAGE_TRANSITIONS.DURATION,
    erase: PAGE_TRANSITIONS.ERASE,
  },
  exit: { opacity: 0 },
};

export const SIDEBAR_TRANSITION = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: [370, 0],
    duration: PAGE_TRANSITIONS.DURATION,
    erase: PAGE_TRANSITIONS.ERASE,
  },
};

export const SECTION_TRANSITION = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: [370, 0],
    duration: PAGE_TRANSITIONS.DURATION,
    erase: PAGE_TRANSITIONS.ERASE,
  },
};
