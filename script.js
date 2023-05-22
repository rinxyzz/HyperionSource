// script.js

window.addEventListener('DOMContentLoaded', () => {
    const jsonDataContainer = document.getElementById('json-data');

    // Define the GET values
    const param1 = 'Riinn';
    const param2 = 'Kyousuke';

    // Construct the URL with GET values
    const url = `https://raw.githubusercontent.com/example/your-file.json?param1=${param1}&param2=${param2}`;

    // Fetch the JSON file from GitHub with GET values
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process and display the JSON data
            jsonDataContainer.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.log(error));
});
