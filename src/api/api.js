const PAIS = document.querySelector('#pais').textContent;
const CIUDAD = document.querySelector('#ciudad').textContent;
const BUTTON = document.querySelector('#btn');
const fetchButton = document.querySelector('#btn-2');
const data = { PAIS, CIUDAD };
// const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }


function hitAPI() {
    const URL = `/ciudades`
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
};

fetchButton.addEventListener('click', console.log(PAIS));