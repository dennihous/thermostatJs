const Thermostat = require('./thermostat');
const { get } = require('http');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermo = new Thermostat

const change_temp = () => {
  rl.question(`Temperature is ${thermo.getTemperature()} \nEnter command >`, (answer) => {
    if (answer === 'up'){
      thermo.tempUp()
    } else if (answer === 'down'){
      thermo.tempDown()
    }
    change_temp()
  })
}
change_temp()