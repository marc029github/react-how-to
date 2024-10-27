import {createContext, useReducer, useContext} from 'react';

export const Context = createContext();

const Store = ({children}) => {

    const [state, dispatch] = useReducer(
        (state, action) => {
            return {...state, ...action};
        },
        {
            contactosGlobal: [{id: 1, nombre: "Cliente 1"}, {id: 2, nombre: "Cliente 2"}, {id: 3, nombre: "Cliente 3"}],
        }
    );

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );

}

export default Store;