import { Sort } from "./Sort"
import { performance } from "perf_hooks"

export class Sorter {
    sorter?: Sort = undefined

    setSorter(sorter: any) {
        this.sorter = sorter
    }

    sort(array: number[]) {
        if (!array.length) throw new Error("Insira uma array")
        if (this.sorter) {
            
            const t1 = performance.now()
            const sorted = this.sorter.sort(array)
            const t2 = performance.now()
            console.log()
            console.log(`Tempo para ordenação ${t2 - t1} ms`)
            console.log()
            return sorted
        }
        throw new Error("Defina um método de ordenação")
    }
}