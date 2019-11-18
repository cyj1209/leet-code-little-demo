var findMedianSortedArrays = function(first, second) {
//   //  折半递归
//   let m = first.length;
//   let n = second.length;
//   let [firstLeft,firstRight] = sliceArray(first);
//   let [secondLeft,secondRight] = sliceArray(second);

  // 如果m+n 是偶数 是两个值的和的一半

   
   all.sort();



};

function sliceArray(a){
    let index = Math.ceil(a.length/2);
    return [a.slice(0,index),a.slice(index,a.length)]
}

//  o(lg(m+n))
// 折半 递归

let a1 = [1, 2];
let a2 = [3, 4];
console.log(findMedianSortedArrays(a1, a2));


var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1=nums1.sort(function(a,b){ return b-a});//排序
    if(nums1.length%2==0){
        return (nums1[nums1.length/2]+nums1[nums1.length/2-1])/2 //中位数
    }
    else{return nums1[(nums1.length-1)/2]}   
}
 


var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    if ((len1+len2) % 2 === 1) {
        return getKth(nums1, nums2, parseInt((len1+len2)/2) + 1);
    }
    return (getKth(nums1, nums2, parseInt((len1+len2)/2)) + getKth(nums1, nums2, parseInt((len1+len2)/2) + 1))*0.5
};

// 最优解，但是不知道弄不懂

var getKth = function(nums1, nums2, k) {
    let len1 = nums1.length, len2 = nums2.length;
    if (len1 > len2) {
        return getKth(nums2, nums1, k);
    }
    if (len1 == 0) {
        return nums2[k - 1];
    }
    if (k == 1) {
        return Math.min(nums1[0], nums2[0]);
    }
    let pos1 = Math.min(parseInt(k/2), len1), pos2 = k - pos1;
    if (nums1[pos1- 1] < nums2[pos2 - 1]) {
        return getKth(nums1.slice(pos1), nums2, pos2);
    }
    else {
        return getKth(nums1, nums2.slice(pos2), pos1);
    }
}



