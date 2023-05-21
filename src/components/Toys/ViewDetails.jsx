import { useLoaderData, useNavigate } from "react-router-dom"


export default function ViewDetails() {
    const navigate = useNavigate();
    const data = useLoaderData();

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" defaultChecked />
            <div className="modal">
                <div className="modal-box relative w-fit">
                    <label onClick={() => navigate('/all-toys')} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={data[0].image} className="h-72 w-auto mx-auto rounded-2xl" />

                    <div className="flex flex-col gap-2 mt-5 font-bold">
                        <p>Toy Name : {data[0].name}</p>
                        <p>Seller Name : {data[0]?.sellerName}</p>
                        <p>Seller Email : {data[0]?.sellerEmail}</p>
                        <p>Price : {data[0].price}</p>
                        <p>Rating : {data[0].rating}</p>
                        <p>Available Quantity : {data[0].quantity}</p>
                        <p>Description : {data[0]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}