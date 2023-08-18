const basicStatValues = (positive, stat) => {
    return [
        {
            index: 1,
            min: 1, max: 1,
            data: `It ${positive} the users ${stat} unnoticably.`,
        },
        {
            index: 2,
            min: 2, max: 2,
            data: `It ${positive} the users ${stat} pathetically.`,
        },
        {
            index: 3,
            min: 3, max: 3,
            data: `It ${positive} the users ${stat} pitifully.`,
        },
        {
            index: 4,
            min: 4, max: 4,
            data: `It ${positive} the users ${stat} a tiny bit.`,
        },
        {
            index: 5,
            min: 5, max: 5,
            data: `It ${positive} the users ${stat} poorly.`,
        },
        {
            index: 6,
            min: 6, max: 6,
            data: `It ${positive} the users ${stat} a bit.`,
        },
        {
            index: 7,
            min: 7, max: 7,
            data: `It ${positive} the users ${stat} slightly.`,
        },
        {
            index: 8,
            min: 8, max: 8,
            data: `It ${positive} the users ${stat} somewhat.`,
        },
        {
            index: 9,
            min: 9, max: 9,
            data: `It ${positive} the users ${stat} noticably.`,
        },
        {
            index: 10,
            min: 10, max: 10,
            data: `It ${positive} the users ${stat} adequately.`,
        },
        {
            index: 11,
            min: 11, max: 11,
            data: `It ${positive} the users ${stat} an average amount.`,
        },
        {
            index: 12,
            min: 12, max: 12,
            data: `It ${positive} the users ${stat} a good amount.`,
        },
        {
            index: 13,
            min: 13, max: 13,
            data: `It ${positive} the users ${stat} nicely.`,
        },
        {
            index: 14,
            min: 14, max: 14,
            data: `It ${positive} the users ${stat} moderately.`,
        },
        {
            index: 15,
            min: 15, max: 15,
            data: `It ${positive} the users ${stat} impressively.`,
        },
        {
            index: 16,
            min: 16, max: 16,
            data: `It ${positive} the users ${stat} superbly.`,
        },
        {
            index: 17,
            min: 17, max: 17,
            data: `It ${positive} the users ${stat} tremendously.`,
        },
        {
            index: 18,
            min: 18, max: 18,
            data: `It ${positive} the users ${stat} incredibly.`,
        },
        {
            index: 19,
            min: 20, max: 24,
            data: `It ${positive} the users ${stat} like a god.`,
        },
        {
            index: 20,
            min: 25, max: 25,
            data: `It ${positive} the users ${stat} ILLEGALLY.`,
        },
    ];
};
const maxValues = (positive, stat) => {
    return [
        {
            index: 1,
            min: 17, max: 17,
            data: `It ${positive} ${stat} pathetically.`,
        },
        {
            index: 2,
            min: 50, max: 50,
            data: `It ${positive} ${stat} poorly.`,
        },
        {
            index: 3,
            min: 150, max: 150,
            data: `It ${positive} ${stat} impressively.`,
        },
        {
            index: 4,
            min: 200, max: 200,
            data: `It ${positive} ${stat} nicely.`,
        },
        {
            index: 5,
            min: 255, max: 255,
            data: `It ${positive} ${stat} unnoticably.`,
        },
        {
            index: 6,
            min: 280, max: 280,
            data: `It ${positive} ${stat} a tiny bit.`,
        },
        {
            index: 7,
            min: 300, max: 300,
            data: `It ${positive} ${stat} adequately.`,
        },
        {
            index: 13,
            min: 425, max: 425,
            data: `${positive} ${stat} an average amount.`,
        },
        {
            index: 14,
            min: 450, max: 450,
            data: `${positive} ${stat} a good amount.`,
        },
        {
            index: 15,
            min: 475, max: 475,
            data: `${positive} ${stat} nicely.`,
        },
        {
            index: 16,
            min: 500, max: 500,
            data: `${positive} ${stat} moderately.`,
        },
        {
            index: 17,
            min: 525, max: 525,
            data: `${positive} ${stat} impressively.`,
        },
        {
            index: 18,
            min: 550, max: 550,
            data: `${positive} ${stat} superbly.`,
        },
        {
            index: 19,
            min: 575, max: 575,
            data: `${positive} ${stat} tremendously.`,
        },
        {
            index: 20,
            min: 600, max: 600,
            data: `${positive} ${stat} incredibly.`,
        },
        {
            index: 21,
            min: 700, max: 700,
            data: `${positive} ${stat} like a god.`,
        },
        {
            index: 22,
            min: 1000, max: 1000,
            data: `${positive} ${stat} ILLEGALLY.`,
        },
    ];
};

