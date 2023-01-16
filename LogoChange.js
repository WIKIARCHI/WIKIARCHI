$(document).ready(function() {

    var imageEl = document.getElementById('logo-image');

    function getSrc(scrollPos) {
        console.log("offsetTop" + imageEl.offsetTop);
        var children = imageEl.childNodes;

        if (scrollPos < imageEl.offsetTop + 100 ) {
            $("#cos_image").attr("src","/img/Asset 5.svg");
            console.log("step1");            
        }
        else if (scrollPos < imageEl.offsetTop + 100 * 2) {
            $("#cos_image").attr("src","/img/Asset 4.svg");
            console.log("step2");
        }}
    window.addEventListener('scroll', function() {
        getSrc(window.scrollY)
    });
})