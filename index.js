function scuberGreetingForFeet(ride){
  if (ride<=400){
    return "This one is on me!";
  }
  else if(ride>2500){
    return "No can do.";
   }
   else{
    return "I will gladly take your thirty bucks.";
   }
   
}
console.log(scuberGreetingForFeet(2001));

 function ternaryCheckCity(city){
    let cityName = "NYC";
    if(city===cityName){
      return "Ok, sounds good.";
     } 
     else {
      return "No go.";
    }
 }
console.log(ternaryCheckCity("Texas"));

function switchOnCharmFromTip(tip){
  if(tip==="generous") {
    return "Thank you so much."
  }
   else if (tip==="not as generous") {
    return "Thank you.";
  }
  else{
    return "Bye.";
  }
}
  
console.log(switchOnCharmFromTip());