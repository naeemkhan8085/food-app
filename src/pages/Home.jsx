import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContex } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { TfiFaceSad } from "react-icons/tfi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

  let { cate, setcate, input, showCard, setShowCard } = useContext(dataContex);
   const [activeTab, setActiveTab] = useState('All');

   console.log(activeTab);
   

  let Items = useSelector((state) => state.card)


  function filter(Category) {

    // console.log(Category);

    if (Category === "All") {
      setcate(food_items)
    }

    else {
      let newList = food_items.filter((item) => item.food_category.toLowerCase() === Category.toLowerCase());
      setcate(newList);
    }

  }

  let subtotal = Items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = subtotal + deliveryFee + taxes;



  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />                                              {/*  Navbar Section */}


      {/* --------------------------------------------- Category Section ------------------------------------------- */}


      {!input ?

        <div className='flex flex-wrap justify-center gap-5 items-center w-[100%]'>
          {Categories.map((value) => {

            return <div onClick={() =>{filter(value.name), setActiveTab(value.name)}  } className={`${activeTab==value.name?"bg-green-200":"bg-white"} w-[140px] h-[150px]  flex flex-col gap-5 p-5 items-center text-[20px] font-bold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 transition-all duration-200`}  >

              {value.icon}
              {value.name}
            </div>

          })}
        </div>

        :
        null}


      {/* ---------------------------------------------- Cards Section --------------------------------------------------- */}
      <div className='justify-center items-center flex flex-wrap gap-5 px-5 w-full pt-8 pb-8'>

        {cate.length > 0

          ?
          cate.map((item) => {
            return <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          })

          :

          <div className=' text-2xl text-center font-bold font-sans text-gray-500  pt-5'>No Dish Found</div>
        }

      </div>


      {/* ----------------------------------------------------Show Card Box ------------------------------------------------ */}

      <div className={`overflow-auto flex flex-col items-center w-full md:w-[40vw] h-[100%] bg-white fixed top-0 right-0 shadow-xl p-6 transition-all duration-500 ${showCard ? "none" : "translate-x-full"}`}>

        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-500 text-[18px] font-semibold'>Order Items</span>
          <RxCross2 onClick={() => setShowCard(!showCard)} className='text-green-500 text-[40px] font-semibold cursor-pointer' />
        </header>

        {/* <hr className=' text-gray-500' /> */}
        <div className='w-full border-t-1 border-gray-500'></div>

        {/* -------- apply Condition ----------- */}

        {(Items.length > 0)

          ?

          <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col mt-9 gap-8 '>
              {Items.map((item) => {

                return <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />


              })}

            </div>

            {/* --------------------------------- Price Section --------------------------------- */}

            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-3 p-8 items-center'>

              <div className='w-full flex justify-between'>
                <span className='text-lg font-semibold text-gray-600'>Subtotal</span>
                <span className="text-lg font-semibold text-green-500">Rs. {subtotal}/-</span>
              </div>

              <div className='w-full flex justify-between'>
                <span className='text-lg font-semibold text-gray-600'>Delivery Fee</span>
                <span className="text-lg font-semibold text-green-500">Rs. {deliveryFee}/-</span>
              </div>

              <div className='w-full flex justify-between'>
                <span className='text-lg font-semibold text-gray-600'>Taxes</span>
                <span className="text-lg font-semibold text-green-500">Rs. {taxes}/-</span>
              </div>

            </div>

            <div className='w-full flex justify-between p-7'>
              <span className='text-2xl font-semibold text-gray-600'>Total</span>
              <span className="text-2xl font-semibold text-green-500">Rs. {total}/-</span>
            </div>

            <button className='cursor-pointer w-[80%] rounded-lg  p-3 bg-green-500 text-white hover:bg-green-400 font-semibold'>Place Order</button>
          </div>

          :
          <>
            <TfiFaceSad className='h-10 w-10 mt-8 font-bold' />
            <div className='text-2xl text-center font-bold font-sans text-gray-500  pt-5 '>Your Cart Is Empty</div>
          </>

        }


      </div>

      {/* --------------------------------------------------------------------------------------------------------------- */}

      <div>©2025- Developed by Naeem Khan ❤️ </div>
     

    </div>
  )
}

export default Home
