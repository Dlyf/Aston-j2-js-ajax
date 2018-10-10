$('#empty').hide();
let tasks;
if(localStorage.getItem('tasks'))
{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
else
{
    tasks = [];
}
showTasks();
function showTasks()
{
    $('#target').empty();
    for(let i = 0;i < tasks.length; i++)
    {
        $('#target').append('<li class="list-group-item d-flex justify-content-between task">'+ tasks[i] +'<button class="delete btn btn-danger btn-xs" data-target="'+i+'">X</button></li>');
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

$('#btnClick').click(function(){
    let task = $('#task').val();
    if(task.length>0)
    {
        tasks.push(task);
        $('#empty').slideUp('slow');
        $('#task').val('');
        showTasks();
    }
    else
    {
        $('#empty').slideDown('slow');
    }
})

$("#target").on('click', '.delete', function () {
    $(this).parent().remove();
    tasks.splice($(this).data('target'),1)
    showTasks();
});

$("#target").on('mouseenter', '.task', function () {
    $(this).addClass("list-group-item-info");
});
$("#target").on('mouseleave', '.task', function () {
    $(this).removeClass("list-group-item-info");
});
