$(document).ready(function () {
    // Faites la requête à votre API Birthday
    $.ajax({
        url: 'http://localhost:3000/TodayBirthday',
        dataType: 'json',
        success: function (data) {
            // Vérifiez si des données sont renvoyées
            if (data.nom && data.prenom) {
                displayPage('index', data.nom, data.prenom);
            } else {
                displayPage('index2');
            }
        },
        error: function (error) {
            console.error('Erreur lors de la requête à l\'API Birthday:', error);
            displayPage('index2');
        }
    });
});

function displayPage(page, nom, prenom) {
    // Charger la page appropriée en fonction du paramètre
    $.ajax({
        url: `${page}.html`,
        success: function (html) {
            // Remplacez les balises {{NOM}} et {{PRENOM}} dans le HTML avec les valeurs reçues
            html = html.replace(/{{NOM}}/g, nom).replace(/{{PRENOM}}/g, prenom);
            $('body').html(html);
        }
    });
}