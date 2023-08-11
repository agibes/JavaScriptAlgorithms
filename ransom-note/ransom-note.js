// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.
import { makeSingleInput } from "../utils.mjs";

const ransomNote = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'), {type: 'text'});
    document.getElementById('title').appendChild(document.createTextNode('Ransome Note'));

        input.addEventListener("input", () => {
            
            var magInput = 'Big Big Summer Blowout! Don\'t miss this years biggest sale yet. Come on down to the store to collect this once in a lifetime offer. We will never be having this sale ever again, so enjoy it while you can! Be the first one down and get and extra bonus cash offer. Hurry, the offer ends tomorrow!'
            var count;
            var magMap = new Map();
            var magInputArr = [...magInput.toLowerCase().split(' ')]
            magInputArr.forEach(word => {
                if (magMap.get(`${word}`) == undefined) {
                    count = 1;
                    magMap.set(word, count);
                } else {
                    magMap.set(word, count + 1);
                }
            })

            var ransInput = input.value.trim();
            var ransMap = new Map()
            var ransInputArr = [...ransInput.toLowerCase().split(' ')]
            
            ransInputArr.forEach(word => {
                if (ransMap.get(`${word}`) == undefined) {
                    count = 1
                    ransMap.set(word, count)
                } else {
                    count = ransMap.get(`${word}`);
                    ransMap.set(word, count + 1)
                }
            })
            
            //check if the hash table contains the right number of ransom words
            ransInputArr.forEach(word => {
                if (magMap.get(`${word}`) == undefined || (magMap.get(`${word}`) < ransMap.get(`${word}`))) {
                    p.textContent = 'You cannot make the ransom note'
                } else {
                    p.textContent = 'You can make the ransom note!'
                }
            })
    }
    )
}
    
ransomNote();
