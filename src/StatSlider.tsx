import * as React from 'react';
import {AppReducer, defaultNumericFields, FilterContextNumericFields} from './FilterContext';
import {maxValues} from './StatFilter';

import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import {setNumericField, SetNumericFieldPayload} from "./filters/filterReducer.ts";
import {connect} from "react-redux";
import {debounce} from "@mui/material";

export type StatSliderProps = {
    label: keyof FilterContextNumericFields,
    numericFields: FilterContextNumericFields
    setNumericField: (payload: SetNumericFieldPayload) => void
}

export type StatSliderState = {
    numericFields: FilterContextNumericFields
    label: keyof FilterContextNumericFields,
    value: number

}

class StatSlider extends React.Component<StatSliderProps, StatSliderState> {

    constructor(props: StatSliderProps) {
        super(props);
        this.state = {
            label: props.label as keyof FilterContextNumericFields,
            numericFields: props.numericFields,
            value: props.numericFields[props.label]
        }

        this.setContext = debounce(this.setContext, 500);
    }

    componentDidUpdate(prevProps: Readonly<StatSliderProps>, prevState: Readonly<StatSliderState>, snapshot?: any) {
        this.setContext()
    }

    setContext() {
        this.props.setNumericField({name: this.props.label, value: this.state.value});
    }

    setValue = (event, value: number) => {
        const nextState = {...this.state, value: value}
        nextState[this.props.label] = value
        this.setState(nextState)
    };

    render() {
        const value = this.state.value
        return (
            <>
                <Typography gutterBottom>
                    {this.props.label}
                </Typography>
                <Slider
                    id={this.props.label}
                    getAriaLabel={() => 'Class'}
                    value={value}
                    onChange={this.setValue}
                    max={maxValues[this.props.label]}
                    valueLabelDisplay='auto'
                />
            </>
        )
    }
}

const mapStateToProps = (reducer: AppReducer) => {
    const numericFields = {}
    const keys = Object.keys(defaultNumericFields) as Array<keyof FilterContextNumericFields>
    keys.filter((key) => {
        numericFields[key] = reducer.reducer.filterContext.fields[key]
    })
    return {
        numericFields: numericFields as FilterContextNumericFields
    }
};

const mapDispatchToProps = {
    setNumericField
};

export default connect(mapStateToProps, mapDispatchToProps)(StatSlider);