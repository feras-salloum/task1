// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Facebook from "../assets/face.jpeg";
import Youtup from "../assets/youtup.jpeg";
import Instagram from "../assets/instagram.jpeg";
import tiktok from "../assets/tiktok.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Coontact() {
  return (
    <div className="Contact">
      <Card sx={{ maxWidth: 345, backgroundColor: "#121212" }}>
        <CardActionArea sx={{ backgroundColor: "#121212" }}>
          <CardMedia component="img" height="140" image={Facebook} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#1976d2", fontWeight: "bold" }}
            >
              Facebook
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              You can follow our Facebook page to stay updated with the latest
              developments
            </Typography>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="contactLinkFac"
            >
              <FacebookIcon sx={{ color: "#1976d2" }} />
              follow us
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, backgroundColor: "#121212" }}>
        <CardActionArea sx={{ backgroundColor: "#121212" }}>
          <CardMedia component="img" height="140" image={Youtup} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "red", fontWeight: "bold" }}
            >
              YouTube
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              You can follow us YouTube chanel to stay updated with the latest
              developments
            </Typography>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              className="contactLinkYot"
            >
              <YouTubeIcon sx={{ color: "red" }} />
              follow us
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345,backgroundColor: "#121212" }}>
        <CardActionArea sx={{ backgroundColor: "#121212" }}>
          <CardMedia component="img" height="140" image={Instagram} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#b5459e", fontWeight: "bold" }}
            >
              Instagram
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              You can follow our Instagram page to stay updated with the latest
              developments
            </Typography>
            <Link to="https://www.instagram.com/" target="_blank" className="contactLinkins">
              <InstagramIcon sx={{ color: "##b5459e" }} />
              follow us
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345,backgroundColor: "#121212" }}>
        <CardActionArea sx={{ backgroundColor: "#121212" }}>
          <CardMedia component="img" height="140" image={tiktok} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#26f2ef", fontWeight: "bold" }}>
                
              tiktok
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              You can follow our tiktok page to stay updated with the latest
              developments
            </Typography>
            <Link to="https://www.tiktok.com/" target="_blank" className="contactLinktik">
            <FontAwesomeIcon icon="fa-brands fa-tiktok" style={{color: "#63E6BE",}} />
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 448 512"><path fill="#26f2ef" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
              follow us
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Coontact;
