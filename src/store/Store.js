import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_BOOK':
            return {
                ...state,
                books: action.books,
                countBooks: action.books.length
            };
        default:
            return state
    }
}

const Store = () => {
    const [state, dispatch] = useReducer(reducer, {
        books: [],
        countBooks: 0
    });
    return [state, dispatch]
}

export default Store;