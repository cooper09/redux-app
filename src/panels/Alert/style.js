import styled, {css} from 'styled-components'

import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const activeBackgroundColor = '#cc554c';
const selectedBackgroundColor = '#48cc92';

export const Container = styled(Paper)`
  overflow-x: auto;
  width: 100%;
`;

export const Row = styled(TableRow)`
  cursor: pointer;
  
  :hover {
    opacity: .9;
  };
  
  && td {
     ${({status}) => status && css`
        ${status === 'active' && `color: #fff;`}
      `}
  };
   // 3 pending red acceptedCallTime === 0 || resolvedCallTime === 0
  // 1 accepted green acceptedCallTime > 0
  // 2 resolved white acceptedCallTime > 0 || resolvedCallTime > 0
  ${({status}) => status && css`
    ${(status.acceptedCallTime === null) && `background: ${activeBackgroundColor};`}
    ${(status.acceptedCallTime > 0 && status.resolvedCallTime === null) && `background: ${selectedBackgroundColor};`}
  `}
`;

export const Cell = styled(TableCell)`
  font-size: 12px !important;
`;