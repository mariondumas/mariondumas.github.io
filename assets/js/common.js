$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).closest('.col-sm-8').find(".abstract.hidden").toggleClass('open');
        $(this).closest('.col-sm-8').find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).closest('.col-sm-8').find(".bibtex.hidden").toggleClass('open');
        $(this).closest('.col-sm-8').find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});
