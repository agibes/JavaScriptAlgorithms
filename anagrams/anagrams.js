//Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

const anagrams = () => {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Anagrams'));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input1', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input2', type: 'text'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const p = document.querySelector('#p');

    var charCount1;
    var charCount2;

    const isAnagram = () => {
        if(charCount1 === charCount2) {
            p.textContent = 'it is an anagram';
        } else {
            p.textContent = 'not an anagram';
        }
    }

    input1.addEventListener("input", () => {
        const charArr1 = [...input1.value];    
        charCount1 = charArr1.length;

        isAnagram();
    });

    input2.addEventListener("input", () => {
        const charArr2 = [...input2.value];
        charCount2 = charArr2.length;

        isAnagram();
    });
}

anagrams();
    
//does not check for capital vs lowercase vs number