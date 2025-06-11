import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";
import { toast } from 'react-toastify'

const AddJobPage = ({addJobSubmit}) => {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            description,
            salary,
            location,
            type,
            title,
            company: {
                name: companyName,
                description: companyDescription,
                contactPhone: contactPhone,
                contactEmail: contactEmail,
            }
        };
        addJobSubmit(newJob);
        toast.success('Job added successfully')

        return navigate('/jobs');
    }

    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto max-2xl py-24">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form action="" onSubmit={submitForm}>
                            <h2 className="text-3xl text-center font-semi-bold mb-6">
                                Add Job
                            </h2>
                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                                    Job Type
                                </label>
                                <select name="type" id="type"
                                    className="border rounded w-full py-2 px-3"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                                <input type="text" id="name" name="name" 
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="eg. Beautiful Apartment in Miami" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="type" className="font-bold block text-gray-700 mb-2">Description</label>
                                <textarea className="border rounded w-full py-2 px-3 "
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Add any job duties, expectations, requirements etc"></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
                                <select name="" id=""
                                    value={salary}
                                    onChange={(e) => setSalary (e.target.value)}
                                >
                                    {/* <option value="Under $50k">Choose</option> */}
                                    <option value="">Under $50k</option>
                                    <option value="$50-$60k">$50-$60k</option>
                                    <option value="60-$70k">60-$70k</option>
                                    <option value="70-$80k">70-$80k</option>
                                    <option value="80-$90k">80-$90k</option>
                                    <option value="90-$100k">90-$100k</option>
                                    <option value="100-$125k">100-$125k</option>
                                    <option value="125-$150k">125-$150k</option>
                                    <option value="150-$175k">150-$175k</option>
                                    <option value="175-$200k">175-$200k</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-gray-700 font-bold mb-2">Location</label>
                                <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Company Location" required />
                            </div>
                            <h2 className="text-3xl text-center font-semi-bold mb-6">Company Info</h2>
                            <div className="mb-4">
                                <label htmlFor="" className="block text-gray-700 font-bold mb-2">Company Name</label>
                                <input type="text" className="border rounded w-full py-2 px-3" 
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Company Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="type" className="font-bold block text-gray-700 mb-2">Company Description</label>
                                <textarea className="border rounded w-full py-2 px-3" 
                                value={companyDescription}
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                placeholder="What will your company do?"></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Company Email</label>
                                <input type="text" className="border rounded w-full py-2 px-3" 
                                value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                placeholder="Email address for applicants" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">Company Phone</label>
                                <input type="tel" className="border rounded w-full py-2 px-3 mb-2" 
                                    value={contactPhone}
                                    onChange={(e) => setContactPhone(e.target.value)}
                                placeholder="Optional phone for applicants" />
                            </div>
                            <button className="w-full bg-indigo-600 rounded-full py-2">Add Job</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

AddJobPage.PropTypes={
    addJobSubmit: PropTypes.string,
}

export default AddJobPage;