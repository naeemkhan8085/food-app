import React, { useContext, useEffect } from 'react'

// -------------------------------------------icons---------------------------------------------------------------------
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContex } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


// ---------------------------------------------------------------------------------------------------------------------



const Nav = () => {

    let { input, setInput, setcate, showCard, setShowCard } = useContext(dataContex)

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) || item.food_name.toUpperCase().includes(input));
        setcate(newList);
    }, [input, setcate]);

    
    let Items = useSelector((state) => state.card)
    
    console.log(Items);


    return (
        <div className='w-full  h-[100px] px-5 md:px-8 flex justify-between items-center'>

            <div className='h-[60px] w-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-green-200 transition-all duration-200'>
                <MdFastfood className='h-[30px] w-[30px] text-green-500 ' />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='w-[50%] md:w-[75%] h-[60px] bg-white items-center flex gap-5 px-5 shadow-xl rounded-md' >
                <IoSearch className='text-green-500 h-[20px] w-[20px]' />
                <input onChange={(e) => setInput(e.target.value)} value={input} className='w-[100%] outline-none text-[16px] md:text-[20px]' type='text' placeholder='Search Item....' />
            </form>

            <div onClick={() => setShowCard(!showCard)} className=' cursor-pointer h-[60px] w-[60px] bg-white flex justify-center items-center  rounded-md shadow-xl relative hover:bg-green-200 transition-all duration-200'>
                <span className='absolute top-0 right-2 font-bold text-green-500 text-[18px]'>{Items.length}</span>
                <LuShoppingBag className='h-[30px] w-[30px] text-green-500 ' />
            </div>

        </div>
    )
}

export default Nav
