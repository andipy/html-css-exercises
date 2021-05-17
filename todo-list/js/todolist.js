// $("ul").on("click" , ".delete" , function(event) {
//     $(this).parent().fadeOut(500 , function() {
//         $(this).remove();
//     })  
//     event.stopPropagation();
// });

// $("input[type='text']").on("keypress" , function(event) {
//     if ( event.which === 13 ) {
//         var todoText = $(this).val();
//         $(this).val("");
//         $("ul").append('<li><span class="delete"><i class="fas fa-trash"></i></span> ' + todoText + '</li>');
//     }
// });

// $(".fa-plus").on("click" , function() {
//     $("input[type='text']").fadeToggle();
// })


var listElems = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("del-trash");
var todos = document.querySelectorAll(".todo");
var newTodo = document.querySelector(".new-todo");
var wholeList = document.querySelector("ul");

for ( var i = 0 ; i < listElems.length ; i++ ) {
    listElems[i].addEventListener("click" , function() {
        this.classList.toggle("done");
    });
}

for ( var j = 0 ; j < deleteBtns.length; j++ ) {
    deleteBtns[j].addEventListener("click" , function() {
        todos[j].classList.add("faded");
    });
}

newTodo.addEventListener("keypress" , function(e) {
    var key = e.which || e.keyCode;
    if ( key == 13 ) {
        var newTodoElem = '<div class="todo"><span class="del-trash"><i class="fas fa-trash"></i></span><li class="inline-elem">' + newTodo.value + '</li></div>';
        wholeList.innerHTML += newTodoElem;
    }
});