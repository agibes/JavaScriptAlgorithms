//Implement a performant recursive function for the fibonacci series.
import { makeSingleInput } from "../utils.mjs";

const memoFib = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Memoized Fibonacci Number'));

    input.addEventListener("input", () => {
        
        const sequence = (target, cachedFibonacci  = []) => {
            if (cachedFibonacci[target]) {return cachedFibonacci[target]};
            
            if (target < 3) {
                return 1;
            } else {
                cachedFibonacci[target] = sequence(target - 1, cachedFibonacci) + sequence(target - 2, cachedFibonacci);
            }
        
            return cachedFibonacci[target];
        }
            
        p.textContent= 'The Fibonacci number at index ' + input.value + ' is ' + sequence(input.value);
    
    })
}

memoFib();