import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import shortid from 'shortid';
import { FilterContext } from './FilterContext';

const getStat = (row, type) => {
  return row.stats.map((s) => {
    if (s.type === type) {
      return (
        <div>
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

const getPref = (row) => {
  return row.stats.map((s) => {
    if (s.type === "pref") {
      return (
        <div>
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

const getClass = (row) => {
  return row.stats.map((s) => {
    if (s.type === 'class') {
      return <div>{s.index}</div>;
    }
  });
};

const getHitDam = (row) => {
  return row.stats.map((s) => {
    if (s.type === 'hitdam') {
      return (<div><span>{`${s.name}:${s.positive === true ? '+' : '-'}${s.index}`}</span></div>);
    }
  });
};

const getExtraLines = (row) => {
  return row.extraLines.map((l) => {
    return l;
  });
};

export default class EqTable extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <FilterContext.Consumer>
        {({ items }) => (
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow key={shortid.generate()}>
                  <TableCell align='right'>Name</TableCell>
                  <TableCell align='right'>Type</TableCell>
                  <TableCell align='right'>Stats</TableCell>
                  <TableCell align='right'>Regens</TableCell>
                  <TableCell align='right'>Resist</TableCell>
                  <TableCell align='right'>Skills/Spells</TableCell>
                  <TableCell align='right'>Class</TableCell>
                  <TableCell sx={{ maxWidth: 50 }} align='right'>
                    {' '}
                    Extra
                  </TableCell>
                  <TableCell align='right'>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.length === 0 && (
                  <tr>
                    <td>TOO SUFFELI</td>
                  </tr>
                )}
                {items.map((item, index) => (
                  <TableRow
                    key={shortid.generate()}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
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
                    <TableCell align='right' sx={{ maxWidth: 150 }}>
                      {getExtraLines(item)}
                    </TableCell>
                    <TableCell align='right'>{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </FilterContext.Consumer>
    );
  }
}
EqTable.contextType = FilterContext;
