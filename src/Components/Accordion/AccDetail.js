import React, {useState} from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';


function AccDetail({ AccordionSubHeader, details}) {
    
    // Hide and how check box on click
    const [showAccordion, setShowAccordion] = React.useState(false);
    const [showAccordions, setShowAccordions] = React.useState(true);
    const editHandler = () => {
        setShowAccordion(!showAccordion);
        setShowAccordions(!showAccordions);
    }

    // For further purpose when data will be available
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

  
    // Check box values
    const accordionDetail = details.map((item, key) =>{
        return  <FormGroup key={key}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={item.name} />
                </FormGroup>
    });

    // Accordian Sub values
    const everyDetail = details.map((item, key) =>{
        return `${item.name}`;
    });

    const everyDetails = details.map((item, key) =>{
        return <div key={key}>{item.name}</div>;
    });


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
                            <Link to={{ pathname:`/category` , state:{...everyDetail} }}>   { showAccordions ?  <div  className="everyDetail">
                                {everyDetails}  
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
