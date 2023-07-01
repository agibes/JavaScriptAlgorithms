//Given an array of items, reverse the order (without using the reverse method).

const reverseArray = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Array Reversal'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    input.addEventListener("input", () => {
        var arr = [...input.value];
        var newArr = []
        while (arr.length > 0) {
            var item = arr.pop();
            newArr.push(item);
        }
        p.textContent = '\[ ' + newArr.join(', ') + ' \]';
    })
}

reverseArray();