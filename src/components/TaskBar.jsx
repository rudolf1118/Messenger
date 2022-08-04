import React, {useState} from 'react';
import classes from "./Styles.module.css";
import {FiSearch} from "react-icons/fi";
import Setting from "./Contents/Setting";
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai";

const TaskBar=()=>{
    const [close,setClose]=useState(false)
    const [status,setStatus]=useState(true);
    const closer = ()=>{
        setClose(!close)
    }

    return (
      <div className={close ? classes.taskbar : classes.taskbarNone }>
          <div className={classes.container}>
              <div className={classes.taskbar__column}>
                  <div className={classes.taskbar__user}>
                      <div className={classes.taskbar__userRow}>
                          <img src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}/>
                          <div className={classes.taskbar__status}>{status ? <span className={classes.online}>Online <AiOutlineCheckCircle className={classes.taskbar__button}/></span> : <span className={classes.offline}>Offline <AiOutlineCloseCircle className={classes.taskbar__button} /></span> }</div>
                      </div>
                      <div className={classes.taskbar__userColumn}>
                      <div className={classes.taskbar__userName}>Rudolf Harutyunyan</div>
                          <div className={classes.taskbar__userMail}>rud.harutyunyan@tempmail.com</div>
                          <div className={classes.taskbar__statusRow}>
                             <div onClick={()=>setStatus(!status)} className={classes.taskbar__change}>Change Status</div>
                          </div>
                      </div>

                  </div>
                  <div className={classes.taskbar__midcolumn}>
                      <div className={classes.taskbar__subject}></div>
                      <div className={classes.taskbar__subject}></div>
                      <div className={classes.taskbar__subject}></div>
                      <div className={classes.taskbar__subject}></div>
                      <div className={classes.taskbar__subject}></div>
                  </div>
                  <div className={classes.taskbar__lastcolumn}>
                      <div className={classes.taskbar__subject1}></div>
                      <div className={classes.taskbar__darkrow}>
                          <div className={classes.taskbar__subject1}></div>
                          <div className={classes.taskbar__btn}></div>
                      </div>
                  </div>
              </div>
          </div>
          <Setting closer={closer} className={classes.taskbar__settings}/>
      </div>
    );
};

export default TaskBar;