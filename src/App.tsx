import StatSlider from "./StatSlider";
import React, {Component} from "react";
import {createTheme, styled, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';

import jsonFile from "../eq/eqIndex.json";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import {
    AppContext,
    AppReducer,
    FilterContextFields,
    FilterContextNumericFields,
    FilterContextType
} from "./FilterContext";
import EqTable from "./EqTable";
import CssBaseline from "@mui/material/CssBaseline";
import {green, purple} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import TextSearchFields from "./TextSearchFields";
import shortid from "shortid";
import {ItemRow} from "./types";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {filterRows} from "./StatFilter.ts";
import FeatureCheckboxes from "./FeatureCheckboxes.tsx";

export const getJson = (): Array<ItemRow> => {
    return jsonFile as Array<ItemRow>;
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

export const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    key: shortid.generate(),
}));

const defaultNumericFields: FilterContextNumericFields = {
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
};

const defaultFields: FilterContextFields = {
    ...defaultNumericFields,
    type: "",
    name: "",
    prefText: "",
    features: []
};

const keys: Array<keyof FilterContextNumericFields> = Object.keys(defaultNumericFields) as Array<keyof FilterContextNumericFields>;

export type AppStateType = {
    hasMore: boolean;
    isFilterBoxVisible: boolean;
    items: Array<ItemRow>;
    rows: Array<ItemRow>;
    page: number,
};

const json = jsonFile as Array<ItemRow>

class App extends Component<{ filterContext: FilterContextType }, {
    appState: AppStateType,
    filterContext: FilterContextType
}> {
    private filterBoxRef: React.RefObject<HTMLDivElement>;
    private observer: IntersectionObserver;

    constructor(props: AppContext) {
        super(props);

        this.filterBoxRef = React.createRef();

        this.state = {
            appState: {
                rows: json,
                items: json.slice(0, 100),
                hasMore: true,
                page: 0,
                isFilterBoxVisible: true,
            },
            filterContext: this.props.filterContext,
        }

    }

    componentDidUpdate(prevProps: Readonly<{ filterContext: FilterContextType }>, prevState: Readonly<{
        appState: AppStateType;
        filterContext: FilterContextType
    }>, snapshot?: any) {

        const filtersChanged = Object.keys(this.state.filterContext.fields).find((key) => {
                if (prevProps.filterContext.fields[key] !== this.props.filterContext.fields[key]) {
                    return true
                }
                return false
            }
        )
        if (filtersChanged) {
            console.log("FIELD UPDATE")
            filterRows(
                json,
                this.props.filterContext
            ).then((newRows) => {
                this.setAppState({
                    ...this.state.appState,
                    rows: newRows,
                    items: newRows.slice(0, 100),
                    page: 0,
                    hasMore: true,
                })
            })
        }
    }


    setAppState = (appState: AppStateType) => {
        this.setState((state) => ({
            ...state,
            appState: {...appState}
        }))
    }

    resetFields = () => {
        window.location.reload();
    };


    componentDidMount() {
        this.observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // Update state based on the intersection of the filter box with the viewport
                this.setAppState({
                    ...this.state.appState,
                    isFilterBoxVisible: entry.isIntersecting,
                });
            },
            {
                root: null, // Observe relative to the viewport
                threshold: 0.1, // Trigger when 10% of the filter box is visible
            }
        );

        // Start observing the filter box element
        if (this.filterBoxRef.current) {
            this.observer.observe(this.filterBoxRef?.current);
        }
    }

    fetchData = () => {
        const newItems = [];
        if (this.state.appState.hasMore) {

            for (
                let i = this.state.appState.page;
                i < Math.min(this.state.appState.page + 100, this.state.appState.rows.length);
                i++
            ) {
                newItems.push(this.state.appState.rows[i]);
            }

            console.log("FECH", this.state.appState.page, this.state.appState.items.length)

            if (this.state.appState.page >= this.state.appState.rows.length) {
                this.setAppState({...this.state.appState, hasMore: false});
            } else {
                this.setAppState({
                    ...this.state.appState,
                    items: [...this.state.appState.items, ...newItems],
                    page: this.state.appState.page + 100,
                });
            }
        }
    };

    render() {
        if (!this.props?.filterContext) {
            return (<>Loading</>)
        }
        const fields = this.state.filterContext.fields
        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Box sx={{ width: '100%' }} key={'app-bo'}>
                        <InfiniteScroll
                            dataLength={this.state.appState.items.length}
                            next={this.fetchData}
                            hasMore={this.state.appState.hasMore}
                            loader={"Loading..."}
                        >
                            <Box sx={{ width: '100%', padding: '10px' }}>
                                <Grid container spacing={2}>

                                    {/* Header Section */}
                                    {/* @ts-ignore */}
                                    <Grid item xs={12}>
                                        <Typography variant="h4" component="h4" align="left">
                                            Butterscotc's Equuqle
                                        </Typography>
                                    </Grid>

                                    {/* Main Content: Filter Box and Table Side by Side */}
                                    {/* @ts-ignore */}
                                    <Grid container item xs={12} spacing={2}>

                                        {/* Filter Box (4/12 space) */}
                                        <Grid direction={'row'} xs={12} md={2} key={'filter-box'} ref={this.filterBoxRef}>
                                            <Box sx={{ backgroundColor: "#1A2027", padding: '16px' }}>
                                                <TextSearchFields />
                                                {keys.map((k: keyof FilterContextNumericFields) => (
                                                    <Item key={shortid.generate()}>
                                                        <StatSlider label={k} />
                                                    </Item>
                                                ))}
                                                <FeatureCheckboxes />
                                                <Item>
                                                    <Button variant="contained" size="medium" onClick={this.resetFields}>
                                                        Reset
                                                    </Button>
                                                </Item>
                                            </Box>
                                        </Grid>

                                        {/* EqTable Box (8/12 space) */}
                                        <Grid direction={'row'} xs={12} md={10} key={'eq-table-box'}>
                                            <Box sx={{ overflowX: 'hidden', padding: '16px', backgroundColor: '#1A2027' }}>
                                                <EqTable items={this.state.appState.items} />
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Box>
                        </InfiniteScroll>
                    </Box>

                </ThemeProvider>
            </StyledEngineProvider>
        );
    }
}

const mapStateToProps = (reducer: AppReducer) => {
    return {
        filterContext: reducer.reducer.filterContext
    }
};

// @ts-ignore
export default connect(mapStateToProps)(App);