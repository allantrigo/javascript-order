import { Heap } from "../sorters/Heap"
import { Merge } from "../sorters/Merge"
import { Quick } from "../sorters/Quick"
import { Sorter } from "../sorters/Sorter"

const testArray = [8, 4, 2, 9, 6, 1, 0, 10, 12, 58, 3]
const expectedArray = testArray.sort()
const charArray = ["ab","ba","dd","ct","za","tq","wa"]
const expectedCharArray = charArray.sort()

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
  expect(() => sorter.sort([])).toThrowError(Error)
})

test("Sorter with char arrays", () => {
  const sorter = new Sorter()
  const heapMethod = new Merge()
  sorter.setSorter(heapMethod)
  expect(sorter.sort(charArray)).toEqual(expectedCharArray)
  const quickMethod = new Merge()
  sorter.setSorter(quickMethod)
  expect(sorter.sort(charArray)).toEqual(expectedCharArray)
  const mergeMethod = new Merge()
  sorter.setSorter(mergeMethod)
  expect(sorter.sort(charArray)).toEqual(expectedCharArray)
})