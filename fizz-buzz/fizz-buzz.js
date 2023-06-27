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
            p.textContent += i + ' ';
        }

        if (input.value % 2 === 0) {
            p.textContent = 'FIZZ';
        }
        
        if (input.value % 3 === 0) {
            p.textContent = 'BUZZ';
        }

        if ((input.value % 2 === 0) && (input.value % 3 === 0)) {
            p.textContent = 'FIZZ BUZZ';
        }
    })

}

fizzBuzz();