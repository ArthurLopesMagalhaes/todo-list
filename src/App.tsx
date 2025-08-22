import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { TodoListItem } from "./components/TodoItem"
import { useTodos } from "./hooks/useTodo"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [description, setDescription] = useState("")
  const { todos, addTodo, toggleTodo, deleteTodo, completedCount, totalCount } = useTodos()

  const handleAddTodo = () => {
    addTodo(inputValue, description)
    setInputValue("")
    setDescription("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAddTodo()
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Todo List</CardTitle>
            {totalCount > 0 && (
              <p className="text-sm text-muted-foreground text-center">
                {completedCount} of {totalCount} completed
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Add a new todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <textarea
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="flex-1 rounded-md border px-3 py-2 text-sm resize-vertical min-h-[48px]"
              />
              <div className="flex justify-end">
                <Button onClick={handleAddTodo} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              {todos.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nenhuma tarefa ainda. Adicione uma acima!
                </p>
              ) : (
                todos.map((todo) => (
                  <TodoListItem
                    key={todo._id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
