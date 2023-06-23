import { helper } from '@ember/component/helper';
import { isArray as isArray$1 } from '@ember/array';

var isArray = helper(params => {
  return params.every(isArray$1);
});

export { isArray as default };
//# sourceMappingURL=is-array.js.map
