import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import useStyles from './styles';
import { useField } from "formik"

const DropDown = ({
  value,
  onChange,
  label,
  options,
  ...props
}) => {
  const classes = useStyles();
  const [field, meta] = useField(props)

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={value}
          {...field}
          {...props}
        >
          {options?.map((option, index) => (
            <MenuItem key={`key${index}`} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default DropDown