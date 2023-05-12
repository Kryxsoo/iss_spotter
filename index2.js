request = require('./iss_promised')

const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

fetchMyIP()
  .then(body => console.log(body));

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  const { nextISSTimesForMyLocation } = require('./iss_promised');

  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })