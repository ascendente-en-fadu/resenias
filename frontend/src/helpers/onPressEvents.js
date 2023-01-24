/**
 * Function that returns the necessary event handlers every button touch and click phase.
 * @param {function} start function to be called on the start of the press event
 * @param {function} end function to be called on the end of the press event
 * @param {function} cancel function to be called if the press event is cancelled
 * @returns an object with the event callbacks
 */
export const onPressEvents = ({ start, end, cancel }) => {
  return {
    onMouseDown: () => start(),
    onTouchStart: () => start(),
    onMouseUp: () => end(),
    onTouchEnd: () => cancel(),
    onMouseLeave: () => cancel(),
  };
};
