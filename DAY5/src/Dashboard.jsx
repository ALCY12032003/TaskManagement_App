import React from 'react';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dash">
      <div className="dash-task-manager">
        <div className="dash-left-bar">
          <div className="dash-upper-part">
            <div className="dash-actions">
              <div className="dash-circle"></div>
              <div className="dash-circle-2"></div>
            </div>
          </div>

          <div className="dash-left-content">
            <ul className="dash-action-list">
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=124442&format=png" alt="" />
                <span>Inbox</span>
              </li>
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=7856&format=png" alt="" />
                <span> Today</span>
              </li>
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=GlEOr5x0aJpH&format=png" alt="" />
                <span>Upcoming</span>
              </li>
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=erf2gZI7ItB0&format=png" alt="" />
                <span>Important</span>
              </li>
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=10081&format=png" alt="" />
                <span>Meetings</span>
              </li>
              <li className="dash-item">
                <img className="small" src="https://img.icons8.com/?size=512&id=7837&format=png" alt="" />
                <span>Trash</span>
              </li>
            </ul>

            <ul className="dash-category-list">
              <li className="dash-item">
                <img className="dash-feather dash-feather-users" src="https://img.icons8.com/?size=512&id=8902&format=png" alt="" />
                <span>Family</span>
              </li>
              <li className="dash-item">
                <img className="dash-feather dash-feather-sun" src="https://img.icons8.com/?size=512&id=31914&format=png" alt="" />
                <span>Vacation</span>
              </li>
              <li className="dash-item">
                <img className="dash-feather dash-feather-trending-up" src="https://img.icons8.com/?size=512&id=SCXPsjoqmzAp&format=png" alt="" />
                <span>Festival</span>
              </li>
              <li className="dash-item">
                <img className="dash-feather dash-feather-zap" src="https://img.icons8.com/?size=512&id=SsbicED9ubOc&format=png" alt="" />
                <span>Concerts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="dash-page-content">
          <div className="dash-header">Today Tasks</div>
          <div className="dash-content-categories">
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-1" />
              <label className="dash-category" htmlFor="opt-1">All</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-2" checked />
              <label className="dash-category" htmlFor="opt-2">Important</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-3" />
              <label className="dash-category" htmlFor="opt-3">Notes</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-4" />
              <label className="dash-category" htmlFor="opt-4">Links</label>
            </div>
          </div>

          <div className="dash-tasks-wrapper">
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-1" checked />
              <label htmlFor="item-1">
                <span className="dash-label-text">Dashboard Design Implementation</span>
              </label>
              <span className="dash-tag approved">Approved</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-2" checked />
              <label htmlFor="item-2">
                <span className="dash-label-text">Create a userflow</span>
              </label>
              <span className="dash-tag progress">In Progress</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-3" />
              <label htmlFor="item-3">
                <span className="dash-label-text">Application Implementation</span>
              </label>
              <span className="dash-tag review">In Review</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-4" />
              <label htmlFor="item-4">
                <span className="dash-label-text">Create a Dashboard Design</span>
              </label>
              <span className="dash-tag progress">In Progress</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-5" />
              <label htmlFor="item-5">
                <span className="dash-label-text">Create a Web Application Design</span>
              </label>
              <span className="dash-tag approved">Approved</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-6" />
              <label htmlFor="item-6">
                <span className="dash-label-text">Interactive Design</span>
              </label>
              <span className="dash-tag review">In Review</span>
            </div>
            <div className="dash-header upcoming">Upcoming Tasks</div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-7" />
              <label htmlFor="item-7">
                <span className="dash-label-text">Dashboard Design Implementation</span>
              </label>
              <span className="dash-tag waiting">Waiting</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-8" />
              <label htmlFor="item-8">
                <span className="dash-label-text">Create a userflow</span>
              </label>
              <span className="dash-tag waiting">Waiting</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-9" />
              <label htmlFor="item-9">
                <span className="dash-label-text">Application Implementation</span>
              </label>
              <span className="dash-tag waiting">Waiting</span>
            </div>
            <div className="dash-task">
              <input className="dash-task-item" name="task" type="checkbox" id="item-10" />
              <label htmlFor="item-10">
                <span className="dash-label-text">Create a Dashboard Design</span>
              </label>
              <span className="dash-tag waiting">Waiting</span>
            </div>
          </div>
        </div>

        <div className="dash-right-bar">
          <div className="dash-top-part">
            <img className="dash-feather" src="https://img.icons8.com/?size=512&id=23265&format=png" alt="" />
            <div className="dash-count">6</div>
          </div>
          <div className="dash-header">Schedule</div>
          <div className="dash-right-content">
            <div className="dash-task-box dash-yellow">
              <div className="dash-description-task">
                <div className="dash-time">08:00 - 09:00 AM</div>
                <div className="dash-task-name">Product Review</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1' src={img1} alt="member" />
                <img className='img1' src={img2} alt="member-2" />
                <img className='img1'src={img7} alt="member-3" />
                <img className='img1' src={img4} alt="member-4" />
              </div>
            </div>
            <div className="dash-task-box dash-blue">
              <div className="dash-description-task">
                <div className="dash-time">10:00 - 11:00 AM</div>
                <div className="dash-task-name">Design Meeting</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1'src={img5} alt="member" />
                <img className='img1'src={img2} alt="member-2" />
                <img className='img1'src={img3} alt="member-3" />
              </div>
            </div>
            <div className="dash-task-box dash-red">
              <div className="dash-description-task">
                <div className="dash-time">01:00 - 02:00 PM</div>
                <div className="dash-task-name">Team Meeting</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1'src={img1} alt="member" />
                <img className='img1'src={img2} alt="member-2" />
                <img className='img1'src={img3} alt="member-3" />
                <img className='img1'src={img4} alt="member-4" />
              </div>
            </div>
            <div className="dash-task-box dash-green">
              <div className="dash-description-task">
                <div className="dash-time">03:00 - 04:00 PM</div>
                <div className="dash-task-name">Release Event</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1'src={img1} alt="member" />
                <img className='img1'src={img2} alt="member-2" />
                <img className='img1'src={img3} alt="member-3" />
                <img className='img1'src={img4} alt="member-4" />
                <img className='img1'src={img5} alt="member-5" />
              </div>
            </div>
            <div className="dash-task-box dash-blue">
              <div className="dash-description-task">
                <div className="dash-time">08:00 - 09:00 PM</div>
                <div className="dash-task-name">Release Event</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1'src={img1} alt="member" />
                <img className='img1'src={img2} alt="member-2" />
                <img className='img1'src={img3} alt="member-3" />
                <img className='img1'src={img4} alt="member-4" />
                <img className='img1'src={img5} alt="member-5" />
              </div>
            </div>
            <div className="dash-task-box dash-yellow">
              <div className="dash-description-task">
                <div className="dash-time">11:00 - 12:00 PM</div>
                <div className="dash-task-name">Practise</div>
              </div>
              <div className="dash-more-button"></div>
              <div className="dash-members">
                <img className='img1'src={img6} alt="member" />
                <img className='img1'src={img8} alt="member-2" />
                <img className='img1'src={img9} alt="member-3" />
                <img className='img1'src={img5} alt="member-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
