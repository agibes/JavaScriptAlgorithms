//Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

const anagrams = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Anagrams'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input = document.querySelector('#input');
    const p = document.querySelector('#p');

    input.addEventListener("input", () => {
        p.textContent = 'checking for anagrams....';
        const charArr = [...input.value]
        
        var charObj = {};

        charArr.filter(char => char != ' ').map(char => {
            Object.keys(charObj).includes(char) ? charObj[char] += 1: charObj[char] = 1;
        }) 

        const countArr = Object.values(charObj);

        const highestCount = countArr.find(count => count === Math.max(...countArr));
        const lowestCount = countArr.find(count => count === Math.min(...countArr));

        (highestCount === lowestCount) ? p.textContent = 'it is an anagram' : p.textContent = 'not an anagram';

    });

}

anagrams();