
import React from 'react';
import { TextField } from '@mui/material';

export const Filter = ({handleChangeFilter}) => {
    return (
        <div>
            <TextField id="filter" label="Find contacts by name" variant="standard" onChange={handleChangeFilter} />
            
        </div>
    )
};
export default Filter;