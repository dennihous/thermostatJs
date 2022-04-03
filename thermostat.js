class Thermostat{
  constructor(){
    this.minTemp = 10
    this.maxTemp = 25
    this.temperature = 20
    this.powerSavingMode = true
  }
  tempDown(){
    if (this.temperature > this.minTemp){
      this.temperature --
    }
  }
    
  tempUp(){
    if (this.temperature < this.maxTemp){
      this.temperature ++
    }
  }
  getTemperature(){
    return this.temperature
  }
  setPowerSavingMode(boolean){
    this.powerSavingMode = boolean
    if (this.powerSavingMode) {
      this.maxTemp = 25
    } else {
      this.maxTemp = 32
    }
  }
  reset(){
    this.temperature = 20
  }
}

// setInterval()

module.exports = Thermostat