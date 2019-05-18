$(document).ready(function(){
    $('#sidebar-toggler').on('click', function(){
        $(this).toggleClass('hambactive');
        $('#sidebar').toggleClass('sidebarhidden');
        if($('#filters').hasClass('sidebarhidden')){
            $('#content').toggleClass('wide');
            }    
    });

    $('#filters-toggler').on('click', function(){
        $(this).toggleClass('hambactive');
        $('#filters').toggleClass('sidebarhidden');

    if($('#sidebar').hasClass('sidebarhidden')){
        $('#content').toggleClass('wide');
        }    
    });  

    $('.construction-label').on('click', function(){
         $('.construction-filter-ul').toggleClass('filter-ul-hidden');
    });
});