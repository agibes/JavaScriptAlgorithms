//Implement a function that returns the fibonacci number at a given index.
import { makeSingleInput } from "../utils.js";

export default function fibonacciNumber () {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Fibonacci Number'));

    input.addEventListener("input", () => {
        let target = input.value;
        let fibonacci = [0, 1, 1]

        for (let current = 3; current <= target; current++) {
            let prev = fibonacci[current - 1];
            let _prev = fibonacci[current - 2];
            fibonacci.push(prev + _prev);
        }

        p.textContent = 'The fibonacci number at index ' + target + ' is ' + fibonacci[target];

        return fibonacci[target];
    })
}
