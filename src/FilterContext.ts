import * as React from 'react'
import { ItemRow } from './types';
export type FilterContextType = {
  hasMore: boolean;
  fields: Object;
  rows: Array<ItemRow>
  items: Array<ItemRow>
  name: string
  type: string
  prefText: string
  handleChange: Function
  setName: Function
  setType: Function
  setPref: Function
  page: number
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
