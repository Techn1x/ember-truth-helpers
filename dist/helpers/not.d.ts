import { MaybeTruth } from "../utils/truth-convert.js";
interface NotSignature {
    Args: {
        Positional: MaybeTruth[];
    };
    Return: boolean;
}
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: unknown[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: boolean;
}>;
export { _default as default, NotSignature };
