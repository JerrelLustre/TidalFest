import React from 'react'
import Body from '../Body/Body'
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQInfo = [
    {
        id: 1,
        question: "What are the event dates?",
        answer: "The event will take place from July 26 - 28"
    },
    {
        id: 2,
        question: "When do wristbands ship?",
        answer: "Wristbands will begin shipping approximately two weeks before the event."
    },
    {
        id: 3,
        question: "What is the minimum age?",
        answer: "The festival is open to all ages, and attendees under 18 must be accompanied by a parent or legal guardian."
    },
    {
        id: 4,
        question: "Will there be food and drinks?",
        answer: "Yes, there will be a wide variety of food and drink options available for purchase at the festival."
    },
    {
        id: 5,
        question: "What are you not allowed to bring?",
        answer: "Please refrain from bringing outside alcohol, illegal substances, weapons, glass containers, large coolers, laser pointers, and unauthorized vending materials."
    }
];


export default function FAQContainer() {
    return(
    <Body>
        {FAQInfo.map(item =>(
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    bgcolor: 'pale100.main'
                }}
                >
                {item.question}
                </AccordionSummary>
            <AccordionDetails>
                {item.answer}
            </AccordionDetails>
            </Accordion>
        ))}
    </Body>
    )
}

