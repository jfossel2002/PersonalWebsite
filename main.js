var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
    document.querySelector(".container2").style.height = window.innerHeight + "px";

    //Forces images to fully load
})


$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
});
