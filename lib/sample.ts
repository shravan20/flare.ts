import { isAnyPropertyTrue } from "./utility/ArrayUtils/index";

const flag = isAnyPropertyTrue([1, 3, 4, 5, 66], (value) => value % 2 === 0);
console.log(flag);
