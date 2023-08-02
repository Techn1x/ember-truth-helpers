import { helper } from '@ember/component/helper';
import truthConvert from '../utils/truth-convert.ts';
import type { MaybeTruth } from '../utils/truth-convert.ts';

export interface OrSignature {
  Args: {
    Positional: MaybeTruth[];
  };
  Return: boolean;
}

export default helper<OrSignature>((params) => {
  for (let i = 0, len = params.length; i < len; i++) {
    if (truthConvert(params[i]) === true) {
      return params[i] as boolean;
    }
  }
  return params[params.length - 1] as boolean;
});
