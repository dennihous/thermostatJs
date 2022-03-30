class Thermostat{
  constructor(){
    this.minTemp = 10
    this.maxTemp = 25
    this.temperature = 20
    var powerSavingMode = true
  }
  tempDown(){
    this.powerSaving()
    if (this.temperature >= minTemp){
      this.temperature ++
    }
  }
    
  tempUp(){
    this.powerSaving()
    if (this.temperature >= minTemp){
      this.temperature ++
    }
  }
  getTemperature(){
    return this.temperature
  }
  powerSaving(){
    if(powerSavingMode){
      this.maxTemp = 25
    } else {
      this.maxTemp = 32
    }
  }
}



module.exports = Thermostat

const thermo = new Thermostat
thermo.tempDown()
console.log(thermo.getTemperature())