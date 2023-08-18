import StatSlider from "./StatSlider";
import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';

import json from "../eq/eqIndex.json";
import Grid from "@mui/material/Unstable_Grid2";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import Autocomplete from "@mui/material/Autocomplete";
import { FilterContext } from "./FilterContext";
import { maxValues, prefs, filter } from "./StatFilter";
import EqTable from "./EqTable";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { green, purple } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import TextSearchFields from "./TextSearchFields";
import shortid from "shortid";
import { AppState, ItemRow } from "./types";

export const getJson = (): Array<ItemRow> => {
  return json as Array<ItemRow>;
};
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: green[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const keys = Object.keys(maxValues);
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  key: shortid.generate(),
}));

const fields = {
  class: 0,
  wc: 0,
  glow: 0,
  str: 0,
  con: 0,
  dex: 0,
  wis: 0,
  int: 0,
  cha: 0,
  hpr: 0,
  spr: 0,
  hpm: 0,
  spm: 0,
  hit: 0,
  dam: 0,
  pref: 0,
  resist: 0,
  type: "",
  name: "",
};

export default class App extends React.Component {
  state: AppState = {
    name: "",
    type: "",
    prefText: "",
    rows: [...getJson()],
    items: getJson().slice(0, 100),
    fields: { ...fields },
    hasMore: true,
    page: 0,
  };
  private setName: (val: string) => void;
  private setType: (val: string) => void;
  private setPref: (val: string) => void;
  private setRows: (newRows: Array<ItemRow>, fields: Object) => void;
  private updateRows: () => void;
  private resetFields: () => void;

  constructor(props) {
    super(props);

    this.resetFields = () => {
      window.location.reload();
    };

    this.setRows = (newRows, fields) => {
      this.setState((state) => ({
        ...state,
        rows: newRows,
        items: newRows.slice(0, 100),
        fields: { ...fields },
        page: 0,
        hasMore: true,
      }));
    };

    this.setType = (val) => {
      this.setState(
        (state) => ({
          ...state,
          type: val,
        }),
        () => {
          this.updateRows();
        }
      );
    };

    this.setName = (val) => {
      this.setState(
        (state) => ({
          ...state,
          name: val,
        }),
        () => {
          this.updateRows();
        }
      );
    };

    this.setPref = (val) => {
      this.setState(
        (state) => ({
          ...state,
          prefText: val,
        }),
        () => {
          this.updateRows();
        }
      );
    };

    this.updateRows = () => {
      const newRows = filter(
        json,
        {
          fields: this.state.fields,
          handleChange: this.setRows,
          rows: [...json],
        },
        this.state.name,
        this.state.type,
        this.state.prefText
      );
      this.setState((state) => ({
        ...state,
        rows: newRows,
        items: newRows.slice(0, 100),
        page: 0,
        hasMore: true,
      }));
    };
  }

  fetchData = () => {
    const newItems = [];

    for (
      let i = this.state.page;
      i < Math.min(this.state.page + 100, this.state.rows.length);
      i++
    ) {
      newItems.push(this.state.rows[i]);
    }
    if (this.state.page >= this.state.rows.length) {
      this.setState({ hasMore: false });
    }
    this.setState({
      items: [...this.state.items, ...newItems],
      page: this.state.page + 100,
    });
  };

  render() {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <FilterContext.Provider
            value={{
              fields: this.state.fields,
              handleChange: this.setRows,
              rows: this.state.rows,
              items: this.state.items,
              hasMore: this.state.hasMore,
              page: this.state.page,
              name: this.state.name,
              setName: this.setName,
              type: this.state.type,
              setType: this.setType,
              prefText: this.state.prefText,
              setPref: this.setPref,
            }}
          >
            <Grid container spacing={0}>
              <Grid xs={12}>
                <Item>
                  <Typography variant="h4" component="h4" align="left">
                    Butterscotc's equuqle
                  </Typography>
                </Item>
              </Grid>
              <Grid xs={2}>
                <Item>
                  <Stack spacing={0}>
                    <InfiniteScroll
                      dataLength={this.state.items.length}
                      next={this.fetchData}
                      hasMore={this.state.hasMore}
                      loader={"Loading..."}
                    >
                      <TextSearchFields />
                      {keys.map((k) => (
                        <Item>
                          <StatSlider fields={fields} label={k} />
                        </Item>
                      ))}
                    </InfiniteScroll>
                    <Item>
                      <Button
                        variant="contained"
                        size="medium"
                        onClick={this.resetFields}
                      >
                        Reset
                      </Button>
                    </Item>
                  </Stack>
                </Item>
              </Grid>
              <Grid xs={10}>
                <Item>
                  <EqTable />
                </Item>
              </Grid>
            </Grid>
          </FilterContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
App.contextType = FilterContext;
