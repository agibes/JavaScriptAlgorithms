//Given an array of numbers, calculate the mean, median, and mode.

const meanMedMod = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Mean Median Mode'));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '1', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '2', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '3', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '4', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))
    
    const input = document.querySelectorAll('input');
    const p = document.querySelector('p');

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

meanMedMod();