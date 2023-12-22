
module.exports = (server) => {
    const birthdayController= require('../controllers/birthdayController'); 

    server.route('/TodayBirthday')
    .get(birthdayController.displayTodayBirthday)
    .post(birthdayController.sendMailToday);

    server.route('/sendEmailBirthday')
    .post(birthdayController.sendMailToday)

}