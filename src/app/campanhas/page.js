import CampaignCard from "@/components/Campaign/Card";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function Campaings() {
    return(
        <ResponsiveGrid
            gridHeader={'Campanhas 4/6'}
            buttonText={'Nova Campanha'}
            buttonAction={'/campanhas/novo'}
        >
            <CampaignCard
                campaignName={'Campanha1'}
                init={"01/01/1999"}
                agentsNumber={0}
                dm={'Guilherme Henrique'}
            />
            <CampaignCard
                campaignName={'Campanha1'}
                init={"01/01/1999"}
                agentsNumber={0}
                dm={'Guilherme Henrique'}
            />
            <CampaignCard
                campaignName={'Campanha1'}
                init={"01/01/1999"}
                agentsNumber={0}
                dm={'Guilherme Henrique'}
            />
            <CampaignCard
                campaignName={'Campanha1'}
                init={"01/01/1999"}
                agentsNumber={0}
                dm={'Guilherme Henrique'}
            />
        </ResponsiveGrid>
    )
}