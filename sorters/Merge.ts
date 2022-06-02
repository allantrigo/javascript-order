import { Sorter } from "./Sorter"

export class Merge extends Sorter {

    mergeArrays(left: number[], right: number[]): number[] {
        const merged: number[] = []
        while (left.length && right.length) {
            const numberToPush = (left[0] > right[0] ? right.shift() : left.shift())
            if (numberToPush != undefined)
                merged.push(numberToPush)
        }

        while (left.length) {
            const numberToPush = left.shift()
            if (numberToPush != undefined)
                merged.push(numberToPush)
        }
        while (right.length) {
            const numberToPush = right.shift()
            if (numberToPush != undefined)
                merged.push(numberToPush)
        }
        return merged
    }

    mergeSort(array: number[]) {
        if (array.length < 2) return array
        const pivot = Math.floor(array.length / 2)
        const left = array.slice(0, pivot)
        const right = array.slice(pivot, array.length)
        const mergedLeft: number[] = this.mergeSort(left)
        const mergedRight: number[] = this.mergeSort(right)
        return this.mergeArrays(mergedLeft, mergedRight)
    }

    sort(array: number[]) {
        return this.mergeSort(array)
    }
}