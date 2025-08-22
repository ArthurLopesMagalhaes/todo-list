import { useState, useEffect } from "react"
import { todoService } from "../service/todoService"

export interface Todo {
  _id: string
  title: string
  description: string
  completed: boolean
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    todoService.getTodos().then(setTodos).catch(() => setTodos([]))
  }, [])

  const addTodo = async (text: string) => {
    if (text.trim() === "") return
    const newTodo = await todoService.addTodo(text.trim(), 'aa')
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t._id === id)
    if (!todo) return
    console.log("Toggling todo:", todo)
    await todoService.toggleTodo(id, !todo.completed)
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = async (id: string) => {
    await todoService.deleteTodo(id)
    setTodos((prev) => prev.filter((todo) => todo._id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return { todos, addTodo, toggleTodo, deleteTodo, completedCount, totalCount }
}
