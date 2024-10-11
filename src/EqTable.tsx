import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import {ItemRow} from "./types.ts";
import {nanoid} from "nanoid";

const getStat = (row: ItemRow, type: string) => {
    return row?.stats?.map((s) => {
        if (s.type === type) {
            return (
                <div key={nanoid(4)}>
          <span>
            {`${s.name.replaceAll('\'', '')}:${s.positive === true ? '+' : '-'}${
                s.min !== s.max ? s.min + '-' + s.max : s.min
            } `}{' '}
          </span>
                </div>
            );
        }
    });
};

const getPref = (row: ItemRow) => {
    return row?.stats?.map((s) => {
        if (s.type === "pref") {
            return (
                <div key={nanoid(4)}>
          <span>
            {`${s.name}:${s.positive === true ? '+' : '-'}${
                s.min !== s.max ? s.min + '-' + s.max : s.min
            } `}{' '}
          </span>
                </div>
            );
        }
    });
};

const getClass = (row: ItemRow) => {
    return row?.stats?.map((s) => {
        if (s.type === 'class') {
            return <div key={nanoid(4)}>{s.index}</div>;
        }
    });
};

const getHitDam = (row: ItemRow) => {
    return row?.stats?.map((s) => {
        if (s.type === 'hitdam') {
            return (
                <div key={nanoid(4)}><span>{`${s.name}:${s.positive === true ? '+' : '-'}${s.index}`}</span>
                </div>);
        }
    });
};

const getExtraLines = (row: ItemRow) => {
    if (!row?.extraLines) {
        return <></>
    }
    return row.extraLines.map((l) => {
        return <div key={nanoid(4)}>{l}</div>;
    });
};

export type EqTableProps = {
    items: Array<ItemRow>
}

export default class EqTable extends React.Component<EqTableProps, {}> {

    constructor(props: EqTableProps) {
        super(props);
    }

    render() {
        return (
            <TableContainer component={Paper} key={nanoid(4)} sx={{width: '100%'}}>
                <Table aria-label='simple table' key={nanoid(4)}>
                    <TableHead>
                        <TableRow key={nanoid(4)}>
                            <TableCell key={nanoid(4)} align='right'>Name</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Type</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Stats</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Regens</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Resist</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Skills/Spells</TableCell>
                            <TableCell key={nanoid(4)} align='right'>Class</TableCell>
                            <TableCell key={nanoid(4)} sx={{maxWidth: 50}} align='right'>
                                {' '}
                                Extra
                            </TableCell>
                            <TableCell align='right'>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.items.length === 0 && (
                            <tr>
                                <td>TOO SUFFELI</td>
                            </tr>
                        )}

                        {this.props.items.map((item, index) => (
                            <TableRow
                                key={nanoid(4)}
                                sx={{
                                    '&:last-child td, &:last-child th': {border: 0},
                                }}
                            >
                                <TableCell component='th' scope='row' align='right'>
                                    {item.name}
                                </TableCell>
                                <TableCell align='right'>{item.type}</TableCell>
                                <TableCell align='right'>
                                    {getStat(item, 'stat')}
                                    {getHitDam(item)}
                                    {getPref(item)}
                                </TableCell>
                                <TableCell align='right'>
                                    {getStat(item, 'regen')}
                                </TableCell>
                                <TableCell align='right'>
                                    {getStat(item, 'resistance')}
                                </TableCell>
                                <TableCell align='right'>
                                    {getStat(item, 'skill')}
                                </TableCell>
                                <TableCell align='right'>{getClass(item)}</TableCell>
                                <TableCell align='right' sx={{maxWidth: 150}}>
                                    {getExtraLines(item)}
                                </TableCell>
                                <TableCell align='right'>{item.points}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}