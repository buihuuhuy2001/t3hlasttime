import React, { useState } from 'react';
import './Navigation.css';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    <div className='container'>
      <div className='navigation'>
        <div className="navigation-flex">
          <div>
            <div className="nav_one">
              <img
                src="https://weddingwonders.vn/wp-content/uploads/2021/06/cropped-LOGO-WEDDING-WONDERS-VIET-NAM-1.png"
                style={{ width: 78, height: 78 }}
                alt="logo"
              />
            </div>
          </div>
          <div className='displayNone-moble'>
            <div className='hover-a'>
              <a className='hover-a' href="#">TRANG CHỦ</a>
            </div>

            <div className='hover-a'>
              <a href="introduce">GIỚI THIỆU</a>
            </div>
            <div className='wrap_col'>
              <ul className="none_li" >
                <li className="hover-a" onClick={() => setIsDropdownOpen(!isDropdownOpen)} onMouseLeave={() => setHoveredItem(null)}>
                  <a href="#">DỊCH VỤ </a>
                  <TriangleDownIcon className='hover-icon-nav' style={{ color: '#fff' }}></TriangleDownIcon>
                  {isDropdownOpen && (
                    <ul className="subnav">
                      <li onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} style={{ backgroundColor: hoveredItem === 0 ? '#ccc' : '' }}><a href="decoratewedding">TRANG TRÍ TIỆC CƯỚI</a></li>
                      <li onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(null)} style={{ backgroundColor: hoveredItem === 1 ? '#ccc' : '' }}><a href="weddingplanning">WEDDING PLANNING</a></li>
                      <li onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(null)} style={{ backgroundColor: hoveredItem === 2 ? '#ccc' : '' }}><a href="OrganizeEvents">TỔ CHỨC SỰ KIỆN</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className='hover-a'>
              <a href="realproject">DỰ ÁN THỰC TẾ</a>
            </div>

            <div className='hover-a'>
              <a href="blog">BLOG</a>
            </div>
            <div className='hover-a'>
              <a href="contact">LIÊN HỆ</a>
            </div>
            <div className='container-icon1 .css-onkibi'>
              <Menu className="menu-bar">
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <MenuList>
                  <MenuItem icon={<AddIcon />} command='⌘T'>
                    New Tab
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                    New Window
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                    Open Closed Tab
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command='⌘O'>
                    Open File...
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
