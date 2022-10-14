const fs = require('fs');
import { findAllSumTuples } from '../findAllSumTuples'

try {
  const data = fs.readFileSync('__tests__/customTests.txt', 'utf8');
  const args = data.trim().split('\r\n')
  for (const line of args) {
    const [array, target] = line.split(' ')
    console.log(findAllSumTuples(JSON.parse(array), Number(target)))
  }
} catch (err) {
  console.error(err);
}