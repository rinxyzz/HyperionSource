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

// DIscord Slash

window.addEventListener('DOMContentLoaded', () => {
    const commandList = document.getElementById('command-list');

    // Fetch the list of slash commands from the Discord API
    fetch('https://discord.com/api/v9/applications/1103427996532097054/commands', {
        headers: {
            'Authorization': 'Bot ${{ secrets.TOKEN }}'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process the slash commands data
        data.forEach(command => {
            const listItem = document.createElement('li');
            listItem.textContent = `${command.name} - ${command.description}`;
            commandList.appendChild(listItem);
        });
    })
    .catch(error => console.log(error));
});
