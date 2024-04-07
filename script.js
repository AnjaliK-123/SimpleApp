document.addEventListener('DOMContentLoaded', fetchData);

const apiKey = 'live_35Nc2NjDynNIuiqNVoEKuGZMTiKcPh9UCUaTlvHzYg0BbHs6ed53hdLTTDiEiZzh';

function fetchData() {
    fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok!');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    data.forEach(item => {
        const listItem = document.createElement('img');
        listItem.src = item.url;
        listItem.addEventListener('click', () => {
            fetchData(); // Fetch new image on click
        });
        container.appendChild(listItem);
    });
}
