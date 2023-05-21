import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { authContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleHooks from "../Hooks/TitleHooks";



export default function AddToys() {


    TitleHooks('Add Toys')

    const { user } = useContext(authContext)


    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.category = selectedOption?.value;
        data.sellerName = user?.displayName;
        data.sellerEmail = user?.email;
        fetch('https://toy-marketplace-server-psi.vercel.app/addtoys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(data => data.json()).then(() => {
            toast.success("Successfully added.");
            reset()
        })
    };


    const options = [
        { value: 'Avengers', label: 'Avengers' },
        { value: 'Dragon Ball', label: 'Dragon Ball' },
        { value: 'Power Rangers', label: 'Power Rangers' },
    ];



    return (
        <div className="h-[90vh]">


            <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />


            <h1 className="text-center text-3xl mt-8 font-bold decoration-4">Add Your Toys Here</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-auto my-10 w-fit">

                <div className="grid grid-cols-2 gap-5">

                    <input disabled defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full max-w-xs" />
                    <input disabled defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" />
                    <input {...register("name", { required: 'true', maxLength: 20 })} placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
                    <input {...register("image", { required: 'true' })} type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                    <input type="number" {...register("price", { required: 'true', maxLength: 20 })} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    <CreatableSelect defaultValue={selectedOption} placeholder={'Category'} onChange={(data) => setSelectedOption(data)} className="max-w-xs " options={options} />
                    <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="rating (1 - 5) only" className="input input-bordered w-full max-w-xs" />
                    <input type="number" {...register("quantity", { required: 'true' })} placeholder="Available quantity" className="input input-bordered w-full max-w-xs" />

                </div>

                <textarea  {...register("description")} placeholder="Bio" className="textarea textarea-bordered block w-full h-[16vh] my-4" ></textarea>
                <button className="btn block w-full bg-[#ED1C24] hover:bg-red-500 border-none">Add Toy</button>

            </form>



        </div>
    )
}