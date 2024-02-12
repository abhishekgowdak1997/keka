import React, { useState } from "react";
import TreeStructure from "./TreeStructure";
import { VscFileSubmodule } from "react-icons/vsc";
import { Dropdown } from "react-bootstrap";
import { RiImageAddFill } from "react-icons/ri";
import QuillEditor from "../QuillEditor";
import { AiOutlineLink } from "react-icons/ai";

const Organisation = ({ pageNameOrg, setPageNameOrg }) => {
  const [activeClass, setActiveClass] = useState("coc");
  const [selectEngage, setSelectEngage] = useState("articles");
  const [articleTab, setArticleTab] = useState("home");
  const [inputClassActive, setInputClassActive] = useState(false);
  const [inputClassSearchActive, setInputClassSearchActive] = useState(false);
  const initialDateRange = "12th Aug 2023 - 12th Feb 2024";
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [selectDepartment,setSelectDepartment]=useState("Select Department")
  const [selectLocation,setSelectLocation]=useState("Select Location")
  const [content, setContent] = useState("");

  const handleSelectActiveClass = (tab) => {
    setActiveClass(tab);
  };

  const handleSelectDepartment =(dept)=>{
    setSelectDepartment(dept)
  }

  const handleSelectLocation =(loc)=>{
    setSelectLocation(loc)
  }

  const handleEditorChange = (newContent) => {
    // Handle the updated content as needed
    setContent(newContent);
  };

  const handleClickAddArticle=()=>{
    setArticleTab("addArticle")
  }
//   const handleCloseResponseClick = () => {
//     setContent("");
//   };

  const privacyAndPolicyData = [
    {
      id: 0,
      documentTitle: "birthday policy",
      description: "N/P",
      size: "2.2MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 1,
      documentTitle: "Casual Leave Policy",
      description: "N/P",
      size: "2.6MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 2,
      documentTitle: "Compensation Day Off Policy",
      description: "N/P",
      size: "2.1MB",
      lastUpdatedOn: "31 Mar,2023",
    },
    {
      id: 3,
      documentTitle: "Sick Leave Policy",
      description: "N/P",
      size: "2.7MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 4,
      documentTitle: "Referral Policy",
      description: "N/P",
      size: "2.1MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 5,
      documentTitle: "Notice Period Policy",
      description: "2 months",
      size: "2.1MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 6,
      documentTitle: "Performance Improvement Policy",
      description: "2 months PIP",
      size: "1.1MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 7,
      documentTitle: "Probation Period Policy",
      description: "3 months probation",
      size: "1.6MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 8,
      documentTitle: "Rewards and recognition Policy",
      description: "N/P",
      size: "2.2MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 9,
      documentTitle: "Wedding Gift Policy",
      description: "N/P",
      size: "2.4MB",
      lastUpdatedOn: "31 Oct,2022",
    },
    {
      id: 10,
      documentTitle: "Maternity Leave Policy",
      description: "N/P",
      size: "1.7MB",
      lastUpdatedOn: "31 Oct,2022",
    },
  ];

  const documentsPage = () => {
    return (
      <div>
        <div
          class="navbarSec d-flex p-2"
          style={{ borderTop: "1px solid gray" }}
        >
          <div
            style={{ cursor: "pointer" }}
            className="menuItem dashboardActive"
          >
            Organization Documents
          </div>
        </div>
        <div>
          <div className="mt-4 ms-4" style={{ fontSize: "24px" }}>
            Organization Documents
          </div>
          <div className="opacity-50 ms-4" style={{ fontSize: "13px" }}>
            Documents in these folders can be uploaded/filled by admin. All
            these documents are available for viewing by all employees.
          </div>
        </div>
        <div className="d-flex gap-3">
          <div>
            <div className="mt-4 ms-4">
              <input
                type="text"
                placeholder="Search"
                className="inputSearch px-4"
              />
            </div>
            <div
              onClick={() => handleSelectActiveClass("coc")}
              className={
                activeClass === "coc"
                  ? "ms-4 documentsFileActive py-2"
                  : "ms-4 documentsFile py-2"
              }
            >
              <div className='d-flex gap-2"'>
                <VscFileSubmodule
                  style={{
                    height: "33px",
                    width: "33px",
                    borderRadius: "50%",
                    backgroundColor: "#64c3d1",
                  }}
                  className="p-2 ms-2"
                />
                <div className="ms-2" style={{ fontSize: "15px" }}>
                  COC | Diamante Blockchain
                </div>
              </div>
              <div
                className="opacity-50"
                style={{
                  fontSize: "14px",
                  marginLeft: "50px",
                  marginTop: "-13px",
                }}
              >
                1 document
              </div>
            </div>
            <div
              onClick={() => handleSelectActiveClass("policy")}
              className={
                activeClass === "policy"
                  ? "ms-4 documentsFileActive py-2"
                  : "ms-4 documentsFile py-2"
              }
            >
              <div className='d-flex gap-2"'>
                <VscFileSubmodule
                  style={{
                    height: "33px",
                    width: "33px",
                    borderRadius: "50%",
                    backgroundColor: "#64c3d1",
                  }}
                  className="p-2 ms-2"
                />
                <div className="ms-2" style={{ fontSize: "15px" }}>
                  Policies & procedures
                </div>
              </div>
              <div
                className="opacity-50"
                style={{
                  fontSize: "14px",
                  marginLeft: "50px",
                  marginTop: "-13px",
                }}
              >
                11 document
              </div>
            </div>
            <div
              onClick={() => handleSelectActiveClass("revise")}
              className={
                activeClass === "revise"
                  ? "ms-4 documentsFileActive py-2"
                  : "ms-4 documentsFile py-2"
              }
            >
              <div className='d-flex gap-2"'>
                <VscFileSubmodule
                  style={{
                    height: "33px",
                    width: "33px",
                    borderRadius: "50%",
                    backgroundColor: "#64c3d1",
                  }}
                  className="p-2 ms-2"
                />
                <div className="ms-2" style={{ fontSize: "15px" }}>
                  Revised Code of Conduct-2023
                </div>
              </div>
              <div
                className="opacity-50"
                style={{
                  fontSize: "14px",
                  marginLeft: "50px",
                  marginTop: "-13px",
                }}
              >
                1 document
              </div>
            </div>
          </div>
          {activeClass === "coc" && (
            <div className="mt-4 ms-4">
              <div className="documentContent px-2">
                <div className="mt-2 ms-2 d-flex gap-3">
                  <VscFileSubmodule
                    style={{
                      height: "33px",
                      width: "33px",
                      borderRadius: "50%",
                      backgroundColor: "#64c3d1",
                    }}
                    className="p-2 mt-1 ms-2"
                  />
                  <div className="mt-1">COC | diamante BlockChain</div>
                </div>
                <div
                  className="p-2 opacity-50"
                  style={{
                    fontSize: "12.5px",
                    marginLeft: "50px",
                    marginTop: "-14px",
                  }}
                >
                  A Document can give you full tour of our Work Culture and
                  believes. Complete handout to know your work ethics.
                </div>
              </div>
              <div className="mt-4">
                <table className="w-100" style={{ border: "none" }}>
                  <thead>
                    <tr className="px-4 py-2" style={{ fontSize: "12PX" }}>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        DOCUMENT TITLE
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        DESCRIPTION
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        SIZE
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        LAST UPDATED
                      </th>
                    </tr>
                  </thead>
                  <tbody className="codeOfConduct">
                    <tr style={{ border: "none" }}>
                      <td
                        className="py-2 text-center"
                        style={{
                          color: "#2986ce",
                          border: "1px solid #384252",
                          cursor: "pointer",
                        }}
                      >
                        Code of conduct
                      </td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      ></td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        2.26MB
                      </td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        31 Oct,2022
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeClass === "revise" && (
            <div className="mt-4 ms-4">
              <div className="documentContent px-2">
                <div className="mt-2 ms-2 d-flex gap-3">
                  <VscFileSubmodule
                    style={{
                      height: "33px",
                      width: "33px",
                      borderRadius: "50%",
                      backgroundColor: "#64c3d1",
                    }}
                    className="p-2 mt-1 ms-2"
                  />
                  <div className="mt-1">Revise Code of Conduct -2023</div>
                </div>
                <div
                  className="p-2 opacity-50"
                  style={{
                    fontSize: "12.5px",
                    marginLeft: "50px",
                    marginTop: "-14px",
                  }}
                >
                  The document consist with all Do's and Don't, which you should
                  follow. Please acknowledge the same document.
                </div>
              </div>
              <div className="mt-4">
                <table className="w-100" style={{ border: "none" }}>
                  <thead>
                    <tr className="px-4 py-2" style={{ fontSize: "12PX" }}>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        DOCUMENT TITLE
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        DESCRIPTION
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        SIZE
                      </th>
                      <th
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        LAST UPDATED
                      </th>
                    </tr>
                  </thead>
                  <tbody className="codeOfConduct">
                    <tr style={{ border: "none" }}>
                      <td
                        className="py-2 text-center"
                        style={{
                          color: "#2986ce",
                          border: "1px solid #384252",
                          cursor: "pointer",
                        }}
                      >
                        COC-Revised-2023
                      </td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      ></td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        2.27MB
                      </td>
                      <td
                        className="py-2 text-center"
                        style={{ border: "1px solid #384252 " }}
                      >
                        31 Mar,2022
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeClass === "policy" && (
            <div className="mt-4 ms-2">
              <div className="documentContent px-2">
                <div className="mt-2 ms-2 d-flex gap-3">
                  <VscFileSubmodule
                    style={{
                      height: "33px",
                      width: "33px",
                      borderRadius: "50%",
                      backgroundColor: "#64c3d1",
                    }}
                    className="p-2 mt-1 ms-2"
                  />
                  <div className="mt-1">Policies & Procedures</div>
                </div>
                <div
                  className="p-2 opacity-50"
                  style={{
                    fontSize: "12.5px",
                    marginLeft: "50px",
                    marginTop: "-14px",
                  }}
                >
                  Policies set some parameters for decision-making but leave
                  room for flexibility. They show the “why” behind an action.
                  Procedures, on the other hand, explain the “how.” They provide
                  step-by-step instructions for specific routine tasks. They may
                  even include a checklist...
                </div>
              </div>
              <div className="mt-4">
                <table className="w-100" style={{ border: "none" }}>
                  <thead>
                    <tr className="px-4 py-2" style={{ fontSize: "12PX" }}>
                      <th
                        className="py-2 px-4"
                        style={{ border: "1px solid #384252 " }}
                      >
                        DOCUMENT TITLE
                      </th>
                      <th
                        className="py-2 px-4 "
                        style={{ border: "1px solid #384252 " }}
                      >
                        DESCRIPTION
                      </th>
                      <th
                        className="py-2 px-4 "
                        style={{ border: "1px solid #384252 " }}
                      >
                        SIZE
                      </th>
                      <th
                        className="py-2 px-4"
                        style={{ border: "1px solid #384252 " }}
                      >
                        LAST UPDATED
                      </th>
                    </tr>
                  </thead>

                  <tbody className="codeOfConduct">
                    {privacyAndPolicyData.map((item, index) => (
                      <tr key={item.id}>
                        <td
                          className="py-4 px-4"
                          style={{
                            color: "#2986ce",
                            border: "1px solid #384252",
                            cursor: "pointer",
                          }}
                        >
                          {item.documentTitle}
                        </td>
                        <td
                          className="py-4 px-4"
                          style={{ border: "1px solid #384252" }}
                        >
                          {item.description}
                        </td>
                        <td
                          className="py-4 px-4"
                          style={{ border: "1px solid #384252" }}
                        >
                          {item.size}
                        </td>
                        <td
                          className="py-4 px-4"
                          style={{ border: "1px solid #384252" }}
                        >
                          {item.lastUpdatedOn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const engagePage = () => {
    return (
      <div>
        <div
          class="navbarSec d-flex p-2"
          style={{ borderTop: "1px solid gray" }}
        >
          <div className="d-flex gap-5 ms-2">
            <div
              onClick={() => setSelectEngage("articles")}
              style={{ cursor: "pointer" }}
              className={`menuItem ${
                selectEngage === "articles" ? "dashboardActive" : ""
              }`}
            >
              Articles
            </div>
            <div
              onClick={() => setSelectEngage("polls")}
              style={{ cursor: "pointer" }}
              className={`menuItem ${
                selectEngage === "polls" ? "dashboardActive" : ""
              }`}
            >
              Polls
            </div>
            <div
              onClick={() => setSelectEngage("announcement")}
              style={{ cursor: "pointer" }}
              className={`menuItem ${
                selectEngage === "announcement" ? "dashboardActive" : ""
              }`}
            >
              Announcement
            </div>
            {/* <div
              onClick={() => setSelectEngage("addArticle")}
              style={{ cursor: "pointer" }}
              className={`menuItem ${
                selectEngage === "addArticle" ? "dashboardActive" : ""
              }`}
            >
             Add Article
            </div> */}
          </div>
        </div>
        <div>
          {selectEngage === "articles" && articlesPage()}
          {selectEngage === "announcement" && announcementPage()}
          {selectEngage === "polls" && pollsPage()}
          {/* {selectEngage==="addArticle" && addArticlePage()} */}
        </div>
      </div>
    );
  };

  const handleClickArticleTab = (tab) => {
    setArticleTab(tab);
  };

  const articlesPage = () => {
    return (
      <div>
         {articleTab === "addArticle" ? addArticlePage() : 
        <div className="performanceNavbarSec d-flex ms-4 mt-4">
          <div
            className={
              articleTab === "home" ? "myperformance" : "myPerformanceInactive"
            }
            onClick={() => handleClickArticleTab("home")}
            style={{ cursor: "pointer", fontSize: "15px", opacity: "0.6" }}
          >
            Home{" "}
          </div>
          <div
            className={
              articleTab === "categories"
                ? "myperformance"
                : "myPerformanceInactive"
            }
            onClick={() => handleClickArticleTab("categories")}
            style={{ cursor: "pointer", fontSize: "15px", opacity: "0.6" }}
          >
            Categories{" "}
          </div>
          <div
            className={
              articleTab === "manage"
                ? "myperformance"
                : "myPerformanceInactive"
            }
            onClick={() => handleClickArticleTab("manage")}
            style={{ cursor: "pointer", fontSize: "15px", opacity: "0.6" }}
          >
            {" "}
            Manage{" "}
          </div>
        </div>
  }
        {articleTab === "home" && (
          <div className="ms-4 mt-4">
            <div style={{ fontSize: "24px" }}>Articles</div>
            <div className="opacity-50" style={{ fontSize: "14px" }}>
              See all your organization articles from here
            </div>

            <div style={{ fontSize: "24px" }}>Recent Articles</div>
            <div
              style={{
                fontSize: "14px",
                color: "#2986ce",
                border: "1px solid #2986ce",
                borderRadius: "3px",
              }}
              className="p-2 mt-2 me-2"
            >
              No articles found. Create first article from Manage.
            </div>
            <div style={{ fontSize: "24px" }} className="mt-4">
              Most Popular Articles
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#2986ce",
                border: "1px solid #2986ce",
                borderRadius: "3px",
              }}
              className="p-2 mt-2 me-2"
            >
              No articles found. Create first article from Manage.
            </div>
          </div>
        )}
        {articleTab === "categories" && (
          <div className="ms-4 mt-4">
            <div
              style={{
                fontSize: "14px",
                color: "#2986ce",
                border: "1px solid #2986ce",
                borderRadius: "3px",
              }}
              className="p-2 mt-2 me-2"
            >
              No categories found
            </div>
          </div>
        )}

        {articleTab === "manage" && (
          <div className="ms-4 mt-4">
            <div className="d-flex justify-content-between me-4">
              <div>
                <div style={{ fontSize: "24px" }}>My Articles</div>
                <div className="opacity-50" style={{ fontSize: "14px" }}>
                  See your drafts, published and manage all your articles from
                  here
                </div>
              </div>
              {articleTab === "manage" && (
        <button className="createNewArticle" onClick={handleClickAddArticle}>Create New Article</button>
      )}
            </div>
            <div className="mt-4" style={{ fontSize: "20px" }}>
              My Published Articles
            </div>
            <div className="mt-2 publishedArticle mb-2">
              <input
                type="text"
                className="inputSearchArticle px-2 py-2"
                placeholder="Search"
              />
              <div className=" mt-2 d-flex justify-content-end me-4">
                <div style={{ color: "#ffffff" }}>Total : 0</div>
              </div>
              {/* <div className='horizontalLine w-100 mt-2'></div> */}
              <table className="w-100 mx-auto mt-2">
                <thead>
                  <tr className="headerSectionArticle p-1">
                    <th className="w-25 text-center py-1">TITLE</th>
                    <th className="w-25 text-center py-1">CREATED ON </th>
                    <th className="w-25 text-center py-1">PUBLISHED ON</th>
                    <th className="w-25 text-center py-1">ACTIONS</th>
                  </tr>
                </thead>
              </table>
              <div className="d-flex justify-content-center mt-4">
                <div
                  className="text-white opacity-50"
                  style={{ fontSize: "22px" }}
                >
                  No records found
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const announcementPage = () => {
    return (
      <div className="ms-4 mt-4">
        <div style={{ fontSize: "28px" }}>Announcements</div>
        <div className="opacity-50" style={{ fontSize: "14px" }}>
          You can view announcements made by our organization here{" "}
        </div>
        <div className="d-flex gap-4">
          <div className="mt-4 announcementPage ">
            <div className="d-flex justify-content-between optionSec py-2">
              <div style={{ fontSize: "12px" }} className="ms-2">
                OPTIONS
              </div>
              <div
                style={{ fontSize: "12px", color: "#2986CE" }}
                className="px-2"
              >
                RESET
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className="ms-4 inputSearchAnnouncement"
                //   onClick ={()=>setInputClassActive(!inputClassActive)}
                onBlur={() => setInputClassActive(!inputClassActive)}
              />
              <div
                className={
                  inputClassActive
                    ? "announcementLineActive mt-1 w-75 ms-3"
                    : "announcementLine mt-1 w-75 ms-3"
                }
              ></div>
            </div>

            <div className="mt-3">
              <div className="ms-3">Added by</div>
              <input
                type="text"
                placeholder="Search Employee"
                className="ms-4 mt-2 inputSearchAnnouncement"
                //   onClick ={()=>setInputClassSearchActive(!inputClassSearchActive)}
                onBlur={() =>
                  setInputClassSearchActive(!inputClassSearchActive)
                }
              />
              <div
                className={
                  inputClassSearchActive
                    ? "announcementLineActive mt-1 w-75 ms-3"
                    : "announcementLine mt-1 w-75 ms-3"
                }
              ></div>
            </div>
            <div className="ms-3 mt-2 d-flex">
              <div id="switch" />
              <label for="switch">Toggle</label>

              <div className="ms-4" style={{ fontSize: "16px" }}>
                Exclude Announcement from wall
              </div>
            </div>
            <div className="ms-4 mt-2">
              <div>Date Range</div>
              <input
                type="text"
                value={dateRange}
                className="dateRange mt-2 px-4"
                onChange={(e) => setDateRange(console.log(e.target.value))}
              />
            </div>
            <div className="ms-4 mt-2">
              <div>Department</div>
              <Dropdown onSelect={(eventKey) => handleSelectDepartment(eventKey)}>
                <Dropdown.Toggle id="dropdown-basic-announcement">
                 {selectDepartment}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenusAnnouncement">
                  <Dropdown.Item eventKey="HR">HR </Dropdown.Item>
                  <Dropdown.Item eventKey="Technical Team">
                    Technical team
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Business Development">
                    Business Development
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                  <Dropdown.Item eventKey="Executive">Executive</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="ms-4 mt-2 mb-2">
              <div>Location</div>
              <Dropdown onSelect={(eventKey) => handleSelectLocation(eventKey)}>
                <Dropdown.Toggle id="dropdown-basic-announcement">
                  {selectLocation}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenusAnnouncement">
                  <Dropdown.Item eventKey="Bangalore">Bangalore</Dropdown.Item>
                  <Dropdown.Item eventKey="Maharastra">Maharastra</Dropdown.Item>
                  <Dropdown.Item eventKey="Kolkata">Kolkata</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="mt-4 noAnnouncement">
            <div className="d-flex justify-content-center">
              <img
                height="250"
                width="400"
                alt="No announcements found"
                src="https://cdn.kekastatic.net/shared/assets/images/background/no-announcements-found-dark.svg"
              />
            </div>
            <div className="text-center">
              <div>No announcement found</div>
              <div style={{ fontSize: "12px", opacity: "0.6" }}>
                Try selecting different time range or a different filter
              </div>
            </div>
          </div>
        </div>

        {/* <input type="checkbox" id="switch" /><label for="switch">Toggle</label> */}
      </div>
    );
  };

  const pollsPage = () => {
    return (
      <div className="ms-4 mt-4">
        <div style={{ fontSize: "28px" }}>Polls</div>
        <div className="opacity-50" style={{ fontSize: "14px" }}>
          You can view the polls conducted by your organization and participate
          in those polls here.{" "}
        </div>
        <div className="d-flex gap-4">
          <div className="mt-4 announcementPage ">
            <div className="d-flex justify-content-between optionSec py-2">
              <div style={{ fontSize: "12px" }} className="ms-2">
                OPTIONS
              </div>
              <div
                style={{ fontSize: "12px", color: "#2986CE" }}
                className="px-2"
              >
                RESET
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className="ms-4 inputSearchAnnouncement"
                //   onClick ={()=>setInputClassActive(!inputClassActive)}
                onBlur={() => setInputClassActive(!inputClassActive)}
              />
              <div
                className={
                  inputClassActive
                    ? "announcementLineActive mt-1 w-75 ms-3"
                    : "announcementLine mt-1 w-75 ms-3"
                }
              ></div>
            </div>

            <div className="mt-3">
              <div className="ms-3">Added by</div>
              <input
                type="text"
                placeholder="Search Employee"
                className="ms-4 mt-2 inputSearchAnnouncement"
                //   onClick ={()=>setInputClassSearchActive(!inputClassSearchActive)}
                onBlur={() =>
                  setInputClassSearchActive(!inputClassSearchActive)
                }
              />
              <div
                className={
                  inputClassSearchActive
                    ? "announcementLineActive mt-1 w-75 ms-3"
                    : "announcementLine mt-1 w-75 ms-3"
                }
              ></div>
            </div>
            <div className="ms-3 mt-3 d-flex">
              <div id="switch" />
              <label for="switch">Toggle</label>

              <div className="ms-4" style={{ fontSize: "16px" }}>
                Exclude Polls from wall
              </div>
            </div>
            <div className="ms-4 mt-3">
              <div>Date Range</div>
              <input
                type="text"
                value={dateRange}
                className="dateRange mt-2 px-4"
                onChange={(e) => setDateRange(console.log(e.target.value))}
              />
            </div>
            <div className="ms-4 mt-2">
              <div>Department</div>
              <Dropdown onSelect={(eventKey) => handleSelectDepartment(eventKey)}>
                <Dropdown.Toggle id="dropdown-basic-announcement">
                 {selectDepartment}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenusAnnouncement">
                  <Dropdown.Item eventKey="HR">HR </Dropdown.Item>
                  <Dropdown.Item eventKey="Technical Team">
                    Technical team
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Business Development">
                    Business Development
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                  <Dropdown.Item eventKey="Executive">Executive</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="ms-4 mt-2 mb-2">
              <div>Location</div>
              <Dropdown onSelect={(eventKey) => handleSelectLocation(eventKey)}>
                <Dropdown.Toggle id="dropdown-basic-announcement">
                  {selectLocation}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenusAnnouncement">
                  <Dropdown.Item eventKey="Bangalore">Bangalore</Dropdown.Item>
                  <Dropdown.Item eventKey="Maharastra">Maharastra</Dropdown.Item>
                  <Dropdown.Item eventKey="Kolkata">Kolkata</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="mt-4 noAnnouncement">
            <div className="d-flex justify-content-center">
              <img
                height="250"
                width="400"
                alt="No announcements found"
                src="https://cdn.kekastatic.net/shared/assets/images/background/no-announcements-found-dark.svg"
              />
            </div>
            <div className="text-center">
              <div>No announcement found</div>
              <div style={{ fontSize: "12px", opacity: "0.6" }}>
                Try selecting different time range or a different filter
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const addArticlePage =()=>{
    return(
        <div className="mt-4 ms-4">
        <div style={{color:"#2986CE",fontSize:"13px",cursor:"pointer"}} onClick={()=>setArticleTab("manage")}> Back to Manage </div>
        <div className="d-flex gap-4">
            <div>
            <div className="mt-4">
            <div className="addHeader d-flex flex-column justify-content-center align-items-center py-2">
            <RiImageAddFill style={{height:"33px",width:"33px",color:"#2986CE",}} />
            <div className="d-flex gap-1">
           <div style={{color:"#2986CE"}} class>+Add header image </div> <span> (optional)</span>
           </div>
           </div>
            </div>

            
<div className="mt-2">
            <input type="text" placeholder="Enter title here... " className="addHeaderInput px-4"/>
   </div>

   <div className="mt-2 quillEditor">
        <QuillEditor
                  className="p-2 editorStyle"
                  value={content}
                  onChange={handleEditorChange}
                  showButtons={false}
                />
        </div>
        <div className="mt-2 mb-2">
            <div className="addFile d-flex align-items-center">
                <div className="ms-4 d-flex">
                 <AiOutlineLink style={{height:"20px",width:"20px",color:"#2986CE"}} />
                <div style={{fontSize:"14px",color:"#2986CE"}} className="ms-1">Add File</div>
                </div>
 </div>
  </div>
</div>
       
    <div className="publishOption mt-4 ms-2">
    <div className="mt-4 ms-4">Publish Option</div>
    <div className="d-flex justify-content-between mx-auto mt-2">
        <div style={{fontSize:"14px"}} className="ms-4">Select category</div>
        <div style={{color:"#2986CE",fontSize:"14px"}} className="me-2">Add+</div>
    </div>
    <div className="selectCategory p-1 d-flex flex-column align-items-center justify-content-center mt-2 ms-4 me-2">
   <div style={{fontSize:"12px",opacity:"0.6"}}>No Categories Available</div>
   <div style={{fontSize:"12px",opacity:"0.6"}}>Create a new category by clicking add link above</div>
    </div>
    <div className="mt-4 ms-4">
        <div>Tags</div>
        <input type="text" placeholder="Enter tag and press enter to add" className="inputTags px-4 mt-1"/>

    </div>
    <div className="mt-4 ms-4">
        <div className="d-flex justify-content-between">
        <div>
    <button className="p-2 publishButton">Publish</button>
    <button className="ms-3 p-2 saveDraftButton">Save draft</button>
    </div>
    <div className="me-3">
        <div style={{color:"#2986CE"}}>Preview</div>
    </div>
    </div>

    </div>
</div>
       
        </div>
      
        </div>
       
    )
  }

  return (
    <>
      <div className="dashboardMainContainer">
        <div className="navbarSec d-flex p-2">
          <div className="d-flex gap-4 ms-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setPageNameOrg("organisation");
              }}
              className={`menuItem ${
                pageNameOrg === "organisation" ? "dashboardActive" : ""
              }`}
            >
              ORGANISATION TREE
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setPageNameOrg("documents");
              }}
              className={`menuItem ${
                pageNameOrg === "documents" ? "dashboardActive" : ""
              }`}
            >
              DOCUMENTS
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setPageNameOrg("engage");
              }}
              className={`menuItem ${
                pageNameOrg === "engage" ? "dashboardActive" : ""
              }`}
            >
              ENGAGE
            </div>
          </div>
        </div>

        <div>
          {pageNameOrg === "documents" && documentsPage()}
          {pageNameOrg === "engage" && engagePage()}
          {pageNameOrg === "organisation" && <TreeStructure />}
        </div>
      </div>
    </>
  );
};

export default Organisation;
