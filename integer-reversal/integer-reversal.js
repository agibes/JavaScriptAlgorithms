//Given an integer, reverse the order of the digits.

const intReverse = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Integer Reversal'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'number', pattern: '[0-9]'})).appendChild(document.createTextNode('Integer Reversal'));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    input.addEventListener("input", () => {
        const reversedInt = input.value.split('').reverse().join('');
        p.textContent = 'This is the integer reversed: ' + reversedInt;
    })
}

intReverse();