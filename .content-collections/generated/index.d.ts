import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Log = GetTypeByName<typeof configuration, "logs">;
export declare const allLogs: Array<Log>;

export {};
