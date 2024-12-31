import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';

import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from '@inertiajs/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Import Notyf styles
const notyf = new Notyf();
import Modal from '@/Components/Modal';
import { FaPlus } from "react-icons/fa";
const Edit = ({ employee, user, user_type, roles, employeeRole,branches,department,designation}) => {

       const [departmentM,setDepartmentM]=useState(false)
        const [branchM,setBranchM]=useState(false)
        const [designationM,setDesignationM]=useState(false)
    const { data, setData, post, errors, notif } = useForm({
        name: employee.name || '',
        email: employee.email || '',
        password: '', // Password is kept blank for security
        phone: employee.phone || '',
        address: employee.address || '',
        dob: employee.dob || '',
        gender: employee.gender || '',
        joinning_date: employee.joinning_date || '',
        branch_id: employee.branch_id || '',
        department_id: employee.department_id || '',
        designation_id: employee.designation_id || '',
        company_doj: employee.company_doj || '',
        account_holder_name: employee.account_holder_name || '',
        account_number: employee.account_number || '',
        bank_name: employee.bank_name || '',
        bank_identifier_code: employee.bank_identifier_code || '',
        branch_location: employee.branch_location || '',
        tax_payer_id: employee.tax_payer_id || '',
        roleemployee: employee.roleemployee || employeeRole || '',
        net_salary: employee.net_salary || '',
        basic_salary: employee.basic_salary || '',
        ifsc_code: employee.ifsc_code || '',
        apc_no: employee.apc_no || '',
        ptax_no: employee.ptax_no || '',
        pf_no: employee.pf_no || '',
        esi_no: employee.esi_no || '',
        pan_no: employee.pan_no || '',
        aadhar_no: employee.aadhar_no || '',
        documents: employee.documents || [{ name: '', type: '', file: null }],
        d_name: employee.d_name || '',
        b_name: employee.b_name || '',
        ds_name: employee.ds_name || '',
        cv: employee.cv || '',
        can_cheque: employee.can_cheque || '',
        declaration: employee.declaration || '',
    });


       const [formData, setFormData] = useState({
          history: [{ company_name: "", department: "", role: "" }], // Default one entry
          additional_information: "",
          employee_name: "",
          document_type: "",
          document_upload: null,
          basic_salary: "",
          gross_salary: "",
        });

        const handleAddHistory = () => {
            setFormData({
              ...formData,
              history: [
                ...formData.history,
                { company_name: "", department: "", role: "" },
              ],
            });
          };

          // Remove a specific history entry
          const handleRemoveHistory = (index) => {
            const newHistory = formData.history.filter((_, i) => i !== index);
            setFormData({ ...formData, history: newHistory });
          };

             const handleDynamicChange = (e, index, field) => {
                const newHistory = [...formData.history];
                newHistory[index][field] = e.target.value;
                setFormData({ ...formData, history: newHistory });
              };
              const rawDocuments = employee.documents || '[]'; // Fallback to empty array if undefined or null
              let documents = [];

              try {
                  documents = JSON.parse(rawDocuments); // Attempt to parse the documents
              } catch (error) {
                  console.error("Error parsing documents:", error); // Handle parsing errors
                  documents = []; // Fallback to an empty array on error
              }

              // Ensure that documents is always an array
              const [employeeDocuments, setEmployeeDocuments] = useState({
                  documents: Array.isArray(documents) ? documents : [{ name: "", type: "", file: null }],
              });
            console.log('Document',employeeDocuments.documents)
            const handleInputChange = (index, event) => {
                const { name, value } = event.target;
                const updatedDocuments = [...employeeDocuments.documents];
                updatedDocuments[index][name] = value;
                setEmployeeDocuments({ ...employeeDocuments, documents: updatedDocuments });
            };
              console.log(employeeDocuments);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileUpload = (index, event) => {
        const updatedDocuments = [...employeeDocuments.documents];
        console.log(updatedDocuments)
        updatedDocuments[index].file = event.target.files[0];
        setEmployeeDocuments({ ...employeeDocuments, documents: updatedDocuments });
      };
    const closeModal = () => {
        setDepartmentM(false);
        setBranchM(false);
        setDesignationM(false);
        setSelectedBranchId(null); // Reset the selected branch ID
        reset('d_name'); // Reset the form field
    };
    const addDocument = () => {
        setData('documents', [...data.documents, { name: '', type: '', file: null }]);
    };

    const removeDocument = (index) => {
        const updatedDocuments = data.documents.filter((_, i) => i !== index);
        setData('documents', updatedDocuments);
    };
    const handleDepartment = (e) => {
        e.preventDefault();

        post("/departments", {
          onSuccess: () => {
            notyf.success("Department created successfully");
            reset(); // Reset the form fields
            closeModal(); // Close the modal
          },
          onError: (errors) => {
            // Handle validation errors
            if (errors && typeof errors === "object") {
              Object.entries(errors).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                  value.forEach((message) => notyf.error(message));
                } else {
                  notyf.error(value);
                }
              });
            } else {
              notyf.error("An unexpected error occurred.");
            }
          },
        });
      };

      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setData(name, files[0]); // Store the file object in the form data
    };

      const handleBranch = (e) => {
        e.preventDefault();

        post('/branches', {
            onSuccess: () => {
                notyf.success('Branch created successfully!');
                fetchBranches(); // Refresh the branch list
                closeModal();
            },
            onError: () => {
                notyf.error('An error occurred while creating the branch.');
            },
        });
      };



      const handleDesignation = (e) => {
        e.preventDefault();

        post('/designations', {
            onSuccess: () => {
                notyf.success('Branch created successfully!');
                fetchBranches(); // Refresh the branch list
                closeModal();
            },
            onError: () => {
                notyf.error('An error occurred while creating the branch.');
            },
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Convert `data` into `FormData` for file uploads
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (key === 'documents' && Array.isArray(data.documents)) {
                data.documents.forEach((doc, index) => {
                    if (doc.file) {
                        formData.append(`documents[${index}][name]`, doc.name);
                        formData.append(`documents[${index}][type]`, doc.type);
                        formData.append(`documents[${index}][file]`, doc.file);
                    }
                });
            } else {
                formData.append(key, data[key]);
            }
        });
    
        post(`/employees-update/${employee.id}`, {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onSuccess: () => {
                notif.success('Employee updated successfully');
            },
            onError: (errors) => {
                Object.entries(errors || {}).forEach(([field, message]) => {
                    notif.error(`${field}: ${message}`);
                });
            },
        });
    };
    

    return (
        <div className='w-[85.2%] ml-[11.5rem] absolute right-0'>
        <Header user={user} notif={notif} />
        <Nav user_type={user_type} />
        <div className='p-3 table-section'>
          <div className='flex justify-end'>
            <div className='flex'>
              <div className='grid p-2 mt-2 text-white bg-blue-800 rounded-lg place-items-center'>
                <Link href='employees'><IoIosArrowRoundBack className='text-[1rem]' /></Link>
              </div>
            </div>
          </div>
            <form onSubmit={handleSubmit} className='px-[8rem] grid grid-cols-2 gap-4'>

                {/* Personal Details Section */}
                <div className='col-span-2'>
                    <h2 className='mb-4 text-xl font-bold'>Personal Details</h2>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" className='w-full rounded-lg' name="name" type="text" value={data.name}
                           onChange={handleChange} required/>
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" className='w-full rounded-lg' name="email" type="email" value={data.email}
                           onChange={handleChange} required/>
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" className='w-full rounded-lg' name="password" type="password" value={data.password}
                           onChange={handleChange} required/>
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" className='w-full rounded-lg' name="phone" type="text" value={data.phone}
                           onChange={handleChange} required/>
                    {errors.phone && <div>{errors.phone}</div>}
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input id="address" className='w-full rounded-lg' name="address" type="text" value={data.address}
                           onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input id="dob" className='w-full rounded-lg' name="dob" type="date" value={data.dob}
                           onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" className='w-full rounded-lg' name="gender" value={data.gender}
                            onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="joinning_date">Joining Date</label>
                    <input id="joinning_date" className='w-full rounded-lg' name="joinning_date" type="date"
                           value={data.joinning_date} onChange={handleChange} required/>
                </div>

                {/* Company Details Section */}
                <div className='col-span-2 mt-4'>
                    <h2 className='mb-4 text-xl font-bold'>Company Details</h2>
                </div>
                <div className='flex space-x-2'>
                <div>
                <label htmlFor="branch_id">Branch ID</label>
                    <select
                        id="branch_id"
                        className="w-full rounded-lg"
                        name="branch_id"
                        value={data.branch_id}
                        onChange={handleChange}
                    >
                        <option value="">Select Branch</option>
                        {branches.map((branch) => (
                            <option key={branch.id} value={branch.id}>
                                {branch.name}
                            </option>
                        ))}
                    </select>
                </div>

                    <div className='grid place-items-center mt-5'>
                <a onClick={() =>setBranchM(true)} className= ' rounded bg-blue-950 text-white p-2 h-[2rem]'><FaPlus />
                </a>
                </div>
                </div>

                <div className='flex space-x-3'>
                  <div>
                  <label htmlFor="department_id">Department ID</label>
                    <select
                        id="branch_id"
                        className="w-full rounded-lg"
                        name="department_id"
                        value={data.department_id}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        {department.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                  </div>

                <div className='grid place-items-center mt-5'>
                <a onClick={() =>setDepartmentM(true)} className= ' rounded bg-blue-950 text-white p-2 h-[2rem]'><FaPlus />
                </a>
                </div>


                </div>

                <div className='flex space-x-2'>
                   <div>
                   <label htmlFor="designation_id">Designation ID</label>
                    <select
                        id="designation_id"
                        className="w-full rounded-lg"
                        name="designation_id"
                        value={data.designation_id}
                        onChange={handleChange}
                    >
                        <option value="">Select Designation</option>
                        {designation.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                   </div>

                   <div className='grid place-items-center mt-5'>
                <a onClick={() =>setDesignationM(true)} className= ' rounded bg-blue-950 text-white p-2 h-[2rem]'><FaPlus />
                </a>
                </div>
                </div>

                <div>
                    <label htmlFor="company_doj">Company Date of Joining</label>
                    <input
                        id="company_doj"
                        className="w-full rounded-lg"
                        name="company_doj"
                        type="date"
                        value={data.company_doj}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="roleemployee">Role</label>
                    <select id="roleemployee" className='w-full rounded-lg' name="roleemployee" value={data.roleemployee}
                            onChange={handleChange}>
                        <option value="">Select Role</option>
                        {roles.map((r) => (
                            <option key={r.id} value={r.name}>{r.name}</option>
                        ))}
                    </select>
                </div>

                {/* Bank Details Section */}
                <div className='col-span-2 mt-4'>
                    <h2 className='mb-4 text-xl font-bold'>Bank Details</h2>
                </div>
                <div>
                    <label htmlFor="account_holder_name">Account Holder Name</label>
                    <input id="account_holder_name" className='w-full rounded-lg' name="account_holder_name" type="text"
                           value={data.account_holder_name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="account_number">Account Number</label>
                    <input id="account_number" className='w-full rounded-lg' name="account_number" type="text"
                           value={data.account_number} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="bank_name">Bank Name</label>
                    <input id="bank_name" className='w-full rounded-lg' name="bank_name" type="text" value={data.bank_name}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="bank_identifier_code">Bank Identifier Code</label>
                    <input id="bank_identifier_code" className='w-full rounded-lg' name="bank_identifier_code" type="text"
                           value={data.bank_identifier_code} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="branch_location">Branch Location</label>
                    <input id="branch_location" className='w-full rounded-lg' name="branch_location" type="text"
                           value={data.branch_location} onChange={handleChange}/>
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="tax_payer_id">Tax Payer ID</label>*/}
                {/*    <input id="tax_payer_id" className='w-full rounded-lg' name="tax_payer_id" type="text"*/}
                {/*           value={data.tax_payer_id} onChange={handleChange}/>*/}
                {/*</div>*/}

                <div>
                    <label htmlFor="tax_payer_id">Basic salary *</label>
                    <input id="tax_payer_id" className='w-full rounded-lg' name="basic_salary" type="text"
                           value={data.basic_salary} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="tax_payer_id">Gross salary *</label>
                    <input id="tax_payer_id" className='w-full rounded-lg' name="net_salary" type="text"
                           value={data.net_salary} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="apc_no">APC No</label>
                    <input id="apc_no" className='w-full rounded-lg' name="apc_no" type="text" value={data.apc_no}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="bank_name">IFSC Code</label>
                    <input id="ifsc_code" className='w-full rounded-lg' name="ifsc_code" type="text" value={data.ifsc_code}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="bank_name">PTAX NO</label>
                    <input id="ptax_no" className='w-full rounded-lg' name="ptax_no" type="text" value={data.ptax_no}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="bank_name">PF NO</label>
                    <input id="pf_no" className='w-full rounded-lg' name="pf_no" type="text" value={data.pf_no}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="esi_no">ESI NO</label>
                    <input id="esi_no" className='w-full rounded-lg' name="esi_no" type="text" value={data.esi_no}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="pan_no">Pan NO</label>
                    <input id="pan_no" className='w-full rounded-lg' name="pan_no" type="text" value={data.pan_no}
                           onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="aadhar_no">AAdhar NO</label>
                    <input id="aadhar_no" className='w-full rounded-lg' name="aadhar_no" type="text" value={data.aadhar_no}
                           onChange={handleChange}/>
                </div>


                <div className="col-span-2 mt-4">
                    <h2 className="mb-4 text-xl font-bold">History</h2>
                </div>
                {/* {formData.history.map((item, index) => (
                    <div key={index} className="">
                        <div>
                            <label htmlFor={`company_name_${index}`}>Company Name</label>
                            <input
                                id={`company_name_${index}`}
                                className='w-full rounded-lg'
                                name="company_name"
                                type="text"
                                value={item.company_name}
                                onChange={(e) => handleDynamicChange(e, index, "company_name")}
                            />
                        </div>
                        <div>
                            <label htmlFor={`department_${index}`}>Department</label>
                            <input
                                id={`department_${index}`}
                                className="w-full rounded-lg mt-2"
                                name="department"
                                type="text"
                                value={item.department}
                                onChange={(e) => handleDynamicChange(e, index, "department")}
                            />
                        </div>
                        <div>
                            <label htmlFor={`role_${index}`}>Designation</label>
                            <input
                                id={`role_${index}`}
                                className="w-full rounded-lg mt-2"
                                name="role"
                                type="text"
                                value={item.role}
                                onChange={(e) => handleDynamicChange(e, index, "role")}
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-2 text-red-600"
                            onClick={() => handleRemoveHistory(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))} */}
                {/* <button
                    type="button"
                    className="mt-4 text-blue-600 flex items-center space-x-2"
                    onClick={handleAddHistory}
                >
                    <span>+</span>
                    <span>Add History</span>
                </button> */}

                <div className="col-span-2 mt-6">
                    <h2 className="mb-4 text-xl font-bold">Employes Documents</h2>
                    <div className='grid grid-cols-3 gap-5'>
                    <div className='overflow-hidden'>
                      <h1>CV Upload</h1>
                      <input type="file"  onChange={handleFileChange} name="cv" id="" className='border p-2' />
                      
                      <img src={data.cv} alt="" />
                    </div>

                    <div className='overflow-hidden'>
                    <h1>Cancle Cheque Upload</h1>
                      <input type="file" onChange={handleFileChange} name="can_cheque" id="" className='border p-2' />
                    </div>

                    <div className=''>
                      <h1>Declaration</h1>
                      <input type="file" onChange={handleFileChange} name="declaration" id="" className='border p-2' />
                    </div>
                    </div>

                </div>

                <button type="submit" className='bg-blue-600 p-2 rounded-md text-white w-[30%] col-span-2'>Create</button>
            </form>
        </div>

      {/* //department modal  */}
        <Modal show={departmentM} onClose={closeModal}>
            <h2 className="text-lg font-bold p-4">Create Department</h2>
            <form onSubmit={handleDepartment} className="p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <input
                  type="text"
                  id="d_name"
                  name="d_name"
                  value={data.d_name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  placeholder="Enter department name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </Modal>



          {/* branch modal  */}
          <Modal show={branchM} onClose={closeModal}>
            <h2 className="text-lg font-bold p-4">Create Branch</h2>
            <form onSubmit={handleBranch} className="p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Branch Name
                </label>
                <input
                  type="text"
                  id="b_name"
                  name="b_name"
                  value={data.b_name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  placeholder="Enter department name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </Modal>


          {/* designation modal
           */}


      <Modal show={designationM} onClose={closeModal}>
            <h2 className="text-lg font-bold p-4">Create Branch</h2>
            <form onSubmit={handleDesignation} className="p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Designation Name
                </label>
                <input
                  type="text"
                  id="ds_name"
                  name="ds_name"
                  value={data.ds_name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  placeholder="Enter department name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </Modal>

                  </div>
    );
};

export default Edit;
