import styled, {css} from 'styled-components'

import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';

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
  
  ${({status}) => status && css`
    ${status === 'active' && `background: ${activeBackgroundColor};`}
    ${status === 'selected' && `background: ${selectedBackgroundColor};`}
  `}
`;
