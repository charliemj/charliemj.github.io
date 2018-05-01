$(document).ready(function(){

    var analytics ='<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-112423693-1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-112423693-1");</script>';
    $("head").append(analytics);
    $("#nav").append("<a href='projects.html'>Projects</a>");
    $("#nav").append("<a href='https://charliemj.github.io/blog/'>Blog</a>");
    $("#nav").append("<a href='contact.html'>Contact</a>");
    $("#nav").append("<a href='assets/"+resume_fname+">Resume</a>");

    $("title").append(siteTitle);

    $("#footer p").append(" 2016 - ppresent | Charlie J. Moore");
});