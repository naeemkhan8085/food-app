import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        addItem: (state, action) => {

            let existingItem = state.find((item) => item.id === action.payload.id)

            if (existingItem) {
                return state.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            }

            else {
                state.push(action.payload)

            }


        },

        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        incrementQTY: (state, action) => {
            return state.map((item) => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item)
        },

        decrementQTY: (state, action) => {
            return state.map((item) => item.id === action.payload ? { ...item, qty: item.qty - 1 } : item)
        }
    }


})

export const { addItem, removeItem, incrementQTY , decrementQTY} = cardSlice.actions
export default cardSlice.reducer