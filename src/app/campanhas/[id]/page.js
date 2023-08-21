import CustomShower from "@/components/customShower";
import { Box, Typography } from "@mui/material";

export default function ViewCampaign(){
    return (
        <Box className='grow flex flex-col'>
            <div className="h-1/2 w-full">
            <div className="flex flex-row w-full h-5/6">
                <div className="w-1/4 overflow-hidden flex items-center justify-center">
                    <img src="/images/avatar.jpg" className="max-w-[250px] max-h-[250px] border-2 border-solid border-custom-blue"/>
                </div>
                <div className="w-3/4 h-full bg-slate-500">
                    <div className="flex h-1/6 w-full text-center items-center justify-center">
                        <Typography variant="h6">
                            Nome da Campanha
                        </Typography>
                    </div>
                    <div className="h-5/6 overflow-hidden text-ellipsis p-5">
                        <CustomShower
                        content={'Lorem'}
                        />
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full h-1/2 bg-blue-50">

            </div>
        </Box>
    )
}