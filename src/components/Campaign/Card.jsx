import { ShareIcon } from "@heroicons/react/24/outline"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Skeleton, Typography } from "@mui/material"
export default function CampaignCard({ ...props }) {
    return (

        <Grid item xs={12} md={6} lg={3} >
            <Card className="bg-custom-dark-blue rounded-sm min-h-[300px] max-h-[300px] max-w-[400px] min-w-[350px]">
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
                        'className': 'text-gray mt-1 text-sm'
                    }}
                    />
                </Box>
                <Box className='flex flex-row-reverse items-center justify-between'>
                    <Box className='w-full h-auto flex flex-row justify-center items-center'>
                        <CardContent>
                        <Typography className="text-slate-500 h-24 text-ellipsis line-clamp-4 break-before-right w-52">
                                Loreeeeeeeeeeeeeeeeeee Loreeeeeeeeeeeeem Loreeeeeeeeeeeeem loreeeeeeeeeeem loreeeeeeeem
                            </Typography>
                            <Typography className="text-white" display={'inline'}>
                                DM: 
                            </Typography>
                            <Typography className="text-white ml-2 overflow-clip text-ellipsis" display={'inline'}>
                                {props.campaignGM}
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                    className="w-28 h-auto mr-2 ml-5 border-custom-blue border-2 rounded-sm"
                    image={props.campaignPicture}
                    component={'img'}
                    />
                </Box>
                <CardActionArea component='div'>
                    <Divider role="presentation" className="bg-custom-blue"/>
                    <CardActions className="justify-between mt-4 mb-2 mx-2">
                        <Button size={'small'} variant={"text"} className="text-red-600">
                            Excluir
                        </Button>
                        <Button size={'small'} color={"primary"} variant={"contained"} 
                        className="bg-custom-blue rounded-md p-2 text-gray-200"
                        href={`/campanhas/${props.id}`}>
                            Visualizar
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

