import PropTypes from 'prop-types';
import s from './style.module.css'

const DisplayColor = (props) => {

  const changeColor = () => {
    if(props.color){
      return props.color
    }
  }
    
  return (
    <div className={s.container} style={{ color: changeColor() }} >
      {props.color ? `Color seleccionado ${props.color}` : 'Seleccione un color'}
    </div>
  )
}

export default DisplayColor

DisplayColor.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
}