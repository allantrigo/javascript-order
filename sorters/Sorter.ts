export class Sorter {
    sorter: any = undefined

    setSorter(sorter: any) {
        this.sorter = sorter
    }

    sort(array: any) {
        if (!array.length)
            throw new Error("Insira uma array")
        if (this.sorter)
            return this.sorter.sort(array)
        throw new Error("Defina um método de ordenação")
    }
}