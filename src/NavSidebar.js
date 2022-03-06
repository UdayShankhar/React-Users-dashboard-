import React from 'react';
import './NavSidebar.css';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import img1 from './images/linechart.jpg';
import img2 from './images/donutchart.jpg';



function NavSidebar() {
  return (
    <div>
<div className='nav-side'>
<div className='sidebar'>
    <h2 className='sb'>SB ADMIN</h2>
    <h4><SpeedIcon/>Dashboard</h4>
                  <Link to="/products" className="btn btn-outline-dark">
                  <span><LocalMallIcon/></span>Products</Link>
                  <Link to="/add" className='btn btn-outline-dark'>
                      <span><PersonIcon/>AddUsers</span>
                  </Link>
</div>

<div>
<div className='navv'>
    <input type="search" className='search-box' placeholder='Search here...'></input>
    <h2 className='n-icons'><NotificationsActiveIcon/></h2>
                  <h2 className='m-icons'><MailRoundedIcon/></h2>
                  <h2 className='a-icons'><AccountCircleRoundedIcon/></h2>
    <h4 className='uday'>Uday Shankhar</h4>
</div>

                  <div className="dash">
                      <h3>Dashboard</h3>
                      <span>
                          <button type="button" className="button">Generate Report</button>
                      </span>
                  </div>
              
                  <div className="box">
                      <div className="boxes">
                          <div className="box1">
                              <h4 className="earnings-monthly">Earnings(Monthly)</h4>
                              <p className="dollars">$40,000</p>
                              <span className="calender-icon"><CalendarTodayRoundedIcon /></span>
                          </div>
                      </div>

                      <div className="box2">
                          <h4 className="earnings-monthly">Earnings(Annually)</h4>
                          <p className="annual-dollar">$40,000</p>
                          <span className="calender-icon"><AttachMoneyRoundedIcon /></span>
                      </div>

                      <div className="box3">
                          <h4 className="earnings-monthly">Tasks</h4>
                          <p className="tasks">50%</p>
                          <span className="task-icon"><AssignmentRoundedIcon /></span>
                      </div>

                      <div className="box4">
                          <h4>Pending Request</h4>
                          <p className="dollars">18</p>
                          <span className="pending-icon"><MessageRoundedIcon /></span>
                      </div>
                  </div>

<div className='Mainbody'>
    <img src= {img1} alt='' className='line'></img>
    <img src= {img2} alt="" className="donut"/>
</div>

                  <div className="after-charts">
                      <div className="project">

                          <div class="card shadow mb-4">
                              <div class="card-header py-3">
                                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                              </div>
                              <div class="card-body">
                                  <h4 class="small font-weight-bold">Server Migration <span
                                      class="float-right">20%</span></h4>
                                  <div class="progress mb-4">
                                      <div class="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }}
                                          aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Sales Tracking <span
                                      class="float-right">40%</span></h4>
                                  <div class="progress mb-4">
                                      <div class="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }}
                                          aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Customer Database <span
                                      class="float-right">60%</span></h4>
                                  <div class="progress mb-4">
                                      <div class="progress-bar" role="progressbar" style={{ width: "60%" }}
                                          aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Payout Details <span
                                      class="float-right">80%</span></h4>
                                  <div class="progress mb-4">
                                      <div class="progress-bar bg-info" role="progressbar" style={{ width: "80%" }}
                                          aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <h4 class="small font-weight-bold">Account Setup <span
                                      class="float-right">Complete!</span></h4>
                                  <div class="progress">
                                      <div class="progress-bar bg-success" role="progressbar" style={{ width: "100%" }}
                                          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="color-sys">
                          <div class="row">
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-primary text-white shadow">
                                      <div class="card-body">
                                          Primary
                                          <div class="text-white-50 small">#4e73df</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-success text-white shadow">
                                      <div class="card-body">
                                          Success
                                          <div class="text-white-50 small">#1cc88a</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-info text-white shadow">
                                      <div class="card-body">
                                          Info
                                          <div class="text-white-50 small">#36b9cc</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-warning text-white shadow">
                                      <div class="card-body">
                                          Warning
                                          <div class="text-white-50 small">#f6c23e</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-danger text-white shadow">
                                      <div class="card-body">
                                          Danger
                                          <div class="text-white-50 small">#e74a3b</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-secondary text-white shadow">
                                      <div class="card-body">
                                          Secondary
                                          <div class="text-white-50 small">#858796</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-light text-black shadow">
                                      <div class="card-body">
                                          Light
                                          <div class="text-black-50 small">#f8f9fc</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 mb-4">
                                  <div class="card bg-dark text-white shadow">
                                      <div class="card-body">
                                          Dark
                                          <div class="text-white-50 small">#5a5c69</div>
                                      </div>
                                  </div>
                              </div>


                          </div>
                      </div>


                      <div>
                          <div className="illustrations">
                              <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                              <hr />
                              <a href="https://undraw.co/">Browse Illustrations on unDraw</a>
                          </div>
                      </div>

                      <div>
                          <div className="development-approach">
                              <p className="title">
                                  Development Approach
                              </p>
                              <p className="cont">
                                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                                  Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                              </p>
                          </div>
                      </div>


                      <div className="footer">
                          <p>Copyright © Your Website 2021</p>
                      </div>

                  </div>


</div>
</div>
 </div>
  )
}

export default NavSidebar;