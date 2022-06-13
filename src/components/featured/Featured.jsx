import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';



const Featured = () => {
   return (
       <div className="featured">
           <div className="top">
               <h1 className="title">Totel Revenue</h1>
               <MoreVertIcon  className="icon"/>
           </div>
           <div className="bottom">
               <div className="featuredChart">
                    <CircularProgressbar value={70} text ={"70%"} strokeWidth={2}/>
               </div>
               <p className="title">Total sales made today</p>
               <p className="amount">$420</p>
               <p className="desc">Previouse transactions processing. Last payments may not be included.</p>
               <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon className="icon" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon className="icon" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon className="icon" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
               </div>     


           </div>
       </div>
   )
}

export default Featured
