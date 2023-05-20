import { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';
import Rating from "react-rating";
import { AiOutlineStar ,AiTwotoneStar} from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleHooks from '../Hooks/TitleHooks';


AOS.init();


function Main() {

  const {user}  = useContext(authContext)
  const [ data , setdata ] = useState([]);

  TitleHooks('Home')

  const tabdata = (data) => {
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=${data}`).then(data => data.json()).then(data => setdata(data))
  }

  useEffect(()=>{
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=Sports Car`).then(data => data.json()).then(data => setdata(data))
  },[])




  const tabpaneldata = <>
  <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
    {
      data.map(data => 
      <div key={data._id} className="card lg:w-72 md:w-auto bg-base-100 shadow-[0_1px_4px_rgba(0,0,0,0.16)] 
        hover:shadow-[0_3px_8px_rgba(0,0,0,0.20)] transition duration-500 ease-in-out hover:scale-[105%] ">
        <figure><img src={data.image} className='h-48 w-full' /></figure>
        <div className="card-body h-36">
          <h2 className="card-title">{data.name}</h2>
          <div className="text-left">
          <p>Price : {data.price}</p>
          <div className="flex mt-2">
            <h1>Rating :</h1>
            <span className="mt-1 pl-1">
            <Rating
            readonly
            placeholderRating={data.rating}
            emptySymbol={<AiOutlineStar/> }
            placeholderSymbol={<AiTwotoneStar className="text-[#808bfe]"/>}
            fullSymbol={<AiTwotoneStar/>}
            />
            </span>
            <span className="pl-2">({data.rating})</span>                               
            </div>
          </div>
        </div>
        <div className='p-2'>
          <Link onClick={()=>{(user)? window.location.replace(`/toys/${data._id}`) :setTimeout(() => window.location.replace(`/toys/${data._id}`) , 2000)}}><button className="btn block w-full rounded-xl bg-[#808bfe] hover:bg-[#666fcb] border-none" 
          onClick={()=>{(user)? '' : toast.error('You have to log in first to view details.')}}>View Details</button></Link>
        </div>
      </div>
      )
    }
  </div>
</>




  return (
    <div className='overflow-hidden'>

      <ToastContainer position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>





      <section>
              <div className="hero min-h-screen max-w-[90%] mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="plane.png" className=" max-w-[100%] rounded-lg hover:scale-[105%] transition duration-500 ease-in-out" />
            <div className='text-black '>

            <div className='relative'>
              <h1 className="text-5xl mt-10 max-[730px]:text-4xl max-[650px]:text-3xl font-bold">Find your best  Toys for your <br /> children</h1>
              <div className='h-[140px] w-[7px] bg-[#de2621] absolute left-[-13px] top-1'></div>
            </div>
            
            <div className='flex gap-4 py-6 items-center'>
              <div className='w-10 h-10 bg-[#808bfe] rounded-full'></div>
              <h1 className='font-semibold'>We deliver best of fantastic,hand-piched,age appriciate toys</h1>
            </div>
            <button className="btn bg-[#808bfe] border-none hover:bg-[#6c78ff]">Get Started</button>
          </div>
          </div>
        </div>
      </section>




      
      <div className="hero" data-aos="zoom-in" data-aos-easing="ease-in-back"
     data-aos-delay="100">
        <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
          
          <img src="/updated.png" className='max-w-full hover:scale-[120%] transition duration-500 ease-in-out'/>
          <div className="text-black text-center other bg-[url('/blobanimation.svg')] bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
            <h1 className="text-5xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">Get your dream car toy today</h1>
            <div className='py-3'>
              <h1 className='font-semibold'>We deliver best of fantastic,hand-piched,age appriciate toys</h1>
            </div>
            <button className="btn bg-[#808bfe] border-none hover:bg-[#6c78ff]">Get Started</button>
          </div>
        </div>
      </div>





      <section className='my-32'>

        <h1 className='text-3xl font-bold text-center underline underline-offset-8 text-[#808bfe] '>Gallery</h1>

        <div className='flex gap-2 justify-center mt-20 flex-wrap px-2'>
          <div data-aos="fade-right">
          <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-[450px] rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[102%] transition duration-500 ease-in-out max-[400px]:max-h-[300px]'/>
          </div>
          <div className='grid grid-cols-2 w-fit gap-3 max-[400px]:max-w-[300px] max-w-[470px]' data-aos="fade-left">
            <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" className='h-[218px] rounded-tl-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[218px] rounded-tr-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[218px] rounded-bl-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />
            <img src="https://images.pexels.com/photos/386010/pexels-photo-386010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-[218px] rounded-br-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.30)] hover:scale-[105%] transition duration-500 ease-in-out max-[400px]:max-h-[180px]' />

          </div>
        </div>


      </section>





      <section >
        <h1 className='text-2xl font-bold text-center mt-44 text-[#808bfe] underline decoration-4 underline-offset-[10px]'>Shop by category</h1>
        <div className='text-center mx-20 max-[650px]:mx-2 mt-16'>
          <Tabs>
            <TabList className='font-bold '>
              <Tab onClick={()=>{tabdata('Sports Car')}}>Sports Cars</Tab>
              <Tab onClick={()=>{tabdata('Supercar')}}>Super Cars</Tab>
              <Tab onClick={()=>{tabdata('Truck')}}>Trucks</Tab>
            </TabList>
 
            <TabPanel>
              {tabpaneldata}
            </TabPanel>
            
            <TabPanel>
              {tabpaneldata}
            </TabPanel>

            <TabPanel>
              {tabpaneldata}
            </TabPanel>
          </Tabs>
        </div>
      </section>


      <section>
        <div className="max-w-full px-56 mb-10 mt-32 m-auto max-[1080px]:px-8">
          <div
            className="w-full shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] hover:scale-[105%] transition duration-500 ease-in-out"
            style={{
              backgroundImage: `url("https://i.ibb.co/X5QVysF/newsletter-background.webp")`, borderRadius:'20px'
            }}
          >
          
            <div className="hero-content text-center text-neutral-content max-w-full">
              <div className="max-w-md">

                <h1 className="text-4xl text-[#808bfe] font-bold mb-8">
                  Subscribe Newsletter
                </h1>

                <div>
                  <div className="w-80 m-auto max-[400px]:px-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your email here"
                        className="input rounded-[30px] w-full py-8 "
                      />
                      <button className="btn btn-ghost bg-[#808bfe] hover:bg-[#666fcb] absolute top-2 right-2 rounded-[30px]">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Main