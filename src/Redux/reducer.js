const initialState = []


const cartReducer = (state = initialState, action) => {



    if (action.type == "ADD") {

        let book = action.payload

        console.log(book)

        return [...state,  book ]
    }


}

export default cartReducer