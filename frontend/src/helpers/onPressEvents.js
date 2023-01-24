/**
 * Function that returns the necessary event handlers every button touch and click phase.
 * @param {function} start function to be called on the start of the press event. NOTE: this function could be called twice on mobile devices.
 * @param {function} end function to be called on the end of the press event. NOTE: this function will be called only once on any devices.
 * @param {function} cancel function to be called if the press event is cancelled. NOTE: this function could be called twice on mobile devices.
 * @returns an object with the event callbacks
 */
export const onPressEvents = ({ start, end, cancel }) => {
  return {
    onMouseDown: start,
    onTouchStart: start,
    onMouseUp: end,
    onTouchEnd: cancel,
    onMouseLeave: cancel,
  };
};
