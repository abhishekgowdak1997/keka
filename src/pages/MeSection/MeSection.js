import React, { useState,useEffect } from "react";
import "./MeSection.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  FaChartLine,
  FaInfoCircle,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { BiFingerprint } from "react-icons/bi";
import { Dropdown,Modal } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { SlSpeedometer } from "react-icons/sl";

const MeSection = ({selectedItemMe,setSelectedItemMe}) => {
  // const [selectedItem, setSelectedItem] = useState("leave");
  const [selectedLogSection, setSelectedLogSection] = useState("attendanceLog");
  const [logSelectedMonth, setLogSelectedMonth] = useState("30Days");
  const [selectedYear, setSelectedYear] = useState('Jan2024 -Dec2024');
  const [activeReview, setActiveReviews] = useState('myreview');
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
 const [leavePolicyModalOpen,setLeavePolicyModalOpen]=useState(false)
 const [selectTab,setSelectedTab]=useState("feedback")
 const [storedTime, setStoredTime] = useState("00h:00m");
 const [formattedDifference, setFormattedDifference] = useState(localStorage.getItem('formattedDifference',"00h:00m"))
 const [performanceTab,setPerformanceTab]=useState("myperform")
 const [feedbackTab,setFeedbackTab]=useState("recieved")
 const [piptab,setPipTab]=useState("inprocess")
 const [workFromHomeModal,setWorkFromHomeModal]=useState(false)
 const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        data: [100, 1, 1, 100, 1, 1, 1],
        backgroundColor: "#716897",
      },
    ],
  };

  const labels2 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data2 = {
    labels: labels2,
    datasets: [
      {
        data: [100, 1, 1, 100, 1, 1, 1, 100, 1, 1, 1, 100],
        backgroundColor: "#716897",
      },
    ],
  };

  const data3 = {
    labels: ["Remaining", "Consumed"],
    datasets: [
      {
        data: [4, 1],
        backgroundColor: ["#326fa8", "grey"],
        borderColor: "transparent",
      },
    ],
  };
  const data4 = {
    labels: ["Remaining", "Consumed"],
    datasets: [
      {
        data: [4, 2],
        backgroundColor: ["green", "grey"],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: false,
        },

        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const options2 = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    layout: {
      margin: {
        left: 30,
        right: 0,
        top: 10,
        bottom: 10,
      },
    },

    cutout: 50,
    plugins: {
      legend: {
        display: false,
        position: "right",

        align: "center",
      },
    },
  };

  const handleSelectedYear = (year) => {
    setSelectedYear(year);
    // You can add logic here to fetch and display the payslips for the selected month.
  };

  const handleClickPerformanceTab=(tab)=>{
    setPerformanceTab(tab)
  }

  const handleClickFeedbackTab=(tab)=>{
    setFeedbackTab(tab)
  }

  const handleClickPipTab =(tab)=>{
    setPipTab(tab)
  }

 
  useEffect(() => {
    let intervalId;

    if (!isClockedIn) {
      intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = currentTime?.getTime() - storedTime?.getTime();
        const positiveTimeDifference = Math.max(0, timeDifference);
        const hoursDifference = Math.floor(positiveTimeDifference / (1000 * 60 * 60));
        const minutesDifference = Math.floor((positiveTimeDifference % (1000 * 60 * 60)) / (1000 * 60));

        const newFormattedDifference = `${String(hoursDifference).padStart(2, '0')}h:${String(minutesDifference).padStart(2, '0')}m`;
        setFormattedDifference(newFormattedDifference);
      }, 60000); // Update every minute (60,000 milliseconds)
    }

    // Cleanup function to clear the interval when the component unmounts or when clocked out
    return () => clearInterval(intervalId);
  }, [isClockedIn, storedTime])

  
  
  const handleToggleClock = () => {
    setIsClockedIn(!isClockedIn);
    localStorage.setItem('isClockedIn', JSON.stringify(!isClockedIn));
    const formattedTime = new Date();

    if (isClockedIn) {
      setStoredTime(formattedTime);
    } else {
      console.log("formatted", formattedTime);

     
      const timeDifference = formattedTime?.getTime() - storedTime.getTime();
      const positiveTimeDifference = Math.max(0, timeDifference);
      const hoursDifference = Math.floor(positiveTimeDifference / (1000 * 60 * 60));
const minutesDifference = Math.floor((positiveTimeDifference % (1000 * 60 * 60)) / (1000 * 60));

const formattedDifference = `${String(hoursDifference).padStart(2, '0')}h:${String(minutesDifference).padStart(2, '0')}m`;
      setFormattedDifference(formattedDifference);

      console.log("Time Difference: ", formattedDifference);
    }
  };
  




  const openLeavePolicyModal = () => {
    setLeavePolicyModalOpen(true);
  };
 
  const closeLeavePolicyModal = () => {
    setLeavePolicyModalOpen(false);
  };

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const today = new Date();

  const option = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };

