import * as React from "react";
import {Component} from "react";
import json from "../eq/eqIndex.json";
import {setArrayField, SetArrayFieldPayload} from "./filters/filterReducer.ts";
import Stack from "@mui/material/Stack";
import {AppReducer, FilterContextType} from "./FilterContext.ts";
import Typography from "@mui/material/Typography";
import {connect} from "react-redux";
import {ItemRow} from "./types.ts";
import {Checkbox} from "@mui/material";

const availableFeatures: string[] = [];
(json as Array<ItemRow>).filter((r) => r.features && r.features.length > 0)
    .forEach((r) => r.features.forEach((f) => {
        if (!availableFeatures.includes(f.name)) {
            availableFeatures.push(f.name)
        }
    }))
availableFeatures.sort()
export type FeatureProps = {
    setArrayField: (action: SetArrayFieldPayload) => void
    features: string[]
}

class FeatureCheckboxes extends Component<FeatureProps, FilterContextType> {
    constructor(props: FeatureProps) {
        super(props);
    }

    handleFeature = (feature: string) => {
        const {setArrayField} = this.props;
        const featureFiltered = this.props.features.includes(feature)
        const newFilters = featureFiltered ? this.props.features.filter((f) => f !== feature) :
            [...this.props.features, feature]
        setArrayField({name: 'features', value: newFilters});
    };

    isChecked(feature: string) {
        return this.props.features.includes(feature)
    }

    render() {
        return availableFeatures && availableFeatures.map((feature) => {
            return (
                <Stack direction={'column'} key={feature}>
                    <Typography>{feature}</Typography>
                    <Checkbox value={this.isChecked(feature)} key={`feature-${feature}`}
                              onChange={() => this.handleFeature(feature)}/>
                </Stack>
            )
        })
    }
}

const mapStateToProps = (reducer: AppReducer) => ({
    features: reducer.reducer.filterContext.fields.features
});

const mapDispatchToProps = {
    setArrayField,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeatureCheckboxes);
