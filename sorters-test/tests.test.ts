import { Heap } from "../sorters/Heap"
import { Merge } from "../sorters/Merge"
import { Quick } from "../sorters/Quick"
import { Sorter } from "../sorters/Sorter"

const testArray = [8, 4, 2, 9, 6, 1, 0, 10, 12, 58, 3]
const expectedArray = testArray.sort()

test("Heap", () => {
  const sorter = new Sorter()
  const heapMethod = new Heap()
  sorter.setSorter(heapMethod)
  expect(sorter.sort(testArray)).toStrictEqual(expectedArray)
})

test("Quick", () => {
  const sorter = new Sorter()
  const heapMethod = new Quick()
  sorter.setSorter(heapMethod)
  expect(sorter.sort(testArray)).toStrictEqual(expectedArray)
})

test("Merge", () => {
  const sorter = new Sorter()
  const heapMethod = new Merge()
  sorter.setSorter(heapMethod)
  expect(sorter.sort(testArray)).toStrictEqual(expectedArray)
})

test("Sorter without sorting method", () => {
  const sorter = new Sorter()
  expect(() => sorter.sort(testArray)).toThrowError(Error)
})

test("Sorter without array", () => {
  const sorter = new Sorter()
  sorter.setSorter(new Merge())
  expect(() => sorter.sort([])).toThrowError(Error)
})