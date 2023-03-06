import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { onDeleteScore } from "../../action";

const ScoresTable = () => {
  const dispatch = useDispatch();
  const scores = useSelector((state) => state.scores);
  console.log("SCORES", scores);

  const [term, setTerm] = useState("");
  const searchScore = (value) => {
    return (score) => {
      return (
        score.name.toLowerCase().includes(value.toLowerCase()) ||
        score.score.includes(value) ||
        !value
      );
    };
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const scoresList = scores.length ? (
    <>
      <div>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          onChange={handleChange}
          style={{ width: "300px", marginBottom: "20px" }}
        />
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table
            sx={{ width: 300, backgroundColor: "whitesmoke" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Score</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.filter(searchScore(term)).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.score}/100</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => {
                        dispatch(onDeleteScore(row.id));
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  ) : (
    <div style={{ marginTop: "75px" }}>
      <h1 style={{ textAlign: "center" }}>No scores yet.</h1>
    </div>
  );
  return <> {scoresList} </>;
};

export default ScoresTable;
