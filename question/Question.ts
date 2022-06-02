import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Question {
    async question(questionText: string) {
        return new Promise<string>(resolve => rl.question(questionText, resolve)).finally(() => console.log())
    }
}