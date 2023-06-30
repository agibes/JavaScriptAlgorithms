// Given a string of words or phrases, count the number of vowels

const vowels = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Vowel Counter'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text', }))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input = document.querySelector('#input');
    const p = document.querySelector('#p');

    input.addEventListener("input", () => {

        var count = 0;
        const re = /[aeiou]/gi;
        var vowelArr = input.value.match(re);
        count = vowelArr.length;

        p.textContent = "there are " + count + " vowels";
    });
}

vowels();