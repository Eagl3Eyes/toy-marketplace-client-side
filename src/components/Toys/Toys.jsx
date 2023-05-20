import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TitleHooks from "../Hooks/TitleHooks";



export default function Toys() {

    const [toys, setToys] = useState([]);
    TitleHooks('All Toys')



    // const loadMore = () => {
    //     fetch('https://cute-gold-lemming-sari.cyclic.app/', {
    //         method: "POST",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ 'value': '10' })
    //     }).then(data => data.json()).then(data => setToys(data))
    // }



    const findInTable = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    useEffect(() => {
        fetch('https://cute-gold-lemming-sari.cyclic.app/').then(data => data.json()).then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className="min-h-[90vh]">

                <Outlet />

                <div className="overflow-x-auto">
                    <table className="table w-full" id="myTable">
                        <thead>
                            <tr className="divide-y" style={{ borderBottom: '1px solid black' }}>
                                <th className="bg-[#e9f8ff]"></th>
                                <th className="flex gap-10 items-center bg-[#e9f8ff]">
                                    <h1 className="text-sm ">Name</h1>

                                    <input type="text" id="myInput" onKeyUp={() => { findInTable() }} placeholder="Search for names.." title="Type in a name" className="input input-bordered " />

                                </th>
                                <th className="bg-[#e9f8ff]">Seller</th>
                                <th className="bg-[#e9f8ff]">Category</th>
                                <th className="bg-[#e9f8ff]">Price</th>
                                <th className="bg-[#e9f8ff]">Available Quantity</th>
                                <th className="bg-[#e9f8ff]">Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                toys.map(data =>

                                    <tr key={data._id} className="hover border border-black" >

                                        <th></th>
                                        <td>
                                            <LazyLoad onContentVisible={() => { document.getElementById('skel').classList.add('hidden') }}>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>{data.name}</div>
                                                </div>
                                            </LazyLoad>
                                        </td>
                                        <td>{data?.sellerName}</td>
                                        <td>{data.category}</td>
                                        <td>{data.price}</td>
                                        <td className="pl-20">{data.quantity}</td>
                                        <td>
                                            <Link to={`/toys/${data._id}`} className="btn">View Details</Link>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="px-20 text-white max-[1080px]:px-8" id="skel">
                        <SkeletonTheme baseColor="white" highlightColor="#e9f8ff">
                            <Skeleton count={5} height={60} />
                        </SkeletonTheme>
                    </div>
                </div>
            </div>
        </div>
    )
}