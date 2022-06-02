export const Heap = function () {

    const maxHeap = (array: number[]) => {
        let pivot = Math.floor(array.length / 2 - 1);
        while (pivot >= 0) {
            heapify(array, pivot, array.length);
            pivot -= 1;
        }
    }

    const heapify = (array: number[], pivot: number, max: number) => {
        let index: number;
        let left: number;
        let right: number;

        while (pivot < max) {
            index = pivot;
            left = 2 * pivot + 1;
            right = left + 1;
            if (left < max && array[left] > array[index]) {
                index = left;
            }
            if (right < max && array[right] > array[index]) {
                index = right;
            }
            if (index === pivot) {
                return;
            }
            swap(array, pivot, index);
            pivot = index;
        }
    }

    const swap = (array: number[], first: number, last: number) => {
        const temporary = array[first];
        array[first] = array[last];
        array[last] = temporary;
    }

    const heapSort = (array: number[]) => {
        maxHeap(array);
        let last = array.length - 1;
        while (last > 0) {
            swap(array, 0, last);
            heapify(array, 0, last);
            last -= 1;
        }
        return array;
    }

    this.sort = (array: number[]) => {
        return heapSort(array);
    }
};