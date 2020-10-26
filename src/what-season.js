const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let Date = date;
    let numMonth = Date.getMonth();
    if ( numMonth >= 0 && numMonth <= 1 || numMonth === 11) {
        return 'winter';
    } else if ( numMonth >= 2 && numMonth <= 4 ) {
        return 'spring';
    } else if ( numMonth >= 5 && numMonth <= 7 ) {
        return 'summer';
    } else if ( numMonth >= 8 && numMonth <= 10 ) {
        return 'autumn';
    }
  } else {    
    throw new Error();
  }
}
