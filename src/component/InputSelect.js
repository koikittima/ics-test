import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function InputSelect({ dataList, handleChange, selectValue }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 185 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectValue}
          // label=""
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={(event) => {
            handleChange(event)
          }}
        >
          <MenuItem value="">
            <span className="text-select">Restaurent</span>
          </MenuItem>
          {dataList.map((item, i) => (
            <MenuItem key={i} value={item.value} sx={{ minWidth: 185 }}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <style jsx="true" global="true">{`
      .css-1uc6641-MuiFormControl-root {
        border: 1px solid #134B8A;
        border-radius: 50px;
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
      position: relative;
      border-radius: 50px;
  }
  
           
            `}</style>
    </div>
  )
}

export default InputSelect

