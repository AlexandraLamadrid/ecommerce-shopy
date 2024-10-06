import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    

    return (
      <div className="flex justify-between items-center mb-3 border border-black">
        <p>
            <span>01.02.24</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
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
