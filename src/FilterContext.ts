import * as React from 'react'
import {ItemRow} from './types';

export type FilterContextFields = {
    class: number,
    wc: number,
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
    type: string,
    name: string,
}

export type FilterContextType = {
    fields: FilterContextFields;
    handleChange: Function
    rows: Array<ItemRow>
    items?: Array<ItemRow>
    hasMore?: boolean;
    name?: string
    type?: string
    prefText?: string
    setName?: Function
    setType?: Function
    setPref?: Function
    page?: number
}


export const FilterContext = React.createContext<FilterContextType | null>({
    hasMore: true,
    fields: undefined,
    rows: [],
    items: [],
    name: '',
    type: '',
    prefText: '',
    handleChange: undefined,
    setName: undefined,
    setType: undefined,
    setPref: undefined,
    page: 0
});