const regenValues = (positive, regen) => {
    return [
        {
            index: 1,
            min: 1, max: 2,
            data: `It ${positive} the users ${regen} regeneration unnoticably.`,
        },
        {
            index: 2,
            min: 3, max: 4,
            data: `It ${positive} the users ${regen} regeneration pathetically.`,
        },
        {
            index: 3,
            min: 5, max: 6,
            data: `It ${positive} the users ${regen} regeneration pitifully.`,
        },
        {
            index: 4,
            min: 7, max: 8,
            data: `It ${positive} the users ${regen} regeneration a tiny bit.`,
        },
        {
            index: 5,
            min: 9, max: 10,
            data: `It ${positive} the users ${regen} regeneration poorly.`,
        },
        {
            index: 6,
            min: 11, max: 12,
            data: `It ${positive} the users ${regen} regeneration a bit.`,
        },
        {
            index: 7,
            min: 13, max: 14,
            data: `It ${positive} the users ${regen} regeneration slightly.`,
        },
        {
            index: 8,
            min: 15, max: 16,
            data: `It ${positive} the users ${regen} regeneration somewhat.`,
        },
        {
            index: 9,
            min: 17, max: 18,
            data: `It ${positive} the users ${regen} regeneration noticably.`,
        },
        {
            index: 10,
            min: 19, max: 20,
            data: `It ${positive} the users ${regen} regeneration adequately.`,
        },
        {
            index: 11,
            min: 21, max: 22,
            data: `It ${positive} the users ${regen} regeneration an average amount.`,
        },
        {
            index: 12,
            min: 23, max: 24,
            data: `It ${positive} the users ${regen} regeneration a good amount.`,
        },
        {
            index: 13,
            min: 25, max: 26,
            data: `It ${positive} the users ${regen} regeneration nicely.`,
        },
        {
            index: 14,
            min: 27, max: 28,
            data: `It ${positive} the users ${regen} regeneration strongly.`,
        },
        {
            index: 15,
            min: 29, max: 30,
            data: `It ${positive} the users ${regen} regeneration impressively.`,
        },
        {
            index: 16,
            min: 31, max: 32,
            data: `It ${positive} the users ${regen} regeneration superbly.`,
        },
        {
            index: 17,
            min: 33, max: 34,
            data: `It ${positive} the users ${regen} regeneration tremendously.`,
        },
        {
            index: 18,
            min: 35, max: 36,
            data: `It ${positive} the users ${regen} regeneration incredibly.`,
        },
        {
            index: 19,
            min: 37, max: 38,
            data: `It ${positive} the users ${regen} regeneration impossibly much.`,
        },
        {
            index: 20,
            min: 39, max: 40,
            data: `It ${positive} the users ${regen} regeneration like a god.`,
        },
        {
            index: 21,
            min: 41, max: 43,
            data: `It ${positive} the users ${regen} regeneration substantially.`,
        },
        {
            index: 22,
            min: 44, max: 48,
            data: `It ${positive} the users ${regen} regeneration too much.`,
        },
        {
            index: 23,
            min: 49, max: 50,
            data: `It ${positive} the users ${regen} regeneration ILLEGALLY.`,
        },
    ];
};

const resistValues = (positive, resistance) => {
    return [
        {
            index: 1,
            min: 1, max: 1,
            data: `It ${positive} the users ${resistance} resistance unnoticably.`,
        },
        {
            index: 2,
            min: 1, max: 2,
            data: `It ${positive} the users ${resistance} resistance a bit.`,
        },
        {
            index: 3,
            min: 2, max: 2,
            data: `It ${positive} the users ${resistance} resistance pathetically.`,
        },
        {
            index: 4,
            min: 3, max: 3,
            data: `It ${positive} the users ${resistance} resistance pitifully.`,
        },
        {
            index: 5,
            min: 4, max: 4,
            data: `It ${positive} the users ${resistance} resistance poorly.`,
        },
        {
            index: 6,
            min: 5, max: 6,
            data: `It ${positive} the users ${resistance} resistance slightly.`,
        },
        {
            index: 7,
            min: 7, max: 8,
            data: `It ${positive} the users ${resistance} resistance somewhat.`,
        },
        {
            index: 8,
            min: 9, max: 11,
            data: `It ${positive} the users ${resistance} resistance strongly.`,
        },
        {
            index: 9,
            min: 12, max: 14,
            data: `It ${positive} the users ${resistance} resistance superbly.`,
        },
        {
            index: 10,
            min: 15, max: 15,
            data: `It ${positive} the users ${resistance} resistance unearthly.`,
        },
    ];
};

