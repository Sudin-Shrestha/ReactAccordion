import './App.css';
import Accordions from './Components/Accordion/Accordions.js';
import Category from './Components/Category/Category.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

    //Putting in some static data
    const channelPerformance = [
        {
            title: 'Insight Metrics',
            details: [
                {
                    'id': 1,
                    'name':'Store'
                },
                {
                    'id': 2,
                    'name':'inventorey'
                },
            ],
           
        },
        {
            title: 'Category Preferences',
            details: [
                {
                    'id': 1,
                    'name':'Category 1'
                },
                {
                    'id': 2,
                    'name':'Category 2'
                },
                {
                    'id': 3,
                    'name':'Category 3'
                }
            ]
        },
    ];

    const customerPreception = [
        {
            title: 'Insight Metrics',
            details: [
                {
                    'id': 1,
                    'name':'Store'
                },
                {
                    'id': 2,
                    'name':'inventorey'
                },
            ],
           
        },
        {
            title: 'Category Preferences',
            details: [
                {
                    'id': 1,
                    'name':'Category 1'
                },
                {
                    'id': 2,
                    'name':'Category 99'
                },
                {
                    'id': 3,
                    'name':'Category 3'
                },
                {
                    'id': 4,
                    'name':'Category 4'
                }
                
            ]
        },
    ];

    return ( 
        <Router>
            <div className = "App" >
                <Switch>
                    <Route exact path = "/">
                        {/* All Accordions */}
                        <Accordions AccordionHeader="Channel Performance" accordionDetail={channelPerformance} />
                        <Accordions AccordionHeader="Customer Preception" accordionDetail={customerPreception} />
                        <Accordions AccordionHeader="Shop Behaviour" accordionDetail={customerPreception} />
                        <Accordions AccordionHeader="Personal Information" accordionDetail={customerPreception} />
                    </Route>
                    <Route exact path="/category" >
                        <Category/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;