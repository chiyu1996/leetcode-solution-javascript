// 验证给定的字符串是否可以解释为十进制数字。
//
// 例如:
//
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3 " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false
//
// 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：
//
//
// 数字 0-9
// 指数 - "e"
// 正/负号 - "+"/"-"
// 小数点 - "."
//
//
// 当然，在输入中，这些字符的上下文也很重要。
//
// 更新于 2015-02-10:
// C++函数的形式已经更新了。如果你仍然看见你的函数接收 const char * 类型的参数，请点击重载按钮重置你的代码。
// Related Topics 数学 字符串
// 👍 168 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
const [state_initial, state_int_sign, state_integer, state_point, state_point_without_int, state_fraction, state_exp, state_exp_sign, state_exp_number, state_end] = new Array(10).fill(undefined).map((value, index) => index);
const [char_number, char_exp, char_point, char_sign, char_illegal] = new Array(5).fill(undefined).map((value, index) => index);
function getCharType(char) {
  if (char >= '0' && char <= '9') {
    return char_number;
  } else if (char === 'e' || char === 'E') {
    return char_exp;
  } else if (char === '.') {
    return char_point;
  } else if (char === '+' || char === '-') {
    return char_sign;
  } else {
    return char_illegal;
  }
}
const transfer = {
  [state_initial]: {
    [char_number]: state_integer,
    [char_point]: state_point_without_int,
    [char_sign]: state_int_sign
  },
  [state_int_sign]: {
    [char_number]: state_integer,
    [char_point]: state_point_without_int
  },
  [state_integer]: {
    [char_number]: state_integer,
    [char_exp]: state_exp,
    [char_point]: state_point
  },
  [state_point]: {
    [char_number]: state_fraction,
    [char_exp]: state_exp
  },
  [state_point_without_int]: {
    [char_number]: state_fraction
  },
  [state_fraction]: {
    [char_number]: state_fraction,
    [char_exp]: state_exp
  },
  [state_exp]: {
    [char_number]: state_exp_number,
    [char_sign]: state_exp_sign
  },
  [state_exp_sign]: {
    [char_number]: state_exp_number
  },
  [state_exp_number]: {
    [char_number]: state_exp_number
  }
}
var isNumber = function(s) {
  const len = s.length;
  let state = state_initial;
  for (let i = 0; i < len; i++) {
    const type = getCharType(s[i]);
    if (transfer[state] === undefined || transfer[state][type] === undefined) {
      return false;
    } else {
      state = transfer[state][type];
    }
  }
  return [state_integer, state_point, state_fraction, state_exp_number, state_end].includes(state);
};
// leetcode submit region end(Prohibit modification and deletion)
