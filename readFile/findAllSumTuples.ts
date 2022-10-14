/** Function that finds pairs of integers from a list that sum to a given value
 * @param {number[]} numbersArray Array of numbers which contains the possible pairs
 * @param {number} target Target number that will be found from possible pairs of the numbersArray
 * @returns {Record<string, number> | undefined} Possible pairs that sum up to the target value, if none is found, returns undefined
*/
export const findAllSumTuples = (numbersArray: number[], target: number): Record<string, number> | undefined => {
  if (target === 0) return

  const complementaryNumbers: Record<string, number> = {}
  const tuples: Record<string, number> = {}

  for (const number of numbersArray) {
    complementaryNumbers[target-number] = number

    if (complementaryNumbers[number] !== undefined) {
      tuples[number] = complementaryNumbers[number]
    }
  }

  if (Object.keys(tuples).length === 0) return

  return tuples
}