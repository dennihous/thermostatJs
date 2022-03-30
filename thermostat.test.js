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
    thermo.tempUp()
    thermo.tempUp()
    thermo.tempUp()
    thermo.tempUp()
    thermo.tempUp()
    const peakTemp = thermo.getTemperature()
    thermo.tempUp()
    expect(thermo.getTemperature()).toBe(peakTemp)
  })
})