import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
<div>
            
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
          <Select
               value={value}
               onChange={event => onChange(event.target.value)}
              label="Сортировка"
          >
            {options.map(option =>
            <MenuItem key={option.value} value={option.value}>
                {option.name}
            </MenuItem>
            )}
          </Select>
        </FormControl>


      </div>
    )
}
export default MySelect;