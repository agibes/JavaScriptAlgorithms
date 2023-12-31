//Given an array of numbers, calculate the mean, median, and mode.
import { makeQuadInput } from "../utils.js";

export default function meanMedianMode () {
    makeQuadInput();
    Object.assign(document.getElementById('1'), {type: 'number'});
    Object.assign(document.getElementById('2'), {type: 'number'});
    Object.assign(document.getElementById('3'), {type: 'number'});
    Object.assign(document.getElementById('4'), {type: 'number'});
    document.getElementById('title').appendChild(document.createTextNode('Mean Median Mode'));
    
    const input = document.querySelectorAll('input');

    const numArr = [];
    
    input.forEach(input => {
        input.addEventListener("input", () => {

            const i = input.getAttribute('id') -1;
            const num = input.value;
            numArr.splice(i, 1, num);

            var numCount = {};
            var mean;
            var median;
            var mode;
            
            //mean
            var sum = 0;
            numArr.forEach(num => {
                sum += parseInt(num);
                mean = (sum / numArr.length).toFixed(1);
                numCount[num] = numCount[num] + 1 || 1
            })
            
            //median
            var newArr = numArr.slice();
            newArr.sort();
            if (numArr.length % 2 == 0) {
                median = (parseInt(newArr[newArr.length / 2 -1]) + parseInt(newArr[newArr.length / 2])) / 2;
            } else {
                median = newArr[Math.floor(newArr.length / 2)];
            };

            //mode
            var max = 0;
            console.log(numCount)
            for (var key in numCount) {
                var count = numCount[key];
                if (count > max) {
                    max = count;
                    mode = key;
                } else if ( count == max ) {
                    mode = 'there is no mode'
                }
            } 

            p.textContent = 'mean: ' + mean + ' median: ' + median + ' mode: ' + mode;
            console.log(numArr);
        });
    })

}