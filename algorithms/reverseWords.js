//Given a phrase, reverse the order of the characters of each word.
import { makeSingleInput } from "../utils.js";

export default function reverseWords () {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Word Reversal'));

    input.addEventListener("input", () => {
        var arr = [...input.value.split(" ")];
        var newArr = [];
        arr.forEach(item => {
            var stringArr = [...item];
            var tempArr = [];
            
            stringArr.forEach(item => {tempArr.unshift(item)});
            newArr.push(tempArr.join(''));
        })
        p.textContent = newArr.join(' ');
    })
}