import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './style.module.css'

const MenuListItem = (props) => {

  const [isHover, setIsHover] = useState(false)
  const activate = () => {
    setIsHover(true)
  }
  const deactivate = () => {
    setIsHover(false)
  }
const getBackgroundColor = () => {
  if(isHover){
    return props.color
  }else{
    if(props.isSelected){
      return props.color
    }
  }
}
const onItemClick = () => {
  props.onClick(props.color)
}
  return (
    <div className={s.container}
    onClick={onItemClick}
    onMouseEnter={activate}
    onMouseLeave={deactivate}
    style={{ backgroundColor: getBackgroundColor() }}>
      {props.color}
    </div>
  )
}

export default MenuListItem

MenuListItem.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  
}