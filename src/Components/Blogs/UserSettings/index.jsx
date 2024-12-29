import { useState } from 'react';

const PasswordChangeForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password change logic here
    };

    return (
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h5 className="text-xl font-semibold mb-4">Change Password</h5>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label className="block text-gray-700">Current Password</label>
                    <input
                        className="w-full px-3 py-2 border rounded-md"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">New Password</label>
                    <input
                        className="w-full px-3 py-2 border rounded-md"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm New Password</label>
                    <input
                        className="w-full px-3 py-2 border rounded-md"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md"
                    type="submit"
                >
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default PasswordChangeForm;
