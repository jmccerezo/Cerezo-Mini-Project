import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactCards = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <div className="contact-card-container">
              <Card
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <h3 className="contact-heading">GECO Asia Pte. Ltd.</h3>
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={2}>
                          <PhoneIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">+65 6560 3224</p>
                        </Grid>
                        <Grid item xs={2}>
                          <EmailIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">info@geco.asia</p>
                        </Grid>
                        <Grid item xs={2}>
                          <LocationOnIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">
                            2 Venture Drive, #10-18 Vision Exchange, Singapore
                            608526
                          </p>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="contact-card-container">
              <Card
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <h3 className="contact-heading">GECO Philippines BGC</h3>
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={2}>
                          <PhoneIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">(+63) 999 169 3172</p>
                        </Grid>
                        <Grid item xs={2}>
                          <EmailIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">info@geco.asia</p>
                        </Grid>
                        <Grid item xs={2}>
                          <LocationOnIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">
                            One Global Place, 5th Avenue & 25th Street, BGC,
                            Taguig, Philippines 1632
                          </p>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="contact-card-container">
              <Card
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <h3 className="contact-heading">GECO Philippines IloIlo</h3>
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={2}>
                          <PhoneIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">(+63) 999 169 3172</p>
                        </Grid>
                        <Grid item xs={2}>
                          <EmailIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">info@geco.asia</p>
                        </Grid>
                        <Grid item xs={2}>
                          <LocationOnIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <p className="contact-details">
                            Estrella Building, Simon Ledesma St., Iloilo City,
                            Philippines 5000
                          </p>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactCards;
