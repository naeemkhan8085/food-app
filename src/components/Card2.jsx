import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { incrementQTY, removeItem,  decrementQTY } from '../Redux/cardSlice';

const Card2 = ({name, id, price, image , qty}) => {

    let dispatch = useDispatch();

    return (
        <div className='w-full h-[120px] bg-green-100 shadow-lg p-2 flex justify-between '>

            {/* ---------------------------------------- Left Side of Card ---------------------------------------------------- */}

            <div className='w-[60%] h-full flex gap-5'>  

                <div className='w-[50%] h-full overflow-hidden rounded-lg '>
                    <img src={image} alt='' className='object-cover'/>
                </div>

                <div className='w-[40%] h-full flex flex-col gap-4'>

                    <div className='text-lg font-semibold text-gray-600'>{name}</div>

                    <div className='w-[110px] h-[40px] bg-gray-500 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-500 text-lg text-green-500 font-bold'>

                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 cursor-pointer' onClick={()=>{qty>1 ? dispatch( decrementQTY(id)) : 100 }}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{qty}</span>
                        <button className='w-[30%] h-full bg-white hover:bg-gray-200 cursor-pointer' onClick={()=>dispatch(incrementQTY(id))}>+</button>

                    </div>

                </div>

            </div>

            {/* ---------------------------------------- Right Side of card ---------------------------------------------------- */}

            <div className='flex flex-col justify-start items-end gap-6'>
                <span className='text-lg font-semibold text-green-500 '>Rs. {price}/-</span>
                <RiDeleteBin5Line   onClick={() => dispatch(removeItem(id))} className='w-[30px] h-[30px] text-red-500 cursor-pointer'/>


            </div>
        </div>
    )
}

export default Card2