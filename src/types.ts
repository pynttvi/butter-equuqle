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
    features: string[]
}

