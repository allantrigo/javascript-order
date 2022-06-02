import { Sort } from "./Sort"

export class Quick implements Sort {
    quickSort(array: number[]): number[] {
        if (array.length <= 1) {
            return array
        }

        const pivot = array[array.length - 1]
        const left: number[] = []
        const right: number[] = []

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left.push(array[i])
            }
            else {
                right.push(array[i])
            }
        }
        return [...this.quickSort(left), pivot, ...this.quickSort(right)]
    }

    sort(array: number[]) {
        return this.quickSort(array)
    }
}