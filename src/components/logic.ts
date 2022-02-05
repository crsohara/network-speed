import Station from '../types/station'
import Device from '../types/device'

export const calculateDistance = (device: Device, station: Station): number => {
  const distance = Math.pow((device.x - station.x), 2) + Math.pow((device.y - station.y), 2)

  return Math.sqrt( distance );
}

export const calculateSpeed = (range: number, distance: number): number => {
  return Math.pow((range - distance), 2)
}

export const isInStationRange = (device: Device, station: Station): boolean => {
  const dPos = Math.pow((device.x - station.x), 2) + Math.pow((device.y - station.y), 2)
  const rPos = Math.pow(station.r, 2)

  return Math.abs(dPos) <= rPos
}
