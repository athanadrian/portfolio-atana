import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const PortButtonDropdown = ({ items }) => {
  const [dropdownOpen, setDropDown] = useState(false);

  const toggleDropdown = () => {
    setDropDown(!dropdownOpen);
  };

  const renderMenu = (items) => {
    return (
      <DropdownMenu>
        {items.map((item) => (
          <DropdownItem key={item.key} {...item.handlers}>
            {item.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  };

  return (
    <ButtonDropdown
      className='port-dropdown'
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
    >
      <DropdownToggle caret size='sm'></DropdownToggle>
      {renderMenu(items)}
    </ButtonDropdown>
  );
};
export default PortButtonDropdown;
