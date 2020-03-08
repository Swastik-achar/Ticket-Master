import React, { Component } from "react";
import { connect } from "react-redux";
import { startValidation } from "../Actions/usersAction";
import { Box, TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InputAdornment from "@material-ui/core/InputAdornment";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      showPassword: false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    const redirect = () => {
      return this.props.history.push("/");    
    };
    this.props.dispatch(startValidation(formData, redirect));
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handlePasswordType = e => {
    this.setState({ status: e.target.checked });
  };
  render() {
    return (
      <div align="center" style={{ marginTop: "100px",height:"2000px" }}>
        <h2 style={{ color: "black" }}>Login Page</h2>
        <Box
          border={0}
          marginLeft="0px"
          width="500px"
          color="text.primary"
          style={{ backgroundColor: "#eefbfb" }}
        >
          <br />
          <br />
          <form onSubmit={this.handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <Input
                label="Enter Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                style={{ width: "350px" }}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Input
                style={{ width: "350px" }}
                label="Password"
                id="standard-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeyIcon fontSize="small" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <input
              type="submit"
              value="Login"
              style={{
                backgroundColor: "#008CBA",
                border: "none",
                width: "40%",
                height: "1.5em",
                borderRadius: "4px",
                fontSize: "20px",
                color: "white"
              }}
            />
            <br />
            <br />
          </form>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Login);
