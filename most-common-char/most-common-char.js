//Given a string of characters, return the character that appears the most often.

const mostCommonChar = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Most Common Character'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input = document.querySelector('#input');
    const p = document.querySelector('#p');

    input.addEventListener("input", () => {

        const charArr = [...input.value];

        var charObj = {};

        charArr.filter(char => char != ' ').map(char => {
            (Object.keys(charObj).includes(char)) ? charObj[char] += 1 : charObj[char] = 1;
        })

        console.log(' new charObj', charObj);

        const charCountArr = Object.values(charObj)

        const charCount = charCountArr.find(count => count === Math.max(...charCountArr));
        const mostCommonChar = Object.keys(charObj).filter(char => charObj[char] === charCount);
        p.textContent = ('the most common character(s): ' + mostCommonChar.join(', ') );
    });

}

mostCommonChar();

