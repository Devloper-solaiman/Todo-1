import { useState } from "react";
type TodoItem = { id: number; name: string; message: string };

export default function Todo() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [form, setForm] = useState({ name: "", message: "" });

    // const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: number | null }>({ open: false, id: null });
    // const [updateModal, setUpdateModal] = useState<{ open: boolean; todo: TodoItem | null }>({ open: false, todo: null });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = { id: Date.now(), name: form.name, message: form.message };
        setTodos([...todos, newTodo]);
        setForm({ name: "", message: "" });
    };
    console.log(todos)

    // const handleDelete = () => {
    //     if (deleteModal.id !== null) {
    //         setTodos(todos.filter((t) => t.id !== deleteModal.id));
    //     }
    //     setDeleteModal({ open: false, id: null });
    // };

    // const handleUpdate = (name: string, message: string) => {
    //     if (updateModal.todo) {
    //         setTodos(
    //             todos.map((t) =>
    //                 t.id === updateModal.todo!.id ? { ...t, name, message } : t
    //             )
    //         );
    //     }
    //     setUpdateModal({ open: false, todo: null });
    // };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-5 rounded-lg shadow-md max-w-md mx-auto"
            >
                <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md mb-3"
                    required
                />
                <textarea
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md mb-3"
                    required
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                    Add
                </button>
            </form>

            {/* Todo Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* {todos.map((todo) => (
                    <div key={todo.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <h4 className="font-semibold text-lg">{todo.name}</h4>
                            <p className="text-gray-600">{todo.message}</p>
                        </div>
                        <div className="flex justify-between mt-3">
                            <button
                                onClick={() => setUpdateModal({ open: true, todo })}
                                className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => setDeleteModal({ open: true, id: todo.id })}
                                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))} */}
            </div>

            {/* Modals */}
            {/* <DeleteModal
                isOpen={deleteModal.open}
                onClose={() => setDeleteModal({ open: false, id: null })}
                onConfirm={handleDelete}
            />
            <UpdateModal
                isOpen={updateModal.open}
                onClose={() => setUpdateModal({ open: false, todo: null })}
                onUpdate={handleUpdate}
                initialName={updateModal.todo?.name || ""}
                initialMessage={updateModal.todo?.message || ""}
            /> */}
        </div>
    );
}
