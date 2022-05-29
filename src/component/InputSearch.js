
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import Iconify from './Iconify';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 75,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  // '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

InputSearch.propTypes = {
  numSelected: PropTypes.number,
  placeName: PropTypes.string,
  onFilterName: PropTypes.func,
};


function InputSearch({ numSelected, placeName, onFilterName }) {

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={placeName}
          onChange={onFilterName}
          placeholder="Search Place..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}
      <style jsx="true" global="true">{`
     

     .css-1026je5-MuiInputBase-root-MuiOutlinedInput-root {
       border: 1px solid #134B8A;
       border-radius: 50px;
   }
        
         `}</style>

    </RootStyle>
  )
}

export default InputSearch