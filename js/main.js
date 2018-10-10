// ajouter à la fin de l'élément


// var texte = ' Coucou ';
// let texte2 = 'Recoucou';
// const taxe = 20; // variable pas modifiable
// $('#target').append('bonjour' + texte2);
//
// // répéter un morceau de code + argument
// function bonjour(texte)
// {
//     console.log('salut tout le monde' + texte);
// }
// bonjour('Dominique');
//
// $('#btnClick').click(function(){
//     console.log('Hello');
//     let value = $('#field').val();
//     console.log(value);
// })


/********** TO Do *********************/
// let texte3 = 'Recoucou';
// function list(texte3)
// {
//   console.log('test' + texte3);
// }
// list('cool');

$('#empty').hide();

let tasks;
if(localStorage.getItem('tasks'))
{
  tasks = localStorage.getItem('tasks'));
}
else
{
  tasks = [];
}
showTasks();


function showTasks()
{
  $('#toDo').empty();
  for(let i = 0;i < tasks.length; i++)
  {
    $('#toDo').append('<li class="list-group-item d-flex justify-content-between task">' + tasks[i] +'<button class="delete btn btn-danger btn-xs" data-target="'+i+'">X</button></li>');
  }
  localStorage.setItem('tasks', tasks);
}
$('#btnClick2').click(function(){
let task = $('#fieldTask').val();
if(task.length>0)
{
  tasks.push(task);
  console.log(tasks);
  $('#empty').slideUp('slow');
  $('#task').val('');
  // $('#toDo').val('');
  $('#toDo').append('<li class="list-group-item d-flex justify-content-between task">' + task +'<button class="delete btn btn-danger btn-xs">X</button></li>');

}
else
{
  $('#empty').slideDown('slow');
}
})


  // $('#toDo').append('<li class="list-group-item">' + value + '<button type="button" class="close">' + '</button>' + '</li>');

// $('#btnClick3').click(function(){
//   let value = $('#fieldTask').remove();
// })
  $("#toDo").on('click', '.delete', function () {
      $(this).parent().remove();
      tasks.splice($(this).data('target'),1)
      showTasks();
      // console.log($(this).data('target'));
  });

  $("#toDo").on('mouseenter', '.task', function () {
    $(this).addClass("list-group-item-info");
  });

  $("#toDo").on('mouseleave', '.task', function () {
    $(this).removeClass("list-group-item-info");
  });
