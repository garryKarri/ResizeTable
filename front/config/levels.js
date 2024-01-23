// import {
//   MODAL_TYPE_FILTER_COUNTOBJECT,
//   MODAL_TYPE_FILTER_DEVOBJECT,
//   MODAL_TYPE_FILTER_LAYER,
// } from "./modal";

export const LEVEL_LAYER = "layer";
export const LEVEL_NGDO = "ngdo";
export const LEVEL_TPP = "tpp";
export const LEVEL_DEPOSIT = "deposit";
export const LEVEL_LICENSE = "license";
export const LEVEL_PRODOBJ = "prodobj";
export const LEVEL_CNTOBJ = "cntobj";

export const levelTypes = {
  [LEVEL_CNTOBJ]: {
    title: "Подсчётные объекты",
    optionName: "Подсчётный объект",
    // filterModal: MODAL_TYPE_FILTER_COUNTOBJECT,
  },
  [LEVEL_PRODOBJ]: {
    title: "Объекты разработки",
    optionName: "Объект разработки",
    // filterModal: MODAL_TYPE_FILTER_DEVOBJECT,
  },
  [LEVEL_LAYER]: {
    title: "Пласты (залежи)",
    optionName: "Пласт (залежь)",
    // filterModal: MODAL_TYPE_FILTER_LAYER,
  },
};
