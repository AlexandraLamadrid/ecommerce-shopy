import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    

    return (
      <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
        <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
                <span className='font-light'>01.02.24</span>
                <span className='font-light'>{totalProducts} articles </span>
            </p>
            <p className='flex items-center gap-2'>
            <span className='font-medium text-2xl'>${totalPrice}</span>
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
            </p>
        </div>
      </div>
    )
  }

// Validación de las props
OrdersCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  // Acepta string o number
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default OrdersCard;
