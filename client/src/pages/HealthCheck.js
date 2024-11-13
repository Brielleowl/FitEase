import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import Logo from "../components/Logo";

function HealthCheck() {
  const navigate = useNavigate();
  const [conditions, setConditions] = useState({
    highBloodPressure: false,
    heartProblems: false,
    seizureMedication: false,
    brainBleeding: false,
    abnormalBloodVessel: false,
    intracranialPressure: false,
    epilepsy: false,
    diabetes: false,
    cancer: false,
    pregnantOrBreastfeeding: false,
    none: false,
  });

  const [hasConditions, setHasConditions] = useState(false);

  useEffect(() => {
    // Check if any condition except 'none' is selected
    const selectedConditions = Object.entries(conditions)
      .filter(([key]) => key !== 'none')
      .some(([_, value]) => value);
    
    setHasConditions(selectedConditions);

    // If any condition is selected, uncheck 'none'
    if (selectedConditions && conditions.none) {
      setConditions(prev => ({ ...prev, none: false }));
    }
  }, [conditions]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    
    if (name === 'none' && checked) {
      // If 'none' is checked, uncheck all other conditions
      setConditions(Object.keys(conditions).reduce((acc, key) => ({
        ...acc,
        [key]: key === 'none' ? true : false
      }), {}));
    } else {
      setConditions({
        ...conditions,
        [name]: checked,
      });
    }
  };

  const handleSubmit = () => {
    if (!hasConditions) {
      navigate("/user-info");
    }
  };

  return (
    <>
      <Logo />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Health Screening Questionnaire
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please indicate if you have any of the following conditions:
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.highBloodPressure}
                  onChange={handleChange}
                  name="highBloodPressure"
                />
              }
              label="Uncontrolled high blood pressure despite treatment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.heartProblems}
                  onChange={handleChange}
                  name="heartProblems"
                />
              }
              label="Severe heart problems, including heart failure"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.seizureMedication}
                  onChange={handleChange}
                  name="seizureMedication"
                />
              }
              label="I am taking seizure medication(s)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.brainBleeding}
                  onChange={handleChange}
                  name="brainBleeding"
                />
              }
              label="Cerebral hemorrhage/brain bleeding"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.abnormalBloodVessel}
                  onChange={handleChange}
                  name="abnormalBloodVessel"
                />
              }
              label="Aneurysm or abnormal blood vessel malformation"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.intracranialPressure}
                  onChange={handleChange}
                  name="intracranialPressure"
                />
              }
              label="Elevated intracranial pressure"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.epilepsy}
                  onChange={handleChange}
                  name="epilepsy"
                />
              }
              label="Epilepsy or seizure disorder"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.diabetes}
                  onChange={handleChange}
                  name="diabetes"
                />
              }
              label="Diabetes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.cancer}
                  onChange={handleChange}
                  name="cancer"
                />
              }
              label="Cancer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.pregnantOrBreastfeeding}
                  onChange={handleChange}
                  name="pregnantOrBreastfeeding"
                />
              }
              label="Pregnant or breastfeeding"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions.none}
                  onChange={handleChange}
                  name="none"
                />
              }
              label="None of the above"
            />
          </FormGroup>

          {hasConditions && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              If you have any pre-existing health conditions, we recommend not using this app and consulting a healthcare professional for personalized support
            </Alert>
          )}

          <Box sx={{ mt: 3 }}>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
              disabled={hasConditions}
              sx={{
                bgcolor: hasConditions ? 'grey.400' : '#ff725e',
                '&:hover': {
                  bgcolor: hasConditions ? 'grey.500' : '#ff8d7f',
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default HealthCheck;
