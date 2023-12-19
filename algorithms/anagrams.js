//Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.
import { makeDoubleInput } from "../utils.js";

export default function anagrams () {

    makeDoubleInput();
    Object.assign(document.getElementById('input1'), {type: 'text'});
    Object.assign(document.getElementById('input2'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Anagrams'));

    var charCount1;
    var charCount2;

    const isAnagram = () => {
        if(charCount1 === charCount2) {
            p.textContent = 'it is an anagram';
        } else {
            p.textContent = 'not an anagram';
        }
    }

    input1.addEventListener("input", () => {
        const charArr1 = [...input1.value];    
        charCount1 = charArr1.length;

        isAnagram();
    });

    input2.addEventListener("input", () => {
        const charArr2 = [...input2.value];
        charCount2 = charArr2.length;

        isAnagram();
    });
}
    
//includes spaces and numbers as characters