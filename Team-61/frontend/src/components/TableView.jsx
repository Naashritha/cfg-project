// TableView.jsx
import React, { useState } from "react";
import { Container } from "@mui/material";
import TableHeader from "./TableView/TableHeader";
import TableBody from "./TableView/TableBody";

function TableView() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "rgb(243, 243, 243)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        px: 0,
      }}
    >
      <TableHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TableBody searchTerm={searchTerm} />
    </Container>
  );
}

export default TableView;
