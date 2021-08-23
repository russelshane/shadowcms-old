import memoize from "micro-memoize";
import pino from "pino";
import falsey from "falsey";

export type ShadowLogger = pino.Logger;

export default memoize(
  (name = "shadow") =>
    pino({
      name,
      enabled: falsey(process.env.DISABLE_LOGGING),
      prettyPrint: {
        ignore: "pid, hostname",
        translateTime: "HH:MM:ss",
      },
    }) as ShadowLogger,
);
