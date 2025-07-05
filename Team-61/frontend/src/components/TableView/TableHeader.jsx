// TableHeader.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ScienceIcon from "@mui/icons-material/Science";

function TableHeader({ searchTerm, onSearchChange }) {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/path-to-avatar.jpg",
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
      }}
    >

      {/* Atomics Logo and Text */}
      <Box
        sx={{
          left: 0,
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "white",
            borderRadius: "12px",
            px: 2,
            py: 1,
          }}
        >
          <ScienceIcon color="primary" sx={{ fontSize: 34 }} />
          <Typography variant="h6" fontWeight="bold">
            Atomics
          </Typography>
        </Box>
      </Box>
      
      {/* Customers */}
      <Box
        sx={{
          left: "20%",
          pl: 2,
        }}
      >
        <Typography variant="h6">Customers</Typography>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          ml: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "20px",
            width: isSearchFocused ? "300px" : "200px", 
            overflow: "hidden",
            transition: "width 0.3s ease", 
          }}
        >
          <IconButton size="small" sx={{ ml: 1 }}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <InputBase
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            sx={{
              width: "100%",
              "& .MuiInputBase-input": {
                py: "8px",
                px: "10px",
              },
            }}
          />
        </Box>
        
        {/* Notification */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            height: "36px",
            width: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgb(176, 245, 191)",
              cursor: "pointer",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            },
          }}
        >
          <IconButton sx={{ p: 0 }}>
            <Badge color="error" variant="dot">
              <NotificationsOutlinedIcon
                fontSize="medium"
                sx={{
                  transition: "all 0.3s ease",
                }}
              />
            </Badge>
          </IconButton>
        </Box>

        {/* User Avatar and Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 32, height: 32 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle2">{user.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TableHeader;
