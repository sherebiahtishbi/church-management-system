import { Box,Stepper,Step,StepLabel } from '@mui/material';

export default function GraceStepper(props) {
    let localsteps = props.steps ? props.steps : ['Steps are not defined']
    return (
    <Box sx={{ width: '100%', px:2}}>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {localsteps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
