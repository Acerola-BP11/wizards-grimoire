import AgentCard from "@/components/Agents/Card";
import CampaignCard from "@/components/Campaign/Card";
import ResponsiveGrid from "@/components/ResponsiveGrid";
import { auth } from "@/utils/firebase";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";

export default function Campaings() {
    const getCampaings = dynamic(() => {
        auth.authStateReady(async user => {
            const token = await user.getIdToken()
            let campaignsList = await axios.get('http://localhost:3500/campaign/', {
                headers: {
                    Authorization: token
                }
            })
            return campaigns
        })
    }, {
        loading: () => <CircularProgress sx={{color: '#fff'}}/>
    })

    let campaignsList = getCampaings()
    let campaignsFormatted = []

    if (campaignsList === undefined){
        campaignsFormatted.push(
            <Typography className="text-white">
                Não existem agentes
            </Typography>
        )
    }else{
        for(let element in campaignsList){
            console.log(campaignsList)
            // campaignsFormatted.push(
            //     <CampaignCard
            //     campaignName={element.campaignName}
            //     campaignDescription={element.campaignDescription}
            //     init={"01/01/1999"}
            //     agentsNumber={2}
            //     dm={'Roberto'}
            //     />
            // )
        }
    }
    
    
    return(
        <ResponsiveGrid
            gridHeader={'Campanhas 4/6'}
            buttonText={'Nova Campanha'}
            buttonAction={'/campanhas/novo'}
        >
            {campaignsFormatted}
        </ResponsiveGrid>
    )
}