const formattedDate = new Intl.DateTimeFormat('en-US', option).format(today)




  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const topSec = () => {
    return (
      <div className="navbarSec p-2">
      <div
        onClick={() => setSelectedItemMe("leave")}
        style={{ cursor: "pointer" }}
        className={`menuItem ${
          selectedItemMe === "leave" ? "dashboardActive" : ""
        }`}
      >
        LEAVE
      </div>
      <div
        onClick={() => setSelectedItemMe("attendence")}
        style={{ cursor: "pointer" }}
        className={`menuItem ${
          selectedItemMe === "attendence" ? "dashboardActive" : ""
        }`}
      >
        ATTENDENCE
      </div>
      <div
        onClick={() => setSelectedItemMe("performance")}
        style={{ cursor: "pointer" }}
        className={`menuItem ${
          selectedItemMe === "performance" ? "dashboardActive" : ""
        }`}
      >
        PERFORMANCE
      </div>
      <div
        onClick={() => setSelectedItemMe("expenses")}
        style={{ cursor: "pointer" }}
        className={`menuItem ${
          selectedItemMe === "expenses" ? "dashboardActive" : ""
        }`}
      >
        EXPENSES AND TRAVEL
      </div>
    </div>
    );
  };

  const leaveSec = () => {
    return (
      <div className="leaveSecContainer ms-4 mt-4">
        <div className="d-flex justify-content-between">
        <p className="headingText">Pending leave requests</p>
        <Dropdown onSelect={(eventKey) => handleSelectedYear(eventKey)}>
      <Dropdown.Toggle  id="dropdown-leave">
    {selectedYear}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="Jan2024 -Dec2024">Jan2024 -Dec2024</Dropdown.Item>
      <Dropdown.Item eventKey="Jan2023 -Dec2023">Jan2023 -Dec2023</Dropdown.Item>
        <Dropdown.Item eventKey="Jan2022 -Dec2022">Jan2022 -Dec2022</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="leaveRequestSecMain mt-2">
          <div className="leaveRequestSec leaveRequestSecLeft">
          <img height="80" width="80" src="https://cdn.kekastatic.net/shared/assets/images/background/elephant.png" alt="nothingHere" className="ms-4"/>
            <p>
              Nothing here. <br />
              <span className="subText">
                Working hard yeah?? Request time off on the right
              </span>
            </p>
          </div>
          <div className="leaveRequestSec leaveRequestSecRight">
            <button className="requestLeaveBtn">Request Leave</button>
            <div className="linkStyle" onClick={openLeavePolicyModal}>
              Leave policy explanation
            </div>
            {leavePolicyModalOpen && (
        <div>
         
         <Modal show={openLeavePolicyModal} id="dashboardModalsT" className='modalContent'>
        <Modal.Header >
          <Modal.Title>Leave policy explanation</Modal.Title>
          <IoIosCloseCircle style={{height:"40px",width:"40px",cursor:"pointer"}} onClick={closeLeavePolicyModal}/>
        </Modal.Header>
        <Modal.Body>
        




 </Modal.Body>
      </Modal>
        </div>
      )}
          </div>
        </div>
        <p className="headingText">My Leave Stats</p>
        <div className="myLeaveStatsMain">
          <div className="myLeaveStats myLeaveStatsLeft">
            <p className="sectionHeading">Weekly Pattern</p>
            <Bar data={data} options={options} height="100" width="200" />
          </div>
          <div className="myLeaveStats myLeaveStatsMid">
            <p className="sectionHeading">Consumed Leave Types</p>
            <Bar data={data} options={options} height="100" width="200" />
          </div>
          <div className="myLeaveStats myLeaveStatsRight">
            <p className="sectionHeading">Monthly Stats</p>
            <Bar data={data2} options={options} height="100" width="300" />
          </div>
        </div>

        <p className="headingText">Leave Balances</p>
        <div className="leaveBalancesMain">
          <div className="leaveBalances ">
            <div className="leaveBalanceHeader">
              <p className="sectionHeading">Casual leave</p>
              <p className="sectionHeading">
                <a href="/" className="linkStyle">
                  View details
                </a>
              </p>
            </div>

            <div className="chartContainer">
              <Doughnut data={data3} options={options2} />
            </div>
            <div className="leaveTableData">
              <div className="leftTb">
                <div className="topLeft">
                  <span className="available">Available</span>
                  <span className="infinite">15</span>
                </div>
                <div className="topLeft bottomLeft">
                  <span className="available">Accrued so far</span>
                  <span className="infinite">15</span>
                </div>
              </div>
              <div className="rightTb">
                <div className="topLeft topRight">
                  <span className="available">Consumed</span>
                  <span className="infinite">3</span>
                </div>
                <div className="topLeft bottomRight">
                  <span className="available">Annual quota</span>
                  <span className="infinite">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="leaveBalances ">
            <div className="leaveBalanceHeader">
              <p className="sectionHeading">Comp Offs</p>
              <p className="sectionHeading">
                <a href="/" className="linkStyle">
                  View details
                </a>
              </p>
            </div>
            <div className="chartContainer">
              <Doughnut data={data3} options={options2} />
            </div>
            <div className="leaveTableData">
              <div className="leftTb">
                <div className="topLeft">
                  <span className="available">Available</span>
                  <span className="infinite">15</span>
                </div>
                <div className="topLeft bottomLeft">
                  <span className="available">Accrued so far</span>
                  <span className="infinite">15</span>
                </div>
              </div>
              <div className="rightTb">
                <div className="topLeft topRight">
                  <span className="available">Consumed</span>
                  <span className="infinite">3</span>
                </div>
                <div className="topLeft bottomRight">
                  <span className="available">Annual quota</span>
                  <span className="infinite">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="leaveBalances ">
            <div className="leaveBalanceHeader">
              <p className="sectionHeading">Paid Leave</p>
              <p className="sectionHeading">
                <a href="/" className="linkStyle">
                  View details
                </a>
              </p>
            </div>
            <div className="chartContainer">
              <Doughnut data={data4} options={options2} />
            </div>
            <div className="leaveTableData">
              <div className="leftTb">
                <div className="topLeft">
                  <span className="available">Available</span>
                  <span className="infinite">15</span>
                </div>
                <div className="topLeft bottomLeft">
                  <span className="available">Accrued so far</span>
                  <span className="infinite">15</span>
                </div>
              </div>
              <div className="rightTb">
                <div className="topLeft topRight">
                  <span className="available">Consumed</span>
                  <span className="infinite">3</span>
                </div>
                <div className="topLeft bottomRight">
                  <span className="available">Annual quota</span>
                  <span className="infinite">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="headingText">Leave history</p>
        <div className="leaveHistorySec">
          <div className="leaveHistoryMain">
            <div className="leavehistoryBox">No leave history to show</div>
          </div>
        </div>
      </div>
    );
  };

  const attendanceSec = () => {
    return (
      <div className="attendanceSecContainer">
        <div className="attendanceTopSec">
          <div className="attendanceStatsSec">
            <p className="headingText">Attendance Stats</p>
            <div className="attendanceStatsMain">
              <div className="attendanceStatsMainTop">
                <p className="">Last Week</p>
                <div className="infoTooltip">
                <FaInfoCircle />
                <div className="workingHours">
                <div>Total effective hours : 47:54</div>
                <div>Average Working hours : 9:35</div>
                <div>Total Working days : 5</div>
                </div>
                </div>
              </div>
              <div className="attendanceStatsMainSubTop">
                <p className="subText avgHoursStyle"></p>
                <p className="subText avgHoursStyle">AVG HRS/Day</p>
                <p className="subText avgHoursStyle">On Time Arrival</p>
              </div>
              <div className="attendanceStatsMainMid">
                <div className="profilePic">
                  <FaUserCircle className="userDPStyle" />
                  <span>Me</span>
                </div>
                <div className="avgHours">
                  <p>09h 38min</p>
                </div>
                <div className="onTimeArrival">
                  <p>100%</p>
                </div>
              </div>
              <hr className="horizontalLine" />
              <div className="attendanceStatsMainMid mt-1">
                <div className="profilePic teamProfilePic">
                  <FaUserFriends className="usersDPStyle" />
                  <span>My Team</span>
                </div>
                <div className="avgHours">
                  <p>09h 45min</p>
                </div>
                <div className="onTimeArrival">
                  <p>80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="attendanceStatsSec attendanceTimingSec">
            <p className="headingText">Timing</p>
            <div className="attendanceStatsMain">
              <div className="dailyTimingWeekMain">
                <div className="dailyTimingWeek">
                
                <div className={currentDayIndex === 1 ? "timingDaysSelected" : "timingDays"}>M</div>
                <div className={currentDayIndex === 2 ? "timingDaysSelected" : "timingDays"}>T</div>
                <div className={currentDayIndex === 3 ? "timingDaysSelected" : "timingDays"}>W</div>
                <div className={currentDayIndex === 4 ? "timingDaysSelected" : "timingDays"}>T</div>
                <div className={currentDayIndex === 5 ? "timingDaysSelected" : "timingDays"}>F</div>
                <div className={currentDayIndex === 6 ? "timingDaysSelected" : "timingDays"}>S</div>
                <div className={currentDayIndex === 0 ? "timingDaysSelected" : "timingDays"}>S</div>
                </div>
                <div className="trackingPolicy">
                  <FaChartLine className="trackingImg" />
                  <BiFingerprint className="trackingImg" />
                </div>
              </div>
              <div className="todayTiming">
                <p className="todayTimingText">Today (9:00 Am - 6:30 PM)</p>
              </div>
              <div className="timingStatusBar">
                <span className="timingStatusBarMid"></span>
              </div>
              <div className="timingDurationMain mt-4">
                <span>Duration: 9h 30m</span>
                <span>Break: 30 Min</span>
              </div>
            </div>
          </div>
          <div className="attendanceStatsSec attendanceActionsSec">
            <p className="headingText">Actions</p>
            <div className="attendanceStatsMain actionsMainSec">
              <div className="actionLeftSec mt-4 ms-2">
                <div className="liveTime ms-2">{formattedTime}</div>
                <span className="ms-2">{formattedDate}</span>
                <div>
                <span className="ms-2 totalHours" style={{cursor:"pointer"}}  title="These hours are calculated w.r.t Web and forgot id clock-ins/outs for the current day only. Bio-metric clock-ins are not considered.">
                  Total Hours <FaInfoCircle />
                  
                </span>
                </div>
                <span className="ms-2">Effective:{formattedDifference}</span>
                <span className="ms-2">Gross: {formattedDifference}</span>
              </div>
              <div className="actionLeftSec actionRightSec mt-4">
                <button className="" onClick={handleToggleClock}> {!isClockedIn ? "Web-Clock-in" : "Web-Clock-out"}</button>
               
                <span>{isClockedIn ?`${formattedDifference} since logged in`: `${storedTime}  hours logged in` }</span>

      
                <span style={{color:"#2986ce",cursor:"pointer"}} onClick={()=>setWorkFromHomeModal(true)}>Work From Home</span>
                {workFromHomeModal&& (
                  <div className="modalContentContainer mt-4">
                    <Modal
                      show={workFromHomeModal} 
                      id="dashboardModalsT" className='modalContent mt-4'
                    >
                      <Modal.Header style={{backgroundColor:"#273143"}}>
                        <Modal.Title className="text-white" style={{fontSize:"18px"}}>Request work from home</Modal.Title>
                        <IoIosCloseCircle
                          style={{
                            height: "40px",
                            width: "40px",
                            cursor: "pointer",
                            color:"#ffffff",
                            
                          }}
                          onClick={()=>setWorkFromHomeModal(false)}
                        />
                       
                       
                      </Modal.Header>
                      <Modal.Body style={{backgroundColor:"#273143",height:"75vh",display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        <div className="d-flex align-items-center gap-4 dateFieldModal">
                          <input type="text" placeholder="Select Date" className="dateField ms-1 py-4 opacity-100"/>
                          <div className="text-white">0 days</div>
                          <input type="text" placeholder="Select Date" className="dateField py-4 ms-1 text-center" />
                        </div>
                        <div style={{fontSize:"13px",color:"#2986CE"}} className="mt-1">Clock in is necessary on WFH days to avoid being marked absent</div>
                        <div className="mt-3">
                          <div className="text-white" style={{fontSize:"14px"}}>Reason</div>
                         
                          <textarea rows="3" cols={60} className="textAreaField mt-1"></textarea>
                        </div>
                        <div className="mt-3">
                          <div className="text-white" style={{fontSize:"14px"}}>Notify</div>
                          <input type="text" placeholder="Search Employee" className="searchEmployeeInputField mt-1 px-2"/> 
                        </div>
                       
                      
                    
                       
                       </Modal.Body>
                       <div className="d-flex justify-content-end" style={{backgroundColor:"#273143"}}>
                        <div className="mb-2">
                        <button onClick={()=>setWorkFromHomeModal(false)} className="cancelButton px-2">Cancel</button>
                        <button className="ms-3 requestButton me-3">Request</button>
                        </div>
                      </div>
                     
                      
                    </Modal>
                    </div>
                  )
                
                }
                <span style={{color:"#2986ce"}}>Partial Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="attendanceBottomSec mt-4">
          <p className="headingText">Logs & Requests</p>
          <div className="logHeader">
            <div
              className={`attendanceLogSec ${
                selectedLogSection === "attendanceLog" && "selectedLogSec"
              }`}
              onClick={() => setSelectedLogSection("attendanceLog")}
            >
              Attendance Log
            </div>
            <div
              className={`attendanceLogSec ${
                selectedLogSection === "shiftSchedule" && "selectedLogSec"
              }`}
              onClick={() => setSelectedLogSection("shiftSchedule")}
            >
              Shift Schedule
            </div>
            <div
              className={`attendanceLogSec ${
                selectedLogSection === "attendanceRequest" && "selectedLogSec"
              }`}
              onClick={() => setSelectedLogSection("attendanceRequest")}
            >
              Attendance Request
            </div>
          </div>

          <div className="attendanceLogTable">
            <div className="tableLogHeader mt-4">
              Last 30 Days
              <div className="monthSelected">
                <div
                  className={`unselectedMonthLog ${
                    logSelectedMonth === "30Days" && "selectedMonthLog"
                  }`}
                  onClick={() => setLogSelectedMonth("30Days")}
                >
                  30 Days
                </div>
                <div
                  className={`unselectedMonthLog ${
                    logSelectedMonth === "firstMonth" && "selectedMonthLog"
                  }`}
                  onClick={() => setLogSelectedMonth("firstMonth")}
                >
                  Jan
                </div>
                <div
                  className={`unselectedMonthLog ${
                    logSelectedMonth === "secondMonth" && "selectedMonthLog"
                  }`}
                  onClick={() => setLogSelectedMonth("secondMonth")}
                >
                  Feb
                </div>
                <div
                  className={`unselectedMonthLog ${
                    logSelectedMonth === "thirdMonth" && "selectedMonthLog"
                  }`}
                  onClick={() => setLogSelectedMonth("thirdMonth")}
                >
                  Mar
                </div>
              </div>
            </div>
            <div className="tableLogSubHeader mt-2">
              <p className="dateText">Date</p>
              <p className="attendanceVisiual">Attendance Visiualazation</p>
              <p className="effectiveHours">Effective Hours</p>
              <p className="grossHours">Gross Hours</p>
              <p className="arrival">Arrival</p>
              <p className="logTimeOut">Log</p>
            </div>
            <div className="tableContent mt-2">Table Content</div>
          </div>
        </div>
      </div>
    );
  };

  const feedbackPage=()=>{
    return(
      <div className="mt-4">
       <div className="performanceNavbarSec d-flex ms-4">
        <div className={feedbackTab==="recieved"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickFeedbackTab("recieved")} style={{cursor:"pointer",fontSize:"15px"}}>Feedback Recieved </div>
        <div className={feedbackTab==="given"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickFeedbackTab("given")} style={{cursor:"pointer",fontSize:"15px"}}> Feedback Given </div>
        </div> 
        {feedbackTab==="recieved"?
        <div>
        <h4 className="ms-4 mt-4">Feedbacks Recieved</h4>
        <div className="ms-4 opacity-50" style={{color:"#ffffff",fontSize:"14px"}}>
          This section contains the feedback that i have recieved from others.
          </div>
          <div className="mt-4 ms-4 feedbacksData d-flex flex-column align-items-center justify-content-center px-4">
              <div className="mt-2">
          <img alt="No Feedback Received" className="img-opacity-3" src="https://cdn.kekastatic.net/shared/assets/images/components/placeholder/feedback.svg"/>
          </div>
          <div className="opacity-50 text-center mt-2" style={{fontSize:"20px"}}>No Feedback Recieved</div>
          <div style={{color:"",fontSize:"13px"}} className="opacity-50 text-center">Request feedback from everyone</div>
          <button className="requestFeedbackButton mt-2">Request Feedback</button>
            </div>
        

      </div>:
      <div>
        <h4 className="ms-4 mt-4">Feedbacks Given </h4>
        <div className="ms-4 opacity-50" style={{color:"#ffffff",fontSize:"14px"}}>
         This section contains the feedback that i have given to others.
          </div>
          <div className="mt-4 ms-4 feedbacksData d-flex flex-column align-items-center justify-content-center px-4">
              <div className="mt-2">
          <img alt="No Feedback Received" className="img-opacity-3" src="https://cdn.kekastatic.net/shared/assets/images/components/placeholder/feedback.svg"/>
          </div>
          <div className="opacity-50 text-center mt-2" style={{fontSize:"20px"}}>No Feedback given</div>
          <div style={{color:"",fontSize:"13px"}} className="opacity-50 text-center">give feedback to your Team</div>
          </div>
            </div>
  }
      </div>
    )
  }

  const reviewPage=()=>{
    return(
      <div className="mt-4">
        <div className="performanceNavbarSec d-flex ms-4">
        <div className={performanceTab==="myperform"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickPerformanceTab("myperform")} style={{cursor:"pointer",fontSize:"15px"}}>My performance Reviews </div>
        <div className={performanceTab==="other"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickPerformanceTab("other")} style={{cursor:"pointer",fontSize:"15px"}}> Reviews given to others </div>
        </div>
        {performanceTab==="myperform"?
        <div>
        <h4 className="ms-4 mt-4">My Performance Reviews</h4>
        <div className="ms-4 opacity-50" style={{color:"#ffffff",fontSize:"14px"}}>
          The Following are the performance review in which i was reviewed.
          </div>
          <div className="mt-4 ms-4 noDataFound px-4">
            <div className="gotoProfile mt-4 d-flex align-items-center p-2" style={{color:"#2986CE"}}>No Data Available</div>
            </div>
        

      </div>:
      <div>
        <h4 className="ms-4 mt-4">Review given to Others </h4>
        <div className="ms-4 opacity-50" style={{color:"#ffffff",fontSize:"14px"}}>
          The Following are the reviews that i have submitted to others.
          </div>
          <div className="mt-4 ms-4 noDataFound px-4">
            <div className="gotoProfile mt-4 d-flex align-items-center p-2" style={{color:"#2986CE"}}>No Data Available</div>
            </div>
        </div>
  }
      </div>
    )
  }

  
  const improvementPage=()=>{
    return(
      <div className="mt-4">
      <div className="performanceNavbarSec d-flex ms-4">
        <div className={piptab==="inprocess"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickPipTab("inprocess")} style={{cursor:"pointer",fontSize:"15px"}}>In process</div>
        <div className={piptab==="completed"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickPipTab("completed")} style={{cursor:"pointer",fontSize:"15px"}}> Completed </div>
        </div>
        {piptab==="inprocess"?
      <div className="mt-4 ">
        <div className="ms-4 pipData d-flex  flex-column justify-content-center align-items-center">
          <div>
       <SlSpeedometer style={{height:"40px",width:"40px",cursor:"pointer"}}/>
       </div>
       <div className="mt-4">
       <h6>You're on track</h6>
       </div>
       <div style={{fontSize:"12px"}}>
        No Performance Improvement Plan (PIP)required.Keep up the great work!
        </div>
          </div>
        </div>
        :
      <div className="mt-4">
        <div className="ms-4 pipData d-flex  flex-column justify-content-center align-items-center">
          <div>
       <SlSpeedometer style={{height:"40px",width:"40px",cursor:"pointer"}}/>
       </div>
       <div className="mt-4">
       <div style={{fontSize:"15px"}}>You don't have any completed PIP yet</div>
       </div>
       </div>
          </div>  
      }
      </div>
    )
  }

  const performanceSec =()=>{
    return(
      <div>
     <div class="navbarSec d-flex p-2" style={{borderTop:"1px solid gray"}}>
    <div className='d-flex gap-5 ms-2'>
    <div
      onClick={() => setSelectedTab('feedback')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTab === 'feedback' ? 'dashboardActive' : ''}`}
    >
      Feedback
    </div>
    <div
      onClick={() => setSelectedTab('review')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTab === 'review' ? 'dashboardActive' : ''}`}
    >
   Review
    </div>
    <div
      onClick={() => setSelectedTab('improvement')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTab === 'improvement' ? 'dashboardActive' : ''}`}
    >
   Performance Improvement Plan (PIP)
    </div>
  </div>
        </div>
        <div>
  {selectTab === 'feedback' && feedbackPage()}
  {selectTab === 'review' && reviewPage()}
  {selectTab === 'improvement' && improvementPage()}

</div>
      </div>
    )
  }


  const expensesAndTravelSec =()=>{
    return(
      <div className="mt-4">
        <div className="expensesAndTravelSec d-flex align-items-center ms-4">
          <div style={{border:"1px solid #fd7e14",color:"#fd7e14",fontSize:"16px",borderRadius:"3px"}} 
          className="p-1 ms-4">Expense policy is not assigned yet. Please contact your HR administration to assign the Expense policy </div>


        </div>

      </div>
    )
  }

  const bottomSec = () => {
    if (selectedItemMe === "leave") {
      return <div>{leaveSec()}</div>;
    } else if (selectedItemMe === "attendence") {
      return <div>{attendanceSec()}</div>;
    }else if (selectedItemMe === "performance") {
      return <div>{performanceSec()}</div>;
    }else if (selectedItemMe === "expenses") {
      return <div>{expensesAndTravelSec()}</div>;
    }
  };

  return (
    <div className="meSection">
      {topSec()}
      {bottomSec()}
    </div>
  );
};

export default MeSection;
