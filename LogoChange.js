$(document).ready(function() {

    var imageEl = document.getElementById('logo-image');

    function getSrc(scrollPos) {
        console.log("scrollPost" + scrollPos)
        console.log("offsetTop" + imageEl.offsetTop);
        var children = imageEl.childNodes;

        if (scrollPos < imageEl.offsetTop + 10 ) {
            $("#logo-image").attr("src","/img/Asset 5.svg");
            $("#logo-image").css("width","100px");
            $("#logo-image").css("margin","20px 30px");
            console.log("step1");            
        }
        else if (scrollPos < imageEl.offsetTop + 100 * 2) {
            $("#logo-image").attr("src","/img/Asset 4.svg");
            $("#logo-image").css("width","150px");
            $("#logo-image").css("margin","0px 30px");
            
            console.log("step2");
        }}
    window.addEventListener('scroll', function() {
        getSrc(window.scrollY)
    });
})