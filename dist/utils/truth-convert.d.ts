import EmberArray from '@ember/array';
interface TruthyObject {
    isTruthy: boolean;
}
type MaybeTruth = TruthyObject | EmberArray<unknown> | unknown;
declare function truthConvert(result: MaybeTruth): boolean;
export { MaybeTruth, truthConvert as default };
