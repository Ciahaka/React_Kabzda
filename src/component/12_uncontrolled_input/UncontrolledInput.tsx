import React, {ChangeEvent, useRef, useState} from 'react';
import {Button, Container, Paper, TextField, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import {useUncontrolledInputAbusedReact} from './Input.stories';

export type InputPropsType = {
  value: string
  title: string
}

export const UncontrolledInput = (props: InputPropsType) => {
  const [value, setValue] = useState('')
  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }
  const [value_1, setValue_1] = useState('')
  const documentGetHandler = ()=>{
    const el = document.getElementById('inputID') as HTMLInputElement
    setValue_1(el.value)
  }
  const [value_2, setValue_2] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const saveOnClickHandler = ()=>{
    const el = inputRef.current as HTMLInputElement
    setValue_2(el.value)
  }

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
              <TextField label="Enter a value" variant="standard" onChange={onChangeHandler}/> - {value}
            </>

            <>
              <TextField id={'inputID'} label="Abused React" variant="standard"/>
              <Button style={{margin: '5px'}} variant="contained" color="success"
                      onClick={documentGetHandler}> Click
              </Button>
              Actual Value: - {value_1}  </>

            <>
              <TextField inputRef={inputRef} label="With useRef" variant="standard"/>
              <Button style={{margin: '5px'}} variant="contained" color="success"
                      onClick={saveOnClickHandler}> Click
              </Button>
              Actual Value: - {value_2}  </>

          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};

