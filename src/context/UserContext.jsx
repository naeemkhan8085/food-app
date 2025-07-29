import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export let dataContex = createContext();

const UserContext = ({ children }) => {
    
    let [input, setInput] = useState('')
    let [cate, setcate] = useState(food_items);
    let [showCard, setShowCard]=useState(false)


    let data = {
        input,
        setInput,
        cate,
        setcate,
        showCard,
        setShowCard
    }

    return (
        <div>
            <dataContex.Provider value={data}>
                {children}
            </dataContex.Provider>

        </div>
    )
}

export default UserContext