const skillValues = (positive, skill) => {
    return [
        {
            index: 1,
            min: 1, max: 4,
            data: `It gives tiny ${positive} to the skill ${skill}`,
        },
        {
            index: 2,
            min: 5, max: 9,
            data: `It gives small ${positive} to the skill ${skill}.`,
        },
        {
            index: 3,
            min: 10, max: 14,
            data: `It gives decent ${positive} to the skill ${skill}.`,
        },
        {
            index: 4,
            min: 15, max: 19,
            data: `It gives nice ${positive} to the skill ${skill}.`,
        },
        {
            index: 5,
            min: 20, max: 24,
            data: `It gives great ${positive} to the skill ${skill}.`,
        },
        {
            index: 7,
            min: 25, max: 29,
            data: `It gives awesome ${positive} to the skill ${skill}.`,
        },
        {
            index: 8,
            min: 30, max: 34,
            data: `It gives tremendous ${positive} to the skill ${skill}.`,
        },
    ];
};

const hitDam = () => {
    return [
        {
            index: 1,
            data: "unnoticably",
        },
        {
            index: 2,
            data: "pathetically",
        },
        {
            index: 3,
            data: "pitifully",
        },
        {
            index: 4,
            data: "a tiny bit",
        },
        {
            index: 5,
            data: "poorly",
        },
        {
            index: 6,
            data: "a bit",
        },
        {
            index: 7,
            data: "slightly",
        },
        {
            index: 8,
            data: "somewhat",
        },
        {
            index: 9,
            data: "noticably",
        },
        {
            index: 10,
            data: "adequately",
        },
        {
            index: 11,
            data: "an average amount",
        },
        {
            index: 12,
            data: "a good amount",
        },
        {
            index: 13,
            data: "nicely",
        },
        {
            index: 14,
            data: "strongly",
        },
        {
            index: 15,
            data: "impressively",
        },
        {
            index: 16,
            data: "superbly",
        },
        {
            index: 17,
            data: "tremendously",
        },
        {
            index: 18,
            data: "incredibly",
        },
        {
            index: 19,
            data: "impossibly much",
        },
        {
            index: 20,

            data: "like a god",
        },
        {
            index: 21,

            data: "substantially",
        },
        {
            index: 22,

            data: "too much",
        },
        {
            index: 23,
            data: "ILLEGALLY",
        },
    ];
};

const prefValues = (pref) => {
    return [
        {
            index: 1,
            min: 1, max: 2,
            data: `It does ${pref} damage unnoticably.`,
        },
        {
            index: 2,
            min: 3, max: 4,
            data: `It does ${pref} damage pathetically.`,
        },
        {
            index: 3,
            min: 5, max: 6,
            data: `It does ${pref} damage pitifully.`,
        },
        {
            index: 4,
            min: 7, max: 8,
            data: `It does ${pref} damage a tiny bit.`,
        },
        {
            index: 5,
            min: 9, max: 10,
            data: `It does ${pref} damage poorly.`,
        },
        {
            index: 6,
            min: 11, max: 12,
            data: `It does ${pref} damage a bit.`,
        },
        {
            index: 7,
            min: 13, max: 14,
            data: `It does ${pref} damage slightly.`,
        },
        {
            index: 8,
            min: 15, max: 16,
            data: `It does ${pref} damage somewhat.`,
        },
        {
            index: 9,
            min: 17, max: 18,
            data: `It does ${pref} damage noticably.`,
        },
        {
            index: 10,
            min: 19, max: 20,
            data: `It does ${pref} damage adequately.`,
        },
        {
            index: 11,
            min: 21, max: 22,
            data: `It does ${pref} damage an average amount.`,
        },
        {
            index: 12,
            min: 23, max: 24,
            data: `It does ${pref} damage a good amount.`,
        },
        {
            index: 13,
            min: 25, max: 26,
            data: `It does ${pref} damage nicely.`,
        },
        {
            index: 14,
            min: 27, max: 28,
            data: `It does ${pref} damage strongly.`,
        },
        {
            index: 15,
            min: 29, max: 30,
            data: `It does ${pref} damage impressively.`,
        },
        {
            index: 16,
            min: 31, max: 32,
            data: `It does ${pref} damage superbly.`,
        },
        {
            index: 17,
            min: 33, max: 34,
            data: `It does ${pref} damage tremendously.`,
        },
        {
            index: 18,
            min: 35, max: 36,
            data: `It does ${pref} damage incredibly.`,
        },
        {
            index: 19,
            min: 37, max: 38,
            data: `It does ${pref} damage impossibly much.`,
        },
        {
            index: 20,
            min: 39, max: 40,
            data: `It does ${pref} damage like a god.`,
        },
        {
            index: 21,
            min: 41, max: 43,
            data: `It does ${pref} damage substantially.`,
        },
        {
            index: 22,
            min: 44, max: 48,
            data: `It does ${pref} damage too much.`,
        },
        {
            index: 23,
            min: 49, max: 50,
            data: `It does ${pref} damage ILLEGALLY.`,
        },
    ];
};

