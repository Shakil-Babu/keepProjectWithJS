let firstInput= document.getElementById('firstInput') ;
let secondLook = document.getElementById('secondLook') ;
let firstLook = document.getElementById('firstLook');
firstInput.addEventListener('focus', function(){
    firstLook.style.display = 'none' ;

    // show second block 
    secondLook.style.display = 'block';

}) ;


// catch title and note input value 

var titleInput = document.getElementById('titleInput');
var noteInput = document.getElementById('noteInput');

// for allTask area
var allTask = document.getElementById('showTask') ;

var addBtn = document.getElementById('addBtn') ;

addBtn.addEventListener('click', function () {  
    if(noteInput.value === '' || noteInput.value === ' '){
        var error = document.getElementById('showError') ;
        error.innerHTML = '<h5 class="alert-danger p-2" style="color:red">Fill your note !</h5>'
        }else{
    var col= document.createElement('div') ;
    col.className = 'col-sm-3 inputBox m-2' ;
    var title = document.createElement('h3') ;
    title.innerHTML = titleInput.value  ;
    var note = document.createElement('p') ;
    note.innerHTML = noteInput.value ;

    // create cross btn 
    var cross = document.createElement('span');
    cross.innerHTML =  '<i class="fas fa-times-circle"></i> ';
    cross.className = 'float-right hoverEffect' ;

    // for del col after click this btn 
    cross.addEventListener('click', function () {  
        alert('Delete') ;
        if(alert){
            col.remove();
        }
    })
    col.appendChild(cross);

    col.appendChild(title) ;
    col.appendChild(note);

    allTask.appendChild(col);
        }

    noteInput.value= '' ;
    
})