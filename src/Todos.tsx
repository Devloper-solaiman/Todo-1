import { useState } from "react";

type TodoItem = {
    id: number;
    name: string;
    message: string;
};
export default function Todo() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState({ name: "defolt name ", message: "defolt message" });

    const newTodo = { id: Date.now(), name: inputValue.name, message: inputValue.message };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTodos([...todos, newTodo]);
        setInputValue({ name: "", message: "" });
    }
const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
    alert("deleted")
  }
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-5 rounded-lg shadow-md max-w-md mx-auto"
            >
                <h2 className="text-xl font-semibold mb-4">Add Todo test</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={inputValue.name}
                    onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md mb-3"
                    required
                />
                <textarea
                    placeholder="description"
                    value={inputValue.message}
                    onChange={(e) => setInputValue({ ...inputValue, message: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md mb-3"
                    required
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                    Add to cart
                </button>
            </form>
            <div className="mt-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Todo List</h2>
                {todos.map((todo) => (
                    <div key={todo.id} className="border-b py-2">
                        <h3 className="font-semibold">{todo.name}</h3>
                        <p>{todo.message}</p>
                        <button onClick={()=> handleDelete(todo.id)} >delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
