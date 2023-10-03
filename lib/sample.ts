import { isAnyPropertyTrue } from "./utility/ArrayUtils/index";
import { consola } from "consola";

const flag = isAnyPropertyTrue([1, 3, 4, 5, 66], (value) => value % 2 === 0);
consola.info(flag);

const flag2 = isAnyPropertyTrue(
  ["hell", "hello", "buffalo", "yellow", "zoo"],
  (value) => value.endsWith("o"),
);
consola.info(flag2);
