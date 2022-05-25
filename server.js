import { createServer } from "miragejs";

var xhttp = new XMLHttpRequest();
//server
createServer({
  routes() {
    this.get("/api/movies", () => ({
      Search: [
        {
          Title: "Kick-Ass",
          Year: "2010",
          imdbID: "tt1250777",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_SX300.jpg",
        },
        {
          Title: "Kick",
          Year: "2014",
          imdbID: "tt2372222",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTUyMTg0MTA1OF5BMl5BanBnXkFtZTgwMDg2MjMwMjE@._V1_SX300.jpg",
        },
        {
          Title: "Dhoom 3",
          Year: "2013",
          imdbID: "tt1833673",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BM2E0NWJlNzYtZjFlZS00NDU4LWI0OTAtYTZlYjc2MmQ2MjdmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        },
        {
          Title: "Good Night, and Good Luck.",
          Year: "2005",
          imdbID: "tt0433383",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTY0NzQ2NDg2Ml5BMl5BanBnXkFtZTYwMzcwOTY2._V1_SX300.jpg",
        },
        {
          Title: "Good Luck Chuck",
          Year: "2007",
          imdbID: "tt0452625",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTU1NzM1MTE1OV5BMl5BanBnXkFtZTYwNDQyMjU3._V1_SX300.jpg",
        },
        {
          Title: "Just My Luck",
          Year: "2006",
          imdbID: "tt0397078",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTk0MTE4ODIwNl5BMl5BanBnXkFtZTYwNzkyMDk2._V1_SX300.jpg",
        },
        {
          Title: "Good Luck Charlie",
          Year: "2010–2014",
          imdbID: "tt1415889",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjI5NjUzMTcwNF5BMl5BanBnXkFtZTgwODE3NzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "The Joy Luck Club",
          Year: "1993",
          imdbID: "tt0107282",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYWY3MjZlZjItYzBlMy00OTY0LWJjN2QtNGU4ZTk2YzY2MzJlXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg",
        },
        {
          Title: "Luck by Chance",
          Year: "2009",
          imdbID: "tt0886539",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTY4NjIxNDc3Nl5BMl5BanBnXkFtZTcwNDc4NTk5Mw@@._V1_SX300.jpg",
        },
        {
          Title: "Better Luck Tomorrow",
          Year: "2002",
          imdbID: "tt0280477",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTk4OTYwODUyN15BMl5BanBnXkFtZTYwMDUzMTQ3._V1_SX300.jpg",
        },
        {
          Title: "Pure Luck",
          Year: "1991",
          imdbID: "tt0102729",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNjdjNjU0NDMtZjkzNC00MTVlLWJmMjgtNTU0NjVjNTFkMDVhXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
        },
        {
          Title: "The Luck of the Irish",
          Year: "2001",
          imdbID: "tt0274636",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAyMzU3MjM2MF5BMl5BanBnXkFtZTcwMzI4MzgxMQ@@._V1_SX300.jpg",
        },
        {
          Title: "Bad Luck Banging or Loony Porn",
          Year: "2021",
          imdbID: "tt14033502",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzMwZTRmODQtNTcwMC00ZTU2LTgyODMtNWIxOGMzZGVkZDIxXkEyXkFqcGdeQXVyMjQxNjA1MzU@._V1_SX300.jpg",
        },
        {
          Title: "Dhoom Dadakka",
          Year: "2008",
          imdbID: "tt1238735",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNmQ3ZTdlZjctNDVmNi00NmEzLTlkYzAtODE5MDY5ZDkzMDFjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        },
        {
          Title: "Lauf um Dein Leben - Vom Junkie zum Ironman",
          Year: "2008",
          imdbID: "tt0954542",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg",
        },
        {
          Title: "Ironman Triathlon Special",
          Year: "1997",
          imdbID: "tt0311343",
          Type: "movie",
          Poster: "N/A",
        },
        {
          Title: "Thor",
          Year: "2011",
          imdbID: "tt0800369",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Deadpool",
          Year: "2016",
          imdbID: "tt1431045",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        },
        {
          Title: "Deadpool: No Good Deed",
          Year: "2017",
          imdbID: "tt6612630",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BODAxNDFhNGItMzdiMC00NDM1LWExYWUtZjNiMGIzYTc0MTM5XkEyXkFqcGdeQXVyMjYzMjA3NzI@._V1_SX300.jpg",
        },
        {
          Title: "Batman v Superman: Dawn of Justice",
          Year: "2016",
          imdbID: "tt2975590",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "Superman Returns",
          Year: "2006",
          imdbID: "tt0348150",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        },
        {
          Title: "Batman Begins",
          Year: "2005",
          imdbID: "tt0372784",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "Batman v Superman: Dawn of Justice",
          Year: "2016",
          imdbID: "tt2975590",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "The Good Fight",
          Year: "2017–",
          imdbID: "tt5853176",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDI3OThlOTUtZGY0ZC00NmNlLTk2YTEtYjA3NjE3ODAwZjMzXkEyXkFqcGdeQXVyODM0NDY1ODY@._V1_SX300.jpg",
        },
        {
          Title: "The Batman",
          Year: "2022",
          imdbID: "tt1877830",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
        },
        {
          Title: "RRR",
          Year: "2022",
          imdbID: "tt8178634",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        },
        {
          Title: "Rocky",
          Year: "1976",
          imdbID: "tt0075148",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        },
        {
          Title: "Rocky Balboa",
          Year: "2006",
          imdbID: "tt0479143",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWIyNmQyNjctYmVmMS00MGI4LWIxMmUtNjA0ODYzOTA0Yjk0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Rocky II",
          Year: "1979",
          imdbID: "tt0079817",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOWNmNTZlNWYtZjkyNC00OGZhLWIwNzAtN2U5MGVkYWVmMGFmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        },
        {
          Title: "Agent RRR",
          Year: "2014",
          imdbID: "tt14681510",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDNhM2Y3ZGEtNGI4Zi00NWNlLWFjNTMtOGMyYmM3YTYzNTM0XkEyXkFqcGdeQXVyMTMzMzEwNzQ4._V1_SX300.jpg",
        },
        {
          Title: "K.G.F: Chapter 2",
          Year: "2022",
          imdbID: "tt10698680",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_SX300.jpg",
        },
        {
          Title: "K.G.F: Chapter 1",
          Year: "2018",
          imdbID: "tt7838252",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
        },
        {
          Title: "Big Hero 6",
          Year: "2014",
          imdbID: "tt2245084",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
        },
        {
          Title: "Hero",
          Year: "2002",
          imdbID: "tt0299977",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "Italian Spiderman",
          Year: "2007",
          imdbID: "tt2705436",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
        },
        {
          Title: "Superman, Spiderman or Batman",
          Year: "2011",
          imdbID: "tt2084949",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
        },
        {
          Title: "Spiderman",
          Year: "1990",
          imdbID: "tt0100669",
          Type: "movie",
          Poster: "N/A",
        },
        {
          Title: "Winter on Fire: Ukraine's Fight for Freedom",
          Year: "2015",
          imdbID: "tt4908644",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTY4MDgwOTI3M15BMl5BanBnXkFtZTgwNjYxMjU3NjE@._V1_SX300.jpg",
        },
        {
          Title: "Ip Man: The Final Fight",
          Year: "2013",
          imdbID: "tt2495118",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNmEwOGFhOTAtNDY0Yy00MDIwLWJjZWEtMzk5OGFmNTljMjE2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
        },
        {
          Title: "Why We Fight",
          Year: "2005",
          imdbID: "tt0436971",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDk2ZDZmZGUtNTlmNS00YzU0LWI1MDgtYzg4MzgzZWYwYTY2XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars",
          Year: "1977",
          imdbID: "tt0076759",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars",
          Year: "1977",
          imdbID: "tt0076759",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode V - The Empire Strikes Back",
          Year: "1980",
          imdbID: "tt0080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode VI - Return of the Jedi",
          Year: "1983",
          imdbID: "tt0086190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode VII - The Force Awakens",
          Year: "2015",
          imdbID: "tt2488496",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode V - The Empire Strikes Back",
          Year: "1980",
          imdbID: "tt0080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode VI - Return of the Jedi",
          Year: "1983",
          imdbID: "tt0086190",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode VII - The Force Awakens",
          Year: "2015",
          imdbID: "tt2488496",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
        },
        {
          Title: "Don 2",
          Year: "2011",
          imdbID: "tt1285241",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzNiYWYxNWYtZDYzMC00MzA0LTkzY2UtNDAwNDhiYmVjNmEwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "Don Juan DeMarco",
          Year: "1994",
          imdbID: "tt0112883",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzRiMGM2ODgtN2Y1Zi00ODk5LThhOTItOWVkODM0YjAyZTI2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        },
        {
          Title: "Don",
          Year: "2006",
          imdbID: "tt0461936",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzAyMWE0MjgtMDVjNS00ZDMyLWE4NjQtNWU2ZDgyYTlmMjdjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Incredible Hulk",
          Year: "2008",
          imdbID: "tt0800080",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
        },
        {
          Title: "Hulk",
          Year: "2003",
          imdbID: "tt0286716",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
        },
        {
          Title: "The Incredible Hulk",
          Year: "1977–1982",
          imdbID: "tt0077031",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
        },
        {
          Title: "Planet Hulk",
          Year: "2010",
          imdbID: "tt1483025",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmFlNTNhNjktNDQ4NC00ZmVhLTg2NmYtOWExMmI0MzQ1ODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Hulk Vs.",
          Year: "2009",
          imdbID: "tt1325753",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc1NzMzMzU4Nl5BMl5BanBnXkFtZTcwNTQ3NDYwNQ@@._V1_SX300.jpg",
        },
        {
          Title: "The Incredible Hulk",
          Year: "1996–1998",
          imdbID: "tt0115215",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmVjYzA3MmYtZjBhOS00OGI5LWIzZTEtOTRkZGY2ZWQ5NjkzXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg",
        },
        {
          Title: "The Incredible Hulk Returns",
          Year: "1988",
          imdbID: "tt0095368",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BM2Y1MWUxNWUtNzNjZi00NDU3LThhZjAtOWU4YzlkZTYxMzZjXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
        },
        {
          Title: "Hulk and the Agents of S.M.A.S.H.",
          Year: "2013–2015",
          imdbID: "tt2455514",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTg1MzIxMzM4Nl5BMl5BanBnXkFtZTcwMTg3Mzc5OQ@@._V1_SX300.jpg",
        },
        {
          Title: "The Trial of the Incredible Hulk",
          Year: "1989",
          imdbID: "tt0098512",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDg3NmYwMDQtNTE5MC00NDFlLWI3YjktMWNjZDlkZWVmOWRiXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg",
        },
        {
          Title: "The Death of the Incredible Hulk",
          Year: "1990",
          imdbID: "tt0099387",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYTVlNjcwMjUtMmNjZS00MzZhLTkwZjUtNzFmMzNlNmEzYzQ0XkEyXkFqcGdeQXVyODM0NzI5MDM@._V1_SX300.jpg",
        },
      ],
    }));

  },
});
