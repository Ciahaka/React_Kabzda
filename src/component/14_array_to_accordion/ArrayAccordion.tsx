import {
  Container,
  List, ListItem,
  Paper,
  Typography
} from '@mui/material';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';



export type PropsAccordionType = {
  titleValue: string
  expanded: boolean
  onChange: () => void
  clickValue: string
  items:string[]
}

export const ArrayAccordion = (props: PropsAccordionType) => {


  return (
    <div>
      <Container maxWidth={'xs'}>
        <Paper elevation={5} style={{padding: '10px', margin: '5px'}}>
          <Grid2 container spacing={2} direction={'column'} alignItems={'center'} style={{padding: '10px'}}>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}} color={'chocolate'}>
              {props.titleValue}
            </Typography>

              <AccordionTitle titleValue={props.clickValue}
                              onChange={props.onChange}
              />
              {!props.expanded && <AccordionBody items={props.items}/>}

          </Grid2>
        </Paper>
      </Container>
    </div>
  );
};

export type PropsAccordionTitle = {
  titleValue: string
  onChange: () => void


}

export const AccordionTitle = (props: PropsAccordionTitle) => {
  return (

      <Typography variant="h6" component="div" color={'darkkhaki'}  onClick={props.onChange}> {props.titleValue} </Typography>

  );
}

export type PropsBodyType = {
  items:string[]
}
export const AccordionBody = (props:PropsBodyType) => {
  return (
      <List>
        {props.items.map((i,index)=><ListItem key={index}>{i}</ListItem>)}
      </List>
  );
}
