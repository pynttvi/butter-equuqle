export type FilterContextNumericFields = {
    class: number,
    glow: number,
    str: number,
    con: number,
    dex: number,
    wis: number,
    int: number,
    cha: number,
    hpr: number,
    spr: number,
    hpm: number,
    spm: number,
    hit: number,
    dam: number,
    pref: number,
    resist: number,
}
export type FilterContextTextFields = {
    type: string,
    name: string,
    prefText: string
}
export type FilterContextArrayFields = {
    features: string[]
}

export type FilterContextFields = FilterContextArrayFields & FilterContextNumericFields & FilterContextTextFields

export type FilterContextType = {
    fields: FilterContextFields;
}

export const defaultNumericFields = {
    class: 0,
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
}
export const defaultTextFields = {
    type: "",
    name: "",
    prefText: "",
}
export const defaultArrayFields = {
    features: []
}
export const defaultFields: FilterContextFields = {
    ...defaultNumericFields,
    ...defaultTextFields,
    ...defaultArrayFields,
}

export type AppContext = {
    filterContext: FilterContextType

}
export type AppReducer = {
    reducer: AppContext
}

export const initialState: AppContext = {
    filterContext: {
        fields: defaultFields
    }

};