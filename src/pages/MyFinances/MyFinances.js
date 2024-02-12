import React,{useState} from "react";
import './MyFinances.css'
import { Dropdown } from "react-bootstrap";
import { FaHistory } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { TbBulb } from "react-icons/tb";



const MyFinances = ({pageName,setPageName}) => {

  const navigate =useNavigate()
  const previousIncomeListArray =[{
    id:0,
     month:"Sep-2023",
     gross:0
  },
  {
    id:1,
    month:"Oct-2023",
    gross:0
  },
  {
    id:2,
    month:"Nov-2023",
    gross:0
  },
  {
    id:3,
    month:"Dec-2023",
    gross:0
  },
  {
    id:4,
    month:"Jan-2024",
    gross:0
  },
  ]

  // const [pageTab,setPageTab]=useState("summary")
  const [selectTab,setSelectedTab]=useState("mysalary")
  const [selectedMonth, setSelectedMonth] = useState('December 2023');
  const [editPreviousData,setpreviousDataEdit]=useState(false)
  const [value,setValue]=useState('')
  // const [editModes, setEditModes] = useState(Array(previousIncomeListArray.length).fill(false));

  const [data,setData]=useState({
    month:"",
    gross:0,
  })
  const myDeclarationData =[
    {
        id:0,
        declaration: "1.5 lakh deduction",
        numberOfTimes: 2,
        amountDeclared: 12000,
        proofSubmitted: 0,
        amountRejected: 0,
        amountAccepted: 12000
    },
    {
        id:1,
        declaration: "Other deduction",
        numberOfTimes: 1,
        amountDeclared: 13345,
        proofSubmitted: 0,
        amountRejected: 0,
        amountAccepted: 13345
    },
    {
        id:2,
        declaration: "Tax saving allowances",
        numberOfTimes: 1,
        amountDeclared: 11234,
        proofSubmitted: 0,
        amountRejected: 0,
        amountAccepted: 11234
    },
    {
        id:3,
        declaration: "House property",
        numberOfTimes: 2,
        amountDeclared: 0,
        proofSubmitted: 0,
        amountRejected:0,
        amountAccepted: 0
    },
    {
        id:4,
        declaration: "Income from other resources",
        numberOfTimes: 1,
        amountDeclared: 14567,
        proofSubmitted: 0,
        amountRejected:0,
        amountAccepted:14567
    },
    
];


  const [selectedYear, setSelectedYear] = useState('Year 2023');
  const [selectTax,setSelectTax]=useState("declaration")
  const [declarationTab,setDeclarationTab]=useState("mydeclaration")
  const [sortOrder, setSortOrder] = useState(myDeclarationData); 
  const [sortBy, setSortBy] = useState('');

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    // You can add logic here to fetch and display the payslips for the selected month.
  };

  const handleSelectedYear = (year) => {
    setSelectedYear(year);
    // You can add logic here to fetch and display the payslips for the selected month.
  };
  console.log("data",data)

  const handleClickDashboardTab =(tab)=>{
    setDeclarationTab(tab)

  }

 

 

  const handleNotification = () => {
    setpreviousDataEdit(false)
    toast.success("Success! Previous Income saved successfully");
  }


  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortOrder('asc');
      setSortBy(field);
    }
  };

  

  

// const sortedData = sortOrder && sortBy
// ? myDeclarationData.slice().sort((a, b) => {
//     // Compare values based on the selected field and order
//     const comparison = sortOrder === 'asc' ? 1 : -1;
//     return a[sortBy] > b[sortBy] ? comparison : -comparison;
//   })
// : myDeclarationData;

const sortedData = sortOrder && sortBy
? myDeclarationData.slice().sort((a, b) => {
    // Compare values based on the selected field and order
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    return (a[sortBy] - b[sortBy]) * multiplier;
  })
: myDeclarationData;
  
  

 

 
  

  const mySalary =()=>{
    return(
        <div>
            <div className='d-flex'>
            <div className=" d-flex align-items-center justify-content-center mySalaryContent ms-4 mt-4">
    <div className="w-50 ms-4">
   <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>CURRENT COMPENSATION</label>
    <div style={{fontSize:"1.2vw",color:"#ffffff"}}>INR 1880000.00 /Annum</div>
    </div>
            </div>
            <div className=" d-flex  align-items-center   payrollContent ms-4 mt-4">
            <div className="w-25 ms-4">
   <label style={{fontSize:"1.4vw",color:"#ffffff"}}>Payroll</label>
    </div>
    <div className="ms-4">
   <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>PAY CYCLE</label>
    <div style={{fontSize:"1vw",color:"#ffffff"}}>Monthly</div>
    </div>
            </div>
            </div>
            <div className="mt-4 ms-4 timeline">
                 <div className="mt-2 ms-4">
                    <h5 style={{color:"#ffffff"}}>Salary Timeline</h5>
                 </div>
                 <div className='calenderMonth mt-4 ms-4 px-2'>
                  Your income and tax liability is being computed as per old tax regime
                 </div>
                 <div className='d-flex gap-3 ms-4 mt-4'>
                    <div style={{fontSize:"1.2vw",color:"#ffffff"}}>Salary Revision </div>
                    <div style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}} className='mt-1'>Effective on Aug 21,2023</div>
                    <div style={{color:"#ffffff",backgroundColor:"#64c3d1",fontSize:"1vw",borderRadius:"2px",}} className='mt-1 p-1'>Current</div>
                 </div>
                 <div className='d-flex ms-4 mt-4 p-2' style={{border:"1px solid white",width:"78vw"}}>
    <div className=" ">
   <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>REGULAR SALARY</label>
    <div style={{fontSize:"1vw",color:"#ffffff"}}>INR 480000.00</div>
    </div>
    <div className="ms-4 mt-4">
    <div style={{fontSize:"1vw",color:"#ffffff"}}>=</div>
    </div>
    <div className="ms-4 ">
    <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>TOTAL</label>
    <div style={{fontSize:"1vw",color:"#ffffff"}}>INR 480000.00</div>
    </div>
