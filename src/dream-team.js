
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
    if (Array.isArray(members)) {
      for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
          let j = 0;
          let slicedName = members[i]; 
          while (members[i][j] === ' ') {
            slicedName =  slicedName.slice(1);
            j++;
          }
          teamName += slicedName[0];
        } else {
          continue;
        }      
      }
    } else {
      return false;
    }
    teamNameSorted = teamName.toUpperCase().split('').sort().join('');
    return teamNameSorted;
}