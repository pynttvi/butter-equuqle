import * as React from "react";
import {AppReducer} from "./FilterContext";
import {prefs} from "./StatFilter";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Item} from "./App";
import json from "../eq/eqIndex.json";
import {setTextField, SetTextFieldPayload} from "./filters/filterReducer.ts";
import {connect} from "react-redux";
import {Box, debounce} from "@mui/material";
import {nanoid} from "nanoid";

const types = Array.from(new Set(json.map((r) => r.type))).sort();
const eqNames = [...json.map((r) => r.name)].sort();

type TextSearchFieldsState = {
    name: string;
    type: string;
    prefText: string;
};

type TextSearchFieldsProps = {
    name: string;
    type: string;
    prefText: string;
    setTextField?: (payload: SetTextFieldPayload) => void
}

class TextSearchFields extends React.Component<TextSearchFieldsProps, TextSearchFieldsState> {

    constructor(props: TextSearchFieldsProps) {
        super(props);
        this.state = {
            name: "",
            type: "",
            prefText: "",
        }
        this.updateContext = debounce(this.updateContext, 2000);

    }

    updateState(filterName: keyof TextSearchFieldsState, value: string) {
        const nextState = {}
        nextState[filterName] = value
        this.setState({
            ...this.state,
            ...nextState
        })

    }

    componentDidUpdate(prevProps: Readonly<TextSearchFieldsProps>, prevState: Readonly<TextSearchFieldsState>, snapshot?: any) {
        this.updateContext()
    }

    updateContext() {
        this.props.setTextField({name: 'name', value: this.state.name})
        this.props.setTextField({name: 'type', value: this.state.type})
        this.props.setTextField({name: 'prefText', value: this.state.prefText})
    }

    setName(name: string) {
        this.updateState("name", name || "")
    }

    setType(type: string) {
        this.updateState("type", type || "")
    }

    setPref(pref: string) {
        this.updateState("prefText", pref || "")
    }

    render() {
        const {name, type, prefText} = this.state
        return (
            <>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="name-input"
                        key={"name-input"}
                        options={eqNames}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} key={nanoid(4)}>
                                {option}
                            </Box>
                        )}
                        onInputChange={(event, newInputValue) => {
                            this.setName(newInputValue);
                        }}
                        inputValue={name}
                        onChange={(event, newInputValue) => {
                            this.setName(newInputValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} id="name" label="Name"/>
                        )}
                    />
                </Item>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="type-input"
                        key={"type-input"}
                        options={types}
                        onInputChange={(event, newInputValue) => {
                            this.setType(newInputValue);
                        }}
                        inputValue={type}
                        onChange={(event, newValue) => {
                            this.setType(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} id="type" label="Type"/>
                        )}
                    />
                </Item>

                <Item>
                    <Autocomplete
                        disablePortal
                        id="prefText-input"
                        key={"prefText-input"}
                        options={prefs}
                        onInputChange={(event, newInputValue) => {
                            this.setPref(newInputValue);
                        }}
                        inputValue={prefText}
                        onChange={(event, newValue) => {
                            this.setPref(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} id="prefText" label="Pref"/>
                        )}
                    />
                </Item>
            </>
        );
    }
}

const mapStateToProps = (reducer: AppReducer) => {
    return {
        name: reducer.reducer.filterContext.fields.name,
        type: reducer.reducer.filterContext.fields.type,
        prefText: reducer.reducer.filterContext.fields.prefText,
    }
};

const mapDispatchToProps = {
    setTextField
};

export default connect(mapStateToProps, mapDispatchToProps)(TextSearchFields);
