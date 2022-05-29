import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, Stack, Container, TablePagination } from '@mui/material';
import InputSelect from '../component/InputSelect';
import InputSearch from '../component/InputSearch';
import BoxcardPlace from '../component/BoxcardPlace';
import DataPlace from '../Json/example_data.json';
import { filter } from 'lodash';
import Typography from '@mui/material/Typography';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_placelist) => _placelist.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}


function Home() {
    const [selected, setSelected] = useState([]);
    const [placeName, setPlaceName] = useState('');
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    const [placeList, setPlaceList] = useState([
        { value: "restaurant", label: "Restaurant" },
        { value: "bakery", label: "Bakery" },
        { value: "cafe", label: "Cafe" }
    ]);
    const [placeSelectValue, setPlaceSelectValue] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);

    const handleFilterByPlaceName = (event) => {
        setPlaceName(event.target.value);
    };

    const filteredPlaceName = applySortFilter(DataPlace, getComparator(order, orderBy), placeName);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 9));
        setPage(9);
    };

    return (
        <div>
            <Container>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid spacing={2}>
                        <Grid item xs={12} sm={4} md={5} lg={7} xl={9}>
                            <Box className='text-title' sx={{ display: { xs: 'none', md: 'flex' }, mt: 5, ml: 5 }}>
                                <h5>Place List</h5>
                            </Box>
                            <Box className="text-title" sx={{ display: { xs: 'flex', md: 'none' }, mt: 5, ml: 5 }}>
                                <h5>Place List</h5>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mr: 7 }} justifyContent="flex-end">
                        <div sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputSelect
                                selectValue={placeSelectValue} dataList={placeList}
                                handleChange={(event) => {
                                    setPlaceSelectValue(event.target.value);
                                }}
                            />
                        </div>
                        <div sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <InputSearch numSelected={selected.length} placeName={placeName} onFilterName={handleFilterByPlaceName} />
                        </div>
                    </Box>

                    <Grid container spacing={3}>
                        {filteredPlaceName && filteredPlaceName.length > 0 ?
                            filteredPlaceName.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => {
                                return <BoxcardPlace key={i} item={item} index={i} />
                            })
                            :
                            <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                                <h5>Not Found Data</h5>
                            </Typography>
                        }
                    </Grid>

                    <Box
                        sx={{
                            mt: 3,
                            display:'flex',
                            justifyContent:'center'
                        }}
                    >
                        <Stack spacing={2}>
                            <TablePagination variant="outlined"
                                rowsPerPageOptions={[9]}
                                component="div"
                                count={DataPlace.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home