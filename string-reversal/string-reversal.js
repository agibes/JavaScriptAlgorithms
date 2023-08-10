//Given a string of characters as input, write a function that returns it with the characters reversed.

const App = () => {
    var root = document.getElementById('root');
    var title = document.createElement('h1');
    title.appendChild(document.createTextNode('String Reversal'));
    root.appendChild(title);

    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    root.appendChild(input);

    var inputElem = document.querySelector('#input');
    inputElem.addEventListener("input", () => {
        var inputValue = document.querySelector('#input').value;

        var characterArray = [...inputValue];

        const reversedCharacterArray = characterArray.reverse();

        const p = document.createElement('p');

        for (const e of reversedCharacterArray) {
            reversedString = '' + e;
        
            var pElem = document.querySelector('p');

            if (!pElem) {
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            } else {
                root.removeChild(pElem);
                p.appendChild(document.createTextNode(''));
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            }
        }
    })

}

App();