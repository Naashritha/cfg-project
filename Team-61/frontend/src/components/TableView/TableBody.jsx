// TableBody.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItems from "./ListItems";
import CardItems from "./CardItems";

function TableBody({ searchTerm }) {
  const [activeView, setActiveView] = useState("dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon sx={{ mr: 2 }} />,
      view: "dashboard",
    },
    { name: "My Store", icon: <StoreIcon sx={{ mr: 2 }} />, view: "store" },
    { name: "Sales", icon: <AttachMoneyIcon sx={{ mr: 2 }} />, view: "sales" },
    {
      name: "Earnings",
      icon: <MonetizationOnIcon sx={{ mr: 2 }} />,
      view: "earnings",
    },
    {
      name: "Settings",
      icon: <SettingsIcon sx={{ mr: 2 }} />,
      view: "settings",
    },
  ];

  const renderRightColumn = () => {
    switch (activeView) {
      case "dashboard":
        return <ListItems searchTerm={searchTerm} />;
      case "store":
        return <CardItems searchTerm={searchTerm} />;
      default:
        return <Typography variant="body1">Right Column (80%)</Typography>;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        py: 2,
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      {/* Left column (20% width) */}
      <Box
        sx={{
          width: "18%",
          minHeight: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.57)",
          borderRadius: "20px",
          mr: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", pl: 1, mb: 3 }}>
          Menu
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {menuItems.map((item) => (
            <Box
              key={item.view}
              onClick={() => setActiveView(item.view)}
              sx={{
                backgroundColor: activeView==item.view ? "rgba(0, 0, 0, 0.05)" : "",
                display: "flex",
                alignItems: "center",
                pl: 5,
                py: 2,
                borderRadius: "15px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  cursor: "pointer",
                },
              }}
            >
              {item.icon}
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right column (80% width) */}
      <Box
        sx={{
          width: "82%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.57)",
          borderRadius: "20px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {renderRightColumn()}
      </Box>
    </Box>
  );
}

export default TableBody;
