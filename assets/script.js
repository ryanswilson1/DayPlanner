$(document).ready(function () {
    var currentDay = new Date();
    var momentDay = moment(currentDay).format('dddd, MMMM Do');
    console.log(momentDay);

});
