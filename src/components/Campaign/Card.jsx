import { ShareIcon } from "@heroicons/react/24/outline"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Skeleton, Typography } from "@mui/material"
export default function CampaignCard({ ...props }) {
    return (

        <Grid item xs={12} md={6} lg={4}>
            <Card className="bg-custom-dark-blue" sx={{ 
                borderRadius: '16px',
                maxWidth: 480
                }}>
                <Box className='relative'>
                    <IconButton aria-label="Compartilhar" className="absolute right-2 top-1/3 -translate-y-1/2">
                        <ShareIcon className="w-5 h-auto text-white"/>
                    </IconButton>
                    <CardHeader className="text-white text-center relative" title={props.campaignName} titleTypographyProps={{ 
                        noWrap: true
                    }} 
                    sx={{
                        display: "flex",
                        overflow: 'hidden',
                        "& .MuiCardHeader-content": {
                            overflow: 'hidden'
                        }
                    }}
                    subheader={props.creationDate}
                    subheaderTypographyProps={{
                        'color': 'GrayText',
                        'marginTop': 0.5,
                        'fontSize': 15
                    }}
                    />
                </Box>
                <Box className='flex flex-row-reverse items-center justify-between'>
                    <Box className='w-full h-auto flex flex-row justify-center items-center'>
                        <CardContent>
                            <Typography className="line-clamp-4 text-ellipsis font-light text-slate-400 text-sm overflow-hidden mb-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis consequuntur sed, ipsum aperiam voluptate maiores rem? Quidem repudiandae voluptas, placeat ratione mollitia eius provident cum, saepe sint, reprehenderit beatae!
                            </Typography>
                            <Typography className="text-white" display={'inline'}>
                                DM: 
                            </Typography>
                            <Typography className="text-white ml-2 overflow-clip text-ellipsis" display={'inline'}>
                                Heitor Bergamin
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                    className="w-28 h-auto mx-4 border-custom-blue"
                    image="https://farm9.staticflickr.com/8410/30193245810_7b7ff74cd5.jpg"
                    component={"img"}
                    sx={{ border: 1, borderRadius: '16px' }}
                    />
                </Box>
                <CardActionArea component='div'>
                    <Divider role="presentation" className="bg-custom-blue"/>
                    <CardActions className="justify-between mt-4 mb-2 mx-2">
                        <Button size={'small'} variant={"text"} className="text-red-600">
                            Excluir
                        </Button>
                        <Button size={'small'} color={"primary"} variant={"contained"} className="bg-custom-blue rounded-md p-2 text-gray-200">
                            Visualizar
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

