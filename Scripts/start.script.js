$(document).ready(function(){
    $('#sidebar-toggler').on('click', function(){
        $(this).toggleClass('hambactive');
        $('#sidebar').toggleClass('sidebarhidden');
        $('#content').toggleClass('wide');
    });
});