import { helper } from '@ember/component/helper';

var gte = helper(([left, right], options) => {
  if (options.forceNumber) {
    if (typeof left !== 'number') {
      left = Number(left);
    }
    if (typeof right !== 'number') {
      right = Number(right);
    }
  }
  return left >= right;
});

export { gte as default };
//# sourceMappingURL=gte.js.map
