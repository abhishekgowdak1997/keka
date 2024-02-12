import React, { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import './Organisation.css';

const TreeStructure = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFrontend,setFilteredFrontend]=useState([])
  const [filteredBackend,setFilteredBackend]=useState([])
  const [filteredBlockchain,setFilteredBlockChain]=useState([])

  const StyledNode = styled.div`
    padding: 5px;
    width: 18vw;
    height: 18vh;
    border-radius: 3px;
    background-color:#273143;
    display: inline-block;
    border: 1px solid gray;
  `;

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);
  
    if (searchTerm === "") {
      // If the search term is empty, display all arrays
      setFilteredFrontend(frontend);
      setFilteredBackend(backend);
      setFilteredBlockChain(blockchain);
    } else {
      // Check if the searchTerm is present in frontend array
      if (frontend.some((employee) => employee.name.toLowerCase().includes(searchTerm))) {
        setFilteredFrontend(
          frontend.filter((employee) => employee.name.toLowerCase().includes(searchTerm))
        );
      } else {
        setFilteredFrontend([]);
      }
  
      // Check if the searchTerm is present in backend array
      if (backend.some((employee) => employee.name.toLowerCase().includes(searchTerm))) {
        setFilteredBackend(
          backend.filter((employee) => employee.name.toLowerCase().includes(searchTerm))
        );
      } else {
        setFilteredBackend([]);
      }
  
      // Check if the searchTerm is present in blockchain array
      if (blockchain.some((employee) => employee.name.toLowerCase().includes(searchTerm))) {
        setFilteredBlockChain(
          blockchain.filter((employee) => employee.name.toLowerCase().includes(searchTerm))
        );
      } else {
        setFilteredBlockChain([]);
      }
    }
  };
  
  


  



  const frontend = [
    { id: 1, name: "Abhishek",department:"Front end",location:"Bangalore" },
    { id: 2, name: "Laxman",department:"Front end",location:"Bangalore" },
    { id: 3, name: "Shubam",department:"Front end",location:"Bangalore"  },
    { id: 4, name: "Himanshu",department:"Front end",location:"Bangalore"  },
  ];

  const backend = [
    { id: 1, name: "Jagadeesh",department:"Back end",location:"Bangalore" },
    { id: 2, name: "Simran",department:"Back end",location:"Bangalore" },
    { id: 3, name: "Rupesh",department:"Back end",location:"Bangalore" },
    { id: 4, name: "Smruti",department:"Back end",location:"Bangalore" },
  ];

  const blockchain = [
    { id: 1, name: "Bhaskar",department:"Block chain team",location:"Bangalore" },
    { id: 2, name: "Apporv",department:"Block chain team",location:"Bangalore" },
    { id: 3, name: "Akhil",department:"Block chain team",location:"Bangalore" },
  ];

  const combinedArray = [
    ...frontend,
    ...backend,
    ...blockchain
  ]


  const EmployeeDetails = ({ employee }) => {
    return (
      <StyledNode>
       
        <div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'> {employee.name[0]}{employee.name.split(" ")[1] &&(employee.name.split(" ")[1])[0].toUpperCase()}</div>
        </div>
        <div>
        <div>{employee.name}</div>
        <div style={{color:"gray",fontSize:"1vw"}}>{employee.department}</div>
        <div style={{color:"gray",fontSize:"1vw"}}>{employee.location}</div>
        </div>
        </div>
      </StyledNode>
    );
  };

  return (
    <div>
      {/* <div className='navbarSec d-flex p-2'>
      <div style={{ cursor: 'pointer' }}>ORGANISATION TREE</div>
      </div> */}
     
      <div className='mt-4 ms-4'>
        <input
          type="text"
          placeholder="Search Employee"
          className='employeeSearch px-2'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <Tree
        lineWidth={'2px'}
        lineColor={'gray'}
        lineBorderRadius={'8px'}
        label={<StyledNode><div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>C</div>
        </div>
        <div>
        <div>Chirag</div>
         <div style={{color:"gray",fontSize:"1vw"}}>COO</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div></StyledNode>}
      >
         <TreeNode label={<StyledNode><div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>P</div>
        </div>
        <div>
        <div>Prasanaa </div>
         <div style={{color:"gray",fontSize:"1vw"}}>CEO</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div></StyledNode>}>
        <TreeNode label={<StyledNode><div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>A</div>
        </div>
        <div>
        <div>Arjit</div>
         <div style={{color:"gray",fontSize:"1vw"}}>CTO</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div></StyledNode>}>
        <TreeNode label={<StyledNode> 
            <div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>A</div>
        </div>
        <div>
        <div>Arpan</div>
         <div style={{color:"gray",fontSize:"1vw"}}>Team lead</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div>
                 </StyledNode>}>
    {filteredFrontend.map((employee) => (
      <TreeNode
        key={employee.id}
        label={<EmployeeDetails employee={employee} />}
      />
    ))}
  </TreeNode>
  <TreeNode label={<StyledNode> 
    <div className='d-flex justify-content-between me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>S</div>
        </div>
        <div>
        <div>Surya</div>
         <div style={{color:"gray",fontSize:"1vw"}}>Technical lead</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div>
                 </StyledNode>}>
    {filteredBackend.map((employee) => (
      <TreeNode
        key={employee.id}
        label={<EmployeeDetails employee={employee} />}
      />
    ))}
  </TreeNode>
  <TreeNode label={<StyledNode> 
    <div className='d-flex justify-content-between align-items-center me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>K</div>
        </div>
        <div>
        <div>Calvin</div>
         <div style={{color:"gray",fontSize:"1vw"}}>Team lead</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div>
                 </StyledNode>}>
    {filteredBlockchain.map((employee) => (
      <TreeNode
        key={employee.id}
        label={<EmployeeDetails employee={employee} />}
      />
    ))}
  </TreeNode>

  <TreeNode label={<StyledNode> 
    <div className='d-flex justify-content-between align-items-center me-2 mt-2'>
            <div className='ms-2'>
        <div className='imageUpload d-flex align-items-center justify-content-center'>Y</div>
        </div>
        <div>
        <div>Yamini</div>
         <div style={{color:"gray",fontSize:"1vw"}}>HR Manager</div> 
         <div style={{color:"gray",fontSize:"1vw"}}>Bangalore</div>
         </div> 
         </div>
                 </StyledNode>}>
                  </TreeNode>
                  </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

export default TreeStructure;
