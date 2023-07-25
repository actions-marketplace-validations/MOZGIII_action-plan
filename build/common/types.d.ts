export type JSONValue = string | number | boolean | JSONObject | JSONArray;
export interface JSONObject {
    [x: string]: JSONValue;
}
export interface JSONArray extends Array<JSONValue> {
}
export type Matrix = Record<string, JSONValue>;
//# sourceMappingURL=types.d.ts.map