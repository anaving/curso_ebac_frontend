$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const itemListaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${itemListaTarefa}<li/>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').click(function(){
        $(this).addClass('riscar');
})
        $('#nova-tarefa').val('');
    })
})