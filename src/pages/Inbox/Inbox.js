import React,{useState} from 'react'
import './Inbox.css'




const Inbox =()=>{

    const [pageName,setPageName]=useState("takeaction")


    const takeActionPage =()=>{
        return(
            <div className="mt-4 position-relative ms-4">
                <div style={{height:"79vh",overflowY:"hidden"}}>
                <img class="w-100 h-100 mt-4" alt="nopending" src="https://cdn.kekastatic.net/shared/assets/images/background/no-requests-dark.png"/>
                <div style={{fontSize:"25px"}} className="pendingAction opacity-50">No Pending requests</div>
                </div>
            </div>
        )
    }

    const notificationPage =()=>{
        return(
            <div>
                <div className='ms-4'>
                <div className='mt-4'>Notifications</div>
                <div className='text-white opacity-50' style={{fontSize:"15px"}}>Show cases all your notifications from Walls,Praises and Feedback</div>
                </div>
                <div className='notificationContainer mt-3 ms-4 d-flex flex-column justify-content-center align-items-center'>
                <img  width="400"  src="https://cdn.kekastatic.net/shared/assets/images/background/empty-inbox-notifications-light.svg" alt="notification"/>
                   <div>No Notifications Found</div>
                   <div className='opacity-50'>You've haven't got any Notification recently</div>
                </div>
                </div>
        )
    }

    const archivePage =()=>{
      return(
        <div className='mt-4'>
          <div className=' ms-4 archiveSection'>
            <div className='archiveHeader'>
              <div className='ms-4'>ARCHIVE-LAST 3 MONTHS</div>

            </div>
          </div>
         
        </div>
      )
    }
    return(
        <div>
      <div className="dashboardMainContainer" style={{ flex: 1 }}>
        <div className="navbarSec p-2">
          <div
            onClick={() => setPageName("takeaction")}
            style={{ cursor: "pointer" }}
            className={`menuItem ${
              pageName === "takeaction" ? "dashboardActive" : ""
            }`}
          >
            TAKE ACTION
          </div>
          <div
            onClick={() => setPageName("notification")}
            style={{ cursor: "pointer" }}
            className={`menuItem ${
              pageName === "notification" ? "dashboardActive" : ""
            }`}
          >
            NOTIFICATIONS
          </div>
          <div
            onClick={() => setPageName("archive")}
            style={{ cursor: "pointer" }}
            className={`menuItem ${
              pageName === "archive" ? "dashboardActive" : ""
            }`}
          >
            ARCHIVE
          </div>
        </div>

        <div>
          {pageName === "takeaction" && takeActionPage()}
          {pageName === "notification" && notificationPage()}
          {pageName === "archive" && archivePage()}
        </div>
      </div>
    </div>
    )
}

export default Inbox