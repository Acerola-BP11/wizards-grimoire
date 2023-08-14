'use client'

import Card from "@/components/Campaign/Card";
import { Grid } from "@mui/material";

export default function Campaings() {
    return(
        <div className="flex items-center justify-center bg-transparent w-full h-full overflow-auto">
            <div className="py-5 w-full h-full flex flex-col">
                <h1 className="text-white font-bold text-2x1 mb-7 lg:mx-8">Campanhas: 1/6</h1>
                <Grid
                    container
                    spacing={5}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Card
                        campaignName={'Campanha1'}
                        init={"01/01/1999"}
                        agentsNumber={0}
                        dm={'Guilherme Henrique'}
                    />
                    <Card
                        campaignName={'Campanha1'}
                        init={"01/01/1999"}
                        agentsNumber={0}
                        dm={'Guilherme Henrique'}
                    />
                    <Card
                        campaignName={'Campanha1'}
                        init={"01/01/1999"}
                        agentsNumber={0}
                        dm={'Guilherme Henrique'}
                    />
                    <Card
                        campaignName={'Campanha1'}
                        init={"01/01/1999"}
                        agentsNumber={0}
                        dm={'Guilherme Henrique'}
                    />
                </Grid>
            </div>
        </div>
    )
}