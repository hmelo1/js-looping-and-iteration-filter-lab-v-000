// Code your solution in this file
function findMatching(drivers, string){
  var new_drivers = [];
  for(const driver of drivers){
    if (driver.tolowercase() == string.tolowercase()){
      new_drivers.push(driver);
    }
  }
  return new_drivers;
}
