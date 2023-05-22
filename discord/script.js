// script.js

window.addEventListener('DOMContentLoaded', () => {
    const commandList = document.getElementById('command-list');

    // Fetch the list of slash commands from the Discord API
    fetch('https://discord.com/api/v9/applications/1103427996532097054/commands', {
        headers: {
            'Authorization': 'Bot MTEwMzQyNzk5NjUzMjA5NzA1NA.GHUrm1.lZuWoMmLeTnprWbG3OkIR0862vrzgLepKx3ttY'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process the slash commands data
        data.forEach(command => {
            const listItems = document.createElement('li');
            listItems.textContent = command.name;
            commandList.appendChild(listItems);
        });
    })
    .catch(error => console.log(error));
});
