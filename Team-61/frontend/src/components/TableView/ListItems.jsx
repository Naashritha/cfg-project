// ListItems.jsx
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { DataGrid } from "@mui/x-data-grid";

function ListItems({ searchTerm }) {
  
  // Data for the stats boxes
  const stats = [
    {
      icon: <PeopleIcon fontSize="large" color="primary" />,
      title: "Total Customers",
      value: "1,234",
      bgCol: "#4F46E5",
    },
    {
      icon: <StoreIcon fontSize="large" color="primary" />,
      title: "Active Stores",
      value: "56",
      bgCol: "#10B981",
    },
    {
      icon: <AttachMoneyIcon fontSize="large" color="primary" />,
      title: "Total Revenue",
      value: "$12,345",
      bgCol: "#F59E0B",
    },
    {
      icon: <TrendingUpIcon fontSize="large" color="primary" />,
      title: "Growth Rate",
      value: "12.5%",
      bgCol: "#EF4444",
    },
  ];

  // Sample database of 30 customers
  const allCustomers = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `+1 ${Math.floor(Math.random() * 900) + 100}-${
      Math.floor(Math.random() * 900) + 100
    }-${Math.floor(Math.random() * 9000) + 1000}`,
    joinDate: new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365)
    ).toLocaleDateString(),
    status: ["Active", "Inactive", "Pending"][Math.floor(Math.random() * 3)],
    orders: Math.floor(Math.random() * 100),
    spent: `$${(Math.random() * 1000).toFixed(2)}`,
  }));

  // Filter customers based on search term
  const filteredCustomers = allCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "joinDate", headerName: "Join Date", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "orders",
      headerName: "Orders",
      type: "number",
      width: 100,
      align: "left",
      headerAlign: "left",
    },
    { field: "spent", headerName: "Total Spent", width: 120 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        boxSizing: "border-box",
        p: 2,
      }}
    >
      {/* First box - Stats row */}
      <Box
        sx={{
          height: "15%",
          minHeight: "100px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "12px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            margin: 0,
            justifyContent: "space-between",
            "& .MuiGrid-item": {
              paddingTop: "16px !important",
              paddingLeft: "16px !important",
              paddingBottom: "16px !important",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          {stats.map((stat, index) => (
            <Grid item xs={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  p: 3,
                  px: 5.8,
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: "8px",
                  height: "100%",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: stat.bgCol,
                    color: "white",
                  }}
                >
                  {React.cloneElement(stat.icon, {
                    sx: { color: "white" },
                  })}
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Second box - Create Button Row */}
      <Box
        sx={{
          height: "10%",
          minHeight: "60px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "12px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Create New Entry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add a new entry to analyze it and also store it in the database
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            padding: "0.6em 2em",
            border: "none",
            outline: "none",
            color: "#000000",
            background: "#ffffff",
            cursor: "pointer",
            position: "relative",
            zIndex: 0,
            borderRadius: "10px",
            userSelect: "none",
            minWidth: "120px",
            textTransform: "none",
            fontWeight: "bold",
            "&:before": {
              content: '""',
              background:
                "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
              position: "absolute",
              top: "-1px",
              left: "-1px",
              backgroundSize: "400%",
              zIndex: -1,
              filter: "blur(2px)",
              width: "calc(100% + 2px)",
              height: "calc(100% + 2px)",
              animation: "glowing-button-85 20s linear infinite",
              transition: "opacity 0.3s ease-in-out",
              borderRadius: "10px",
            },
            "&:after": {
              zIndex: -1,
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#ffffff",
              left: 0,
              top: 0,
              borderRadius: "10px",
            },
            "@keyframes glowing-button-85": {
              "0%": {
                backgroundPosition: "0 0",
              },
              "50%": {
                backgroundPosition: "400% 0",
              },
              "100%": {
                backgroundPosition: "0 0",
              },
            },
          }}
        >
          Create Now
        </Button>
      </Box>

      {/* Third box - MUI Table */}
      <Box
        sx={{
          height: "65%",
          minHeight: "300px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "12px",
          boxSizing: "border-box",
          p: 0,
        }}
      >
        <div style={{ height: "calc(100% - 40px)", width: "100%" }}>
          <DataGrid
            rows={filteredCustomers}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            sx={{
              "& .MuiDataGrid-root": {
                backgroundColor: "transparent",
              },
              "& .MuiDataGrid-cell": {
                border: "none",
                outline: "none !important",
              },
              "& .MuiDataGrid-cell:focus": {
                outline: "none !important",
              },
              "& .MuiDataGrid-row": {
                backgroundColor: "rgba(255, 255, 255, 0)",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(236, 236, 236, 0.44)",
              },
            }}
          />
        </div>
      </Box>
    </Box>
  );
}

export default ListItems;
