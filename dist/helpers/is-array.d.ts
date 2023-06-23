import EmberArray from '@ember/array';
interface IsArraySignature {
    Args: {
        Positional: unknown[] | EmberArray<unknown>;
    };
    Return: boolean;
}
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: EmberArray<unknown> | unknown[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: boolean;
}>;
export { _default as default, IsArraySignature };
