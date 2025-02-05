//опредление для возможности импорта svg
declare module '*.svg' {
  import {AnyType} from "@krinopotam/service-types";
  const content: AnyType;
  export default content;
}
declare module "*.png";