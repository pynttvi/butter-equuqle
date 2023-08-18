import * as React from "react";
import { FilterContext, FilterContextType } from "./FilterContext";
import { filterByStats, prefs } from "./StatFilter";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Item } from "./App";
import json from "../eq/eqIndex.json";

const types = Array.from(new Set(json.map((r) => r.type)));
const eqNames = [...json.map((r) => r.name)];

type TextSearchFieldsType = {
  name: string;
  type: string;
  prefText: string;
};
export default class TextSearchFields extends React.Component {
  private setType: (val) => void;
  private setName: (val) => void;
  private filter: () => void;
  state: TextSearchFieldsType = {
    name: "",
    type: "",
    prefText: "",
  };
  constructor(props) {
    super(props);

    this.filter = () => {
      const context = this.context as FilterContextType;
      if (context.fields) {
        const newRows = json.filter((row) => {
          if (row.stats) {
            return filterByStats(
              row,
              context,
              this.state.name,
              this.state.type,
              this.state.prefText
            );
          }
        });
        context.handleChange([...newRows]);
      } else {
      }
    };
  }

  render() {
    return (
      <FilterContext.Consumer>
        {({
          fields,
          rows,
          name,
          type,
          prefText,
          setName,
          setType,
          setPref,
        }) => (
          <>
            <Item>
              <Autocomplete
                disablePortal
                id="name-input"
                options={eqNames}
                onInputChange={(event, newInputValue) => {
                  setName(newInputValue);
                }}
                inputValue={name}
                onChange={(event, newInputValue) => {
                  setName(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} id="name" label="Name" />
                )}
              />
            </Item>
            <Item>
              <Autocomplete
                disablePortal
                id="type-input"
                options={types}
                onInputChange={(event, newInputValue) => {
                  setType(newInputValue);
                }}
                inputValue={type}
                onChange={(event, newValue) => {
                  setType(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} id="type" label="Type" />
                )}
              />
            </Item>

            <Item>
              <Autocomplete
                disablePortal
                id="type-input"
                options={prefs}
                onInputChange={(event, newInputValue) => {
                  setPref(newInputValue);
                }}
                inputValue={prefText}
                onChange={(event, newValue) => {
                  setPref(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} id="prefText" label="Pref" />
                )}
              />
            </Item>
          </>
        )}
      </FilterContext.Consumer>
    );
  }
}
TextSearchFields.contextType = FilterContext;
