//Implement a function that returns the fibonacci number at a given index.

const fibNum = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Fibonacci Number'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'number'}))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    input.addEventListener("input", () => {
        let target = input.value;
        let fibonacci = [0, 1, 1]

        for (let current = 3; current <= target; current++) {
            let prev = fibonacci[current - 1];
            let _prev = fibonacci[current - 2];
            fibonacci.push(prev + _prev);
        }

        p.textContent = 'The fibonacci number at index ' + target + ' is ' + fibonacci[target];

        return fibonacci[target];
    })
}

fibNum();