import React, {ChangeEvent, useState} from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import {Checkbox, Container, Paper, TextField, Typography, Select} from '@mui/material';



export type InputPropsType = {

  title: string
}

export const ControlledInput = (props: InputPropsType) => {
  const [valueP, setValueP] = useState('')
  const OnChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{setValueP(event.currentTarget.value)}
  const [valueCh, setValueCh] = useState(true)
  const checkboxHandler = (event:ChangeEvent<HTMLInputElement>) =>{setValueCh(event.currentTarget.checked)}
  const [valueS, setValueS] = useState<string | undefined>('15')
  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValueS(event.currentTarget.value)
  }

  return (
    <div>
      <Container maxWidth={'xs'}>
        <Paper elevation={5} style={{padding: '10px', margin:'5px'}}>
          <Grid2 container spacing={2} direction={'column'} alignItems={'center'} style={{padding: '10px'}}>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}} color={'brown'}>
              {props.title}
            </Typography>
            <TextField label="Input with useState" variant="standard" value={valueP} onChange={OnChangeHandler}/>
            <Checkbox defaultChecked size={'medium'} color="secondary" checked={valueCh} onChange={checkboxHandler}/>
            <select value={valueS}  onChange={selectHandler} >
              <option>none</option>
              <option value={'1'}>Минск</option>
              <option value={'22'}>Питер</option>
              <option value={'15'}>Киев</option>
            </select>


          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};
