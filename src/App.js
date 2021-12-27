import './App.css';
import Accordions from './Components/Accordion/Accordions.js';
//import AccDetail from './Components/Accordion/AccDetail.js';

function App() {
    const channelPerformance = [
        {
            title: 'Insight Metrics',
            detail1: 'Store ',
            detail2: 'Inventory '
        },
        {
            title: 'Category Preferences',
            detail1: 'Category 1; ',
            detail2: 'Category 2; ',
            detail3: 'Category 3; ',
        },
    ];

    const customerPreception = [
        {
            title: 'Insight Metrics',
            detail1: 'Store ',
            detail2: 'Inventory '
        },
        {
            title: 'Category Preferences',
            detail1: 'Category 1; ',
            detail2: 'Category 2; ',
            detail3: 'Category 3; ',
        },
    ];

    return ( 
        <div className = "App" >
            <Accordions AccordionHeader="Channel Performance" accordionDetail={channelPerformance} />
            <Accordions AccordionHeader="Customer Preception" accordionDetail={customerPreception} />
            <Accordions AccordionHeader="Shop Behaviour" accordionDetail={customerPreception} />
            <Accordions AccordionHeader="Personal Information" accordionDetail={customerPreception} />


        </div>
    );
}

export default App;