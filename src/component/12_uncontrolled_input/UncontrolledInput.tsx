import React, {useState} from 'react';
import {Button, Container, Paper, TextField, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

export type InputPropsType = {
  value: string
  title: string
}

export const UncontrolledInput = (props: InputPropsType) => {
  const [value, setValue] = useState('')
  const [value_1, setValue_1] = useState('')

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
              <TextField id={'inputID'} label="Enter a value" variant="standard"/>
              <Button style={{margin:'5px'}} variant="contained" color="success" onClick={(event) => {
                const el = document.getElementById('inputID') as HTMLInputElement
                setValue_1(el.value)
              }}> Click
              </Button>
              Actual Value: - {value_1}  </>

          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};

