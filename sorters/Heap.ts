import { Sort } from "./Sort"


export class Heap implements Sort {
    maxHeap(array: number[]) {
        let pivot = Math.floor(array.length / 2 - 1)
        while (pivot >= 0) {
            this.heapify(array, pivot, array.length)
            pivot -= 1
        }
    }

    heapify(array: number[], pivot: number, max: number) {
        let index: number
        let left: number
        let right: number

        while (pivot < max) {
            index = pivot
            left = 2 * pivot + 1
            right = left + 1
            if (left < max && array[left] > array[index]) {
                index = left
            }
            if (right < max && array[right] > array[index]) {
                index = right
            }
            if (index === pivot) {
                return
            }
            this.swap(array, pivot, index)
            pivot = index
        }
    }

    swap(array: number[], first: number, last: number) {
        const temporary = array[first]
        array[first] = array[last]
        array[last] = temporary
    }

    heapSort(array: number[]) {
        this.maxHeap(array)
        let last = array.length - 1
        while (last > 0) {
            this.swap(array, 0, last)
            this.heapify(array, 0, last)
            last -= 1
        }
        return array
    }

    sort(array: number[]) {
        return this.heapSort(array)
    }
}