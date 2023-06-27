//A palindrome is a word or phrase that reads the same backward as forward. 
//Write a function that checks for this.

const palindrome = () => {
    //create h1 and input field using Object.assign method
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'})).appendChild(document.createTextNode('Palindrome'))
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input'}))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const  p = document.querySelector('#p')
    const input = document.querySelector('#input');
    
    input.addEventListener("input", () => {
        //adding paragraph text using textContent
        p.textContent = input.value;

        const characterArr = p.textContent.split('');

        characterArr.reverse();

        const reversedString = characterArr.join('');

        if (input.value.length > 1 && input.value === reversedString) {
            p.textContent += ' is a palindrome';
        } else if (input.value.length > 1 && input.value != reversedString) {
            p.textContent += ' is not a palindrome';
        } else if (input.value.length === 0) {
            p.textContent = '';
        }
    })
}   

palindrome();