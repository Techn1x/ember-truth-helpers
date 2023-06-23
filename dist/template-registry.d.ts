import { default as and } from "./helpers/and.js";
import { default as eq } from "./helpers/eq.js";
import { default as gt } from "./helpers/gt.js";
import { default as gte } from "./helpers/gte.js";
import { default as isArray } from "./helpers/is-array.js";
import { default as isEmpty } from "./helpers/is-empty.js";
import { default as isEqual } from "./helpers/is-equal.js";
import { default as lt } from "./helpers/lt.js";
import { default as lte } from "./helpers/lte.js";
import { default as notEq } from "./helpers/not-eq.js";
import { default as not } from "./helpers/not.js";
import { default as or } from "./helpers/or.js";
import { default as xor } from "./helpers/xor.js";
interface EmberTruthRegistry {
    and: typeof and;
    eq: typeof eq;
    gt: typeof gt;
    gte: typeof gte;
    'is-array': typeof isArray;
    'is-empty': typeof isEmpty;
    'is-equal': typeof isEqual;
    lt: typeof lt;
    lte: typeof lte;
    'not-eq': typeof notEq;
    not: typeof not;
    or: typeof or;
    xor: typeof xor;
}
export { EmberTruthRegistry as default };
