import React, { useState, useEffect, } from "react";
import "./Homescreen.css";
import { FaHandsHelping, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import MeSection from "./MeSection/MeSection";
import Dashboard from "./Dashboard/Dashboard";
import MyFinances from "./MyFinances/MyFinances";
import MyTeam from "./MyTeam/MyTeam";
import Organisation from "./Organisation/Organisation";
import { Dropdown } from 'react-bootstrap';
import Login from "./Login/Login";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { BsInbox } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import Inbox from "./Inbox/Inbox";

const Homescreen = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [pageName,setPageName]=useState("summary")
  const [pageNameMyTeam,setPageNameMyTeam]=useState("summary")
  const [pageNameOrg,setPageNameOrg] =useState("organisation")
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItemMe, setSelectedItemMe] = useState("leave");
  const [homePage,setHomePage]=useState("login")
  const pageTwo = "login"
  const navigate=useNavigate()
  const [isFilteredContentVisible, setFilteredContentVisibility] =
    useState(false);
    const {EMAIL_VALUE}=useSelector((state)=>
      state.getEmail)

    // const setPageNameCallback = (pageName) => {
    //   setSelectedItem(pageName);
    // };

  const employees = [
    {
      id: 0,
      name: "Abhishek",
      role: "Software Engineer",
      department: "Technical Team",
      location: "Bangalore",
      email: "john.doe@example.com",
      mobileNo: "123-456-7890",
    },
    {
      id: 1,
      name: "Mohith hhh",
      role: "UI/UX Designer",
      department: "Design Team",
      location: "Bangalore",
      email: "jane.smith@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 2,
      name: "Arpan khan",
      role: "Team lead",
      department: "Technical Team",
      location: "Bangalore",
      email: "arpan@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 3,
      name: "laxman jhh",
      role: "Associate Engineer",
      department: "Technical Team",
      location: "Bangalore",
      email: "laxman@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 4,
      name: "Himanshu hh",
      role: "Associate Engineer",
      department: "Technical Team",
      location: "Bangalore",
      email: "himanshu@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design Team",
      location: "Bangalore",
      email: "jane.smith@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 6,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design Team",
      location: "Bangalore",
      email: "jane.smith@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 7,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design Team",
      location: "Bangalore",
      email: "jane.smith@example.com",
      mobileNo: "987-654-3210",
    },
    {
      id: 8,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design Team",
      location: "Bangalore",
      email: "jane.smith@example.com",
      mobileNo: "987-654-3210",
    },
  ];

  

 

  const leftSec = () => {
    return (
      <div className="sidebarHome">
        <div className="logoSection">
          <img
            height="25"
            width="69"
            src="https://cdn.kekastatic.net/shared/branding/logo/keka-logo-light.svg"
            alt="Keka logo"
          />
        </div>
        <div
          className={`unSelected ${selectedItem === "home" && "selectedSec"}`}
          onClick={() => setSelectedItem("home")}
        >
          <FaHome style={{ fontSize: "1.2rem" }} />
          Home
        </div>
        <div className={`unSelected ${selectedItem === "me" && "selectedSec"}`} onClick={() => setSelectedItem("me")}>
  <FaUser style={{ fontSize: "1.2rem" }} />
  Me
  <span className="hoverAppear">
    <div onClick={()=>setSelectedItemMe("leave")}>Leave</div>
    <div onClick={()=>setSelectedItemMe("attendence")}>Attendance</div>
    <div onClick={()=>setSelectedItemMe("performance")}>Performance</div>
    <div onClick={()=>setSelectedItemMe("expenses")}>Expenses and Travel</div>
  </span>
</div>
<div
          className={`unSelected ${selectedItem === "inbox" && "selectedSec"}`}
          onClick={() => setSelectedItem("inbox")}
        >
          <BsInbox style={{ fontSize: "1.2rem" }} />
          Inbox
        </div>

        <div
          className={`unSelected ${selectedItem === "myTeam" && "selectedSec"}`}
          onClick={() => setSelectedItem("myTeam")}
        >
          <FaUsers style={{ fontSize: "1.2rem" }} />
          My Team
          <span className="hoverAppear">
    <div  onClick={()=>setPageNameMyTeam("summary")}>Summary</div>
    <div  onClick={()=>setPageNameMyTeam("employee")}>Employees</div>
  </span>
        </div>
        <div
  className={`unSelected ${selectedItem === "myFinances" && "selectedSec"}`}
  onClick={() => setSelectedItem("myFinances")}
>
  <BiRupee style={{ fontSize: "1.2rem" }} />
  My Finances
  <div className="hoverAppear">
    <div onClick={() => setPageName("summary")}>Summary</div>
    <div onClick={() => setPageName("mypay")} className="mypayAppear">
      Mypay 
    </div>
    <div onClick={() => setPageName("tax")} className="mypayAppear">
      Manage Tax
    </div>
  </div>
</div>



        <div
          className={`unSelected ${selectedItem === "org" && "selectedSec"}`}
          onClick={() => setSelectedItem("org")}
        >
          <CgOrganisation style={{ fontSize: "1.2rem" }} />
          Org
          <div className="hoverAppear">
    <div onClick={() => setPageNameOrg("organisation")}>Organisation Tree</div>
    <div onClick={() => setPageNameOrg("documents")} className="mypayAppear">
    Documents
    </div>
    <div onClick={() => setPageNameOrg("engage")} className="mypayAppear">
   Engage
    </div>
    {/* <div onClick={() => setPageName("tax")} className="mypayAppear">
      Manage Tax
    </div> */}
  </div>
        </div>
      </div>
    );
  };

  const currentPageView = () => {
    if (selectedItem === "home") {
      return <Dashboard  setSelectedItemMe={setSelectedItemMe} selectedItemMe={selectedItemMe} setSelectedItem={setSelectedItem}/>;
    } else if (selectedItem === "me") {
      return <MeSection  selectedItemMe={selectedItemMe} setSelectedItemMe={setSelectedItemMe}/>;
    } else if (selectedItem === "myFinances") {
      return <MyFinances  pageName={pageName} setPageName={setPageName}/>;
    } else if (selectedItem === "myTeam") {
      return <MyTeam  pageNameMyTeam={pageNameMyTeam} setPageNameMyTeam={setPageNameMyTeam}/>;
    } else if (selectedItem === "org") {
      return <Organisation pageNameOrg={pageNameOrg} setPageNameOrg={setPageNameOrg} />;
    }else if (selectedItem === "inbox") {
      return <Inbox/>;
    }
    else{
      return homePage !== undefined && <Login homePage={"login"} setHomePage={setHomePage} pageTwo={pageTwo}/>
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filteredResults = employees.filter((ele) =>
      ele.name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredResults);
    setFilteredContentVisibility(
      searchTerm.length >= 3 && filteredData.length > 0
    );
  };

  useEffect(() => {
    setSearch("");
    setFilteredContentVisibility(false);
  }, [selectedItem]);

  const handleMenuItemClick = (menuItem) => {
    console.log("menuItem",menuItem)
    switch (menuItem) {
      case "Profile":
        // Handle profile click
        break;
      case "Change Password":
        setHomePage("reset");
        // navigate("/")
        break;
      case "Logout":
        setHomePage("login");
        // navigate("/")
        // Handle logout click
        break;
      default:
        setHomePage("login");
        break;
    }
  };




  const rightSec = () => {
    return (
      <div className="mainSecHome" onBlur={()=>{
        setSearch("")
        setFilteredContentVisibility(false)

      }}>
        <div className="mainSecTop d-flex justify-content-between align-items-center">
          <div style={{ color: "#ffffff" }} className="ms-2">
            Block stack Pvt. Ltd.{" "}
          </div>
          <input
            type="search"
            className="dashboardSearch px-2"
            placeholder="Search employees or actions (Ex: Apply leave, Attendence approval) "
            value={search}
            onChange={handleChange}
          />

          <div className="me-4 d-flex gap-3">
          <Dropdown>
      <Dropdown.Toggle  id="dropdown-name">
        {EMAIL_VALUE.split('@')[0]}
     </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleMenuItemClick()}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={() => {handleMenuItemClick() 
          // setPageName('reset')
           }}>
          Change Password
          
        </Dropdown.Item>
        <Dropdown.Item onClick={() => { 
          handleMenuItemClick('Logout')
          }}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <div className="profileHeader text-center py-1">AG</div>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ position: "relative" }}
        >
          {isFilteredContentVisible ? (
            filteredData.length > 0 ? (
              <div
                className="filteredContent d-flex flex-column justify-content-center"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "48%",
                  transform: "translate(-50%, -5%)",
                  zIndex: "1",
                }}
              >
                {filteredData.map((item, index) => (
                  <div
                    className="d-flex justify-content-between ms-4"
                    key={index}
                  >
                    <div className="profileHeader text-center py-1">AG</div>
                    <p style={{ color: "#ffffff", fontSize: "1vw" }}>
                      {item.name}
                    </p>
                    <p
                      style={{ color: "#ffffff", fontSize: "1vw" }}
                      className="me-4"
                    >
                      {item.department}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="filteredContent text-center"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "48%",
                  transform: "translate(-50%, -5%)",
                  zIndex: "1",
                }}
              >
                <div
                  className="mt-4"
                  style={{ color: "#ffffff", fontSize: "1vw" }}
                >
                  {" "}
                  No users found
                </div>
              </div>
            )
          ) : null}
        </div>

        <div>
          <div className="mainSecBottom">{currentPageView()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="homeScreenContainer">
      {leftSec()}
      {rightSec()}
    </div>
  );
};

export default Homescreen;
