
const sessionFormStyle = {
  // overlay --> styling for the "screen" behind the modal
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(66, 66, 66, 0.60)',
    zIndex          : 10
  },
  // content --> styling for the modal container
  content : {
    backgroundColor : 'white',
    position        : 'fixed',
    bottom          : '100px',
    left            : '30px',
    padding         : '22px 22px 44px 22px',
    height          : '250px',
    width           : '200px',
    zIndex          : 13,
    borderRadius    : '8px',
    "box-shadow"    : '2px 2x 4px darkslategrey'
  }
};

export default sessionFormStyle;
