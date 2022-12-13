/**
 * File used to execute the challenges
 */

import getFilesToBackup from './challenge13'

const lastBackup = 1546300800
const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100]
]

console.log(getFilesToBackup(lastBackup, changes))
