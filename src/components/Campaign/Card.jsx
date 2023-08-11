export default function Card({ ...props }) {
    return (
        <div className="h-full w-full max-w-md bg-slate-900 flex flex-col items-center justify-between rounded-md">
            <div className="flex flex-col items-center justify-around h-full w-full">
                <h1 className="text-2x1 text-white mt-5">{props.campaignName}</h1>
                <h2 className="text-slate-400 text-base">{props.init}</h2>
                <h1 className="text-4xl text-white mt-4">{props.agentsNumber}</h1>
                <span className="text-slate-400 text-base">AGENTES</span>
                <span className="text-2x1 text-white">DM: {props.dm}</span>
            </div>

            <div className="flex flex-row items-center justify-between w-full p-5 border-t border-solid border-purple-500 mt-2">
                <button className="text-red-500 text-sm">Remover</button>
                <button className="bg-purple-400 text-white font-bold p-2 text-sm rounded-md">Ver Campanha</button>
            </div>
        </div>
    )
}