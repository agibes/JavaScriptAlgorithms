//A palindrome is a word or phrase that reads the same backward as forward. 
//Write a function that checks for this.
import { makeSingleInput } from "../utils.mjs";
const palindrome = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Palindrome'));
    
    input.addEventListener("input", () => {
        p.textContent = input.value;

        const characterArr = p.textContent.split('');

        characterArr.reverse();

        const reversedString = characterArr.join('');

        if (input.value.length > 1 && input.value === reversedString) {
            p.textContent += ' is a palindrome';
        } else if (input.value.length > 1 && input.value != reversedString) {
            p.textContent += ' is not a palindrome';
        } else if (input.value.length === 0) {
            p.textContent = '';
        }
    })
}   

palindrome();