export type EqStatType = "class" | "stat" | "regen" | "skill" | "resist" | "pref" | "hitdam"

export type StatType = {
  index: number;
  generalIndex: number;
  indexTypeIndex: number;
  name: '',
  type: EqStatType,
  positive: boolean
  min: number
  max: number
  data: string
}
export type ItemRow = {
  name: string, type: string,
  stats: Array<StatType>
  extraLines: Array<string>
  points: number
}
export type AppState = {
  hasMore: boolean;
  items: Array<ItemRow>;
  rows: Array<ItemRow>;
  fields: Object;
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