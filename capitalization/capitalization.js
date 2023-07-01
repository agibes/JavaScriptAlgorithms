// Given a phrase, capitalize every word.

const capitalization = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Capitalization'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    
    input.addEventListener("input", () => {
        var newWord = ''
        var newPhrase = ''
        var phraseArr = [...input.value.split(" ")];

        phraseArr.forEach(word => {
            var wordArr = [...word];
            var capitalLetter = wordArr[0].toUpperCase();

            wordArr.splice(0, 1, capitalLetter);
            newWord = wordArr.join('');
            newPhrase += newWord + ' ';
        });

        p.textContent = newPhrase;
    });
}

capitalization();