import React from 'react';

const Menu = (props) => {
  return (
    <div>
      <h3>The menu below this line was inserted via 'props.children.</h3>
      {props.children}
    </div>
  )
}

export default Menu;