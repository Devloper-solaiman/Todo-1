import React, { useState, useEffect } from "react";

type UpdateModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (name: string, message: string) => void;
    initialName: string;
    initialMessage: string;
};

export default function UpdateModal({
    isOpen,
    onClose,
    onUpdate,
    initialName,
    initialMessage,
}: UpdateModalProps) {
    const [name, setName] = useState(initialName);
    const [message, setMessage] = useState(initialMessage);

    useEffect(() => {
        if (isOpen) {
            setName(initialName);
            setMessage(initialMessage);
        }
    }, [isOpen, initialName, initialMessage]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(name, message);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-lg font-semibold mb-3">Update Todo</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter name"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                        rows={4}
                        placeholder="Enter message"
                    />
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
