import { helper } from '@ember/component/helper';
import truthConvert from '../utils/truth-convert.js';

var or = helper(params => {
  for (let i = 0, len = params.length; i < len; i++) {
    if (truthConvert(params[i]) === true) {
      return params[i];
    }
  }
  return params[params.length - 1];
});

export { or as default };
//# sourceMappingURL=or.js.map
