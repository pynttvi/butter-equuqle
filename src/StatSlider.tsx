import * as React from 'react';
import { FilterContext, FilterContextType } from './FilterContext';
import { filterByStats } from './StatFilter';

import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { maxValues } from './StatFilter';
import { ItemRow, StatSliderProps, StatSliderState } from './types';
import { getJson } from './App';

export default class StatSlider extends React.Component<StatSliderProps, StatSliderState> {
  static getDerivedStateFromProps(
    props: StatSliderProps,
    state: StatSliderState,
  ): Partial<StatSliderState> | any {
  }

  setValue: (event, value) => void;
  filter: () => void;

  constructor(props) {
    super(props);
    const json = getJson();

    this.state = {
      value: 0,
      label: this.props.label,
      fields: this.props.fields,
    };


    this.setValue = (event, value) => {
      const context = this.context as FilterContextType

      context.fields[this.props.label] = value;
      this.setState((state) => ({
          ...state,
          fields: context.fields,
          value: value,
        }),
        () => this.filter());
    };

    this.filter = () => {
      const context = this.context as FilterContextType

      if (context.fields) {
        const newRows = json.filter((row) => {
          if (row.stats) {
            return filterByStats(row, context, context.name, context.type, context.prefText);
          }
        });
        context.rows = newRows;
        context.handleChange([...newRows], context.fields);
      } else {
      }
    };
  }

  render() {
    let props = { ...this.props };
    return (
      <FilterContext.Consumer key={'StatSliderConsumer'}>
        {({ rows, name, type, fields }) => (
          <>
            <Typography gutterBottom >
              {props.label}
            </Typography>
            <Slider
              id={props.label}
              getAriaLabel={() => 'Class'}
              value={fields[props.label]}
              onChange={this.setValue}
              max={maxValues[props.label]}
              valueLabelDisplay='auto'
            />
          </>
        )}
      </FilterContext.Consumer>
    );
  }
}
StatSlider.contextType = FilterContext;
