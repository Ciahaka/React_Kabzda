import React, {useState} from 'react';
import {Container, Paper, TextField, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

export type InputPropsType = {
  value: string
  title: string
}

export const UncontrolledInput = (props: InputPropsType) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <Container maxWidth={'xs'}>
        <Paper elevation={5} style={{padding: '3px'}}>
          <Grid2 container spacing={2} direction={'column'} alignItems={'center'} style={{padding: '10px'}}>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}} color={'brown'}>
              {props.title}
            </Typography>
            <TextField label="Enter a value" variant="standard"/>
            <TextField label="Fixed value" color={'error'} variant="standard" value={props.value}/>

            <>
              <TextField label="Enter a value" variant="standard" onChange={(event) => {
                const actualValue = event.currentTarget.value
                setValue(actualValue)
              }
              }/> - {value}  </>
            <>
              <TextField label="Enter a value" variant="standard"/>
              <button onClick={()=>{
                setValue('Alert')
              }}>
                Click
              </button>
              Actual Value: - {value}  </>

          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};

