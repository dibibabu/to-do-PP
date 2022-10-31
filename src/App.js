import  { useState } from 'react';
import Update from './components/Update';
import Add from './components/Add';
import Todo from './components/Todo';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [todo, settodo] = useState([

    { id: 1, title: 'task1', status: false },
    { id: 2, title: 'task2', status: false }

  ])

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
const addTask = () => {

    if (newTask) {

      let num = todo.length + 1
      let newEntry = { id: num, title: newTask, status: false }
      settodo([...todo, newEntry])
      setNewTask('')
    }


  }

  // Delete task 
 const deleteTask = (id) => {

    let remainingTask = todo.filter(task => task.id != id)
    settodo(remainingTask)
  }

  // mark task as done or completed
  const markDone = (id) => {

    let taskCompleted = todo.map((task) => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      } else {
        return task
      }

    })
    settodo(taskCompleted)
  }

  // cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  // Change task for update
const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)

  }

  // update task 
  const updateTask = () => {
    console.log("ghdfghkfdhgkfdhgka");
    let filiteredData = [...todo].filter(task => task.id !== updateData.id)
    let updatedData = [...filiteredData, updateData]
    settodo(updatedData)
    setUpdateData('');


  }

  return (
    <div className=" container App">
      <br /><br />
      <h2>To Do List App (React JS)</h2>
      {updateData && updateData ? (
        <Update updateData={updateData}
        changeTask={changeTask}
        
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}/>
      ) : (
        <Add newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask} />
      )}


      {/* {display todos} */}

      <br /><br />
      {todo && todo.length ? '' : 'No tasks...'}
      <Todo todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
