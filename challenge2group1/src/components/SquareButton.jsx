import "../css/squareButton.css";
import PropTypes from 'prop-types'

export const SquareButton = ({title}) => {
  return (
    <button className="flex justify-start bg-lunar text-white py-3 mb-20 mt-10 px-14">{title}</button>
  )
}

SquareButton.prototype = {
    title: PropTypes.string.isRequired,
};

