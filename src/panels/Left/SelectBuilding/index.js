import React, {useState, useRef, useEffect} from 'react';
import {findDOMNode} from 'react-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setSelectedBuilding} from 'root/redux-core/actions/building';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function SelectBuilding({building, setSelectedBuilding}) {
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabelRef = useRef(null);

  useEffect(() => {
    setLabelWidth(findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  const handleChange = ({target}) => {
    const id = target.value;
    setSelectedBuilding(id)
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel ref={inputLabelRef} htmlFor='building-native-select'>
        Building
      </InputLabel>
      <Select
        native
        value={building.selected.ID || ''}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            id='building-native-select'
          />
        }
      >
        <option value=''/>
        {building.data.map(({ID, NAME}) =>
          <option key={String(ID)} value={ID}>{NAME}</option>
        )}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = ({building}) => ({
  building,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedBuilding,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectBuilding);