import Card from "@/components/Campaign/Card";

export default function Campaings() {
    return(
        <div className="flex items-center justify-center bg-transparent w-full h-screen">
            <div className="py-5 w-full h-full flex flex-col max-w-7xl">
                <h1 className="text-white font-bold text-2x1 mb-5">Campanhas: 1/6</h1>
                <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-rows-3 lg:grid-cols-3 max-w-7xl gap-10">
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
                </div>
            </div>
        </div>
    )
}