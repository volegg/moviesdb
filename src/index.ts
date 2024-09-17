import { loader } from "./loader/loader";

loader();

// eslint-disable-next-line no-console
console.log("%c" + ENV.VERSION.banner, "background: #1d1d1d; color: #dfdfdf; font-weight: bold;");
