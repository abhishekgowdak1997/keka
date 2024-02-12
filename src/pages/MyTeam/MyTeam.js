import React,{useState} from 'react'
import './MyTeam.css'
import { Modal } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector } from 'react-redux';


const MyTeam =( {pageNameMyTeam, setPageNameMyTeam})=>{
    // const [pageName,setPageName]=useState("summary")
    const [isModalOpenOnTime, setModalOpenOnTime] = useState(false);
    const [isModalOpenLateArrival,setModalOpenLateArrival]=useState(false)
    const {CAPTCHA_VALUE}=useSelector((state)=>state.getEmail)

    const employees = [
        {
            id:0,
            name: "Abhishek",
            role: "Software Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "john.doe@example.com",
            mobileNo: "123-456-7890"
        },
        {
            id:1,
            name: "Mohith hhh",
            role: "UI/UX Designer",
            department: "Design Team",
            location: "Bangalore",
            email: "jane.smith@example.com",
            mobileNo: "987-654-3210"
        },
        {
            id:2,
            name: "Arpan khan",
            role: "Team lead",
            department: "Technical Team",
            location: "Bangalore",
            email: "arpan@example.com",
            mobileNo: "987-654-3210"
        },
        {
            id:3,
            name: "laxman jhh",
            role: "Associate Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "laxman@example.com",
            mobileNo: "987-654-3210"
        },
        {
            id:4,
            name: "Himanshu hh",
            role: "Associate Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "himanshu@example.com",
            mobileNo: "987-654-3210"
        },
        {
            id:5,
            name: "Shubham kumar",
            role: "Associate Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "shubham@gmail.com",
            mobileNo: "987-654-3210"
        },
        {
            id:6,
            name: "Jagadeesh",
            role: "Associate Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "jagadeesh@gmail.com",
            mobileNo: "987-654-3210"
        },
        {
            id:7,
            name: "Rupesh",
            role: "Associate Engineer",
            department: "Technical Team",
            location: "Bangalore",
            email: "rupesh@gmail.com",
            mobileNo: "987-654-3210"
        },
        {
            id:8,
            name: "Lokesh",
            role: "Tester",
            department: "Testing Team",
            location: "Bangalore",
            email: "loki@gmail.com",
            mobileNo: "987-654-3210"
        },
    ];

    const handleClickOnTime = () => {
        setModalOpenOnTime(true);
      };
     
      const handleCloseOnTime = () => {
        setModalOpenOnTime(false);
      };
     
      const handleClickLateArrival = () => {
        setModalOpenLateArrival(true);
      };
     
      const handleCloseLateArrival = () => {
        setModalOpenLateArrival(false);
      };


    const summaryPage =()=>{
        return(
           <div>
            <div className='d-flex gap-4'>
            <div className='summaryContent mt-4 ms-4'>
                 <div style={{color:"#ffffff",fontSize:"1.4vw"}} className='ms-4 mt-2'>Who is off today</div>
                 <div className='mt-3 ms-4 attendenceContent px-2'>
                    No employee is off today
                   
                 </div>
                 <div className="text-white"> {CAPTCHA_VALUE}</div>
               </div>

               <div className='summaryContent mt-4'>
               <div style={{color:"#ffffff",fontSize:"1.4vw"}} className='ms-4 mt-2'>Not in yet today</div>
               <div className='mt-3 ms-4 attendenceContent px-2'>
                    All employees are already in
                 </div>
               </div>
               </div>

               <div className='d-flex gap-4 ms-4 mt-4'>
                <div className="detailedEmployeeSummary">
                <div style={{color:"#ffffff",fontSize:"1.1vw", borderLeft: '3px solid blue',height:"80px" }} className='ms-4 mt-2'>
                    <div className='ms-4'>Employees On Time today</div>
                    <div className='mt-2 ms-4 d-flex justify-content-between'>
                    <div style={{color:"#ffffff",fontSize:"2vw"}}>1</div>
                    <div style={{color:"#2986ce",fontSize:"1.2vw",cursor:"pointer"}} className=' mt-2 me-2' onClick={handleClickOnTime}>View Employees</div>
                </div>
                </div>
                </div>
                <div className="detailedEmployeeSummary">
                <div style={{color:"#ffffff",fontSize:"1.1vw", borderLeft: '3px solid #98b433',height:"80px" }} className='ms-4 mt-2'>
                    <div className='ms-4'>Late Arrivals today</div>
                    <div className='mt-2 ms-4 d-flex justify-content-between'>
                    <div style={{color:"#ffffff",fontSize:"2vw"}}>1</div>
                    <div style={{color:"#2986ce",fontSize:"1.2vw",cursor:"pointer"}} className=' mt-2 me-2' onClick={handleClickLateArrival}>View Employees</div>
                </div>
                
                </div>
                </div>

                <div className="detailedEmployeeSummary">
                <div style={{color:"#ffffff",fontSize:"1.1vw", borderLeft: '3px solid #64c3d1',height:"80px" }} className='ms-4 mt-2'>
                    <div className='ms-4'>Work from Home/ on duty today</div>
                    <div className='mt-2 ms-4 d-flex justify-content-between'>
                    <div style={{color:"#ffffff",fontSize:"2vw"}}>1</div>
                </div>
                
                </div>
                </div>

                <div className="detailedEmployeeSummary">
                <div style={{color:"#ffffff",fontSize:"1.1vw", borderLeft: '3px solid #fbc02d',height:"80px" }} className='ms-4 mt-2'>
                    <div className='ms-4'>Remote clock-ins today</div>
                    <div className='mt-2 ms-4 d-flex justify-content-between'>
                    <div style={{color:"#ffffff",fontSize:"2vw"}}>1</div>
                </div>
                
                </div>
                </div>
                </div>
                <div className='teamCalender mt-4 ms-4 py-2'>
                
                <div className="calenderMonth mt-4 ms-4 px-2">
                  Nobody is on leave for the selected month
                </div>
                <div className='mt-4 ms-4'>
                <div className='d-flex justify-content-around'>
                   <div className='dot bg-accent-purple'>
                    <label className='labelClass mt-4'>Work from home </label>
                    </div>
                   <div className='dot bg-accent-purple'>
                    <label className='labelClass mt-4'>On duty</label>
                    </div>
                   <div className='dot bg-accent-purple'>
                   <label className='labelClass mt-4'> Paid leave</label>
                    </div>
                   <div className='dot bg-accent-purple '>
                    <label className='labelClass mt-4'>Unpaid leave </label>
                    </div>
                   <div className='dot bg-accent-purple '>
                    <label className='labelClass mt-4'>Leave due to attendence</label>
                    </div>
                   <div className='dot bg-accent-purple '>
                    <label className='labelClass mt-4'>Weekly off</label>
                    </div>
                   <div className='dot bg-accent-purple'>
                    <label className='labelClass mt-4'>Holiday</label>
                    </div>
                   <div className='dot bg-accent-purple'>
                    <label className='labelClass mt-4'>Work from home</label>
                    </div>
                    </div>
                </div>
              </div>


           </div>
        )
    }

    const employeePage =()=>{
        return(
            <div className='dashboardContent d-flex justify-content-around flex-wrap py-2'>
            {employees.map((employee,index) => (
                <div key={index} className="employeeContent ms-2 mt-4">
                    <div className='d-flex gap-3'>
                        <div className="img-initials mt-4 ms-4 text-white">
                            <div style={{color:"#ffffff",fontSize:"2vw"}} className='d-flex justify-content-center align-items-center mt-3'>{employee.name[0]}{employee.name.split(" ")[1] &&(employee.name.split(" ")[1])[0].toUpperCase()} </div>
                        </div>
                        <div className='mt-2'>
                    <h4 style={{color:"#ffffff",fontSize:"1.4vw"}} className='ms-4 mt-2'>{employee.name}</h4>
                    <p  style={{color:"#ffffff",fontSize:"1vw"}} className='ms-4'>{employee.role}</p>
                    <div className='ms-4'>
                    <div>
                        <span style={{ color: 'lightgrey', fontSize:"1vw" }}>Department: </span> 
                        <span style={{ color: 'white',fontSize:"1vw" }}>{employee.department}</span>
                    </div>
                    <div>
                        <span style={{ color: 'lightgrey',fontSize:"1vw" }}>Location: </span> 
                        <span style={{ color: 'white',fontSize:"1vw" }}>{employee.location}</span>
                    </div>
                    <div>
                        <span style={{ color: 'lightgrey',fontSize:"1vw" }}>Email: </span> 
                        <span style={{ color: 'white',fontSize:"1vw" }}>{employee.email}</span>
                    </div>
                    <div>
                        <span style={{ color: 'lightgrey',fontSize:"1vw" }}>Mobile No: </span> 
                        <span style={{ color: 'white',fontSize:"1vw" }}>{employee.mobileNo}</span>
                        </div>
                    </div>
                    </div>
                    <hr />
                </div>
                </div>
            ))}
        </div>
        )
    }


    return(
        <div className='dashboardMainContainer'>
             <div className='navbarSec d-flex p-2'>
            <div className='d-flex gap-4 ms-2'>
              <div
                onClick={() => setPageNameMyTeam('summary')}
                className={`menuItem ${pageNameMyTeam === 'summary' ? 'dashboardActive' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                SUMMARY
              </div>
              <div
                onClick={() => setPageNameMyTeam('employee')}
                className={`menuItem ${pageNameMyTeam === 'employee' ? 'dashboardActive' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                EMPLOYEES
              </div>
            </div>
          </div>
          
          <div>
            {pageNameMyTeam === 'summary' && summaryPage()}
            {pageNameMyTeam === 'employee' && employeePage()}
          </div>
          {isModalOpenOnTime && (
        <div  className="modalContentContainer">
          <Modal show={handleClickOnTime} id="dashboardModalsT" className='modalContent'>
        <Modal.Header  className='headerModal'>
          <Modal.Title>View Employees</Modal.Title>
          <IoIosCloseCircle style={{height:"40px",width:"40px",cursor:"pointer"}} onClick={handleCloseOnTime}/>
        </Modal.Header>
        <Modal.Body className='modalBody'>
            <div className='py-2'>
          <input type="text" placeholder='search employee' className='employeeSearchModal px-2'/>
          </div>
          <div className='d-flex justify-content-end'style={{border:"1px solid gray"}} >
            <div className='me-4 py-2'>Total 1</div>
          </div>
          <div style={{border:"1px solid gray"}}>
  <div className='d-flex justify-content-between py-2 px-2 w-100' style={{ backgroundColor: "#1b2531" }}>
    <div className='w-25'>Employee</div>
    <div className='w-25'>Department</div>
    <div className='w-25'>Sub Department</div>
    <div className='w-25 ms-2'>Location</div>
    <div className='w-25'>Job Title</div>
    <div className='w-25'>Clock in</div>
  </div>
  <div className='d-flex justify-content-between ms-2 mt-2 me-4 py-2 me-4'> 
    <div style={{color:"#2986ce",fontSize:"1.1vw",cursor:"pointer"}} className='w-25'>Abhishek gowda k</div>
    <div className='w-25 ms-4'>Technical Team</div>
    <div className='w-25 ms-4'>N/A</div>
    <div className='w-25 ms-2'>Bangalore</div>
    <div className='w-25 ms-2'>Associate Engineer</div>
    <div className='w-25 ms-4'>08:54 AM</div>
    </div>
</div>
<div style={{border:"1px solid gray"}} className='py-2 d-flex justify-content-end'>
<div className='me-4'>1 of 1 Page 1 of 1</div>
</div>
</Modal.Body>
      </Modal>
        </div>
        
    )
}


{isModalOpenLateArrival && (
        <div  className="modalContentContainer">
         
         <Modal show={handleClickLateArrival} id="dashboardModalsT" className='modalContent'>
        <Modal.Header  className='headerModal'>
          <Modal.Title>View Employees</Modal.Title>
          <IoIosCloseCircle style={{height:"40px",width:"40px",cursor:"pointer"}} onClick={handleCloseLateArrival}/>
        </Modal.Header>
        <Modal.Body className='modalBody' style={{border:"1px solid gray"}}>
            <div className='py-2'>
          <input type="text" placeholder='search employee' className='employeeSearchModal px-2'/>
          </div>
          <div className='d-flex justify-content-end py-2 mt-2'style={{border:"1px solid gray"}} >
            <div className='me-4'>Total 1</div>
          </div>
          <div style={{border:"1px solid gray"}}>
  <div className='d-flex justify-content-between py-2 px-2' style={{ backgroundColor: "#1b2531" }}>
    <div className='w-25 ms-2' >Employee</div>
    <div className='w-25'>Department</div>
    <div className='w-25'>Sub Department</div>
    <div className='w-25 ms-2'>Location</div>
    <div className='w-25'>Job Title</div>
    <div className='w-25'>Clock in</div>
  </div>
  <div className='d-flex justify-content-between ms-2 mt-4 me-4 py-2 me-4'> 
    <div style={{color:"#2986ce",fontSize:"1.2vw",cursor:"pointer"}}  className='w-25'>Abhishek gowda k</div>
    <div className='w-25 ms-3'>Technical Team</div>
    <div className='w-25 ms-4'>N/A</div>
    <div className='w-25 ms-2'>Bangalore</div>
    <div className='w-25'>Associate Engineer</div>
    <div className='w-25 ms-4'>09:14 AM</div>
    </div>
</div>
<div style={{border:"1px solid gray"}} className='py-2 d-flex justify-content-end'>
<div className='me-4'>1 of 1 Page 1 of 1</div>
</div>
</Modal.Body>
      </Modal>
        </div>
        
    )
}
          </div>
          )
          }

export default MyTeam