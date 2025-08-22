import { Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"

type TodoListItemProps = {
  todo: {
    _id: string
    title: string
    description: string
    completed: boolean
  }
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export function TodoListItem({ todo, toggleTodo, deleteTodo }: TodoListItemProps) {
  return (
    <div
      key={todo._id}
      className="flex items-start gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors"
    >
      <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo._id)} />
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span
          className={`block w-full break-words ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
          style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
        >
          {todo.title}
        </span>
        <p className="block w-full break-words text-sm text-muted-foreground" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>{todo.description}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo._id)}
        className="h-8 w-8 text-destructive hover:text-destructive flex-shrink-0"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}