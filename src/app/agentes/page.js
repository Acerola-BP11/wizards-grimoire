'use client'
import Card from "@/components/Agents/Card";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function Agentes() {
    const menuItems = [
        {
            href: '/delete',
            label: 'delete'
        }]
    return (
        <ResponsiveGrid
            gridHeader={'Agentes 4/10'}
            buttonText={'Novo Agente'}
        >
            <Card
                items={menuItems}
                agentName={'Jean Landau'}
            />
            <Card
                agentName={'Jean Landau'}
                items={menuItems}
            />
            <Card
                agentName={'Jean Landau'}
                items={menuItems}
            />
            <Card
                agentName={'Jean Landau'}
                items={menuItems}
            />
        </ResponsiveGrid>
    )
}