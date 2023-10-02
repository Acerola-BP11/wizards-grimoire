'use client'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AgentSwiper from "@/components/Campaign/AgentSwiper";
import axios from "axios";
import { usePathname } from "next/navigation";
import AgentCard from "@/components/Agents/Card";
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function ViewCampaign(){

    let campaignID = usePathname()
    campaignID = campaignID.split('/')[2]
    const { user, loading } = useContext(AuthContext);
    const [requestLoading, setRequestLoading] = useState(true);
    const [campaignData, setCampaignData] = useState({});

    useEffect(() => {
        if (!loading) {
            axios.get(`http://localhost:3500/campaign/${campaignID}`, {
                headers: {
                    "Authorization": user.token,
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                const campaignsData = response.data;
                setCampaignData(campaignsData);
                console.log(campaignsData)
                setRequestLoading(false);
            })
            .catch(error => {
                console.error(error);
                setRequestLoading(false);
            });
        }
    }, [loading]);
    const menuItems = [
        {
            href: '/delete',
            label: 'delete'
        }
    ]

    

    return (
        <Box className='h-full flex flex-col'>
            <div className="h-1/2 w-full">
                <div className="flex h-1/6 w-full text-center justify-center items-center">
                    <Typography variant="h6" className="text-anti-flash-white font-bold">
                        {campaignData.campaignName}
                    </Typography>
                </div>
                <div className="flex flex-row w-full h-5/6 md:max-h-none">
                    <div className="w-1/4 overflow-hidden flex items-center justify-center h-full ml-5 mr-[-15px] md:ml-0 md:mr-0">
                        <img src={campaignData.picture} className="max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] xl:max-w-[250px] xl:max-h-[250px] border-custom-blue"/>
                    </div>
                    <div className="w-3/4 h-full overflow-hidden">
                        <div className="h-full p-5">
                            <div className="h-full scrollbar-hide text-ellipsis overflow-auto break-words whitespace-pre">
                                <Typography className="text-white">
                                    {campaignData.campaignDescription}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2">
                <AgentSwiper>
                    [<AgentCard
                        items={menuItems}
                    />]
                </AgentSwiper>
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
                      icon={<GroupAddIcon/>}
                      tooltipTitle={'Convidar Jogadores'}
                      className="bg-custom-blue text-white"
                    />
                    <SpeedDialAction
                      key={'Sair da Campanha'}
                      icon={<LogoutIcon/> }
                      tooltipTitle={'Sair da Campanha'}
                      className="bg-custom-blue text-white"
                    />
                </SpeedDial>
            </div>
        </Box>
    )
}