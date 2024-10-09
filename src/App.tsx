import StatSlider from "./StatSlider";
import * as React from "react";
import {createTheme, styled, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';

import json from "../eq/eqIndex.json";
import Grid from "@mui/material/Unstable_Grid2";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {FilterContext, FilterContextFields} from "./FilterContext";
import {filterRows, maxValues} from "./StatFilter";
import EqTable from "./EqTable";
import InfiniteScroll from "react-infinite-scroll-component";
import CssBaseline from "@mui/material/CssBaseline";
import {green, purple} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import TextSearchFields from "./TextSearchFields";
import shortid from "shortid";
import {AppStateType, ItemRow} from "./types";

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
export const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    key: shortid.generate(),
}));

const default_fields: FilterContextFields = {
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


export default class App extends React.Component<{}, { appState: AppStateType }> {
    appState: AppStateType

    private readonly setName: (val: string) => void;
    private readonly setType: (val: string) => void;
    private readonly setPref: (val: string) => void;
    private readonly setRows: (newRows: Array<ItemRow>, fields: Object) => void;
    private readonly updateRows: () => void;
    private readonly resetFields: () => void;
    private readonly setAppState: (appState: AppStateType, preventUpdate ?: boolean) => void;


    constructor(props) {
        super(props);
        this.appState = {
            name: "",
            type: "",
            prefText: "",
            rows: [...getJson()],
            items: getJson().slice(0, 100),
            fields: {...default_fields},
            hasMore: true,
            page: 0,
        };

        this.state = {
            appState: this.appState
        }

        const json: Array<ItemRow> = this.appState.rows


        this.setAppState = (appState: AppStateType, preventUpdate ?: boolean) => {
            this.setState((state) => ({
                    ...state,
                    appState: appState
                }),
                () => {
                    if (!preventUpdate) {
                        this.updateRows();
                    }
                });
        }

        this.resetFields = () => {
            window.location.reload();
        };

        this.setRows = (newRows: Array<ItemRow>, fields: FilterContextFields) => {
            this.setAppState({
                ...this.appState,
                rows: newRows,
                items: newRows.slice(0, 100),
                fields: {...fields},
                page: 0,
                hasMore: true,
            });
        };

        this.setType = (val: string) => {
            this.setAppState({
                ...this.appState,
                type: val,
            })
        }

        this.setName = (val) => {
            this.setAppState({
                ...this.appState,
                name: val,

            })
        };

        this.setPref = (val) => {
            this.setAppState({
                ...this.appState,
                prefText: val,
            })
        };

        this.updateRows = () => {
            filterRows(
                json,
                {
                    fields: this.appState.fields,
                    handleChange: this.setRows,
                    rows: [...json],
                },
                this.appState.name,
                this.appState.type,
                this.appState.prefText
            ).then((newRows: Array<ItemRow>) => {
                this.setAppState({
                    ...this.appState,
                    rows: newRows,
                    items: newRows.slice(0, 100),
                    page: 0,
                    hasMore: true,
                }, true);
            })
        };

    }

    componentDidMount() {
        this.setState({appState: this.state.appState})
    }

    fetchData = () => {
        const newItems = [];

        for (
            let i = this.state.appState.page;
            i < Math.min(this.state.appState.page + 100, this.state.appState.rows.length);
            i++
        ) {
            newItems.push(this.state.appState.rows[i]);
        }
        if (this.state.appState.page >= this.state.appState.rows.length) {
            this.setAppState({...this.state.appState, hasMore: false});
        }
        this.setAppState({
            ...this.appState,
            items: [...this.state.appState.items, ...newItems],
            page: this.state.appState.page + 100,
        }, true);
    };

    render() {
        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <FilterContext.Provider
                        value={{
                            fields: this.state.appState.fields,
                            rows: this.state.appState.rows,
                            items: this.state.appState.items,
                            hasMore: this.state.appState.hasMore,
                            page: this.state.appState.page,
                            name: this.state.appState.name,
                            type: this.state.appState.type,
                            prefText: this.state.appState.prefText,
                            handleChange: this.setRows,
                            setName: this.setName,
                            setType: this.setType,
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
                                            dataLength={this.state.appState.items.length}
                                            next={this.fetchData}
                                            hasMore={this.state.appState.hasMore}
                                            loader={"Loading..."}
                                        >
                                            <TextSearchFields/>
                                            {keys.map((k) => (
                                                <Item key={shortid.generate()}>
                                                    <StatSlider fields={default_fields} label={k}/>
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
                                    <EqTable/>
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
