'use strict';

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 默认值
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    // flightNum: flightNum;
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123', 2);
createBooking('LH123', undefined, 100); // 跳过某个值不能和array一样空着，要设为undefined