</div>
                 </div>
            </div>
    )
}

const paySlips =()=>{
    return(
        <div className="mt-4 ms-4">
          <div>
            <h4>Pay Slips</h4>
            </div>
            <div >
            <div style={{color:"#A2A9B4",fontSize:"1.1vw"}}>Here you can manage all keka generated playslips for application years</div>
            </div>
            <div className="d-flex justify-content-between mt-1">
            <div className="mt-2">
            <Dropdown onSelect={(eventKey) => handleSelectedYear(eventKey)}>
      <Dropdown.Toggle  id="dropdown-basic">
    {selectedYear}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="Year 2023">Year 2023</Dropdown.Item>
        <Dropdown.Item eventKey="Year 2022">Year 2022</Dropdown.Item>
        <Dropdown.Item eventKey="Year 2021">Year 2021</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div className="mt-2 me-4 ">
            <div style={{color:"#2986CE",border:"1px solid #2986CE",padding:"5px",borderRadius:"5px"}}>{selectedMonth} Pay Slip</div>
            </div>
            </div>
            <div className="mt-4 d-flex gap-5">
              <div className="payslipsContainer text-start px-2" style={{cursor:"pointer"}}>
                 <div style={{height:"7vh",borderBottom:"1px solid gray"}}  onClick={() => handleMonthChange('December 2023')} className="py-2 px-2">December 2023</div>
                 <div style={{height:"7vh",borderBottom:"1px solid gray"}} onClick={() => handleMonthChange('November 2023')}  className="py-2 px-2"> November 2023</div>
                 <div style={{height:"7vh",borderBottom:"1px solid gray"}}  onClick={() => handleMonthChange('October 2023')}  className="py-2 px-2">October 2023</div>
                 <div style={{height:"7vh",borderBottom:"1px solid gray"}}  onClick={() => handleMonthChange('September 2023')}  className="py-2 px-2">September 2023</div>
                 <div style={{height:"7vh"}}  onClick={() => handleMonthChange('August 2023')}  className="py-2 px-2">August 2023</div>
              </div>
              <div className="payslipsContent p-2" style={{cursor:"pointer"}}>
                <div className="mt-2 ms-4" style={{fontSize:"2vw"}}>PAYSLIP {selectedMonth}</div>
                <div className="mt-2 ms-4" style={{fontSize:"1vw"}}>BLOCK STACK PVT LTD</div>
                <div className="w-25 ms-4 mt-1"  style={{fontSize:"1vw"}}>DC 7180 BHARAT DIAMOND BOURSE ,G-BLOCK,OPP NABARD HEAD OFFICE,MUMBAI EAST MUMBAI,MAHARASTRA 400051</div>

                <div className="mx-4 mt-4" style={{fontSize:"1.5vw",borderBottom:"2px solid gray"}}>ABHISHEK GOWDA K</div>
                <div className="d-flex gap-5 ms-4 mt-2">
                  <div className="w-25" style={{fontSize:"1vw",color:"gray"}}>EMPLOYEE NUMBER
                  <div style={{fontSize:"1vw",color:"#ffffff"}}>DB1143</div>
                  </div>
                   <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>DATE JOINED
                  <div style={{fontSize:"1vw",color:"#ffffff"}}>21/8/2023</div>
                  </div>
             
               
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>DEPARTMENT
                  <div style={{fontSize:"1vw",color:"#ffffff"}}>Technical team</div>
                  </div>
               
    
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>SUB DEPARTMENT
                  <div style={{fontSize:"1vw",color:"#ffffff"}}>N/A</div>
                  </div>
              
              </div>
              <div className="d-flex gap-5 ms-4 mt-4">
                  <div className="w-25" style={{fontSize:"1vw",color:"gray"}}>DESIGNATION
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>Associate Engineer</div>
                  </div>
                   <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>PAYMENT MODE
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>Transfer</div>
                  </div>
             
               
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>BANK
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>State bank of India</div>
                  </div>
               
    
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>BANK IFSC
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>SBIN0045678</div>
                  </div>
              
              </div>
              <div className="d-flex gap-5 ms-4 mt-4">
                  <div className="w-25" style={{fontSize:"1vw",color:"gray"}}>BANK ACCOUNT
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>Associate Engineer</div>
                  </div>
                   <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>PAN
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>Transfer</div>
                  </div>
             
               
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>UAN
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>State bank of India</div>
                  </div>
               
    
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>PF NUMBER
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>SBIN0045678</div>
                  </div>
              
              </div>
              <div className="mx-4 mt-4" style={{fontSize:"1.5vw",borderBottom:"2px solid gray"}}>SALARY DETAILS</div>
              <div className="d-flex gap-5 ms-4 mt-4">
                  <div className="w-25" style={{fontSize:"1vw",color:"gray"}}>ACTUAL PAYABLE DAYS
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>30</div>
                  </div>
                   <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>TOTAL WORKING DAYS
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>30</div>
                  </div>
             
               
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>LOSS OF PAY DAYS
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>0</div>
                  </div>
               
    
                  <div  className="w-25"  style={{fontSize:"1vw",color:"gray"}}>DAYS PAYABLE
                  <div  style={{fontSize:"1vw",color:"#ffffff"}}>30</div>
                  </div>
              </div>
              <div className="mt-4 ms-4 d-flex">
                <div className="w-50 " style={{fontSize:"1.2vw",color:"#ffffff"}}>Earnings
                <div style={{fontSize:"1vw",color:"#ffffff"}} className="mt-1">Basic</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>HRA</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Conveyennce Allowances</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Telephone Allowances</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Total Earnings </div>

                </div>
                <div className=" w-25 mt-4 ms-4">
                <div style={{fontSize:"1vw",color:"#ffffff"}} className="mt-1">20000.00</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>10000.00</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>3000.00</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>5000.00</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>38200.00</div>
                </div>
                <div className="w-50 ms-4 px-4" style={{borderLeft:"1px solid gray"}}>Contribution
                <div style={{fontSize:"1vw",color:"#ffffff"}} className="mt-1">PF Employee</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Total Contributions</div>
                <div style={{fontSize:"1.2vw",color:"#ffffff"}}>Taxes and Deductions</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Professional Tax</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>Total Deductions </div>

                </div>
                <div className=" w-25 mt-4 ms-4">
                <div style={{fontSize:"1vw",color:"#ffffff"}} className="mt-1">1800</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>1800.00</div>
                 
                <div style={{fontSize:"1vw",color:"#ffffff"}} className="mt-4">200.00</div>
                <div style={{fontSize:"1vw",color:"#ffffff"}}>200.00 </div>
                </div>
           </div>
           <div className="totalAmountContent mt-2 mx-4">
            <div className="d-flex mx-2 py-2">
            <div className="w-50">Net Salary payable</div>
            <div className="w-50">36200</div>
            </div>
            <div  className="d-flex mx-2 py-2">
            <div className="w-50">Net Salary in words</div>
            <div className="w-50">Thirty six thousand two hundred only </div>
            </div>
             </div>
             <div className="mt-2 ms-4">
              **Note: All amounts displayed in this payslip are in INR
             </div>
           </div>
              </div>

            </div>
    )
}

  const summaryPage =()=>{
    return(
      <div className='d-flex gap-5 p-2'>
             
      <div className= 'mt-4 ms-4'>
<div className='d-flex justify-content-between align-items-center payroll' style={{color:"#ffffff"}}>
 <div className='ms-4'>
<h6 style={{ color: "#ffffff" }}>Payroll summary</h6>
</div>
<div>
<div>Last processed cycle</div>
<div>Nov 2023(01Nov - 30Nov)</div>
</div>
<div>
<div>Working days</div>
<div>30</div>
</div>
<div>
<div>Loss of pay</div>
<div>0</div>
</div>
<div className='me-4'>
<div>Payslip</div>
<div style={{ color: "#2986ce",cursor:"pointer" }} onClick={()=>setPageName("mypay")}>View payslip</div>
</div>
</div>
<div>
<div className='d-flex gap-5'>
<div className='d-flex flex-column gap-3'>
<div className='mt-4 paymentHistory'>
<div className='ms-4 mt-2' style={{color:"#ffffff"}}>Payment Information</div>
<div className='horizontalLine mt-3'></div>
<div className='mt-2 ms-4'>
 <div style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}> SALARY PAYMENT MODE</div>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Bank Transfer</div>
</div>
<div style={{fontSize:"1.4vw",color:"#ffffff"}} className='mt-4 ms-4'>Bank Information </div>
<div className='d-flex justify-content-between ms-4 mt-2'>
 <div className="w-50">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>BANK</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>State bank of India</div>
 </div>
 <div className=" w-50 ">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}> ACCOUNT NUMBER</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>38703958254</div>
 </div>
