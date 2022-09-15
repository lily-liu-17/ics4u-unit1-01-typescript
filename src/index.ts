/**
 * This program calculates the max number of logs that can fit on one truck
 *
 *
 * By: Lily
 * Version: 1.0
 * Since: 2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const logLengthString = prompt('Enter the length of the log in meters : ')
const logLength = parseFloat(logLengthString)
const numberOfLogs = 1100 / (20 * logLength)
console.log(`Number of logs that can be placed on truck :  ${numberOfLogs}`)

console.log('\nDone.')
