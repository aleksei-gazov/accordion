import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectComponent = () => {
    const [status, setstatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setstatus(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Статус</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={status}
                label="Status"
                onChange={handleChange}
            >
                <MenuItem value={10}>Выполнена</MenuItem>
                <MenuItem value={20}>На паузе</MenuItem>
                <MenuItem value={30}>В работе</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectComponent;