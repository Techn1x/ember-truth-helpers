import { helper } from '@ember/component/helper';
import truthConvert from '../utils/truth-convert.js';

var not = helper(params => {
  return params.every(param => !truthConvert(param));
});

export { not as default };
//# sourceMappingURL=not.js.map
