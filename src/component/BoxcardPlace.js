import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Avatar, ImageList, ImageListItem } from '@mui/material';
import Iconify from './Iconify';
import { Grid, Stack } from '@mui/material';

function BoxcardPlace(props) {
    const navigate = useNavigate();

    const componentStyles = {
        width: '5rem',
        height: '5rem',
    }

    return (
        <Card sx={{ borderRadius: '16px', maxWidth: 300, ml: 6, mt: 6 }}
            onClick={() => navigate(`/place-detail/${props.item.id}`, { state: { id: props.item.id } })}
        >
            <Grid spacing={2}>
                <CardActionArea sx={{ position: 'relative' }}>
                    <CardHeader
                        avatar={
                            <Avatar variant='rounded' aria-lang='recipe' src={props.item.profile_image_url} />
                        }
                        title={props.item?.name}
                        subheader={
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant='body2' color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Iconify icon={'akar-icons:calendar'} width={20} height={20} sx={{ mr: 1 }} />
                                    <span> {`${props.item.operation_time[0].time_open} - ${props.item.operation_time[0].time_open}`} </span>
                                </Typography>

                                <Typography variant='body2' color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Iconify icon={'emojione:star'} width={20} height={20} sx={{ mr: 1 }} />
                                    <span> {`${props.item.rating}`} </span>
                                </Typography>

                            </Stack>
                        }
                    />

                    <CardContent>
                        <ImageList sx={{ ...componentStyles, borderRadius: '16px', width: 270, height: '100%', mt: 0 }} gap={0} cols={3} rowHeight={164}>
                            {props.item.images && props.item.images.length > 0 &&
                                props.item.images.map((img, i) => {
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
                </CardActionArea>
            </Grid>
            <style jsx="true" global="true">{`
            .css-et1ao3-MuiTypography-root {
                font-family: 'Kanit' ;
                font-style: normal ;
                font-weight: 500 ;
                font-size: 18px ;
            }
            `}</style>
        </Card>
    )
}


export default BoxcardPlace