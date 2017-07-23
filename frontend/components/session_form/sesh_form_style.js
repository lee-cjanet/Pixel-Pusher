
const sessionFormStyle = {
  // overlay --> styling for the "screen" behind the modal
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.20)',
    zIndex          : 10
  },
  // content --> styling for the modal container
  content : {
    backgroundColor : 'rgba(32, 56, 82, 0.70)',
    position        : 'fixed',
    // right           : '10%',
    bottom          : '100px',
    right           : '50px',
    padding         : '8px',
    height          : '250px',
    width           : '200px',
    zIndex          : 11,
    "border-radius" : '8px'
  }
};

export default sessionFormStyle;
