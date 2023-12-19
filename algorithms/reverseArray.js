//Given an array of items, reverse the order (without using the reverse method).
import { makeSingleInput } from "../utils.js";

export default function reverseArray () {

    makeSingleInput();
    document.getElementById('title').appendChild(document.createTextNode('Array Reversal'));

    input.addEventListener("input", () => {
        var arr = [...input.value];
        var newArr = []
        while (arr.length > 0) {
            var item = arr.pop();
            newArr.push(item);
        }
        p.textContent = '\[ ' + newArr.join(', ') + ' \]';
    })
}
