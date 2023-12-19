//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

export default function twoSum () {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Two Sum'));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '1', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '2', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '3', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '4', type: 'number'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))
    
    const input = document.querySelectorAll('input');
    const p = document.querySelector('p');

    var numArr = [];
    var target = 12;
    
    input.forEach(input => {
        input.addEventListener("input", () => {
            const i = input.getAttribute('id') -1;
            const num = parseInt(input.value);
            numArr.splice(i, 1, num);
            
            var pairs = []
            var store = []
            
            numArr.forEach(num => {
                let num2 = target - num
                if (store.includes(num) || store.includes(num2)) {return}

                if (numArr.includes(num2)) {
                    pairs.push([num, num2]);
                    store.push(num);
                }
            })
            
            string = '';
            pairs.forEach(pair => {
                string += pair[0] + ', ' + pair[1] + ' ';
            })
            p.textContent = string;
        })
    })
}