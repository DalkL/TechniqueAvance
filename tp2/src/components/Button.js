import PropTypes from 'prop-types'
const Button = ({ color, colorbg, text, onClick }) => {
//e = passing an event object
/* const onClick = (e) => {
// console.log("click")
console.log(e)
}*/
return (
    <button
        onClick={onClick}
        style={{ backgroundColor: colorbg, color:color }}
        className='btn'>
        {text}
    </button>
)
}
Button.defaultProps = {
    colorbg: 'clear',
    color: 'white',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button