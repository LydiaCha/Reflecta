import { Link } from "react-router-dom";

export const steps = [
    {
        id: 'Q1',
        message: "Describe the experinece you'd like to reflect on. Such as when did it happen? Who was involved? What happened?",
        trigger: 'A1',
    },
    {
        id: 'A1',
        user: true,
        trigger: 'Q2',
    },
    {
        id: 'Q2',
        message: "What did you do in this situation?",
        trigger: 'A2',
    },
    {
        id: 'A2',
        user: true,
        trigger: 'Q3',
    },
    {
        id: 'Q3',
        message: "How did you feel in this situation?",
        trigger: 'A3',
    },
    {
        id: 'A3',
        user: true,
        trigger: 'Q4',
    },
    {
        id: 'Q4',
        message: "How did your actions affect the situation?",
        trigger: 'A4',
    },
    {
        id: 'A4',
        user: true,
        trigger: 'Q5',
    },
    {
        id: 'Q5',
        message: "Thank you for your reflection",
        trigger: 'END',
    },
    {
        id: 'END',
        component: (
            <Link to='/' className="reflection-exit-link">
                <div> Click here to exit</div>
            </Link>
        ),
        end: true,
    },

];