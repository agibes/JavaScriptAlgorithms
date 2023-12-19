// Given a string of words or phrases, count the number of vowels
import { makeSingleInput } from "../utils.js";

export default function vowels () {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Vowel Counter'));

    input.addEventListener("input", () => {

        var count = 0;
        const re = /[aeiou]/gi;
        var vowelArr = input.value.match(re);
        vowelArr ? count = vowelArr.length : count = 0

        p.textContent = "there are " + count + " vowels";
    });
}