const classValues = (value) => {
    return [
        { id: 0, data: "negative" },
        { id: 1, data: "non-existent" },
        { id: 2, data: "almost non-existent" },
        { id: 3, data: "almost" },
        { id: 4, data: "pathetic" },
        { id: 5, data: "poor" },
        { id: 6, data: "tiny" },
        { id: 7, data: "low" },
        { id: 8, data: "little" },
        { id: 9, data: "feeble" },
        { id: 10, data: "weak" },
        { id: 11, data: "average" },
        { id: 12, data: "mediocre" },
        { id: 13, data: "adequate" },
        { id: 14, data: "decent" },
        { id: 15, data: "good" },
        { id: 16, data: "nice" },
        { id: 17, data: "great" },
        { id: 18, data: "excellent" },
        { id: 19, data: "impressive" },
        { id: 20, data: "superb" },
        { id: 21, data: "magnificent" },
        { id: 22, data: "awesome" },
        { id: 23, data: "tremendous" },
        { id: 24, data: "incredible" },
        { id: 25, data: "divine" },
        { id: 26, data: "immense" },
        { id: 27, data: "unbelievable" },
        { id: 28, data: "ILLEGAL" },
      ];      
};

const glowValues = [
    {
        index: 1,
        data: "This item loses its magical powers with incredible haste.",
    },
    {
        index: 2,
        data: "This item loses its magical powers extremely fast.",
    },
    {index: 3, data: "This item loses its magical powers very fast."},
    {index: 4, data: "This item loses its magical powers fast."},
    {
        index: 5,
        data: "This item loses its magical powers somewhat faster than average.",
    },
    {
        index: 5,
        data: "This item loses its magical powers somewhat faster than avarage.",
    },
    {
        index: 6,
        data: "This item loses its magical powers a bit faster than average.",
    },
    {
        index: 6,
        data: "This item loses its magical powers a bit faster than avarage.",
    },
    {
        index: 7,
        data: "This item loses its magical powers with average speed.",
    },
    {
        index: 7,
        data: "This item loses its magical powers with avarage speed.",
    },
    {
        index: 8,
        data: "This item loses its magical powers a bit slower than avarage.",
    },
    {
        index: 8,
        data: "This item loses its magical powers a bit slower than average.",
    },
    {
        index: 9,
        data: "This item loses its magical powers somewhat slower than average.",
    },
    {
        index: 9,
        data: "This item loses its magical powers somewhat slower than avarage.",
    },
    {index: 10, data: "This item loses its magical powers slowly."},
    {
        index: 11,
        data: "This item loses its magical powers very slowly.",
    },
    {
        index: 12,
        data: "This item loses its magical powers extremely slowly.",
    },
    {
        index: 13,
        data: "This item loses its magical powers incredibly slowly.",
    },
];

function EqConversion() {
}

module.exports = {
    EqConversion: EqConversion,
    basicStatValues: basicStatValues,
    maxValues: maxValues,
    regenValues: regenValues,
    resistValues: resistValues,
    skillValues: skillValues,
    hitDamValues: hitDam,
    prefValues: prefValues,
    classValues: classValues,
    glowValues: glowValues,
};
