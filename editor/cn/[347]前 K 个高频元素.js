//给定一个非空的整数数组，返回其中出现频率前 k 高的元素。 
//
// 
//
// 示例 1: 
//
// 输入: nums = [1,1,1,2,2,3], k = 2
//输出: [1,2]
// 
//
// 示例 2: 
//
// 输入: nums = [1], k = 1
//输出: [1] 
//
// 
//
// 提示： 
//
// 
// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。 
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。 
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。 
// 你可以按任意顺序返回答案。 
// 
// Related Topics 堆 哈希表 
// 👍 536 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const freq = {};       // 存储数字出现的频次
    const uniqueNums = []; // 不重复的数字
    for (const num of nums) {
        if (freq[num]) {     // 出现过，频次+1
            freq[num]++;
        } else {             // 没出现过，频次为1
            freq[num] = 1;
            uniqueNums.push(num);
        }
    }

    const heap = [];       // 代表heap的数组

    const swap = (i, j) => { // 交换heap数组的元素
        const t = heap[i];
        heap[i] = heap[j];
        heap[j] = t;
    };

    const bubbleUp = (index) => {
        while (index > 0) {
            const parent = (index - 1) >>> 1;  // 找到父节点在heap数组中的位置
            if (freq[heap[parent]] > freq[heap[index]]) { // 如果父节点数字对应的频率要高于插入的数字的频次
                swap(parent, index); // 交换它们的位置
                index = parent;      // index更新
            } else {               // 满足最小堆的特点，break
                break;
            }
        }
    };

    const bubbleDown = (index) => { // 做“下沉”
        while (2 * index + 1 < heap.length) { //
            let child = 2 * index + 1;
            if (child + 1 < heap.length && freq[heap[child + 1]] < freq[heap[child]]) { // 左右孩子中取较小的去比较
                child++;
            }
            if (freq[heap[index]] > freq[heap[child]]) {
                swap(index, child); // 交换
                index = child;      // 更新 index
            } else { // 如果满足最小堆的属性，break
                break;
            }
        }
    };

    for (const num of uniqueNums) {
        if (heap.length < k) { // heap数组的长度还不够k
            heap.push(num);      // 推入heap数组
            bubbleUp(heap.length - 1); // 执行上浮，频率小的上浮上去
        } else if (freq[num] > freq[heap[0]]) { // 如果当前数字的频次比堆顶数字的频率要大
            heap[0] = num; // 堆顶的数字要更换
            bubbleDown(0); // 然后要做下沉，下沉到合适的位置
        }
    }
    return heap.sort((a, b) => { // 最终它前面是频次少的，最后返回是要逆序回来
        return freq[b] - freq[a];
    });
};
//leetcode submit region end(Prohibit modification and deletion)
