import json from "../eq/eqIndex.json";
import {ItemRow} from "./types.ts";
import {FilterContextType} from "./FilterContext.ts";

const CLASS_TYPE_NAME = 'class';

export async function filterRows(rows: Array<ItemRow>, context: FilterContextType): Promise<Array<ItemRow>> {
    const newRows = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (filterByStats(row, context) === true) {
            newRows.push(row);
        }
    }
    return newRows;
}

export function filterByStats(row: ItemRow, context: FilterContextType): boolean {
    const s = row.stats;
    if (context.fields.type && context.fields.type !== '' && context.fields.type !== 'null') {
        if (context.fields.type !== row.type) {
            return false;
        }
    }

    if (context.fields.name && context.fields.name !== '' && context.fields.name !== 'null') {
        if (row.name.localeCompare(context.fields.name)) {
            return false;
        }
    }

    if (context.fields.class !== 0) {

        if (!s?.find((s) => {
            return s.index >= context.fields.class && s.type === CLASS_TYPE_NAME;
        })) {
            return false;
        }
    }

    if (context.fields.features.length > 0) {
        if (!row.features) return false
        if (row.features.length < 1) return false
        const foundFeatures = context.fields?.features?.filter((f) => {
            row.features.includes(f)
        })
        if (!foundFeatures || foundFeatures.length === 0) return false
    }


    if (context.fields.str !== 0) {
        if (!row?.stats?.find((s) => {
            return s.min >= context.fields.str && s.name === 'strength' && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }

    if (context.fields.con !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'constitution' && s.min >= context.fields.con && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }

    if (context.fields.dex !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'dexterity' && s.min >= context.fields.dex && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }

    if (context.fields.wis !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'wisdom' && s.min >= context.fields.wis && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }

    }
    if (context.fields.int !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'intelligence' && s.min >= context.fields.int && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }
    if (context.fields.cha !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'charisma' && s.min >= context.fields.cha && s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }
    if (

        context.fields.hpr !== 0
    ) {
        if (!row?.stats?.find((s) => {
            return s.name === 'hitpoint' &&
                s.type === 'regen' && s.min >= context.fields.hpr && s.type === 'regen' && s.positive === true
        })) {
            return false;
        }
    }
    if (
        context.fields.spr !== 0
    ) {
        if (!row?.stats?.find((s) => {
            return s.name === 'spellpoint' &&
                s.type === 'regen' && s.min >= context.fields.spr && s.type === 'regen' && s.positive === true
        })) {
            return false;
        }
    }
    if (

        context.fields.hpm !== 0
    ) {
        if (!row?.stats?.find((s) => {
            return s.name === 'hitpoints' &&
                s.type === 'stat' && s.min >= context.fields.hpm &&
                s.type === 'stat' && s.positive === true
        })) {
            return false;
        }
    }
    if (

        context.fields.spm !== 0
    ) {
        if (!row?.stats?.find((s) => {
            return s.name === 'spellpoints' &&
                s.type === 'stat' && s.min >= context.fields.spm && s.positive === true;
        })) {
            return false;
        }
    }
    if (context.fields.hit !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'hit chance' && s.type === 'hitdam' && s.index >= context.fields.hit && s.positive === true;
        })) {
            return false;
        }
    }
    if (context.fields.dam !== 0) {
        if (!row?.stats?.find((s) => {
            return s.name === 'damage' && s.type === 'hitdam' && s.index >= context.fields.dam && s.positive === true;
        })) {
            return false;
        }
    }

    if (context.fields.resist !== 0) {
        if (!row?.stats?.find((s) => {
            return s.type === 'resist' && s.min >= context.fields.resist && s.positive === true && ((!context.fields.prefText || context.fields.prefText === '') || s.name === context.fields.prefText);
        })) {
            return false;
        }
    }
    if (context.fields.pref !== 0) {

        if (!row?.stats?.find((s) => {
            return s.type === 'pref' && s.min >= context.fields.pref && s.positive === true && ((!context.fields.prefText || context.fields.prefText === '') || s.name === context.fields.prefText);
        })) {
            return false;
        }
    }
    if (context.fields.glow !== 0) {
        if (!row?.stats?.find((s) => {
            return s.type === 'glow' && s.index >= context.fields.glow && s.positive === true;
        })) {
            return false;
        }
    }

    return true;
}

function findMaxValues(): Object {
    const maxValues = {
        class: 0,
        str: 0,
        con: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
        hpr: 0,
        hpm: 0,
        spr: 0,
        spm: 0,
        hit: 0,
        dam: 0,
        pref: 0,
        resist: 0,
        glow: 13,
    };

    for (let index = 0; index < json.length; index++) {
        const element = json[index];
        if (element.stats) {
            for (let i = 0; i < element.stats.length; i++) {
                const s = element.stats[i];

                if (s.type === CLASS_TYPE_NAME && s.index >= maxValues.class) {
                    maxValues.class = s.index;
                }

                if (s.name === 'strength' && s.max >= maxValues.str && s.positive === true) {
                    maxValues.str = s.max;
                }
                if (s.name === 'constitution' && s.max >= maxValues.con && s.positive === true) {
                    maxValues.con = s.max;
                }
                if (s.name === 'dexterity' && s.max >= maxValues.dex && s.positive === true) {
                    maxValues.dex = s.max;
                }
                if (s.name === 'wisdom' && s.max >= maxValues.wis && s.positive === true) {
                    maxValues.wis = s.max;
                }
                if (s.name === 'intelligence' && s.max >= maxValues.int && s.positive === true) {
                    maxValues.int = s.max;
                }
                if (s.name === 'charisma' && s.max >= maxValues.cha && s.positive === true) {
                    maxValues.cha = s.max;
                }
                if (
                    s.name === 'hitpoint' &&
                    s.type == 'regen' &&
                    s.max >= maxValues.hpr && s.positive === true
                ) {
                    maxValues.hpr = s.max;
                }
                if (
                    s.name === 'spellpoint' &&
                    s.type == 'regen' &&
                    s.max >= maxValues.spr && s.positive === true
                ) {
                    maxValues.spr = s.max;
                }
                if (
                    s.name === 'hitpoints' &&
                    s.type == 'stat' &&
                    s.max >= maxValues.hpm && s.positive === true
                ) {
                    maxValues.hpm = s.max;
                }
                if (
                    s.name === 'spellpoints' &&
                    s.type == 'stat' &&
                    s.max >= maxValues.spm && s.positive === true
                ) {
                    maxValues.spm = s.max;
                }
                if (s.name === 'hit chance' && s.type === 'hitdam' && s.index >= maxValues.hit && s.positive === true) {
                    maxValues.hit = s.index;
                }
                if (s.name === 'damage' && s.type === 'hitdam' && s.index >= maxValues.dam && s.positive === true) {
                    maxValues.dam = s.index;
                }
                if (s.type === 'resistance' && s.max >= maxValues.resist && s.positive === true) {
                    maxValues.resist = s.max;
                }
                if (s.type === 'pref' && s.max >= maxValues.pref) {
                    maxValues.pref = s.max;
                }

            }
        }
    }
    return maxValues;
}

export const maxValues = findMaxValues();

export const prefs = [
    'acid',
    'asphyxiation',
    'cold',
    'electric',
    'fire',
    'magical',
    'poison',
    'psionic',
];
