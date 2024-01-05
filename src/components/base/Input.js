"use client";
import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import PropType from "prop-types";
import { ErrorMessage, Field, useField, useFormikContext } from "formik";

Input.propTypes = {
  inputProps: PropType.object,
  labelProps: PropType.object,
  wrapperProps: PropType.object,
  id: PropType.string,
};
function Input({
  inputProps = {
    type: "text",
    value: "",
    name: null,
    required: false,
    className: null,
  },
  labelProps = {
    className: null,
    value: "",
  },
  wrapperProps = {
    className: null,
  },
  id,
}) {
  const variantsLabel = {
    active: {
      y: "-10rem",
      scale: 0.7,
      transition: {
        ease: "linear",
        duration: 0.2,
      },
    },
    inactive: {
      y: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.2,
      },
    },
  };
  const { errors, touched } = useFormikContext();
  const isFieldError = errors[inputProps.name] && touched[inputProps.name];
  const [field] = useField(inputProps.name);
  const [hideLabel, setHideLabel] = useState(false);
  const [focus, cycleFocus] = useCycle("inactive", "active");
  const [blur, cycleBlur] = useCycle("inactive", "active");
  const onTapStart = () => {
    focus === "inactive" && cycleFocus();
    setHideLabel(false);
    return blur === "inactive" && cycleBlur();
  };
  const onBlur = (e) => {
    if (field.value === "") {
      field.onBlur(e);
    }
    field.value === "" && cycleFocus();
    field.value && field.value.length > 0
      ? setHideLabel(true)
      : setHideLabel(false);
    cycleBlur();
  };

  useEffect(() => {
    if (focus === "active" && field.value.length === 0) {
      setHideLabel(false);
      focus === "inactive" && cycleFocus();
      blur === "inactive" && cycleBlur();
    }
  }, [field.value]);

  return (
    <motion.div
      {...wrapperProps}
      className={
        wrapperProps.className
          ? "container_vertical input__wrapper " + wrapperProps.className
          : "container_vertical input__wrapper"
      }
    >
      <Field
        name={inputProps.name}
        {...inputProps}
        className={
          "text input " +
          (hideLabel ? "input_filled " : "") +
          (isFieldError ? " input__error " : "") +
          (inputProps.className ? inputProps.className : "")
        }
        // onChange={onChange}
        onMouseDown={onTapStart}
        onBlur={onBlur}
        id={id}
      />
      <motion.span
        {...labelProps}
        className={
          "text input__label " +
          (hideLabel ? "input__label_hide " : "") +
          (labelProps.className ? labelProps.className : "")
        }
        animate={focus}
        variants={variantsLabel}
      >
        {labelProps.value}
      </motion.span>
      {isFieldError && (
        <ErrorMessage
          className="text text__error"
          component="div"
          name={inputProps.name}
        />
      )}
    </motion.div>
  );
}

export default Input;
