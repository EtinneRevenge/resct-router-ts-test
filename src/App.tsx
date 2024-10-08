
import { useEffect } from 'react'
import styles from './App.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ITodo } from './types'


export function App() {

  const [todos, setTodos] = useState<ITodo[]>()

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      setTodos(data)

    }

    fetchData()

  }, [])




  return <div className={styles.layout}>
    <ul>
      {todos?.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}

    </ul>
    <Link to='/about-us'>Go to about us</Link>

  </div>
}


