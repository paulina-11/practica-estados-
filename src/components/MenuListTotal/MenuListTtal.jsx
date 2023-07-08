import PropTypes from 'prop-types';
import MenuListItem from "../MenuListItem/MenuListItem"
import { COLORES } from './constants'
import s from './style.module.css'
const MenuListTtal = (props) => {
  return (
    <div className={s.container}>
      {COLORES.map((color) => (
        <MenuListItem
          key={color}
          onClick={props.onItemClick}
          isSelected={props.color === color}
          color={color}
        />
      ))
      }
    </div>
  )
}

export default MenuListTtal

MenuListTtal.propTypes = {
  onItemClick: PropTypes.func,
  color: PropTypes.string,
  colorActual: PropTypes.string,
  
}