// Given a string of words or phrases, count the number of vowels

const vowels = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Vowel Counter'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text', }))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input = document.querySelector('#input');
    const p = document.querySelector('#p');

    input.addEventListener("input", () => {
        var string = [...input.value];
        var count = 0;
        string.forEach(letter => {
            if (letter == 'a' || letter == 'o' || letter == 'e' || letter == 'i' || letter == 'u') {
                count++;
            }
        }) 
        p.textContent = "there are " + count + " vowels"
    });
}

vowels();