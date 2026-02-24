import React, { useState } from 'react';
import { User } from '../hooks/useStore';
import { UserPlus, User as UserIcon, Trash2 } from 'lucide-react';

interface UserSelectionProps {
    users: User[];
    onSelect: (user: User) => void;
    onAdd: (name: string) => void;
    onDelete: (id: string) => void;
}

export function UserSelection({ users, onSelect, onAdd, onDelete }: UserSelectionProps) {
    const [newName, setNewName] = useState('');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newName.trim()) {
            onAdd(newName.trim());
            setNewName('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Huawei ICT 2026
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Computing Track Preparation
                    </p>
                </div>

                <div className="card p-6 space-y-6">
                    <form onSubmit={handleAdd} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Create new profile
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-huawei-red focus:border-huawei-red sm:text-sm"
                                    placeholder="Enter your name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-huawei-red hover:bg-huawei-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-huawei-red"
                                    disabled={!newName.trim()}
                                >
                                    <UserPlus className="w-4 h-4 mr-2" />
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>

                    {users.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Profile</h3>
                            <ul className="space-y-3">
                                {users.map((user) => (
                                    <li key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-huawei-red/50 hover:bg-huawei-50 transition-colors cursor-pointer group">
                                        <div
                                            className="flex-1 flex items-center"
                                            onClick={() => onSelect(user)}
                                        >
                                            <UserIcon className="w-5 h-5 text-gray-400 group-hover:text-huawei-red mr-3" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.points} points</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); onDelete(user.id); }}
                                            className="text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
