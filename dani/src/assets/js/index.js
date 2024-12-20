const letterData = 'src/assets/data/letter.json';
const appNode = document.querySelector('.app');
const headlineNode = document.createElement('h1');

const currentDate = new Date;
const conditions = currentDate.getFullYear() <= '2024' && currentDate.getMonth()+1 <= '12' && currentDate.getDate() <= '25';

const getData = data => {
    fetch(letterData)
        .then(response => response.json())
        .then(letterData => { displayLetter(letterData); });
}

const addClases = (node, className) => node.classList.add(className);
const displayLetter = (letter) => {

    letter.title && addClases(headlineNode, 'title');
    letter.title ? headlineNode.textContent += letter.title : '';

    appNode.appendChild(headlineNode);

    for (const property in letter.content) {
        const paragraphNode = document.createElement('p');
        letter.content && addClases(paragraphNode, 'paragraph');

        paragraphNode.textContent = letter.content[property];
        property === 'signature' && paragraphNode.classList.add('signature');
        property === 'bolded' && paragraphNode.classList.add('bolded');

        appNode.appendChild(paragraphNode);
    }
}

const notTimeYet = () => {
    const buttonNode = document.createElement('button');
    const alertNode = document.createElement('h1');
    const haedNote = 'Todavía no es tiempo...'

    buttonNode.setAttribute('onClick', `location.reload()`);
    buttonNode.textContent = 'Recárgame el 24 a media noche.';
    alertNode.classList.add('title');
    alertNode.textContent = haedNote;

    appNode.classList.add('no-time');
    appNode.appendChild(alertNode);
    appNode.appendChild(buttonNode);
}

conditions ? notTimeYet() : getData(letterData);
