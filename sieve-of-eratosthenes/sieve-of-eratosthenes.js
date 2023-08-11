//For a given number, find all the prime numbers from zero to that number.
import { makeSingleInput } from "../utils.mjs";

const sieve = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Sieve of Eratosthenes'));

    input.addEventListener("input", () => {
        let num = parseInt(input.value);
        let string = {}
        for (let s=1; s<=num; s++) {
            string[s] = true
            for (let j = 2; j < s ; j++) {
                if (s % j == 0) {string[s] = false}
            }  
        }

        var entries = '';
        Object.entries(string).forEach(entry => {
            if (entry[1] == true) {entries += entry[0] + ', '}
        });

        p.textContent = 'Prime Numbers: ' + entries;
    });
}

sieve();