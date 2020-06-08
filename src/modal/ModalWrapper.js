/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DoneIcon from "@material-ui/icons/Done";
import FlagIcon from "@material-ui/icons/Flag";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <MoreHorizIcon />
  </a>
));

function ModalWrapper(props) {
  return (
    <div>
      {props.isOpen && (
        <div className="ml-modal-close">
          <div className="ml-modal-close_lg">
            <CloseIcon
              fontSize="large"
              onClick={() => props.setModalOpen(false)}
            />
          </div>
          <div
            className="ml-modal-close_sm"
            onClick={() => props.setModalOpen(false)}
          >
            <ArrowBackIcon fontSize="small" />
            <span className="close-text">Back to memorial</span>
          </div>
        </div>
      )}
      <Modal
        backdrop="static"
        show={props.isOpen}
        onHide={() => props.setModalOpen(false)}
        dialogClassName="ml-modal"
      >
        <div className="ml-modal-wrapper container">
          <div
            className="ml-modal-top row"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0), 70%, #fff) center bottom, url(/assets/cover-pic.png) center top no-repeat",
            }}
          >
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} />

                <Dropdown.Menu alignRight>
                  <Dropdown.Item href="#/action-1">
                    <MailOutlineIcon fontSize="small" />
                    Contact owner
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <FlagIcon fontSize="small" />
                    Report this event
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="ml-modal-heading row">
            <div className="col">Celebration of life</div>
          </div>
          <div className="ml-modal-body row">
            <div className="left-col col-sm">
              <div className="ml-modal-date">
                <div className="ml-modal-icon ml-modal-icon_date">
                  <CalendarTodayIcon />
                </div>
                <div>
                  <p>Friday, October 20, 2019 9:00 AM - 2:00 PM</p>
                  <a href="#">Add to Calendar</a>
                </div>
              </div>
              <div className="ml-modal-location">
                <div className="ml-modal-icon ml-modal-icon_location">
                  <LocationOnIcon />
                </div>
                <div>
                  <p>St. Marry Church 2475 Ericsson Str., IL 60169, USA</p>
                  <a href="#">Show on map</a>
                </div>
              </div>
            </div>
            <div className="right-col col-sm">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehen. Voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint{" "}
              </p>
            </div>
          </div>
          <div className="ml-modal-footer row">
            <div className="col">
              <button className="ml-blue-btn">
                <DoneIcon fontSize="small" />
                Attending
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWrapper;
