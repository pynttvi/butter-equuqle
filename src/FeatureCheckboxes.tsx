import * as React from "react";
import {Component} from "react";
import json from "../eq/eqIndex.json";
import {setArrayField, SetArrayFieldPayload} from "./filters/filterReducer.ts";
import {CheckBox} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import {AppContext, FilterContextType} from "./FilterContext.ts";
import Typography from "@mui/material/Typography";
import {connect} from "react-redux";
import {ItemRow} from "./types.ts";

const availableFeatures: string[] = [...new Set((json as Array<ItemRow>).map((r) => r.features).flat())];

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


    render() {
        return availableFeatures && availableFeatures.map((feature) => {
            return (
                <Stack direction={"row"} key={feature}>
                    <Stack direction={'column'}>
                        <Typography>{feature}</Typography>
                        <CheckBox key={`feature-${feature}`} onChange={() => this.handleFeature(feature)}/>
                    </Stack>
                </Stack>)
        })
    }
}

const mapStateToProps = (state: AppContext) => ({
    features: state.filterContext.fields.features
});
const mapDispatchToProps = {
    setArrayField,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeatureCheckboxes);
