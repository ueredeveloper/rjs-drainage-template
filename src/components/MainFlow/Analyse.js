import React from "react";
import { Box } from "@mui/material";
import TabPanel from "./AnalysePanel";
import MapPanel from "./MapPanel";
import AnalysePanel from "./AnalysePanel";
import GrantsPanel from "./GrantsPanel";


export default function Analyse() {
    return (
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <Box sx={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flex: 1, minWidth: 200 }} >
                    <MapPanel />
                </Box>
                <Box sx={{ display: "flex", flex: 1, minWidth: 200 }}>
                    <AnalysePanel />
                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <GrantsPanel />
            </Box>
        </Box>
    )
}