module.exports = function getSeason(date) {
  if(!date){return 'Unable to determine the time of year!';}
  if(Object.keys(date).length>0){throw new Error;}
  let mon = date.getMonth();
  if(mon>1&&mon<5) return 'spring';
  if(mon>4&&mon<8) return 'summer';
  if(mon>7&&mon<11) return 'autumn';
  return 'winter';
  console.log(mon);
};
