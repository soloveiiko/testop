"use client";
import Button from "@components/base/Button";
import icon from "@public/images/catalogPage/category/forProduction.webp";
import "./testPage.scss";
import { BecomePartnerModal } from "@/components";
import { useState } from "react";
import { sassTrue } from "sass";

export default function TestPage() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="test-page">
      <BecomePartnerModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <div className="button__container">
        <Button
          btnProps={{ className: "button_white button_icon-left" }}
          textProps={{ value: "Для виробництва" }}
          imageProps={{
            src: icon,
            alt: "Logo",
            width: 38,
            height: 38,
          }}
        />
      </div>
      <div className="button__container">
        <Button
          btnProps={{ className: "button_yellow" }}
          textProps={{ value: "Замовити" }}
          onClick={() => setModalVisible(sassTrue)}
        />
        <h5 className="text_large_bold">Click to open modal</h5>
      </div>
      <div className="button__container">
        <Button
          btnProps={{
            className: "button_dropdown button_icon-right",
          }}
          textProps={{ value: "Менше" }}
          iconProps={{
            name: "arrow",
            alt: "Logo",
            width: 18,
            height: 18,
          }}
        />
      </div>
      <div className="circle-buttons">
        <div className="button__container">
          <Button
            btnProps={{
              className: "button_white button_circle-small button_close",
            }}
            iconProps={{
              name: "cross",
              alt: "Close",
              width: 20,
              height: 20,
            }}
          />
        </div>
        <div className="button__container">
          <Button
            btnProps={{
              className: "button_white button_circle-small button_close_border",
            }}
            iconProps={{
              name: "cross",
              alt: "Close",
              width: 16,
              height: 16,
            }}
          />
        </div>
        <div className="button__container">
          <Button
            btnProps={{
              className: "button_white button_circle-small button_down",
            }}
            iconProps={{
              name: "arrow",
              alt: "Logo",
              width: 20,
              height: 20,
            }}
          />
        </div>
        <div className="button__container">
          <Button
            btnProps={{
              className: "button_yellow button_circle-large button_next",
            }}
            iconProps={{
              name: "arrow",
              alt: "Logo",
              width: 24,
              height: 24,
            }}
          />
        </div>
        <div className="button__container">
          <Button
            btnProps={{
              className: "button_yellow button_circle-large button_prev",
            }}
            iconProps={{
              name: "arrow",
              alt: "Logo",
              width: 24,
              height: 24,
            }}
          />
        </div>
      </div>
      {/* <div className="input__container">
        <Input
          inputProps={{
            type: "text",
            defaultValue: "",
            name: null,
            required: true,
          }}
          labelProps={{ value: "First name" }}
        />
      </div>
      <div className="input__container">
        <input className="form-input" type="text" placeholder="okfo" />
      </div>
      <div className="input__container">
        <input className="search-input" type="text" placeholder="okfo" />
      </div> */}
      <div className="text__container">
        {/* 650rem*/}
        <h2 className="number_large">24</h2>
        {/*400rem*/}
        <h3 className="number">01</h3>
        {/*140rem*/}
        <h4 className="number_small">400</h4>
        {/*200rem*/}
        <h4 className="headline">Каталог</h4>
        {/*90rem*/}
        <h5 className="title">М’ясо та риба для бізнесу</h5>
        {/*60rem*/}
        <h5 className="subtitle">Свиняча лопатка без кістки</h5>
        {/*32rem Bold*/}
        <h6 className="text_large_bold">Риба</h6>
        {/*32rem Medium*/}
        <p className="text_large">
          Співпрацюємо лише з стабільними та відповідальними постачальниками.
          Кожен хто розділяє наші цінності та піклується про кінцевого споживача
          стане для нас надійним та безцінним партнером.
        </p>
        {/*16rem*/}
        <p className="text">
          ОПОС – міжнародна компанія, яка надійним партнером в якісних протеїнах
          та продуктових рішеннях
        </p>
        {/*12rem*/}
        <p className="text_small">
          Без телефону ми не можемо зв&apos;язатися з вами
        </p>
      </div>
    </div>
  );
}
