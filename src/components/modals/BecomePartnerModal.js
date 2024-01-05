"use client";
import React from "react";
import ModalLayout from "./ModalLayout";
import Input from "../base/Input";
import Button from "../base/Button";
import { useBecamePartnerModals } from "@/store/modals";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

function BecomePartnerModal() {
  const t = useTranslations("Buttons");
  const t_Form = useTranslations("Form");

  const isVisible = useBecamePartnerModals((state) => state.isVisible);
  const title = useBecamePartnerModals((state) => state.title);
  const toggle = useBecamePartnerModals((state) => state.toggle);
  const item = {
    name: title,
    text: t_Form("text"),
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const onSubmitHandler = (values, { resetForm }) => {
    resetForm({ values: { name: "", phone: "" } });
  };
  return (
    <ModalLayout
      text={item.text}
      name={item.name}
      isVisible={isVisible}
      setModalVisible={() => toggle(title)}
    >
      {/* {title} */}

      <Formik
        initialValues={{ name: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {() => (
          <Form className="container_vertical modal__form">
            <Input
              inputProps={{
                type: "text",
                name: "name",
                className: "form__input",
              }}
              labelProps={{ value: t_Form("name") }}
              wrapperProps={{ className: "form__input" }}
            />
            <Input
              inputProps={{
                type: "text",
                name: "phone",
              }}
              labelProps={{ value: t_Form("phone") }}
              wrapperProps={{ className: "form__input" }}
            />
            <Button
              type="submit"
              btnProps={{ className: "button_yellow", type: "submit" }}
              textProps={{ value: t("wait_for_call") }}
            />
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
}

export default BecomePartnerModal;
