"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Label, TextInput } from "flowbite-react";
import { Button } from "@mui/material";
import { useState } from "react";
let TitilValue = "";
let yearValue = "";
// Here is your key: apikey=be157fc5

function Movies() {
  const [Title, setTitle] = useState("not found");
  const [Year, setYear] = useState("not found");
  const [Genre, setGenre] = useState("not found");
  const [Plot, setPlot] = useState("not found");
  const [Language, setLanguage] = useState("not found");
  const [Country, setCountry] = useState("not found");
  const [Poster, setPoster] = useState(
    "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
  );
  function myCard(T, Y, G, P, L, C, I) {
    if (T) {
      setTitle(T);
      setYear(Y);
      setGenre(G);
      setPlot(P);
      setLanguage(L);
      setCountry(C);
      setPoster(I);
    } else {
      setTitle("not found");
      setYear(yearValue);
      setGenre("not found");
      setPlot("not found");
      setLanguage("not found");
      setCountry("not found");
      setPoster(
        "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
      );
    }
  }
  function tist() {
    const TitilInput = document.querySelectorAll("#T")[0];
    const yearInput = document.querySelectorAll("#Y")[0];
    TitilValue = TitilInput.value;
    yearValue = yearInput.value;
  }
  function getmovies(T, Y) {
    const url = ` http://www.omdbapi.com/?apikey=be157fc5&t=${T}&y=${Y}&plot=full`;
    async function amoviesf() {
      const response = await fetch(url);
      const result = await response.json();
      const movesTitle = result.Title;
      const movesYear = result.Year;
      const movesGenrer = result.Genre;
      const movesPlot = result.Plot;
      const movesLanguage = result.Language;
      const movesCountry = result.Country;
      const movesPoster = result.Poster;
      myCard(
        movesTitle,
        movesYear,
        movesGenrer,
        movesPlot,
        movesLanguage,
        movesCountry,
        movesPoster
      );
    }
    amoviesf();
  }

  return (
    <div className="Movies">
      <div className="flex max-w-md flex-col gap-4 divFOrm">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Title :" className="moviesLabel" />
            <TextInput id="T" type="text" sizing="sm" />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Year :" className="moviesLabel" />
            <TextInput id="Y" type="text" sizing="sm" />
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            tist();
            getmovies(TitilValue, yearValue);
          }}
        >
          Search
        </Button>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <div className="CardActionArea">
            <div className="CardMedia">
              <CardMedia
                component="img"
                height="140"
                image={Poster}
                alt="green iguana"
              />
            </div>
            <div>
              <CardContent className="moviesCardContent">
                <Typography gutterBottom variant="h4" component="div">
                  Title: {Title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Year: {Year}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Genre: {Genre}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Language: {Language}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Country: {Country}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Plot:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Plot}
                </Typography>
              </CardContent>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Movies;
