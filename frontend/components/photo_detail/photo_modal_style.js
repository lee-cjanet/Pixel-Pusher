
const PhotoModalStyle = {
  // overlay --> styling for the "screen" behind the modal
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.60)',
    zIndex          : 10
  },
  // content --> styling for the modal container
  content : {
    position                   : 'relative',
    margin                     : 'auto',
    marginTop                  : '25px',
    border                     : '1px solid #B5B3B0',
    height                     : '450px',
    overflow                   : 'auto',
    width                      : '875px',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    backgroundColor            : 'white',
    zIndex                     : 11
  }
};

export default PhotoModalStyle;
