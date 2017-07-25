
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
    backgroundColor : 'rgba(225, 225, 225, 1)',
    position        : 'fixed',
    bottom          : '100px',
    left            : '30px',
    padding         : '8px',
    height          : '250px',
    width           : '200px',
    zIndex          : 13,
    borderRadius    : '8px',
    boxShadow       : '2px 2x 5px #424242'
  }
};

export default sessionFormStyle;
