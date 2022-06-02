import { Question } from './question/Question'
import { Heap } from './sorters/Heap'
import { Merge } from './sorters/Merge'
import { Quick } from './sorters/Quick'
import { Sorter } from './sorters/Sorter'

async function getMethod() {
    let method = undefined

    const methods = {
        heap() {
            return new Heap()
        },
        merge() {
            return new Merge()
        },
        quick() {
            return new Quick()
        }
    }

    while (!method) {
        method = await new Question().question("Defina o método de ordenação: heap, merge ou quick: ")
        if (!(method == "heap" || method == "merge" || method == "quick")) method = undefined
    }
    return methods[method]()
}

async function run() {
    let exit = false
    const sorter = new Sorter()
    while (!exit) {
        let array = (await new Question().question("Insira uma array separada por espaços: ")).trim().split(" ").map(Number)
        while (array.length) {
            sorter.setSorter(await getMethod())
            console.log("Array ordenada: " + sorter.sort(array))
            console.log()
            switch (await new Question().question("Deseja Mudar a array?\n 1 - Sim \n 2 - Não \n 3 - Sair \n")) {
                case "1":
                    array = []
                    break
                case "2":
                    break
                default:
                    exit = true
                    array = []
            }
        }
    }
}

run()
