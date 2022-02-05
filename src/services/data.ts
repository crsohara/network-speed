import Station from '../types/station'
import Device from '../types/device'

const fetchStations = (): Array<Station> => {
  return [{x: 0, y: 0, r: 9}, {x: 20, y: 20, r: 6}, {x: 10, y: 0, r: 12}, {x: 5, y: 5, r: 13}, {x: 99, y: 25, r: 2}]
}

const fetchDevices = (): Array<Device> => {
  return [{x: 0, y: 0}, {x: 100, y: 100}, {x: 15, y: 10}, {x: 18, y: 18}, {x: 13, y: 13}, {x: 25, y: 99}]
}

export default {
  fetchStations,
  fetchDevices
}
