//Implement a performant recursive function for the fibonacci series.

const memoFib = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Memoized Fibonacci Number'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'number'}))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    input.addEventListener("input", () => {
        
        const sequence = (target, cachedFibonacci  = []) => {
            if (cachedFibonacci[target]) {return cachedFibonacci[target]};
            
            if (target < 3) {
                return 1;
            } else {
                cachedFibonacci[target] = sequence(target - 1, cachedFibonacci) + sequence(target - 2, cachedFibonacci);
            }
        
            return cachedFibonacci[target];
        }
            
        p.textContent= 'The Fibonacci number at index ' + input.value + ' is ' + sequence(input.value);
    
    })
}

memoFib();