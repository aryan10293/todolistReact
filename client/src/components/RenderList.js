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
      
    </div>
  )
}

export default RenderList
