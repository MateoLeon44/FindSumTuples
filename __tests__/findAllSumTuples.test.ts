import { findAllSumTuples } from '../findAllSumTuples'

// Coming from the assumptions, there's no need to test repetead values or non integer values

test('Empty array', () => {
  const emptyArray = []
  expect(findAllSumTuples(emptyArray, 0)).toBeUndefined()
  expect(findAllSumTuples(emptyArray, 3)).toBeUndefined()
  expect(findAllSumTuples(emptyArray, -10)).toBeUndefined()
})

test('One number array', () => {
  const oneNumberArray = [2]
  expect(findAllSumTuples(oneNumberArray, 0)).toBeUndefined()
  expect(findAllSumTuples(oneNumberArray, 3)).toBeUndefined()
  expect(findAllSumTuples(oneNumberArray, -10)).toBeUndefined()
})

test('Target being 0 and array having a 0', () => {
  const array = [0, 1, 2]
  const target = 0
  expect(findAllSumTuples(array, target)).toBeUndefined()
})

test('Target is a positive integer and array length > 0', () => {
  const array = [1,9,5,0,20,-4,12,16,7]
  const target = 12
  expect(findAllSumTuples(array, target)).toEqual({
    "7": 5,
    "12": 0,
    "16": -4
  })
})

test('Target is a negative integer and array length > 0', () => {
  const array = [1,9,5,0,20,-4,12,16,7,-10]
  const target = -3
  expect(findAllSumTuples(array, target)).toEqual({
    "-4": 1,
    "-10": 7
  })
})

