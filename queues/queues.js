//Create a checklist list using JS Classes.
import { makeSingleInput } from "../utils.mjs";

const queues = () => {

    makeSingleInput();
    Object.assign(document.getElementById('input'));
    document.getElementById('title').appendChild(document.createTextNode('Queues'));

    root.appendChild(Object.assign(document.createElement('ol'), {id: 'ol'}))
    root.appendChild(Object.assign(document.createElement('button'), {id: 'button', name: 'Add'})).innerHTML = 'Add to List';

    const ol = document.querySelector('ol');
    const button = document.querySelector('#button');

    class Queue {
        constructor(...input) {
            this.values = [...input].reverse();
        }

        enqueue(...input) {
            this.values.unshift(...input);
        }

        dequeue(found) {
            if (!this.history) {
                this.history = this.values.splice(found, 1);
            } else {
                let removed = this.values.splice(found, 1)[0];
                this.history.unshift(removed);
            }
        }

        display() {
            while (ol.firstChild) {ol.removeChild(ol.firstChild)};
    
            this.values.forEach(item => {
                ol.appendChild(Object.assign(document.createElement('li'), {class: 'li'})).textContent = item;
            });
    
            this.history.forEach(item => {
                ol.appendChild(Object.assign(document.createElement('li'), {class: 'checked', style: 'text-decoration: line-through'})).textContent = item;
            })
        }  
    }

    const queue = new Queue();

    button.addEventListener('click', () => {    
        queue.enqueue(input.value);
        input.value = "";
        queue.display();
    });

    ol.addEventListener('click', (e) => {
        const selected = e.target.innerHTML;
        const found = queue.values.findIndex(e => e == selected);
        queue.dequeue(found);
        queue.display();
    });

}

queues();