import "../css/squareButton.css";
import PropTypes from 'prop-types'

export const SquareButton = ({title}) => {
  return (
    <button className='button'>{title}</button>
  )
}

SquareButton.prototype = {
    title: PropTypes.string.isRequired,
};

