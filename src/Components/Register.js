import React, { Component } from "react";
import { connect } from "react-redux";
import { startSetUsers } from "../Actions/usersAction";
import {
  Box,
  Input,
  InputAdornment,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: false,
      statusC: false
    };
  }
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handlePasswordType = e => {
    this.setState({ status: e.target.checked });
  };

  handleMouseDownPasswordC = event => {
    event.preventDefault();
  };
  handleClickShowPasswordC = () => {
    this.setState({ showPasswordC: !this.state.showPasswordC });
  };
  handlePasswordTypeC = e => {
    this.setState({ statusC: e.target.checked });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    const redirect = () => {
      return this.props.history.push("/users/login");
    };
    if (this.state.password === this.state.confirmPassword) {
      this.props.dispatch(startSetUsers(formData, redirect));
    } else {
      alert("password mismatch");
    }
  };
  render() {
    return (
      <div align="center" style={{ height: "2000px" }}>
        <br />
        <br />
        <h2>Registration Form </h2>
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
              <InputLabel>Enter User Name</InputLabel>
              <Input
                style={{ width: "350px" }}
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel>Enter Email</InputLabel>
              <Input
                style={{ width: "350px" }}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment>
                    <AlternateEmailIcon />
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
                type="password"
                name="password"
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
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
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">
                Confrim Password
              </InputLabel>
              <Input
                style={{ width: "350px" }}
                type="password"
                name="confirmPassword"
                type={this.state.showPasswordC ? "text" : "password"}
                value={this.state.confirmPasswordC}
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
                      onClick={this.handleClickShowPasswordC}
                      onMouseDown={this.handleMouseDownPasswordC}
                    >
                      {this.state.showPasswordC ? (
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
              style={{
                backgroundColor: "#2C3539",
                border: "none",
                width: "71%",
                height: "1.5em",
                borderRadius: "4px",
                fontSize: "25px",
                color: "white"
              }}
              type="submit"
              value="Register"
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
    users: state.users
  };
};
export default connect(mapStateToProps)(Register);
