import create from "zustand";

type TodoProps = {
  todos: {
    id: number;
    title: string;
  }[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
};

export const useStore = create<TodoProps>((set) => ({
  todos: [{ id: 1, title: "title" }],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, title: text }],
    })),
  deleteTodo: (id) => 
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }))
}));
