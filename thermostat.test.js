const Thermostat = require('./thermostat.js')
const { it, expect } = require('@jest/globals')

describe('Thermostat', () => {
  it('should be able to show what the current temperature is', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemperature()).toEqual(20) 
  })
  it('should be able to increase by 2', () => {
    const thermo = new Thermostat();
    thermo.tempUp()
    thermo.tempUp()
    expect(thermo.getTemperature()).toEqual(22)
  })
  it('should be able to have a limit of 25 degrees when powersavingmode is on', () => {
    const thermo = new Thermostat();
    for(let i = 0; i < 5; i++){
      thermo.tempUp()
    }
    const peakTemp = thermo.getTemperature()
    thermo.tempUp()
    expect(thermo.getTemperature()).toBe(peakTemp)
  })
  it('should be able to go above 25 when the powersavingmode is turned off', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(false)
    for(let i = 0; i < 100; i++){
      thermo.tempUp()
    }
    expect(thermo.getTemperature()).toBe(32)
  })
})