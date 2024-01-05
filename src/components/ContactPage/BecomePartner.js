"use client";
import Image from "next/image";
import image from "@public/images/contactPage/becomePartner.webp";
import React from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PropType from "prop-types";
import api from "@/services";
import { usePreloaderStore } from "@/store/preloader";

function BecomePartner({ info = {} }) {
  const toggle = usePreloaderStore((state) => state.toggle);
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const childrenVariants = {
    hidden: {
      transform: "translateY(105%)",
      y: 50,
    },
    visible: {
      transform: "translateY(0)",
      y: 0,
      transition: {
        ease: "circIn",
        duration: 0.7,
      },
    },
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Це поле обов'язкове"),
    phone: Yup.string().required("Без телефону ми не можемо зв'язатися з вами"),
  });
  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      toggle();
      let data = await api().form.submitForm({ ...values, form: "partner" });
      resetForm({ values: { name: "", phone: "" } });
    } catch (e) {
      console.log(e);
    } finally {
      toggle();
    }
  };
  return (
    <section className="container_vertical container_outer become-partner">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="container_horizontal container become-partner__container"
      >
        <div className="container_horizontal become-partner__content">
          <motion.div variants={childrenVariants}>
            <Image
              className="become-partner__img"
              src={info?.photo}
              alt={"photo"}
              loading="lazy"
              width={501}
              height={520}
            />
          </motion.div>
        </div>
        <div className="container_horizontal become-partner__content">
          <div className="container_vertical become-partner__form">
            <div className="container_animated container_animated_subtitle">
              <motion.h3 variants={childrenVariants} className="subtitle">
                {info?.title}
              </motion.h3>
            </div>
            <div className="container_animated">
              <motion.p variants={childrenVariants} className="text form__text">
                {info?.desc}
              </motion.p>
            </div>
            <Formik
              initialValues={{
                name: "",
                phone: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {({ values }) => (
                <Form className="container_vertical form">
                  <div className="container_animated">
                    <motion.div
                      className="form_animate"
                      variants={childrenVariants}
                    >
                      <Input
                        inputProps={{
                          type: "text",
                          name: "name",
                        }}
                        labelProps={{ value: "Ім’я" }}
                        wrapperProps={{ className: "form__input" }}
                        id={"name"}
                      />
                    </motion.div>
                  </div>
                  <div className="container_animated">
                    <motion.div
                      className="form_animate"
                      variants={childrenVariants}
                    >
                      <Input
                        inputProps={{
                          type: "text",
                          name: "phone",
                        }}
                        labelProps={{ value: "Телефон" }}
                        wrapperProps={{ className: "form__input" }}
                      />
                    </motion.div>
                  </div>
                  <div className="container_animated">
                    <motion.div variants={childrenVariants}>
                      <Button
                        btnProps={{
                          className: "button button_yellow",
                          type: "submit",
                          disabled: values.name === "" || values.phone === "",
                        }}
                        textProps={{ value: info?.btn?.title }}
                      />
                    </motion.div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

BecomePartner.propTypes = {
  info: PropType.object,
};
export default BecomePartner;
