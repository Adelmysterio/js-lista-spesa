const listaDellaSpesa = ['pane', 'pasta', 'carne', 'formaggio', 'cereali', 'AK-47'];

const ulElement = document.querySelector('ul');

let i = 0
while (i < listaDellaSpesa.length) {
    const liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.append(listaDellaSpesa[i++])
}