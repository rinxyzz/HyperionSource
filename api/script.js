window.addEventListener('DOMContentLoaded', () => {
    const jsonDataList = document.getElementById('json-data-list');

    // Fetch the JSON file from GitHub
    fetch('https://raw.githubusercontent.com/rinxyzz/HyperionSource/main/members.json')
        .then(response => response.json())
        .then(data => {
            // Extract the desired key values from the JSON objects
            const key = 'name'; // Replace 'yourKey' with the actual key name
            const values = data.map(obj => obj[key]);

            // Create list items for each value
            values.forEach(value => {
                const listItem = document.createElement('li');
                listItem.textContent = value;
                jsonDataList.appendChild(listItem);
            });
        })
        .catch(error => console.log(error));
});