</div>
<div className='d-flex justify-content-between ms-4 mt-2'>
 <div className=" w-50 ">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>IFSC CODE</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>SBINOO80745 </div>
 </div>
 <div className=" w-50 ">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>NAME OF THE ACCOUNT HOLDER</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Abhishek gowda k</div>
 </div>
</div>
</div>
<div className='statutoryHistory'>
<div className='ms-4 mt-2' style={{color:"#ffffff"}}>Statutory Information</div>
<div className='horizontalLine mt-3'></div>
<div className='mt-2 ms-4'>
 <div style={{color:"#ffffff"}} className='mt-2'>PF Account Information</div>
<div className="gotoProfile mt-3 p-1 px-2 me-2" style={{color:"#2986ce",cursor:"pointer", fontSize:"1.2vw"}}>PF Details are not available </div>
</div>
<div>
 <div style={{color:"#ffffff"}} className='mt-4 ms-4'>PT Details</div>
</div>
<div className='d-flex gap-5  ms-4 mt-2'>
 <div>
 <div  style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>STATE</div>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Karnataka</div>
 </div>
 
 <div className='ms-4 px-4'>
 <div  style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>REGISTERED LOCATION</div>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Bangalore</div>
 
     </div>
</div>
</div>
</div>

<div className='mt-4 identityHistory ms-3 p-2'>
<div className='ms-4 mt-2' style={{color:"#ffffff"}}>Identity Information</div>
<div className='horizontalLine mt-3'></div>
<div className='ms-4 mt-4 d-flex gap-2'>
<img className="h-5" style={{width:"2vw"}} src="https://cdn.kekastatic.net/shared/assets/flags/1x1/in.svg" alt="flag"/>
<div style={{color:"#ffffff"}}>Pan Card</div>
<div style={{color:"#ffffff",backgroundColor:"rgb(134, 192, 106)",fontSize:"0.8vw",borderRadius:"2px",}} className='mt-1 p-1'>VERIFIED</div>
</div>
<div className='horizontalLine mt-3 px-2'></div>
<div className='d-flex justify-content-between ms-4 mt-4'>
 <div className="w-50">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>PERMANENT ACCOUNT NO</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>DJLPA*****</div>
 </div>
 <div className="w-50">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>FULL NAME</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Abhishek gowda k</div>
 </div>
