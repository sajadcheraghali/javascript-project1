// add task to todo list
function addtodo(){
  let inputtodo =document.querySelector("input").value // get input value
  let todoul = document.getElementById('todo-list')
  let newtodoli = document.createElement('li')
  let newtodospan =document.createElement('span') 
  let newtodotrash = document.createElement('span')
  newtodotrash.id='trash'
  newtodotrash.addEventListener('click',function(event){
    newtodotrash.parentElement.remove()
  })
  newtodospan.innerHTML=inputtodo
  newtodotrash.innerHTML ='delete'
  newtodoli.append(newtodospan,newtodotrash)
  todoul.appendChild(newtodoli)
  console.log(todoul)
  // let x = document.createTextNode('input')
  //inputtodo.appendChild(x)
 }
function trash(){
  let deletetodo = document.getElementById('trash')
  deletetodo.parentElement.remove()
}

