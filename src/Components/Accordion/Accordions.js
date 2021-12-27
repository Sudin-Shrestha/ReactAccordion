import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import './Accordions.css'
import AccDetail from './AccDetail';

const Accordions = ({ AccordionHeader, accordionDetail }) => {

    const accordionList = accordionDetail.map((item,key) => {
        
        return <AccDetail
        key = {key}
        AccordionSubHeader={item.title} 
        AccordionDetail1={item.detail1}
        AccordionDetail2={item.detail2}
        AccordionDetail3={item.detail3}
         />
    })


    return (
        <div className="Accordion">
            <Container>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className="accHeader">{AccordionHeader}</Typography>
                    </AccordionSummary>
                    {accordionList}   
                </Accordion>

                
            </Container>
        </div>
    )
}

export default Accordions
