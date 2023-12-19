//Given an integer, reverse the order of the digits.
import { makeSingleInput } from "../utils.js";

export default function integerReversal () {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Integer Reversal'));

    input.addEventListener("input", () => {
        const reversedInt = input.value.split('').reverse().join('');
        p.textContent = 'This is the integer reversed: ' + reversedInt;
    })
}
