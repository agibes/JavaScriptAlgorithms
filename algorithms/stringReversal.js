//Given a string of characters as input, write a function that returns it with the characters reversed.
import { makeSingleInput } from "../utils.js";

export default function stringReversal () {
    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('String Reversal'));

    input.addEventListener("input", () => {
        var inputValue = document.querySelector('#input').value;

        var characterArray = [...inputValue];

        const reversedCharacterArray = characterArray.reverse();

        const p = document.createElement('p');

        for (const e of reversedCharacterArray) {
            const reversedString = '' + e;
        
            var pElem = document.querySelector('p');

            if (!pElem) {
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            } else {
                root.removeChild(pElem);
                p.appendChild(document.createTextNode(''));
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            }
        }
    })

}