</div>
<div className='d-flex justify-content-between ms-4 mt-4'>
 <div className="w-50">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>DATE OF BIRTH</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>28/10/1997</div>
 </div>
 <div className="w-50">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>PARENTS NAME</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Krishna</div>
 </div>
</div>
<div style={{color:"#ffffff"}} className='ms-4 mt-4'>Photo ID</div>
<div className='ms-4 mt-4 d-flex gap-2'>
<img className="h-5" style={{width:"2vw"}} src="https://cdn.kekastatic.net/shared/assets/flags/1x1/in.svg" alt="flag"/>
<div style={{color:"#ffffff"}}>Aadhar Card</div>
<div style={{color:"#ffffff",backgroundColor:"rgb(134, 192, 106)",fontSize:"0.8vw",borderRadius:"2px",}} className='mt-1 p-1'>VERIFIED</div>
</div>
<div className='horizontalLine mt-3 px-2'></div>
<div className='d-flex justify-content-between ms-4 mt-4'>
 <div  className="w-50">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>AADHAR NUMBER</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>9795786*****</div>
 </div>
 <div className=" w-50 ">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>ENROLLMENT NUMBER </label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>N/A</div>
 </div>
</div>
<div className='d-flex justify-content-between ms-4 mt-4'>
 <div className="w-50">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>DATE OF BIRTH</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>28/10/1997</div>
 </div>
 <div className=" w-50 ">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}> NAME</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>ABHISHEK GOWDA K</div>
 </div>
</div>
<div className='d-flex justify-content-between ms-4 mt-4'>
 <div className=" w-50 ">
<label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>ADDRESS</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>#237/238 Bhuvaneshwari nagar 2nd stage Bangalore </div>
 </div>
 <div className=" w-50 ">
 <label style={{fontSize:"1vw",color:"#ffffff",opacity:"0.7"}}>GENDER</label>
 <div style={{fontSize:"1vw",color:"#ffffff"}}>Male</div>
 </div>
