import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container } from '@mui/system';
import { Button, Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import DataPlace from '../Json/example_data.json';
import Iconify from '../component/Iconify';

function PlaceDetail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({})

  useEffect(() => {
    getPlaceDetailById(location.state.id);
  }, []);

  const getPlaceDetailById = async (id) => {
    let dataDetail = {}
    DataPlace.filter((item, index) => {
      if (item.id == id) {
        dataDetail = item
        setData(dataDetail)
      }
    })
  };

  const componentStyles = {
    width: '5rem',
    height: '5rem',
  };


  return (
    <Container>
      <Box sx={{ mt: 10, ml: 6 }}>
        <Stack spacing={2} direction="row">
          <Button
            sx={{ borderRadius: '30px', padding: '0.5rem', width: '98px', height: '36px', backgroundColor:'#134B8A'}}
            startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} heigh={20} />}
            className='color-blue' variant="contained"
            onClick={() =>  navigate(`/`)}
          >Back
          </Button>
        </Stack>
      </Box>
      <Card sx={{ borderRadius: '16px', background: '#C4D3E9', maxWidth: '100%', mt: 2, mb: 20 }} >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
            <div x={{ m: 1, width: '25ch' }} variant="outlined">
              <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                <Card sx={{ borderRadius: '16px', maxWidth: 630 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={data.profile_image_url}
                    alt="green iguana"
                  />

                  <CardContent>
                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <span className="text-detail-title"> {data.name} </span>
                      </Typography>
                      <Typography variant="body2">
                        <img className='icon-rating' src="/svg/icon-point.svg" />
                        <span className="text-detail-rating">  {data.rating} </span>
                      </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-start' }}>
                      <Typography variant="body2"  >
                        <span className="text-detail">Address :</span>
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 2 }} >
                        <span className="text-subdetail ">{data.address}</span>
                      </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-start', mt: 2 }}>
                      <Typography variant="body2">
                        <span className="text-detail"> Opening Hour :</span>
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 2 }} >
                        {data.operation_time && data.operation_time.length > 0 &&
                          data.operation_time.map((item, i) => {
                            return (
                              <Typography variant="body2">
                                <span className="text-subdetail"> {`${item.day} : ${item.time_open} - ${item.time_close}`}</span>
                              </Typography>
                            )
                          })
                        }
                      </Typography>

                    </Stack>

                  </CardContent>
                </Card>
              </Box>
            </div>

            <div sx={{ m: 1, width: '25ch' }} variant="outlined">
              <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                <Card sx={{ borderRadius: '16px' , maxWidth: 630}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <span className="text-img">Image</span>
                    </Typography>
                    <ImageList sx={{ ...componentStyles, borderRadius: '16px', width: 479, height: 1000, mt: 0 }} gap={0} cols={1} rowHeight={164}>
                      {data.images && data.images.length > 0 &&
                        data.images.map((img, i) => {
                          return (
                            <ImageListItem key={i}>
                              <img
                                src={img}
                                loading="lazy"
                              />
                            </ImageListItem>
                          )
                        })
                      }
                    </ImageList>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </Box>
        </Box>
      </Card>
    </Container >
  );
}

export default PlaceDetail