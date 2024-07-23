import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface inputType {
    name: string,
    placeholder:string
}

const Input = forwardRef((props: inputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props} 
    
    >
    </TextField>
  )
});

export default Input
