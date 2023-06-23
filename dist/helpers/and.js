import { helper } from '@ember/component/helper';
import truthConvert from '../utils/truth-convert.js';

var and = helper(params => {
  for (let i = 0, len = params.length; i < len; i++) {
    if (truthConvert(params[i]) === false) {
      return params[i];
    }
  }
  return params[params.length - 1];
});

export { and as default };
//# sourceMappingURL=and.js.map
