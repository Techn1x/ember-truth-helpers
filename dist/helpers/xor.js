import { helper } from '@ember/component/helper';
import truthConvert from '../utils/truth-convert.js';

var xor = helper(params => {
  return truthConvert(params[0]) !== truthConvert(params[1]);
});

export { xor as default };
//# sourceMappingURL=xor.js.map
