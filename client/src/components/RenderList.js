import React from 'react'

function RenderList() {
    const [todos, setTodos] = React.useState([])
        const renderTodos = async _ => {
        let lol = await fetch('http://localhost:2010/getTodosApi')
        const data = await lol.json()
        setTodos(data)
    }
    React.useEffect(() => {
        function thisIsWhatStackOverFlowSaidTodo(){
            renderTodos()
        }
        thisIsWhatStackOverFlowSaidTodo()
    }, [])
console.log(todos)
  return (
    <div>
      {
        todos.map(x => {
         return (
              <div key={x._id} className="flex mb-4 items-center">
                  <p className="w-full line-through text-green">{x.task}</p>
                  <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                  <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                  <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                  <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
              </div>
         )
        })
      }
    </div>
  )
}

export default RenderList