</div>
</div>
</div>
</div>
</div>
</div>
    )
  }

  const declarationTablePage =()=>{
    return(
      <div>
        <div className="ms-4 mt-4">
        <h4>My Declarations</h4>
        <div className="opacity-50" style={{fontSize:"14px"}}>Below are the declaration done by you under various sections</div>
        </div>
        <div className="mt-2 ms-4 myDeclarationContent mb-2">
            <div className="d-flex gap-4 headerDeclaration p-1" style={{backgroundColor:"#1b2531",height:"7vh"}}>
            <div className="w-25 ms-2">Declarations
            </div>
            <div className="d-flex">Number of Declarations
            <div className="ms-1">
            <div style={{cursor:"pointer"}} onClick={() => handleSort('numberOfTimes')}>A</div>
            <div style={{cursor:"pointer"}} onClick={() => handleSort('numberOfTimes')}>D</div>
            </div>
            </div>
            <div className="ms-4 d-flex">Amount Declared
            <div className="ms-1">
            <div style={{cursor:"pointer"}} onClick={() => handleSort('amountDeclared')}>A</div>
            <div style={{cursor:"pointer"}} onClick={() => handleSort('amountDeclared')}>D</div>
            </div>
            </div>
            <div className="ms-4">Proof Submitted</div>
            <div className="ms-4"> Amount Rejected</div> 
            <div className="ms-4">Amount Accepted</div>
            </div>
            {
              sortedData.map((item,index)=>{
                  return(
                    <div className="d-flex justify-content-between gap-4 py-3" style={{border:"1px solid #384252 ",fontSize:"14px"}}>
                    <div className="w-25 ms-4">{item.declaration}</div>
                    <div style={{width:"10vw"}}>{item.numberOfTimes}</div>
                    <div style={{width:"10vw"}}>{item.amountDeclared}</div>
                    <div style={{width:"10vw"}}>{item.proofSubmitted}</div>
                    <div style={{width:"10vw"}}>{item.amountRejected}</div>
                    <div style={{width:"10vw"}}>{item.amountAccepted}</div>
                    </div>
                  )
              })
            }
          </div>

        
      </div>
    )
  }




  const previousIncomeList =()=>{
    return(
      <div>
        <div className="d-flex gap-5">
        <div className=" ms-4 mt-4">
          <div className="d-flex gap-2">
      <div style={{fontSize:"20px"}}>Previous Employment Details </div>
      <FaHistory  style={{height:"25px",width:"25px"}}/>
      </div>
      <div className="opacity-50" style={{fontSize:"14px"}}>Previous Income details are necessary for income tax computation when the </div>
      <div className="opacity-50" style={{fontSize:"14px"}}> when the employee switches the organisation in the middle of FY</div>
      </div>
      <div className="lastDate w-50 h-20 p-2 mt-4 ms-4">
     <div>Last Date for adding previous employment details</div>
        <div>23-may-2023 is lapsed. </div>
      </div>
      </div>
      <div className="previousIncomeTable mt-4 ms-4 mb-2">
        <div className="mt-4 d-flex justify-content-end me-2">
          <button className="generateButton p-2" onClick={handleNotification}>Save</button>
        </div>
        <div>
        <ToastContainer autoClose={3000} theme="dark" hideProgressBar={true} toastStyle={{ color: "green" }} />
        </div>
        <div className="mt-4">
        <table className="ms-2">
    <thead>
        <tr  className="headerSection px-2 py-2">
            <th className="ms-4 p-2">Month</th>
            <th className="ms-4 p-2">Gross</th>
            <th className="ms-4 p-2">Basic</th>
            <th className="ms-4 p-2">House Rent</th>
            <th className="ms-4 p-2">Employee</th>
            <th className="ms-4 p-2">ESI</th>
            <th className="ms-4 p-2">LWF</th>
            <th className="ms-4 p-2">LWF Employee</th>
            <th className="ms-4 p-2">NPS Employee</th>
            <th className="ms-4 p-2">Professional</th>
            <th className="ms-4 p-2">Income Tax</th>
            <th className="ms-4 p-2">Other Tax</th>
            <th className="ms-4 p-2">Actions</th>
        </tr>
    </thead>
    <tbody >
        { previousIncomeListArray.map((item, index) => (
            <tr key={index} style={{ border: "1px solid #A2A9B4" }} className="tableBody">
            
              <td className="p-2">{item.month}</td>
                 {editPreviousData && data.id===index?<input type="number" className="inputNumber ms-2 mt-1" value={value} onChange={(e)=>setValue(e.target.value)}/>
                  :<td className="p-2">{item.gross}</td>
                 }
                    
                <td className="p-2">{item.basic}</td>
                <td className="p-2">{item.houseRent}</td>
                <td className="p-2">{item.employee}</td>
                <td className="p-2">{item.esi}</td>
                <td className="p-2">{item.lwf}</td>
                <td className="p-2">{item.lwfEmployee}</td>
                <td className="p-2">{item.npsEmployee}</td>
                <td className="p-2">{item.professional}</td>
                <td className="p-2">{item.incomeTax}</td>
                <td className="p-2">{item.otherTax}</td>
                <CiEdit style={{height:"25px",width:"25px",cursor:"pointer"}} className="ms-4 mt-1"
                 onClick={() =>{setData(previousIncomeListArray[index])
                  setpreviousDataEdit(data.id === index ? !editPreviousData : true) 
                   setValue(item.gross);;

                }}
                 
                />
                
            </tr>
        ))}
    </tbody>
</table>
        </div>

      </div>
      </div>
    )
  }

  const housePropertyPage =()=>{
    return(
      <div className="mt-4 ms-4">
        <div>House Property</div>
        <div className="opacity-50" style={{fontSize:"14px"}}>Here you can declare all the house property rented or owned</div>
        <div className="d-flex">
          <div>
<div className="houseRent p-2 mt-2 mb-4">
  <div className="ms-2">
  <div>I live in a rented residence</div>
  <div className="p-2 mt-2" style={{border:"1px solid #2986ce",borderRadius:"4px",color:"#2986ce",fontSize:"14px"}}>There are no rental details available</div>
  <div className="mt-3 p-2 w-25 mb-2" style={{border:"1px solid #2986ce",borderRadius:"4px",color:"#2986ce",fontSize:"14px"}}>+Add Rented Residence</div>
  </div>
</div>
<div className="houseRent p-2 mt-2 mb-4">
  <div className="ms-2">
  <div>I own residence</div>
  <div className="p-2 mt-2" style={{border:"1px solid #2986ce",borderRadius:"4px",color:"#2986ce",fontSize:"14px"}}>There are no own residence details available</div>
  <div className="mt-3 p-2 w-25 mb-2" style={{border:"1px solid #2986ce",borderRadius:"4px",color:"#2986ce",fontSize:"14px"}}>+Add own Residence</div>
  </div>
</div>


</div>
<div className="ms-4 mt-2">
  <div className="houseDeclaration">
    <div className="d-flex justify-content-start">
    <div>
    <TbBulb style={{height:"4vh",width:"4vw",color:"orange"}}/>
    </div>
  <div className="mt-1">House Property Declaration</div>
  </div>
  <div style={{fontSize:"14px"}} className="ms-2 mt-3">
  • You can add more than one rented property or own property for the current financial year.
  </div>
  <div  style={{fontSize:"14px"}} className="ms-2 mt-3">
• For rented property if the total rent is more than ₹ 1,00,000 then you need to provide either PAN of owner or declaration letter.
</div>
<div  style={{fontSize:"14px"}} className="ms-2 mt-3">
• For rented property you are eligible for HRA and In case HRA is not paid by your employer you will be eligible for exemption under 80 GG.
</div>
<div  style={{fontSize:"14px"}} className="ms-2 mt-3">
• For own property/residence you will be eligible for house loan interest exemption under Section 24.
</div>
  </div>
 
</div>
</div>

      </div>
    )
  }

  const incomeFromOtherSourcePage =()=>{
    return(
      <div className="ms-4 mt-4">
        <div>Income From Other Sources</div>
        <div className="opacity-50" style={{fontSize:"14px"}}>Income from other sources  is a residual category used to classify income that is not classified as taxed under any other head of income.</div>
        <div className="mt-2 w-75 incomeSource mb-4 py-2">
          <div  className="mt-1 w-25 p-2 ms-4 "style={{border:"1px solid #2986ce",borderRadius:"4px",color:"#2986ce",fontSize:"13px"}}>+ Add Icome from other sources</div>
        </div>
      </div>
    )
  }


  const declarationPage=()=>{
    return(
      <div>
        <div className="mt-4 ms-4 d-flex justify-content-between gap-2">
          <div className="d-flex gap-2">
        <h4>Declaration </h4>
        <FaHistory  style={{height:"25px",width:"25px"}}/>
        </div>
        <div className="me-4">
        <Dropdown onSelect={(eventKey) => handleSelectedYear(eventKey)}>
      <Dropdown.Toggle  id="dropdown-basic">
    {selectedYear}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="Year 2023">Year 2023</Dropdown.Item>
        <Dropdown.Item eventKey="Year 2022">Year 2022</Dropdown.Item>
        <Dropdown.Item eventKey="Year 2021">Year 2021</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        </div>
        <div className="mt-4 ms-4 p-2 me-4" style={{border:"1px solid #2986ce"}}>
          <div style={{color:"#2986ce",fontSize:"14px"}} className="ms-1">* your income and tax liabilty is being computed as old Tax regime</div>
          <div style={{color:"#2986ce",fontSize:"14px"}} className="ms-1">* $ is not considered for exemption if opted for new tax regime(section 115BC)</div>

        </div>

        <div className="mt-4 ms-4 investment w-75">
          <div className="d-flex gap-2">
          <div className="mt-2 ms-4">Investment Declaration</div>
          <div style={{color:"#ffffff",backgroundColor:"#86c06a",fontSize:"0.8vw",borderRadius:"2px",}} className='mt-2 px-1 d-flex justify-content-center align-items-center'>OPEN</div>
          </div>
          <div className="d-flex gap-2">
          <div className="ms-4 mt-1 opacity-50">Current window </div>
          <div className="ms-4 mt-1 opacity-50">March 31,2024</div>
          </div>
        </div>
        <div className="ms-4 mt-4 d-flex gap-3">
        <div className="TaxPayable">
      <div className="mt-3 ms-3" style={{fontSize:"14px"}}>Net Taxable Income</div>
      <div className="d-flex justify-content-between">
      <div className="ms-3" style={{fontSize:"28px"}}>INR 2,61,678</div>
      <div className="mt-3 mx-auto" style={{fontSize:"14px",color:"#2986ce"}}>Income tax computation</div>
      </div>
        </div>
        
        <div className="TaxPayable">
      <div className="mt-3 ms-3" style={{fontSize:"14px"}}>Total Tax Payable</div>
     <div className="ms-3" style={{fontSize:"28px"}}>INR 0</div>
     </div>
        <div className="TaxPayable">
      <div className="mt-3 ms-3" style={{fontSize:"14px"}}>Tax Already Paid</div>
      <div className="ms-3" style={{fontSize:"28px"}}>INR 0</div>
        </div>
        </div>
        <div className="declarationNavbarSec d-flex ms-4 mt-4 opacity-50">
        <div className={declarationTab==="mydeclaration"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("mydeclaration")} style={{cursor:"pointer",fontSize:"13px"}}>My Declaration </div>
        <div className={declarationTab==="lakhdeclaration"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("lakhdeclaration")} style={{cursor:"pointer",fontSize:"13px"}}>1.5 lacs deductions </div>
        <div className={declarationTab==="other"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("other")} style={{cursor:"pointer",fontSize:"13px"}}>Other deductions </div>
        <div className={declarationTab==="taxsaving"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("taxsaving")} style={{cursor:"pointer",fontSize:"13px"}}> Tax Saving Allowances </div>
        <div className={declarationTab==="house"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("house")} style={{cursor:"pointer",fontSize:"13px"}}>House Property </div>
        <div className={declarationTab==="income"?"myperformance":"myPerformanceInactive"} onClick={()=>handleClickDashboardTab("income")} style={{cursor:"pointer",fontSize:"13px"}}>Income from other source </div>

        </div> 
        {declarationTab==="mydeclaration" && declarationTablePage()}
        {declarationTab==="house" && housePropertyPage()}
        {declarationTab==="income" && incomeFromOtherSourcePage()}
        </div>
    )
  }

  const formFiling =()=>{
    return(
      <div>
        <div className="mt-4 ms-4">
        <h4>Form 12 BB </h4>
        <div className="opacity-50" style={{fontSize:"14px"}}>Form 12 BB is a provisional statement that has details about your proposed investments and Expenses
          that are Income Tax deductible
        </div>
        </div>
        <div className="formFiling mt-3 ms-4">
         <div className="mt-2 ms-4" style={{fontSize:"14px"}}>Select the Financial year and generate the form BB</div>
         <div className="mt-3 ms-4 d-flex gap-3">
         <div >
            <Dropdown onSelect={(eventKey) => handleSelectedYear(eventKey)}>
      <Dropdown.Toggle  id="dropdown-basic-form">
    {selectedYear}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="Year 2023">Year 2023-24</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
            <div>
              <button className="generateButton p-2">Generate Form 12 BB</button>
            </div>
            </div>
        </div>
      </div>
    )
  }

  const handleButtonClick = () => {
    // Navigate to the desired URL
    window.open('https://cleartax.in/s/partner-keka', '_blank');
  };

  const handleFileItr =()=>{
    window.open('https://cleartax.in/s/partner-keka-filing?utm_source=Keka&utm_medium=Payroll&utm_campaign=itr-partnerships-portal-July_15','_blank')
  }

  const taxFiling =()=>{
    return(
      <div>
        <div className="ms-4 mt-4 d-flex justify-content-between">
          <div>
        <h4>Tax Filing (Paid)</h4>
        <div className="opacity-50 mb-2" style={{fontSize:"13px"}}>You can use Clear Tax (our partner) to e-file your ITR</div>
        </div>
        <div className="me-4">
          <button className="generateButton p-2" onClick={handleFileItr}>File ITR</button>
        </div>
        </div>
        <div className="mt-2 ms-4 py-2 filingSection">
          <div className="mt-2 ms-4">
          <div className="mt-2">We have partnered with clear Tax,largest tax platform in India </div>
          <div className="d-flex mt-3">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Upload your Form-16 pdf </div>
          
          </div>
          <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Preview your return, created by clearTax automatically </div>
          
          </div>
          <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Done with e-filing with just 5-7 mins </div>
           </div>
          <div className="mt-3 ms-1">
            Due date to file your ITR for FY 2022-23(AY 2023-24) is July 31,2023
          </div>
          <div className="mt-2 p-1">Happy filing !</div>
          </div>

        </div>
        <div className="d-flex ">
        <div className="ms-4">
          A service offering from our partner 
        </div>
<img height="12" width="65" className="mt-2 ms-2" alt="world"src="https://cdn.kekastatic.net/shared/assets/images/third-party/logos/cleartax/cleartax.png"></img>
      </div>
      </div>
    )
  }

  const taxSavingInvestment =()=>{
    return(
      <div>
        <div className="ms-4 mt-4 d-flex justify-content-between">
          <div>
        <h4>Tax Saving Investment</h4>
        <div className="opacity-50 mb-2" style={{fontSize:"14px"}}>You can use Clear Tax (our partner) to do tax saving investment</div>
        </div>
        <div className="me-4">
          <button className="generateButton p-2" onClick={handleButtonClick}>Invest & Save Tax</button>
        </div>
        </div>
        <div className="mt-2 ms-4 py-2 filingSection">
          <div className="mt-2 ms-4">
          <div className="mt-2">Wondering how to save taxes & grow your wealth at the same time?. </div>
          <div className="d-flex mt-3">
          <div className="dotted mt-2"></div>
          <div className="ms-2">You can save upto ₹ 45,000 in taxes by investment in the best performing mutual funds </div>
          
          </div>
          <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Cleartax continuously monitors your investment portfolio & recommends periodic re-balancing to maximize your investment returns </div>
          
          </div>
          <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Get the best investment advisory with the convenience of 100% online & paperless process - for Free ! </div>
           </div>
           <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">Cleartax enables you in the best tax saving ELSS mutual funds in India in under 5 minutes. </div>
           </div>
           <div className="d-flex mt-2">
          <div className="dotted mt-2"></div>
          <div className="ms-2">ELSS mutual funds are better than PPF, ULIP/LIC Insurance & tax-saving FDs owing to much higher returns & lowest lock-in period.</div>
           </div>
          <div className="mt-2 ms-1">
          With all your investment in one place, have complete transparency of every transaction and always stay on your investment track.
          </div>
          <div className="p-1">Happy Investing !</div>
          </div>

        </div>
        <div className="d-flex ">
        <div className="ms-4">
          A service offering from our partner 
        </div>
<img height="12" width="65" className="mt-2 ms-2" alt="world"src="https://cdn.kekastatic.net/shared/assets/images/third-party/logos/cleartax/cleartax.png"></img>
      </div>
      </div>
    )
  }

  const manageTax=()=>{
    return(
      <div>
         <div class="navbarSec d-flex p-2" style={{borderTop:"1px solid gray"}}>
    <div className='d-flex gap-5 ms-2'>
    <div
      onClick={() => setSelectTax('declaration')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTax === 'declaration' ? 'dashboardActive' : ''}`}
    >
      Declaration
    </div>
    <div
      onClick={() => setSelectTax('previous')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTax === 'previous' ? 'dashboardActive' : ''}`}
    >
   Previous Income
    </div>
    <div
      onClick={() => setSelectTax('form')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTax === 'form' ? 'dashboardActive' : ''}`}
    >
  Form 12 BB
    </div>
    <div
      onClick={() => setSelectTax('taxfiling')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTax === 'taxfiling' ? 'dashboardActive' : ''}`}
    >
  Tax Filing
    </div>
    <div
      onClick={() => setSelectTax('taxsaving')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTax === 'taxsaving' ? 'dashboardActive' : ''}`}
    >
  Tax Saving Investment
    </div>
  </div>
        </div>
        {selectTax==="declaration" && declarationPage()}
        {selectTax==="form" && formFiling()}
        {selectTax==="taxfiling" && taxFiling()}
        {selectTax==="taxsaving" && taxSavingInvestment()}
        {selectTax==="previous" && previousIncomeList()}
      </div>
    )
  }

  const paymentPage =()=>{
    return(
      <div>
   <div className='navbarSec d-flex p-2' style={{borderTop:"1px solid gray"}}>
  <div className='d-flex gap-4 ms-2'>
    <div
      onClick={() => setSelectedTab('mysalary')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTab === 'mysalary' ? 'dashboardActive' : ''}`}
    >
      My Salary
    </div>
    <div
      onClick={() => setSelectedTab('mypayslips')}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${selectTab === 'mypayslips' ? 'dashboardActive' : ''}`}
    >
   Payslips
    </div>
  </div>
</div>
<div>
  {selectTab === 'mysalary' && mySalary()}
  {selectTab === 'mypayslips' && paySlips()}
</div>
</div>
  )
  }

  return (
  <div className='dashboardMainContainer'>
   <div className='navbarSec d-flex p-2'>
  <div className='d-flex gap-4 ms-2'>
    <div
      onClick={() =>{
        setPageName("summary")
      }}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${pageName === 'summary' ? 'dashboardActive' : ''}`}
    >
      SUMMARY
    </div>
    <div
       onClick={() =>{
        setPageName("mypay")
      }}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${pageName === 'mypay' ? 'dashboardActive' : ''}`}
    >
      MYPAY
    </div>
    <div
      onClick={() =>{
        setPageName("tax")
      }}
      style={{ cursor: 'pointer' }}
      className={`menuItem ${pageName === 'tax' ? 'dashboardActive' : ''}`}
    >
      MANAGE TAX
    </div>
  </div>
</div>
<div>
        {pageName  === 'summary'&& summaryPage()}
        {pageName === 'mypay' && paymentPage()}
        {pageName === 'tax' && manageTax()}
      </div>

</div>
  )
};

export default MyFinances;
