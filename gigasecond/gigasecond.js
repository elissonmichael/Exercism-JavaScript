'use strict';
const GIGASECOND = 1000000000;

export function gigasecond(date) {
  date.setSeconds(date.getSeconds() + GIGASECOND);
  return date;
}
