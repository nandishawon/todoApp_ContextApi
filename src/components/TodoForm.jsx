import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo();

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(todo){
        //    return addTodo({todo: todo, completed: false}); //according to new syntax if field & values name is same then no need to give both...
        return addTodo({todo, completed: false}); 
        }
        setTodo("");
    }

    return (
        <form  className="flex" onSubmit={handleOnSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
