export const rightToLeft = (delay, duration = 0.7) => {
  return {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: delay,
        duration: duration,
      },
    },
  };
};

export const downToUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.5,
      duration: 0.7,
    },
  },
  exit: { opacity: 0, y: 0 },
};
