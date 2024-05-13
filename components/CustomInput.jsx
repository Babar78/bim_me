import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomInput = ({
  id,
  label,
  inputFieldType,
  type,
  placeholder,
  variant,
  icon,
  value,
  multiline,
  rows,
  endormentPosition,
  backgroundColor,
  onUpdate,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

  // State management of Background Color of input fields according to screen width

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Access window object only in the browser environment
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        // Remove event listener only in the browser environment
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {/* Password Field */}
      {inputFieldType === "password" && (
        <FormControl sx={{ width: "100%" }} variant={variant}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <FilledInput
            id={id}
            value={value}
            onChange={(e) => onUpdate(e.target.value)}
            type={showPassword ? "text" : "password"}
            style={{
              // apply background property if screen width is less than 1024px
              backgroundColor: windowWidth < 1024 ? backgroundColor : "",
            }}
            required={required}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}

      {/* Text Field */}
      {inputFieldType === "text-field" && (
        <FormControl sx={{ width: "100%" }} variant={variant}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <FilledInput
            id={id}
            value={value}
            onChange={(e) => onUpdate(e.target.value)}
            type={type}
            style={{
              // apply background property if screen width is less than 1024px
              backgroundColor: windowWidth < 1024 ? backgroundColor : undefined,
            }}
            required={required}
          />
        </FormControl>
      )}

      {/* Text Area Field */}
      {inputFieldType === "text-area" && (
        <TextField
          id={id}
          label={label}
          value={value}
          multiline={multiline}
          rows={rows}
          onChange={(e) => onUpdate(e.target.value)}
          required={required}
          variant={variant}
          fullWidth
        />
      )}
    </>
  );
};

export default CustomInput;
