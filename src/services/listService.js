export function listMapped(filterTodo, todolist) {
  if (filterTodo?.filter === "complete") {
    return filterTodo.list;
  } else if (filterTodo.filter === "active") {
    return filterTodo.list;
  } else if (filterTodo.filter === "all") {
    return filterTodo.list;
  }
  return todolist;
}
