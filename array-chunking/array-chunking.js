// Given an array and a size, split the array items into a list of arrays of the given size.

const arrChunking = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Array Chunking'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input1', class: "input", type: 'text', }))
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input2', class: "input", type: 'number', }))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const input = document.querySelectorAll('input');
    const p = document.querySelector('#p');

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

arrChunking();