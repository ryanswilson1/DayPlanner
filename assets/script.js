$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


    $(document).on("click", "i", function (event) {
        event.preventDefault();
        console.log(this);
        var word = $(".input").val();
        var clock = $(".hour").text();
        console.log(word);
        console.log(clock);

        localStorage.setItem(clock, word);
    })

    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));


    function timeTracker() {

        var currentTime = moment().hour();


        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(hourBlock, currentTime)


            if (hourBlock < currentTime) {
                $(this).addClass("then");
                $(this).removeClass("now");
                $(this).removeClass("later");
            }
            else if (hourBlock === currentTime) {
                $(this).removeClass("then");
                $(this).addClass("now");
                $(this).removeClass("later");
            }
            else {
                $(this).removeClass("then");
                $(this).removeClass("now");
                $(this).addClass("later");
            }
        })
    }
    timeTracker();
})