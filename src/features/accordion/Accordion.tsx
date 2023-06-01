import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Tables} from 'features/table/Table';
import {THead} from 'features/table/tableHead/TableHead';
import {TBody} from 'features/table/tableBody/TableBody';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel2');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <div style={{marginLeft: '10px'}}>
                <Tables >
                    <THead/>
                </Tables>
            </div>

            <Accordion style={{marginLeft: '0'}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary

                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>
                        Выполненные задачи
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Tables>
                        <TBody/>
                    </Tables>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>Задачи на сегодня</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Tables>
                        <TBody/>
                    </Tables>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>Предстоящие задачи</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Tables>
                        <TBody/>
                    </Tables>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}