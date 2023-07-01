// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. 
// If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

const caesarCipher = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Caesar Cipher'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input1', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input2', type: 'number'}));

    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const input = document.querySelectorAll('input');
    const p = document.querySelector('p');

    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

    input.forEach(input => {
        input.addEventListener("input", () => {
            var stringArr = [...input1.value.toLowerCase()];
            var num = parseInt(input2.value);
            for (let i =0; i<stringArr.length; i++) {
                const findLetter = (e) => e == stringArr[i];
                var sum = num + alphabetArr.findIndex(findLetter);
                if (stringArr[i] === ' ') {continue};
                while (sum >= 26) {sum -= 26};
                stringArr[i] = alphabetArr[sum];
            };
            p.textContent = stringArr.join('');
        });
    })
}

caesarCipher();