import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Accordions from './Accordions';

it("Render Accordion without crashing", () => {
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
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Accordions AccordionHeader="Channel Performance" accordionDetail={customerPreception}></Accordions></BrowserRouter>, div);
})