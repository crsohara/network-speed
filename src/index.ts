import Station from './types/station'
import Device from './types/device'
import { isInStationRange, calculateDistance, calculateSpeed } from './components/logic'
import { appendElement } from './helpers/append'

import data from './services/data'

import './assets/app.css'

const stations = data.fetchStations()
const devices = data.fetchDevices()

devices.forEach(item => {
  const div = document.createElement('div')
  div.append(JSON.stringify(item))
  document.querySelector('#devices').appendChild(div)
})

stations.forEach(item => {
  const div = document.createElement('div')
  div.append(JSON.stringify(item))
  document.querySelector('#stations').appendChild(div)
})

const logBestStation = (
  device: Device,
  station: Station,
  speed: number,
  distance: number
) => {
  const message = `Best network station for point ${device.x},${device.y} is ${station.x},${station.y} with speed ${speed.toFixed(2)} and distance ${distance.toFixed(2)}`
  appendElement('#results', message)
}

devices.forEach(device => {
  const stationsInReach = stations.filter(station => isInStationRange(device, station))

  if (!stationsInReach.length) {
    const message = `No network station within reach for point ${device.x}, ${device.y}`
    appendElement('#results', message)
    return
  }

  if (stationsInReach.length === 1) {
    const station = stationsInReach[0]

    const distance = calculateDistance(device, station)
    const speed = calculateSpeed(station.r, distance)

    logBestStation(device, station, speed, distance)
    return
  }

  const station = stationsInReach.reduce((
    best: Station & {speed: number, distance: number},
    station
  ) => {
    const distance = calculateDistance(device, station)
    const speed = calculateSpeed(station.r, distance)

    if (best.speed && best.speed > speed){
      return best
    }

    return {
      ...station,
      speed,
      distance
    }
  }, {} as Station & {speed: number, distance: number})

  logBestStation(device, station, station.speed, station.distance)
})
