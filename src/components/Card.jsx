import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cardSlice';
import { toast } from 'react-toastify';

const Card = ({ name, image, id, price, type }) => {

    let dispatch = useDispatch();

    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-xl hover:border-green-500 hover:border-2'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
                <img className='object-cover' src={image} alt="Food Item 1" />
            </div>

            <div className='text-2xl font-semibold '>
                {name}
            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>Rs. {price}/-</div>

                <div className='flex justify-center font-semibold gap-2 text-lg text-green-500 items-center'>
                    {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}  <span>{type}</span>
                </div>

            </div>

            <button className='cursor-pointer w-full rounded-lg  p-3 bg-green-500 text-white hover:bg-green-400 font-semibold' onClick={() =>{dispatch(addItem({ id: id, name: name, price: price, image: image, qty: 1 })), toast.success('Item added! ✅') }}>Add to cart</button>

        </div>
    )
}

export default Card
