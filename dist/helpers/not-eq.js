import { helper } from '@ember/component/helper';

var notEq = helper(params => {
  return params[0] !== params[1];
});

export { notEq as default };
//# sourceMappingURL=not-eq.js.map
