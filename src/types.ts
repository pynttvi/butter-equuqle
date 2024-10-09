import {FilterContextFields} from "./FilterContext.ts";

export type EqStatType = "class" | "stat" | "regen" | "skill" | "resist" | "pref" | "hitdam" | "glow"

export type StatType = {
  index: number;
  generalIndex: number;
  indexTypeIndex: number;
  name: string,
  type: EqStatType,
  positive: boolean
  min: number
  max: number
  data: string
}
export type ItemRow = {
  name: string,
  type: string,
  stats: Array<StatType>
  extraLines: Array<string>
  points: number
}
export type AppStateType = {
  hasMore: boolean;
  items: Array<ItemRow>;
  rows: Array<ItemRow>;
  fields: FilterContextFields;
  page: number,
  name: string,
  type: string,
  prefText: string,
};

export type StatSliderProps = {
  label: string,
  fields: Object
}
export type StatSliderState = {
  label: string,
  value: number,
  fields: object
}