'use client'
import { ShareIcon } from "@heroicons/react/24/outline"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material"
export default function AgentCard({ ...props }) {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className="bg-custom-dark-blue" sx={{
                 borderRadius: '16px',
                 maxWidth: 448
                 }}>
                <Box className='relative'>
                    <IconButton aria-label="Compartilhar" className="absolute right-2 top-1/3 -translate-y-1/2">
                        <ShareIcon className="w-5 h-auto text-white"/>
                    </IconButton>
                    <CardHeader className="text-white text-center relative" title={props.agentName} titleTypographyProps={{ 
                        noWrap: true
                    }} 
                    sx={{
                        display: "flex",
                        overflow: 'hidden',
                        "& .MuiCardHeader-content": {
                            overflow: 'hidden'
                        }
                    }}
                    subheader={'Criado em 19/03/2022'}
                    subheaderTypographyProps={{
                        'color': 'GrayText',
                        'marginTop': 0.5,
                        'fontSize': 15
                    }}
                    />
                </Box>
                <Box className='flex flex-row-reverse items-center justify-between'>
                    <Box className='w-full flex flex-row justify-start items-center'>
                        <CardContent>
                            <Typography color={'white'} variant="h6" sx={{ fontWeight: 'semibold'}} display={'inline'}>Raça: </Typography>
                            <Typography color={'white'} variant="subtitle1" display={'inline'} className="font-extralight">Humano</Typography>
                            <br></br>
                            <Typography color={'white'} variant="h6" sx={{ fontWeight: 'semibold'}} display={'inline'}>Classe: </Typography>
                            <Typography color={'white'} variant="subtitle1" sx={{ fontWeight: 'light'}} display={'inline'}>Mago</Typography>
                            <br></br>
                            <Typography color={'white'} variant="h6" sx={{ fontWeight: 'semibold'}} display={'inline'}>Subclasse: </Typography>
                            <Typography color={'white'} variant="subtitle1" sx={{ fontWeight: 'light'}} display={'inline'}>Divinação</Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                    className="w-28 h-auto mx-4 border-custom-blue"
                    image="https://farm9.staticflickr.com/8410/30193245810_7b7ff74cd5.jpg"
                    component={"img"}
                    sx={{ border: 1, borderRadius: '16px' }}
                    />
                </Box>
                <CardActionArea className="mt-4" component='div'>
                    <Divider component="div" role="presentation" className="bg-custom-blue"/>
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