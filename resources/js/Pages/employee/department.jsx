import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import Modal from '@/Components/Modal';
import { useForm } from '@inertiajs/react'; // Import useForm from Inertia.js
import { Notyf } from 'notyf'; // Import Notyf for notifications
import 'notyf/notyf.min.css'; // Import Notyf styles

const Department = ({ user, notif, user_type, departments }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBranchId, setSelectedBranchId] = useState(null);
    // const [departments, setBracnches] = useState(null);

    // Initialize Notyf
    const notyf = new Notyf();

    // Use useForm for form handling
    const { data, setData, post, put, reset, errors } = useForm({
        d_name: '', // Initial form field
    });

    // Fetch branches on mount
    useEffect(() => {
        fetchBranches();
    }, []);

    const fetchBranches = async () => {
        try {
            const response = await axios.get('/departments'); // Adjust the API endpoint
            setBranches(response.data);
        } catch (error) {
            console.error('Error fetching branches:', error);
        }
    };

    const openModal = (branch = null) => {
        setIsModalOpen(true);
        setData('d_name', branch ? branch.d_name : ''); // Set form field for editing
        setSelectedBranchId(branch ? branch.id : null); // Set branch ID for editing
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBranchId(null); // Reset the selected branch ID
        reset('d_name'); // Reset the form field
    };

    const handleCreateOrUpdateBranch = (e) => {
        e.preventDefault();
        if (selectedBranchId) {
            // Update branch
            post(`/departments/${selectedBranchId}`, {
                onSuccess: () => {
                    notyf.success('Branch updated successfully!');
                    fetchBranches(); // Refresh the branch list
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while updating the branch.');
                },
            });
        } else {
            // Create new branch
            post('/departments', {
                onSuccess: () => {
                    notyf.success('Branch created successfully!');
                    fetchBranches(); // Refresh the branch list
                    closeModal();
                },
                onError: () => {
                    notyf.error('An error occurred while creating the branch.');
                },
            });
        }
    };

    const handleDeleteBranch = async (id) => {
    if (confirm('Are you sure you want to delete this branch?')) {
        try {
            await axios.delete(`/departments/${id}`); // Make sure to await the delete call
            notyf.success('Branch deleted successfully!'); // Show success message
            window.location.reload(); // Reload the page to reflect changes
        } catch (error) {
            console.error('Error deleting branch:', error);
            notyf.error('Department deleted successfully!');
            window.location.reload();
        }
    }
};


    return (
        <div className='w-[85.2%] absolute right-0'>
            <Header user={user} notif={notif} />
            <Nav user_type={user_type} />
            <div className="flex px-9">
                <Sidebar />
                <div className="flex-1 p-6 bg-gray-100">
                    <div className='flex justify-between'>
                        <h1 className="mb-4 text-2xl font-bold">Manage Departments</h1>
                        <button onClick={() => openModal()} className="p-2 text-teal-900 underline rounded-md">
                            Create Departments
                        </button>
                    </div>

                 <div className='mt-3'>
    <table className='min-w-full border border-gray-300'>
        <thead className='bg-gray-200'>
            <tr>
                <th className='px-4 py-2 text-left border-b'>Departments Name</th>
                <th className='px-4 py-2 text-right border-b'>Action</th>
            </tr>
        </thead>
        <tbody className=''>
            {departments.map(branch => (
                <tr key={branch.id} className='transition duration-200 hover:bg-gray-100'>
                    <td className='px-4 py-2 border-b'>{branch.name}</td>
                    <td className='px-4 py-2 text-right border-b'>
                        <button onClick={() => openModal(branch)} className="text-blue-600 underline hover:text-blue-800">Edit</button>
                        <button onClick={() => handleDeleteBranch(branch.id)} className="ml-4 text-red-600 underline hover:text-red-800">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

                </div>
            </div>
            <Modal show={isModalOpen} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-bold">{selectedBranchId ? 'Edit Departments' : 'Create New Departments'}</h2>
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                    <form onSubmit={handleCreateOrUpdateBranch} className="mt-4">
                        <label className="block mb-2">
                        Departments Name:
                            <input
                                type="text"
                                value={data.d_name}
                                onChange={(e) => setData('d_name', e.target.value)}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="p-2 mt-4 text-white bg-blue-600 rounded-md"
                        >
                            {selectedBranchId ? 'Update Branch' : 'Create Branch'}
                        </button>
                        <button
                            onClick={closeModal}
                            type="button"
                            className="p-2 mt-2 text-white bg-red-600 rounded-md"
                        >
                            Close
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Department;
