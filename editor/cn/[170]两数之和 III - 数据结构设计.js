//设计并实现一个 TwoSum 的类，使该类需要支持 add 和 find 的操作。 
//
// add 操作 - 对内部数据结构增加一个数。 
//find 操作 - 寻找内部数据结构中是否存在一对整数，使得两数之和与给定的数相等。 
//
// 示例 1: 
//
// add(1); add(3); add(5);
//find(4) -> true
//find(7) -> false
// 
//
// 示例 2: 
//
// add(3); add(1); add(2);
//find(3) -> true
//find(6) -> false 
// Related Topics 设计 哈希表 
// 👍 30 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.map = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(this.map.has(number)){
        this.map.set(number,this.map.get(number)+1);
    }else{
        this.map.set(number,1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for(let v of this.map.keys()){
        let other = value - v;
        if(other === v){
            if(this.map.get(other)>=2){
                return true;
            }
        }else {
            if(this.map.has(other)){
                return true;
            }
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
//leetcode submit region end(Prohibit modification and deletion)
