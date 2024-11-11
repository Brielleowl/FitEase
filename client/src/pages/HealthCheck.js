import React, { useState } from "react";
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

  const handleChange = (event) => {
    setConditions({
      ...conditions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    // Here you can add logic to handle health conditions
    navigate("/user-info");
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

          <Box sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit}>
              Continue
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default HealthCheck;
