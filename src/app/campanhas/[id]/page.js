import { Box, Button, Grid, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import dynamic from "next/dynamic";
const CustomShower = dynamic(() => import('@/components/customShower'), {
    ssr: false
})

export default function ViewCampaign(){
    return (
        <Box className='h-full flex flex-col'>
            <div className="h-1/2 w-full">
                <div className="flex h-1/6 w-full text-center justify-center items-center">
                    <Typography variant="h6" className="text-anti-flash-white font-bold">
                        Nome da Campanha
                    </Typography>
                </div>
                <div className="flex flex-row w-full h-5/6 md:max-h-none">
                    <div className="w-1/4 overflow-hidden flex items-center justify-center h-full ml-5 mr-[-15px] md:ml-0 md:mr-0">
                        <img src="/images/avatar.jpg" className="max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] xl:max-w-[250px] xl:max-h-[250px] border-custom-blue"/>
                    </div>
                    <div className="w-3/4 h-full overflow-hidden">
                        <div className="h-full p-5">
                            <div className="h-full scrollbar-hide text-ellipsis overflow-auto break-words whitespace-pre">
                                <CustomShower
                                content={'LoremLoremLoremLore mLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLore mLoremLoremLorem  LoremLoremLoremLoremLoremLoremLoremLoremLorem'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2">
                <Grid className="h-full w-full">

                </Grid>
                <SpeedDial
                    ariaLabel="Ações"
                    sx={{ position: 'absolute', bottom: 16, right: 16, color: 'blue'}}
                    icon={<SpeedDialIcon 
                        icon={<AddOutlinedIcon/>}
                        openIcon={<CloseIcon/>} 
                        />}
                    FabProps={{
                        className:'bg-custom-blue'
                    }}
                >
                    <SpeedDialAction
                      key={() => console.log('teste')}
                      icon={<AddOutlinedIcon/> }
                      tooltipTitle={'Adicionar Agentes'}
                      className="bg-custom-blue text-white"
                    />
                    <SpeedDialAction
                      key={'Convidar Jogadores'}
                      icon={<AddOutlinedIcon/> }
                      tooltipTitle={'Convidar Jogadores'}
                      className="bg-custom-blue text-white"
                    />
                    <SpeedDialAction
                      key={'Sair da Campanha'}
                      icon={<AddOutlinedIcon/> }
                      tooltipTitle={'Sair da Campanha'}
                      className="bg-custom-blue text-white"
                    />
                </SpeedDial>
            </div>
        </Box>
    )
}