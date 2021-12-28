import React, {useState} from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'

function AccDetail({ AccordionSubHeader, AccordionDetail1, AccordionDetail2, AccordionDetail3, details}) {
    
    // Hide and how check box on click
    const [showAccordion, setShowAccordion] = React.useState(false);
    const [showAccordions, setShowAccordions] = React.useState(true);
    const editHandler = () => {
        setShowAccordion(!showAccordion);
        setShowAccordions(!showAccordions);
    }

    console.log(showAccordions);

    const [checked, setChecked] = useState(true)

    // console.log(details);
   
    const accordionDetail = details.map((item, key) =>{
        console.log(item)
        return <FormGroup key={key}>
                <FormControlLabel control={<Checkbox defaultChecked />} label={item.name} />
            </FormGroup>
    });

    const everyDetail = details.map((item, key) =>{
        return <div key={key}>{item.name}</div>;
    });



    // const everyDetail = {details}
    // console.log("noww" + eachDetail);

    return (
        <div>
            <AccordionDetails>
                <Typography>
                    <div className="accSubHeader">
                        {AccordionSubHeader}
                        <div className="accEdit">
                            <Button onClick={editHandler}>Edit</Button>
                        </div>
                    </div>
                </Typography>
                <Typography>
                    <div className="accDetail">
                        {/* Check box */}
                        <div className="checkbox">
                            { showAccordion ?  <div>{accordionDetail}
                            <Button variant="contained">Save</Button>
                            </div> : null}
                        </div>
                        
                        {/* Sub details */}
                        <div className="allDetail">

                        {/* {details.map((everyDetail) => (
                            <Link to={`/category/${everyDetail}`}><div>{everyDetail}</div></Link>
                        ))} */}
                      

                            <Link to={{ pathname:`/category/` , state:{}, }}>   { showAccordions ?  <div  className="everyDetail">
                                {everyDetail}
                                
                            </div> : null }
                        </Link>
                        </div>
                    </div>
                </Typography>

            </AccordionDetails>
            
        </div>
    )
}

export default AccDetail
