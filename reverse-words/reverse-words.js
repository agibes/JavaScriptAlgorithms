//Given a phrase, reverse the order of the characters of each word.

const reverseWords = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Word Reversal'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const input = document.querySelector('#input');
    const p = document.querySelector('p');

    input.addEventListener("input", () => {
        var arr = [...input.value.split(" ")];
        var newArr = []
        arr.forEach(item => {
            var stringArr = [...item]
            var tempArr = [];
            
            stringArr.forEach(item => {
                tempArr.unshift(item);
            })

            newArr.push(tempArr.join(''));
        })
        p.textContent = newArr.join(' ');
    })
}

reverseWords();