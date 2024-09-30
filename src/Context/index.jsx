import PropTypes from 'prop-types';
import { createContext } from 'react'

const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};