import CustomShower from "@/components/customShower";
import { Box, Typography } from "@mui/material";

export default function ViewCampaign(){
    return (
        <Box className='grow flex flex-col'>
            <div className="h-1/2 w-full">
                <div className="flex h-1/6 w-full bg-red-500 text-center justify-center items-center">
                    <Typography variant="h6" className="text-anti-flash-white font-bold">
                        Nome da Campanha
                    </Typography>
                </div>
                <div className="flex flex-row w-full h-4/6 max-h-60 md:max-h-none">
                    <div className="w-1/4 overflow-hidden flex items-center justify-center h-full ml-5 mr-[-15px] md:ml-0 md:mr-0">
                        <img src="/images/avatar.jpg" className="max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] xl:max-w-[250px] xl:max-h-[250px] border-custom-blue"/>
                    </div>
                    <div className="w-3/4 h-full">
                        <div className="h-full scrollbar-hide text-ellipsis p-5 overflow-hidden break-words whitespace-pre">
                            <CustomShower
                            content={'LoremLoremLoremLore mLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLore mLoremLoremLorem  LoremLoremLoremLoremLoremLoremLoremLoremLorem'}
                            />
                        </div>
                    </div>
                </div>
                <div className="h-1/6 w-full bg-red-500">

                </div>
            </div>
            <div className="w-full h-1/2 bg-blue-50">

            </div>
        </Box>
    )
}