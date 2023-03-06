import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerData } from "../../action";

const PlayerData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayerData());
  }, []);

  const playerData = useSelector((state) => state.playerData.data);
  console.log("PLAYER DATA", playerData);

  const playerDetails = playerData ? (
    <Card
      sx={{
        margin: "10px",
        maxWidth: 345,
        borderRadius: "20px",
        backgroundColor: "whitesmoke",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <Typography gutterBottom variant="h5" component="div">
                  Name:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h5" component="div">
                  {playerData.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Position:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.position}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Jersey #:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.jerseyNumber}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Height:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.height} cm
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Country:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.country.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Team:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.team.name} ({playerData.team.nameCode})
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.primary">
                  Market Value:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {playerData.proposedMarketValue.toLocaleString("en-us")} (
                  {playerData.proposedMarketValueRaw.currency})
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <Spinner animation="border" style={{ marginTop: 100 }} />
  );

  return <>{playerDetails}</>;
};

export default PlayerData;
