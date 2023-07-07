//For a given number, find all the prime numbers from zero to that number.

const sieve = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Sieve of Eratosthenes'))
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'number'}))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const  p = document.querySelector('#p')
    const input = document.querySelector('#input');

    input.addEventListener("input", () => {
        let num = parseInt(input.value);
        let string = {}
        for (let s=1; s<=num; s++) {
            string[s] = true
            for (let j = 2; j < s ; j++) {
                if (s % j == 0) {string[s] = false}
            }  
        }

        var entries = '';
        Object.entries(string).forEach(entry => {
            if (entry[1] == true) {entries += entry[0] + ', '}
        });

        p.textContent = 'Prime Numbers: ' + entries;
    });
}

sieve();