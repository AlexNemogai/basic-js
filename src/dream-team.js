module.exports = function createDreamTeam(members) {
  let dreamTeam = "";
  if(!Array.isArray(members))return false;
  for(let i = 0; i <members.length; i++){
    if(typeof members[i] == "string"){
      dreamTeam+=members[i].trim()[0].toUpperCase();
    }
  }
  console.log(dreamTeam.split("").sort().join(""));
  return dreamTeam.split("").sort().join("");
};