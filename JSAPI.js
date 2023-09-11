document.getElementById('load-pokemon').addEventListener('click', () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1'; // Cambia el número para obtener diferentes Pokémon

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('pokemon-name').textContent = data.name;
            document.getElementById('pokemon-height').textContent = data.height;
            document.getElementById('pokemon-weight').textContent = data.weight;

            const abilitiesList = document.getElementById('pokemon-abilities');
            abilitiesList.innerHTML = '';
            data.abilities.forEach((ability) => {
                const listItem = document.createElement('li');
                listItem.textContent = ability.ability.name;
                abilitiesList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error('Hubo un error al obtener los datos:', error);
        });
});
