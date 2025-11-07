import React from 'react'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, settodoList] = useState([]);
  const addTodo = ()=>{
    if(todo.trim()==="") return;
    settodoList([...todoList,{id:Date.now(), text:todo, completed:false}]);
    setTodo('')
  }
  const todoCompleted=(id)=>{
    settodoList(
      todoList.map((item)=>
        item.id===id?{...item, completed:!item.completed}:item
      )
    )
  }
  const deleteTodo= (id)=>{
    settodoList(
      todoList.filter((item)=> item.id !==id)
    )
  }
  return (
    <div className="App text-center py-4">
      <h1 className="text-3xl m-4">To Do List</h1>
        <input type="text" className='border-fluid border-1 rounded-2xl py-4 px-4 w-sm' placeholder='Add a New Task' value={todo} onChange={(e)=>setTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()} />
        <button className='border px-4 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 ml-2'  onClick={addTodo}>Add</button>
      <ul>        
        {todoList.map((item)=>
          <li 
          onClick={()=>todoCompleted(item.id)}
          className='mt-2 text-xl'
          style={
            {
            cursor:"pointer",
            textDecoration:item.completed?"line-through":'none',
            color:item.completed?"grey":"black"
            }
          }
          key={item.id}>{item.text}
           <button className="bg-red-400 px-2 mx-2 border text-white rounded-lg" onClick={(e)=>{e.stopPropagation();deleteTodo(item.id)}}>Del</button>   
           </li>    
          )}     
      </ul>
    </div>    
  )
}
export default App