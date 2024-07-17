// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// const { compose } = require("@mostly-adequate/support");

// fastestCar :: [Car] -> String
// const fastestCar = (cars) => {
//   const sorted = sortBy(car => car.horsepower, cars);
//   const fastest = last(sorted);
//   return concat(fastest.name, ' is the fastest');
// };

// const car = (cars) => sortBy(car => car.horsepower, cars) => last

const fastestCar = compose(append(' is the fastest'), prop('name'), last, sortBy(prop('horsepower')));
