'use client'
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import CampaignCard from "./Card";
import ResponsiveGrid from "../ResponsiveGrid";

export default function CampaignsList() {
    const { user, loading } = useContext(AuthContext);
    const [requestLoading, setRequestLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (!loading) {
            axios.get('http://localhost:3500/campaign/', {
                headers: {
                    "Authorization": user.token,
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                const campaignsData = response.data;
                setCampaigns(campaignsData);
                console.log(campaignsData)
                setRequestLoading(false);
            })
            .catch(error => {
                console.error(error);
                setRequestLoading(false);
            });
        }
    }, [loading]);

    return (
        <div>
            <ResponsiveGrid
                        gridHeader={`Campanhas ${campaigns.length}/6`}
                        buttonText={'Nova Campanha'}
                        buttonAction={'/campanhas/novo'}
                    >
            {requestLoading ? (
                <CircularProgress />
            ) : campaigns.length === 0 ? (
                <Typography className="text-white">
                    Você ainda não possui nenhuma Campanha Ativa
                </Typography>
            ) : (
                    campaigns.map((element, index) => (
                        <CampaignCard
                            key={index}
                            id={element.id}
                            campaignName={element.campaignName}
                            campaignDescription={element.campaignDescription}
                            campaignGM={element.gm}
                            campaignPicture={element.picture}
                        />
                    ))
            )}
            </ResponsiveGrid>
        </div>
    );
}
