// Given a phrase, capitalize every word.
import { makeSingleInput } from "../utils.js";

export default function capitalization () {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Capitalization'));

    
    input.addEventListener("input", () => {
        var newWord = ''
        var newPhrase = ''
        var phraseArr = [...input.value.split(" ")];

        phraseArr.forEach(word => {
            var wordArr = [...word];
            var capitalLetter = wordArr[0].toUpperCase();

            wordArr.splice(0, 1, capitalLetter);
            newWord = wordArr.join('');
            newPhrase += newWord + ' ';
        });

        p.textContent = newPhrase;
    });
}
