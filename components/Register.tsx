import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";

const mango_variety = [
  {
    value: "Alphonso(Hapus)",
    label: "Alphonso(Hapus)",
  },

  {
    value: "Devgad(Hapus)",
    label: "Devgad(Hapus)",
  },

  {
    value: "Totapuri",
    label: "Totapuri",
  },
  {
    value: "Kesar",
    label: "Kesar",
  },
  {
    value: "Rajapuri",
    label: "Rajapuri",
  },
  {
    value: "Himsagar",
    label: "Himsagar",
  },
];

const mango_size = [
  {
    value: "Small(150-180g)",
    label: "Small(150-180g) ",
  },
  {
    value: "Medium(180-250g)",
    label: "Medium(180-250g)",
  },
  {
    value: "Large(250-350g)",
    label: "Large(250-350g)",
  },
];

const mango_quantity = [
  {
    value: "2 Dozen",
    label: "2 Dozen",
  },
  {
    value: "4 Dozen",
    label: "4 Dozen",
  },
  {
    value: "5 Dozen",
    label: "5 Dozen",
  },
];
type Props = {};

const Register = (props: Props) => {
  return (
    <Box className="container">
      <div className="login-container">
        <h2>ApplicationForm</h2>
        <div className="form-group">
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        </div>
        <div className="form-group">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField id="outlined-basic" label="Phone No" variant="outlined" />
        </div>
        <div className="form-group">
          <TextField
            id="outlined-basic"
            label="Full Address"
            variant="outlined"
          />
        </div>

        <div className="form-group">
          <TextField
            id="outlined-select-currency"
            select
            label="Mango Variety"
            defaultValue="Ratnagiri"
            helperText="Please select your mango variety"
          >
            {mango_variety.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="form-group">
          <TextField
            id="outlined-select-currency"
            select
            label="Mango Size"
            defaultValue="Ratnagiri"
            helperText="Please select your mango size"
          >
            {mango_size.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="form-group">
          <TextField
            id="outlined-select-currency"
            select
            label="Mango Quantity"
            defaultValue="Ratnagiri"
            helperText="Please select your mango quantity"
          >
            {mango_quantity.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="submit-btn">
        <Button variant="contained" color="success">
       Submit
      </Button>
        </div>
      </div>
    </Box>
  );
};

export default Register;
