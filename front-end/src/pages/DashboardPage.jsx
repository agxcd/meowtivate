import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CatPlant from "../components/CatPlant";

// import getCurrentDate from "../helpers/getCurrentDate";
import SMSForm from "../components/SMSForm";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import getCurrentDate from "../helpers/getCurrentDate";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

// Theme

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
      blue: "#a0cdca",
      listButton: "#fee2b1",
      collectionButton: "",
      accountButton: "",
      container: "rgb(255, 255, 255, 0.9)",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  grid3: {
    display: "flex",
    justifyContent: "center",
    // order: 3,
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },

  margin: {
    marginTop: "2vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingLeft: "2em",
    },
  },
  coin: {
    height: "3rem",
  },
  coinstyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  numOfCoins: {
    paddingRight: "0.5rem",
  },
  iconButton: {
    width: "4rem",
    height: "4rem",
  },
  streakNum: {
    backgroundColor: "#a0cdca",
    width: "5rem",
    height: "8rem",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "2rem",
    alignItems: "center",
    fontSize: "2em",
    color: "white",
  },
  streakContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  listButton: {
    width: "10em",
    backgroundColor: "#fee2b1",
    fontFamily: "Itim",
    margin: "0.5vh",
    fontSize: "1.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    color: "#5c5c5c",
    "&:hover": {
      backgroundColor: "#dbc6a1",
      color: "white",
    },
  },
  collectionButton: {
    width: "10em",
    backgroundColor: "#fcd0c5",
    fontFamily: "Itim",
    margin: "0.5vh",
    fontSize: "1.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    color: "#5c5c5c",
    "&:hover": {
      backgroundColor: "#e6c3bb",
      color: "white",
    },
  },
  accountButton: {
    width: "10em",
    backgroundColor: "#aedaa5",
    fontFamily: "Itim",
    margin: "0.5vh",
    fontSize: "1.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    color: "#5c5c5c",
    "&:hover": {
      backgroundColor: "#a2bb9d",
      color: "white",
    },
  },
  inventoryButton: {
    width: "10em",
    backgroundColor: "#e0c8df",
    fontFamily: "Itim",
    margin: "0.5vh",
    fontSize: "1.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    color: "#5c5c5c",
    "&:hover": {
      backgroundColor: "#c9bcc8",
      color: "white",
    },
  },
  wallet: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "antiquewhite",
    width: "10rem",
    justifyContent: "space-around",
    padding: "0.5em",
    borderRadius: "1.75rem",
    fontFamily: "Itim",
    color: "grey",
    fontSize: "2em",
    lineHeight: 0,
  },
  walletContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem",
  },
  calendarContainer: {
    display: "flex",
    justifyContent: "center",
  },
  midContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardContainer: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    borderRadius: "2rem",
    width: "19vw",
    height: "fit-content",
    padding: "1.5em",
  },
  weatherContainer: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    borderRadius: "2rem",
    width: "19vw",
    height: "fit-content",
    padding: "1.5em",
    width: "15rem",
    [theme.breakpoints.up("md")]: {
      width: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  potContainer: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    borderRadius: "2rem",
    width: "19vw",
    height: "fit-content",
    padding: "1.5em",
    width: "15rem",
    [theme.breakpoints.up("md")]: {
      width: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      paddingLeft: "2em",
    },
  },
  listContainer: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    borderRadius: "2rem",
    width: "19vw",
    height: "fit-content",
    padding: "1.5em",
    width: "20rem",
  },
}));

export default function DashboardPage(props) {
  const { state, streak, day, setDay, id, coins, setCoins } = props;
  const { unlocked, actions } = state;
  const classes = useStyles();
  // const [coins, setCoins] = useState(streak * 100);

  // Go to next day
  const changeDay = () => {
    if (day >= 1 && day < 3) {
      setDay((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (id === 2) {
      setCoins(0);
    }
  }, [id]);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const today = getCurrentDate();
  //   // Get array of unlocked dates in "yyyy-mm-dd"
  //   const currentUnlocked = unlocked.map(obj => obj.date_unlocked.slice(0, 10));
  //   if (currentUnlocked.includes(today)) {
  //     setCoins(prev => prev + 100);
  //   } else {
  //     setCoins(streak * 100)
  //   }
  // }, [streak])

  return (
    <ThemeProvider theme={darkTheme}>
      <header>
        <NavBar />
        {/* <h1>Welcome {props.state.account[0].name}!</h1> */}
      </header>
      <Grid container spacing={3} className={classes.container}>
        <Grid Grid item xs={12} sm={6} md={4} className={classes.grid1}>
          <SMSForm />
          <div className={classes.calendarContainer}>
            <CalendarApp state={state} day={day} />
          </div>

          <div>
            <IconButton onClick={changeDay}>
              <DoubleArrowRoundedIcon className={classes.iconButton} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid2}>
          {/* <section> */}
          {/* <article> */}
          <h2 style={{ color: "grey" }}>CURRENT STREAK IS</h2>
          <div className={(classes.midContainer, classes.streakNum)}>
            <h1>{streak}</h1>
          </div>
          <h3 style={{ color: "grey" }}>DAYS</h3>
          {/* </article> */}
          <article className={classes.listContainer}>
            <Grid>
              <Button
                className={classes.listButton}
                component={Link}
                to="/lists"
              >
                My Lists
              </Button>
            </Grid>
            <Grid>
              <Button
                className={classes.collectionButton}
                component={Link}
                to="/cats"
              >
                My Collection
              </Button>
            </Grid>
            <Grid>
              <Button
                className={classes.accountButton}
                component={Link}
                to="/account"
              >
                My Account
              </Button>
            </Grid>
            <Grid>
              <Button
                className={classes.inventoryButton}
                component={Link}
                to="/inventory"
              >
                My Inventory
              </Button>
            </Grid>
            <article className={classes.walletContainer}>
              <div className={classes.wallet}>
                <h1>{coins}</h1>
                <img
                  className={classes.coin}
                  src="https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png"
                  alt="meowcoin"
                />
              </div>
            </article>
          </article>
          {/* </section> */}
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.grid3}>
          <Grid>
            <article xs={12} sm={6} className={classes.weatherContainer}>
              <Weather />
            </article>
          </Grid>
          <Grid className={classes.margin}>
            <article
              xs={12}
              sm={6}
              className={classes.potContainer}
              style={{ paddingBottom: "2em" }}
            >
              {/* <h1 style={{color: 'grey', lineHeight: 0}}>Today's Progress</h1> */}
              <CatPlant actions={actions} state={state} />
            </article>
          </Grid>
        </Grid>
      </Grid>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      ></Switch>
    </ThemeProvider>
  );
}
