// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. 
// If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
import { makeDoubleInput } from "../utils.js";

export default function caesarCipher () {
    makeDoubleInput();
    Object.assign(document.getElementById('input1'), {type: 'text'});
    Object.assign(document.getElementById('input2'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Caesar Cipher'));
    
    const input = document.querySelectorAll('input');

    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

    input.forEach(input => {
        input.addEventListener("input", () => {
            var stringArr = [...input1.value.toLowerCase()];
            var num = parseInt(input2.value);
            for (let i =0; i<stringArr.length; i++) {
                const findLetter = (e) => e == stringArr[i];
                var sum = num + alphabetArr.findIndex(findLetter);
                if (stringArr[i] === ' ') {continue};
                while (sum >= 26) {sum -= 26};
                stringArr[i] = alphabetArr[sum];
            };
            p.textContent = stringArr.join('');
        });
    })
}
