import { forwardRef } from 'react';
import Select from "react-select";

const selectStyles = {
  control: (base, { isFocused }) => ({
    ...base,
    height: 48,
    background: '#44334C',
    borderColor: isFocused ? 'white' : 'transparent',
    boxShadow: 'none',
    transition: 'none',

    "&:hover": {
      borderColor:  isFocused ? 'white' : 'transparent',
    },
  }),

  valueContainer: (base) => ({
    ...base,
    paddingLeft: 13,
  }),

  placeholder: (base) => ({
    ...base,
    color: 'white',
  }),

  singleValue: (base) => ({
    ...base,
    color: 'white',
  }),

  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),

  indicatorsContainer: (base) => ({
    ...base,
    marginRight: 9,
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#B4B7C0',

    "&:hover": {
      color: '#B4B7C0',
    },
  }),
};

const CustomSelect = forwardRef((props, ref) => (
  <Select
    ref={ref}
    styles={selectStyles}
    {...props}
  />
));

export default CustomSelect;
