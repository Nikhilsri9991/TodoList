import {  useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo =() =>{
  const [task, setTask] = useState([]);
 
 
const handleFormSubmit = (InputValue) =>{
  const { id, content, checked } = InputValue;
  //to check if the input fild is empty or not.
  if (!content) return;

  //to check if the data is already existing or not.
  // if (task.includes(InputValue)) return;
const ifTodoContentMatched = task.find((curTask) =>curTask.content ===content
);

if(ifTodoContentMatched) return;

  setTask((prevTask) => [...prevTask, InputValue]);
};

  //todo handleDeleteTodo function.

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value );
    setTask(updatedTask);
  };

  // todo handlClearTodoData functionality.

  const handlClearTodoData = () =>{
    setTask([]);
  };

  //  working of handleCheckedTodo.
const handleCheckedTodo = (content) =>{
 const updatedTask = task.map((curTask) => {
   if (curTask.content === content) {
     return { ...curTask, checked: !curTask.checked };
   } else {
     return curTask;
   }
 });
setTask(updatedTask)
};
  return (
    <section className="todo-container">
      <header>
        <h1> ToDo List</h1>
        <TodoDate/>
      </header>


      <TodoForm onAddTodo={handleFormSubmit} />


      <section className="myUnordList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo = {handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handlClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
}  ;
