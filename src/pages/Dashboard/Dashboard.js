import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';


import QuillEditor from "../QuillEditor";

const Dashboard = ({ setSelectedItemMe, setSelectedItem }) => {
  const [pageName, setPageName] = useState("dashboard");
  const [selectedTab, setSelectedTab] = useState("post");
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState("announcement");
  const [isClockedIn, setIsClockedIn] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [content, setContent] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [showEditorAbout, setShowEditorAbout] = useState(false);
  const [showEditorJob, setShowEditorJob] = useState(false);
  const [showEditorHobbies, setShowEditorHobbies] = useState(false);
  const [completedResponses, setCompletedResponses] = useState(0);
  const [responseAdded, setResponseAdded] = useState(false);
  const [responseAddedJob, setResponseAddedJob] = useState(false);
  const [responseAddedHobbies, setResponseAddedHobbies] = useState(false);
  const [holidayListOpen, setHolidayListOpen] = useState(false);
  const [selectOrganisation,setSelectOrganisation]=useState("organisation")
  const navigate = useNavigate();

  const handleToggleClock = () => {
    setIsClockedIn(!isClockedIn);
  };

  const handleEditorChange = (newContent) => {
    // Handle the updated content as needed
    setContent(newContent);
  };

  const handleAddResponseClick = () => {
    // Toggle the showEditor state when "Add Response" is clicked
    setShowEditorAbout(true);
  };

  const handleAddResponseClickJob = () => {
    setShowEditorJob(true);
  };

  const handleAddResponseClickHobbies = () => {
    setShowEditorHobbies(true);
  };

  const handleCloseResponseClick = () => {
    setShowEditorAbout(false);
    setContent("");
  };

  const handleCloseResponseClickJob = () => {
    setShowEditorJob(false);
    setContent("");
  };
  const handleCloseResponseClickHobbies = () => {
    setShowEditorHobbies(false);
    setContent("");
  };

  const handleSaveResponse = () => {
    setShowEditorAbout(false);
    setContent("");
    setCompletedResponses(completedResponses + 1);
    setResponseAdded(true);
    toast.success("Success! Added your response");
  };

  const handleSaveResponseJob = () => {
    setShowEditorJob(false);
    setContent("");
    setCompletedResponses(completedResponses + 1);
    setResponseAddedJob(true);
    toast.success("Success! Added job response");
  };
  const handleSaveResponseHobbies = () => {
    setShowEditorHobbies(false);
    setContent("");
    setCompletedResponses(completedResponses + 1);
    setResponseAddedHobbies(true);
    toast.success("Success! Added hobbies");
  };
  const selectionTab = (select) => {
    if (select === selectedTab) {
    }
  };

  const getHolidaysList = [
    {
      id: 0,
      date: "26/01/2024",
      holidayName: "Republic Day",
      day: "Friday",
      month:"January",
      color:"#64c3d1"
    },
    {
      id: 1,
      date: "14/02/2024",
      holidayName: "Valentine's Day",
      day: "Monday",
      month:"February",
      color:"#c2b89d"
    },
    {
      id: 2,
      date: "20/03/2024",
      holidayName: "Good Friday",
      day: "Friday",
      month:"March",
      color:"#c2b89d"
    },
    {
      id: 3,
      date: "09/04/2024",
      holidayName: "Ugadi",
      day: "Wednesday",
      month:"April",
      color:"#5d9ed3"
    },
    {
      id: 4,
      date: "01/05/2024",
      holidayName: "May Day",
      day: "Monday",
      month:"May",
      color:"#fbc02d"
    },
    {
      id: 5,
      date: "15/08/2024",
      holidayName: "Independence Day",
      day: "Thursday",
      month:"August",
      color:"#c2b89d"
    },
    {
      id: 6,
      date: "02/10/2024",
      holidayName: "Gandhi jayanthi",
      day: "Monday",
      month:"October",
      color:"#ec8686"
    },
    {
      id: 7,
      date: "21/11/2024",
      holidayName:"Deepavali",
      day: "Friday",
      month:"November",
      color:"#c2b89d"
    },
    {
      id: 8,
      date: "25/12/2024",
      holidayName: "Christmas",
      day: "Monday",
      month:"December",
      color:"#c2b89d"
    },
  ];

  const currentDate = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const closeHolidayListModal = () => {
    setHolidayListOpen(false);
  };

  const dropdownItems = [
    { key: 'announcement', label: 'Announcements', message: 'No Announcements',image:null },
    { key: 'birthday', label: '0 Birthdays', message: 'No Birthdays',image:"https://cdn.kekastatic.net/shared/assets/images/background/noone-has-birthday.svg" },
    { key: 'anniversary', label: '0 Work Anniversaries', message: 'No Work Anniversaries',image:null },
    { key: 'joinee', label: '0 New Joinees', message: 'No New Joinees',image:"https://cdn.kekastatic.net/shared/assets/images/background/noone-work-anniversary.svg" },
  ];

  const posts = [
    { key: 'post', label: 'Post', message: 'Write your post here and mention your peers' },
    { key: 'announcement', label: 'Announcement', message: 'Title of the Announcement' },
    { key: 'poll', label: 'Poll', message: 'Title of the Poll' },
    { key: 'praise', label: 'Praise', message: 'Give praise from here' },
  ];

  const handleSelectOrg=(tab)=>{
    setSelectOrganisation(tab)
}



  const dashboardPage = () => {
    return (
      <div>
        <div className="dashboardContent py-2">
          <div className="leftSide">
            <p className="headingText">Quick Access</p>
            <div className="content">
              <span>Inbox</span>
              <div className="inboxMainSec mb-2">
                <img
                  width="80"
                  className=" mt-2 ms-4"
                  alt="inbox"
                  src="https://cdn.kekastatic.net/shared/assets/images/background/inbox-blank.svg"
                />
                <div
                  className="mt-4 text-large"
                  style={{ color: "#A2A9B4", fontSize: "1.2vw" }}
                >
                  Good job!
                  <div
                    style={{ color: "#A2A9B4", fontSize: "1vw" }}
                    className="text-small"
                  >
                    you have no pending actions
                  </div>
                </div>
              </div>
            </div>
            <div className="content holidayCon">
              <div className="holidaySec">
                <div className="holidayTopSec">
                  <div className="inboxText">Holidays</div>
                  <div
                    className=""
                    style={{ color: "#2986ce", cursor: "pointer" }}
                    onClick={() => setHolidayListOpen(true)}
                  >
                    View All
                  </div>
                  {holidayListOpen && (
                    <Modal
                      show={holidayListOpen}
                      id="dashboardModalsT"
                      className="modalContent"
                    >
                      <Modal.Header style={{backgroundColor:"#273143"}}>
                        <Modal.Title className="text-white">List of Holidays</Modal.Title>
                        <IoIosCloseCircle
                          style={{
                            height: "40px",
                            width: "40px",
                            cursor: "pointer",
                            color:"#ffffff"
                          }}
                          onClick={closeHolidayListModal}
                        />
                      </Modal.Header>
                      <Modal.Body style={{backgroundColor:"#273143",height:"75vh",display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        {getHolidaysList.map((item, index) => (
                          <div
                            key={index}
                            className="mt-1  w-50"
                          >
                           
                            <div style={{width:"70px",height:"70px"}} className="d-flex justify-content-start">
                              <div className="ms-1">
                            <div className="text-white text-center px-4" style={{backgroundColor:item.color,borderBottom:"1px solid black",borderRadius:"2px"}}>{item.month.slice(0,3)} </div>
                            <div className="text-white text-center py-1 px-4" style={{border:`1px solid ${item.color}`,borderRadius:"2px",marginTop:"-2px"}}>{item.date.slice(0,2)}</div>
                           </div>
                           <div className="ms-3 w-50 mt-2">
                           <div className="text-white text-start" style={{fontSize:"14px",whiteSpace:"nowrap"}}>{item.holidayName}</div>
                            <div className="text-white opacity-50" style={{fontSize:"12px"}}>{item.day}</div>
                            
                           </div>
                          </div>
                          </div>
                        ))}
                      </Modal.Body>
                    </Modal>
                  )}
                </div>
                <div className="holidayBottomSec mt-2 ms-3">
                  <h3 className="headText ms-4">Valentine's Day</h3>
                  <p>Wed, 14 February, 2024</p>
                </div>
              </div>
            </div>
            <div className="content ">
              <div className="subSecHeading">On Leave Today</div>

              <div className="onLeaveTodaySec">
                <div className="text-large" style={{ color: "#A2A9B4" }}>
                  Everyone is working today!
                  <div style={{ color: "#A2A9B4" }} className="text-small">
                    No one is on leave today.
                  </div>
                </div>
                <img
                  width="90"
                  className="opacity-5 me-4"
                  style={{ marginTop: "-23px" }}
                  src="https://cdn.kekastatic.net/shared/assets/images/background/on-leave-today-dark.svg"
                  alt="attendence"
                />
              </div>
            </div>

            <div className="content ">
              <div className="subSecHeading">Working Remotely</div>

              <div className="onLeaveTodaySec">
                <div className="text-large" style={{ color: "#A2A9B4" }}>
                  Everyone is at office!
                  <div style={{ color: "#A2A9B4" }} className="text-small">
                    No one is working remotely today.
                  </div>
                </div>
                <img
                  width="150"
                  className="opacity-5 me-2"
                  src="https://cdn.kekastatic.net/shared/assets/images/background/working-remotely-dark.svg"
                  alt="attendence"
                />
              </div>
            </div>

            <div className="timeContent">
              <div className="onLeaveTodaySec">
                <div style={{ color: "#E4E6E9" }}>
                  Time Today-{formattedDate}
                </div>
                <div
                  style={{ color: "#E4E6E9", cursor: "pointer" }}
                  className="me-2"
                  onClick={() => {
                    setSelectedItem("me");
                    setSelectedItemMe("attendence");
                  }}
                >
                  View All
                </div>
              </div>
              <div className="onLeaveTodaySec timeContentSec">
                <div
                  className="mt-4 text-small"
                  style={{ color: "#ffffff", fontSize: "1vw" }}
                >
                  CURRENT TIME
                  <div style={{ color: "#ffffff", fontSize: "1.6vw" }}>
                    {formattedTime}
                  </div>
                </div>
                <div className="clockInOutTime">
                  <div className="clockout mt-4" onClick={handleToggleClock}>
                    {isClockedIn ? "Clock-in" : "Clock-out"}
                  </div>
                  <div className="otherDropdown mt-4 me-2 d-flex justify-content-center align-items-center">
                    Other
                  </div>
                </div>
              </div>
            </div>

            <div className="content ">
              <div className="ms-4">
                <div style={{ color: "#ffffff" }}>leave Balances</div>
              </div>
              <div className="leaveBalanceSec px-2 ms-3">
                <div>
                  <div className="leaveUpdate">40</div>
                  <div style={{ color: "#A2A9B4" }}>Paid leave</div>
                </div>
                <div>
                  <div className="leaveUpdate">2</div>
                  <div style={{ color: "#A2A9B4" }}>Sick leave</div>
                </div>
                <div>
                  <div className="leaveUpdate">0.58</div>
                  <div style={{ color: "#A2A9B4" }}>Casual leave</div>
                </div>
                <div
                  className="me-2"
                  onClick={() => {
                    setSelectedItem("me");
                    setSelectedItemMe("leave");
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.2vw",
                      color: "#2986CE",
                      cursor: "pointer",
                    }}
                  >
                    Request leave
                  </div>
                  <div
                    style={{
                      fontSize: "1.2vw",
                      color: "#2986CE",
                      cursor: "pointer",
                    }}
                  >
                    View all balances
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="postType">
              <div className={selectOrganisation==="organisation"?"organizationHeader":"organizationHeaderUnSelected"} onClick={()=>handleSelectOrg("organisation")}>Organization</div>
              <div className={selectOrganisation==="technical"?"organizationHeader":"organizationHeaderUnSelected"}  onClick={()=>handleSelectOrg("technical")}>
                Technical Team
              </div>
            </div>

            <div className="postContent ms-4 mt-4">
      <div className="postContainer px-2">
        {posts.map((post) => (
          <div
            key={post.key}
            className={selectedTab === post.key ? "postContentActive" : "postContentInactive"}
            onClick={() => {
              setSelectedTab(post.key);
              selectionTab(post.key);
            }}
          >
            {post.label}
          </div>
        ))}
      </div>
      <div className="horizontalLine opacity-25"></div>
      <div style={{ color: "#A2A9B4", fontSize: "1.2vw" }} className="mt-2 ms-2">
        {posts.find((post) => post.key === selectedTab)?.message || ''}
      </div>
    </div>

            <div className="postContent2 ms-4 mt-4 p-2">
      <div className="postContainer" style={{ color: "#ffffff" }}>
        {dropdownItems.map((item) => (
          <div
            key={item.key}
            className={selectedAnnouncement === item.key ? "postContentActive" : "postContentInactive"}
            onClick={() => setSelectedAnnouncement(item.key)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="horizontalLine opacity-25"></div>
      <div className="mt-4 ms-4">
        {selectedAnnouncement && (
          <>
            <div className="announcementImage">
              {dropdownItems.find((item) => item.key === selectedAnnouncement)?.image && (
                <img
                  src={dropdownItems.find((item) => item.key === selectedAnnouncement)?.image}
                  alt="Selected Announcement"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </div>
            <div className="noAnnouncementmsg px-2 mt-3 p-1">
              {dropdownItems.find((item) => item.key === selectedAnnouncement)?.message || ''}
            </div>
          </>
        )}
      </div>
    </div>
          </div>
        </div>
      </div>
    );
  };

  const welcomePage = () => {
    return (
      <div className="ms-4">
        <div className="d-flex">
          <div className="welcomeContent mt-4">
            <img
              className="h-150 w-100 object-fit-cover object-position-top-left ng-star-inserted"
              src="https://cdn.kekastatic.net/shared/assets/images/background/employee-profile-banner.png"
              alt="welcome"
            />
            <div className="text-center" style={{ marginTop: "-50px" }}>
              <h2 style={{ color: "#ffffff" }}>Abhishek gowda k</h2>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ color: "#ffffff" }}
            >
              <div>Associate Engineer</div>
              <div className="ms-4">Bangalore</div>
            </div>
          </div>
          <div className="profileSection ms-4 mt-4">
            <div className="ms-4 mt-2">
              <div className="d-flex gap-2">
                <div className="completion">100%</div>
                <div
                  style={{ color: "#ffffff", fontSize: "1.4vw" }}
                  className="mt-2"
                >
                  Profile completion
                </div>
              </div>
              <div
                style={{ color: "#A2A9B4", fontSize: "1vw" }}
                className="mt-1"
              >
                you have successfully completed your profile
              </div>
              <div
                className="gotoProfile mt-4 p-1 text-center me-2"
                style={{ color: "#ffffff", cursor: "pointer" }}
                onClick={() => navigate("/profile")}
              >
                Go to my profile
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="introductionContent mt-4 p-3">
            <div className="d-flex justify-content-between">
              <div
                style={{ color: "#ffffff", fontSize: "1.4vw" }}
                className="ms-4 mt-2 py-1"
              >
                Introduce yourself
                <div style={{ color: "#A2A9B4", fontSize: "1vw" }}>
                  We would love to know more about yourself
                </div>
              </div>

              <div className="completedSection me-4 mt-2">
                {completedResponses}/3
              </div>
            </div>
            {/* <div className='section d-flex justify-content-between align-items-center ms-4 mt-2'>
<div  style={{color:"#ffffff"}} className='ms-4'> About</div>
<div style={{ color: '#2986CE', cursor: 'pointer' }} className='me-4' onClick={handleAddResponseClick}>
  Add Response</div>
 
</div> */}

            {showEditorAbout ? (
              <div className="aboutContent p-2 ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-2 p-2">
                  About
                </div>
                <QuillEditor
                  className="p-2"
                  value={content}
                  onChange={handleEditorChange}
                  onClose={handleCloseResponseClick}
                  onSave={handleSaveResponse}
                  showButtons={true}
                />
              </div>
            ) : (
              <div className="section d-flex justify-content-between align-items-center ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-4">
                  About
                </div>
                {!responseAdded && (
                  <div
                    style={{ color: "#2986CE", cursor: "pointer" }}
                    className="me-4"
                    onClick={handleAddResponseClick}
                  >
                    Add Response
                  </div>
                )}
              </div>
            )}

            {showEditorJob ? (
              <div className="aboutContent p-2 ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-2 p-2">
                  What I Love about my job
                </div>
                <QuillEditor
                  className="p-2"
                  value={content}
                  onChange={handleEditorChange}
                  onClose={handleCloseResponseClickJob}
                  onSave={handleSaveResponseJob}
                  showButtons={true}
                />
              </div>
            ) : (
              <div className="section d-flex justify-content-between align-items-center ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-4">
                  What I Love about my job
                </div>
                {!responseAddedJob && (
                  <div
                    style={{ color: "#2986CE", cursor: "pointer" }}
                    className="me-4"
                    onClick={handleAddResponseClickJob}
                  >
                    Add Response
                  </div>
                )}
              </div>
            )}
            {showEditorHobbies ? (
              <div className="aboutContent p-2 ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-2 p-2">
                  My Interests and hobbies
                </div>
                <QuillEditor
                  className="p-2"
                  value={content}
                  onChange={handleEditorChange}
                  onClose={handleCloseResponseClickHobbies}
                  onSave={handleSaveResponseHobbies}
                  showButtons={true}
                />
              </div>
            ) : (
              <div className="section d-flex justify-content-between align-items-center ms-4 mt-2">
                <div style={{ color: "#ffffff" }} className="ms-4">
                  My Interests and hobbies
                </div>
                {!responseAddedHobbies && (
                  <div
                    style={{ color: "#2986CE", cursor: "pointer" }}
                    className="me-4"
                    onClick={handleAddResponseClickHobbies}
                  >
                    Add Response
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
<ToastContainer autoClose={3000} theme="dark" hideProgressBar={true} toastStyle={{ color: "green" }} />
</div>

          <div className="profileSection ms-4 mt-4">
            <div className="mt-2 ms-4" style={{ fontSize: "1.4vw" }}>
              We're here to assist you{" "}
            </div>
            <div className="d-flex gap-3 mt-2 ms-4">
              <div className="supportImageContent"></div>
              <div>
                <div style={{ color: "#2986CE", fontSize: "14px" }}>
                  Yamii kulshresta
                </div>
                <div style={{ fontSize: "14px" }}>Human Resource Manager</div>
              </div>
            </div>
            <div className="mt-3 ms-4">
              <div>Ph:889987656</div>
              <div style={{ color: "#2986CE", fontSize: "14px" }}>
                email:yamii@blockstack.tech
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="dashboardMainContainer" style={{ flex: 1 }}>
        <div className="navbarSec p-2">
          <div
            onClick={() => setPageName("dashboard")}
            style={{ cursor: "pointer" }}
            className={`menuItem ${
              pageName === "dashboard" ? "dashboardActive" : ""
            }`}
          >
            DASHBOARD
          </div>
          <div
            onClick={() => setPageName("welcome")}
            style={{ cursor: "pointer" }}
            className={`menuItem ${
              pageName === "welcome" ? "dashboardActive" : ""
            }`}
          >
            WELCOME
          </div>
        </div>

        <div>
          {pageName === "dashboard" && dashboardPage()}
          {pageName === "welcome" && welcomePage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
