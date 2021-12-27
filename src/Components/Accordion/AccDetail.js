import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


function AccDetail({ AccordionSubHeader, AccordionDetail1, AccordionDetail2, AccordionDetail3}) {

    const allDetails = [
        {
        detail1: {AccordionDetail1},
        detail2: {AccordionDetail2},
        detail3: {AccordionDetail3},
    }
    ];

    // const AccordionDetail = allDetails.map((detailDesc) =>{
    //     return {detailDesc};
    // });

    // const checkDetail = allDetails.map((item,key) => {
    //     console.log(item);
    //     return <input type="checkbox" id={key} value={item.detail1} value={item.detail1}><label>{item.detail1}</label></input>
        
                

    // })

    return (
        <div>
            <AccordionDetails>
                <Typography>
                    <div className="accSubHeader">
                        {AccordionSubHeader}
                        <div className="accEdit">
                            <button >Edit</button>
                        </div>
                    </div>
                </Typography>
                <Typography>
                    <div className="accDetail">
                        {/* Check box */}
                        {/* <form>
                            {checkDetail}
                        </form> */}
                        {/* {AccordionDetail} */}
                        {AccordionDetail1}
                        {AccordionDetail2}
                        {AccordionDetail3}
                    </div>
                </Typography>

            </AccordionDetails>
            
        </div>
    )
}

export default AccDetail
