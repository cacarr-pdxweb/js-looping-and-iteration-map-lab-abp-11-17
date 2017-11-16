function lowerCaseDrivers (driversArray){
  return driversArray.map(function (driver){
    return driver.toLowerCase();
  });
}


function nameToAttributes (driversArray) {
  return driversArray.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}


function attributesToPhrase (driversArray) {
  return driversArray.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}