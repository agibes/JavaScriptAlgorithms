//Given a number as an input, print out every integer from 1 to that number. 
//However, when the integer is divisible by 2, print out “Fizz”; 
//when it’s divisible by 3, print out “Buzz”; 
//when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const fizzBuzz = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Fizz Buzz'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'number', }))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input = document.querySelector('#input');
    const p = document.querySelector('#p');

    input.addEventListener("input", () => {
        p.textContent = '';
        for (let i = 1; i <= input.value; i++) {
            if (i % 6 === 0) {
                p.textContent += 'FIZZ BUZZ ';
            } else if (i % 3 === 0) {
                p.textContent += 'buzz ';
            } else if (i % 2 === 0) {
                p.textContent += 'fizz ';
            } else {
                p.textContent += i + ' ';
            }
        }
    })
}

fizzBuzz();