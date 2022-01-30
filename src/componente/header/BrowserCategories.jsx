import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import './header.css';

const BrowserCategories = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };
  return (
    <div>
      <div class='navContainer'>
        <nav>
          <ul  anchorEl={anchorEl}  keepMounted  open={isMenuOpen}>

            <li >
              <a href='#' style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}    onClick={handleClick}> Browser Categories  <i class='fa fa-angle-right fa-fw'></i><KeyboardArrowDownIcon/></a>

              <ul class='levelTwo'>
                <li>
                  <a href='#'>Activities, Events & Outdoors</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'>Automotive</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'>Baby, Kids & Toys</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'>Beauty, Message & spa <i class='fa fa-angle-right fa-fw'></i></a>

                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href=''>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>

                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
                <li>
                  <a href='#'> Book & Magazines</a>
                  <ul class='levelThree'>
                    <li>
                      <h3>Activities, Events & Outdoors</h3>
                      <a href='#'>Adventure & Outdoors <i class='fa fa-angle-right fa-fw'></i></a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Fun & Leisure</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>
                    <li>
                      <a href='#'>Kids Activities</a>
                      <div class="discription">Bungy Jumping, Camping, Horse Riding ...</div>
                    </li>

                  </ul>
                </li>
              </ul>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BrowserCategories;
