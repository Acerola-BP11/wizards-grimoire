'use client'
import Card from "@/components/Agents/Card";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function Agentes() {
    return (
        <ResponsiveGrid gridHeader={'Agentes 4/10'}>
            <Card
                agentName={'Jean Landau'}
            />
            <Card
                agentName={'Jean Landau'}
            />
            <Card
                agentName={'Jean Landau'}
            />
            <Card
                agentName={'Jean Landau'}
            />
        </ResponsiveGrid>
    )
}