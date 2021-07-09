import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


export default function Search() {


  return (
    <div  className='mb-3'>
      <TextField
       color='secondary'
       fullWidth
        id="input-with-icon-textfield"
        label="Search for a country "
        variant='filled'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
