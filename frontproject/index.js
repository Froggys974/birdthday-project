document.addEventListener('DOMContentLoaded', function () {
    // Faites la requête à votre API Birthday
    fetch('http://localhost:3000/TodayBirthday')
        .then(response => response.json())
        .then(data => {
            // Vérifiez si des données sont renvoyées
            if (data.nom && data.prenom) {
                displayPage('index');
            } else {
                displayPage('index2');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la requête à l\'API Birthday:', error);
            displayPage('index2');
        });
});

function displayPage(page) {
    // Charger la page appropriée en fonction du paramètre
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${page}.html`, true);
    console.log(page);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.body.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}