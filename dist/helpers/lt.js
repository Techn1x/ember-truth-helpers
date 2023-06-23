import { helper } from '@ember/component/helper';

var lt = helper(([left, right], options) => {
  if (options.forceNumber) {
    if (typeof left !== 'number') {
      left = Number(left);
    }
    if (typeof right !== 'number') {
      right = Number(right);
    }
  }
  return left < right;
});

export { lt as default };
//# sourceMappingURL=lt.js.map
