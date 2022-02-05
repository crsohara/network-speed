import Station from '../types/station'
import Device from '../types/device'
import { isInStationRange, calculateDistance, calculateSpeed } from './logic'

test("isInStationRange return true", () => {
  const device: Device = {x: 0, y: 0}
  const station: Station = {x: 0, y: 0, r: 10}

  expect(isInStationRange(device, station)).toBe(true);
})

test("isInStationRange return false", () => {
  const device: Device = {x: 0, y: 0}
  const station: Station = {x: 99, y: 99, r: 1}

  expect(isInStationRange(device, station)).toBe(false);
})

test("calculateDistance to return 2.83", () => {
  const device: Device = {x: 18, y: 18}
  const station: Station = {x: 20, y: 20, r: 6}

  expect(calculateDistance(device, station)).toBe(2.8284271247461903);
})

test("calculateSpeed to return 10.06", () => {
  const device: Device = {x: 18, y: 18}
  const station: Station = {x: 20, y: 20, r: 6}
  const distance = calculateDistance(device, station)

  expect(calculateSpeed(station.r, distance)).toBe(10.058874503045718);
})
