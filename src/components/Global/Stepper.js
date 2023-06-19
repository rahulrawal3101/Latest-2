import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import '../Home/Home.css'

const steps = [
  'Company Type',
  'Aadhar',
  'Pan Card',
  "Bank Details"
];

export default function StepperV({stepsCopm}) {
  return (
    <>
    {/* vertical stepper */}
        <Box id="verticalStepper">
      <Stepper  activeStep={stepsCopm}  orientation='vertical'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
               <Typography fontSize="12px">
                {label}
                </Typography> 
                </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {/* horizontal stepper */}

        <Box id="horizontalStepper">
      <Stepper  activeStep={stepsCopm}  orientation='horizontal'>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
               <Typography fontSize="12px">
                {label}
                </Typography> 
                </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </>

  );
}