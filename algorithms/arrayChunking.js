// Given an array and a size, split the array items into a list of arrays of the given size.
import { makeDoubleInput } from "../utils.js";

export default function arrayChunking () {

    makeDoubleInput();
    Object.assign(document.getElementById('input1'), {type: 'text'});
    Object.assign(document.getElementById('input2'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Array Chunking'));
    
    const input = document.querySelectorAll('input');
    input.forEach(input => {
        input.addEventListener("input", () => {
            p.textContent = '';
            const arr = [...input1.value];
            const size = input2.value;
            
            var newArr = []; 
            arr.forEach(item => {
                if (newArr.length) {                //if newArr is not empty
                    var lastArr = newArr.pop();     //get the value of the lastArr in newArr
                    if (lastArr.length < size) {    //if the item count on the lastArr is less than size
                        lastArr.push(item)          //add the item to lastArr
                        newArr.push(lastArr)        //and push lastArr back to newArr with changes
                    } else {
                        newArr.push(lastArr);       //else push lastArr back without changing
                        newArr.push([item]);        //start a new array to add to newArr
                    }
                } else { 
                    newArr.push([item]);
                }
            });
            newArr.forEach(arr=>{p.textContent += ' \[ ' + arr.join(', ') + ' \], '})
        });
    })
}