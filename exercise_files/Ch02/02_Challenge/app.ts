interface TodoItem {
    id: number;
    title: string;
    status: TodoStatus;
    completedOn?: Date;
}

enum TodoStatus {
    ToDo = "todo",
    InProgress = "in-progress",
    Done = "done",
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoStatus.ToDo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: TodoStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

//The extends portion tells TypeScript that the ListItemType must have an id property of type number. (otherwise it will throw an error)
function getNextId<ListItemType extends {id:number}>(items: ListItemType[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
