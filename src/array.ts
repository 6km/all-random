import chalk from 'chalk'
const { randomInt } = require('./randomInt').default

export default {
    randomArrayItem(array: Array<any>) {
    	if (!array) return console.warn(`${chalk.yellow("»")} randomArrayItem() requires the following argument: array`);

        return array[randomInt(array.length)]
    }
}