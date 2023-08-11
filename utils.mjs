export function makeSingleInput () {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'}));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input'}))
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))
    
    const input = document.querySelector('#input');
    const p = document.querySelector('p');
}

export function makeDoubleInput () {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'}));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input1'}));
    root.appendChild(Object.assign(document.createElement('input'), {id: 'input2'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}));

    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const p = document.querySelector('#p');
}

export function makeQuadInput () {
    const root = document.querySelector('#root');
    root.appendChild(Object.assign(document.createElement('h1'), {id: 'title'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '1'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '2'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '3'}));
    root.appendChild(Object.assign(document.createElement('input'), {class: 'input', id: '4'}));
    root.appendChild(Object.assign(document.createElement('p'), {id: 'p'}))

    const p = document.querySelector('p');
}

