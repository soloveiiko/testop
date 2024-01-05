"use client";
import { IconSvg } from "@/components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useBecamePartnerModals } from "@/store/modals";
import { useTranslations } from "next-intl";

export default function Partnership() {
  const t = useTranslations("Partnership");

const toggleBecomePartnerModal = useBecamePartnerModals(
    (state) => state.toggle
  );
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      /* transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }, */
    },
  };
  const childrenVariants = {
    hidden: {
      transform: "translate(-50%, 115%)",
      y: 50,
    },
    visible: {
      transform: "translate(-50%, 0)",
      y: 0,
      transition: {
        ease: "circIn",
        duration: 1.5,
      },
    },
  };

  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="partnership"
    >
      <div className="container_vertical partnership__container">
        <button
          className="title partnership__title"
          onClick={() => toggleBecomePartnerModal(t("become_partner"))}
        >
          {t("become_partner")}
        </button>
        <motion.div variants={childrenVariants} className="partnership__bg">
          <IconSvg name="circle" alt="Circle" width="1112" height="1112" />
        </motion.div>
      </div>
    </motion.section>
  );
}
