//Given a string of characters, return the character that appears the most often.
import { makeSingleInput } from "../utils.mjs";

const mostCommonChar = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Most Common Character'));

    input.addEventListener("input", () => {

        const charArr = [...input.value];

        var charObj = {};

        charArr.filter(char => char != ' ').map(char => {
            (Object.keys(charObj).includes(char)) ? charObj[char] += 1 : charObj[char] = 1;
        })

        const charCountArr = Object.values(charObj)

        const charCount = charCountArr.find(count => count === Math.max(...charCountArr));
        const mostCommonChar = Object.keys(charObj).filter(char => charObj[char] === charCount);
        p.textContent = ('the most common character(s): ' + mostCommonChar.join(', ') );
    });

}

mostCommonChar();

//does not check for capital vs lowercase vs number

