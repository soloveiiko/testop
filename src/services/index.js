import menu from "./menu";
import variables from "./variables";
import page from "./page";
import form from "./form";

export default () => {
  return {
    menu: menu(),
    variables: variables(),
    page: page(),
    form: form(),
  };
};
