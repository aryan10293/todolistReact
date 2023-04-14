import React from "react"
import { Fragment } from "react"
function TodoList() {
    const task = React.useRef()
    const [todos, setTodos] = React.useState([])
    let [newTodo, setNewTodo] = React.useState({
        task: ''
    })
    React.useEffect(() => {
    function thisIsWhatStackOverFlowSaidTodo(){
        renderTodos()
    }
        thisIsWhatStackOverFlowSaidTodo()
    }, [])
    const handleChange = event => {
        setNewTodo({task: event.target.value})
    }
    const handleClick = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:2010/postTodosApi', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTodo)
        })
        setNewTodo({task: ''})
        renderTodos()
    }

        const renderTodos = async _ => {
        let lol = await fetch('http://localhost:2010/getTodosApi')
        const data = await lol.json()
        setTodos(data)
    }
    // const handleClickCompleted = async id => {
    //     const checkCompleted = await fetch(`http://localhost:2010/editTodosApi/${id}`)
    //     const data = checkCompleted.json()
    //     todos.map(x => {
    //         if(x._id === data._id){
    //             x.completed = data.completed
    //             return x
    //         } else {
    //             return x
    //         }
    //     })
    // }

    const List = (props) => {
        const classStyle = props.classStyle
        const task = props.task
        const done = props.done
        const id = props.id
        return (
            <div className="flex mb-4 items-center">
                 <p className={`${classStyle} w-full text-grey-darkest`}>{task}</p>

                <button onClick={async () => {
                    const checkCompleted = await fetch(`http://localhost:2010/editTodosApi/${id}`)
                    const data = checkCompleted.json()
                    todos.map(x => {
                        if(x._id === data._id){
                            x.completed = data.completed
                            return x
                        } else {
                            return x
                        }
                    })
                    renderTodos()
                }} 
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
                >{done}
                </button>

                <button 
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                >Remove
                </button>

            </div>
        )
    }
  return (
      <>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input ref={task} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" name='todo' value={newTodo.task} onChange={handleChange}placeholder="Add Todo"/>
                            <input className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit" onClick={handleClick} value='Add Task'/>
                        </div>
                    </div>
                    <div>
                        {
                            todos.map(x => {
                            return (
                                <div key={x._id} className="flex mb-4 items-center">
                                    {
                                        x.completed ? <List task={x.task} classStyle='line-through' done='not done' id={x._id}/> : <List id={x._id} task={x.task}  done='done'/>
                                    }
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
      
      </>  
  )
}

export default TodoList

                        // <div className="flex mb-4 items-center">
                        //     <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                            // <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                            // <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                        // </div>
