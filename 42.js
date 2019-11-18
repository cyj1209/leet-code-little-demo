/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let nowHeight  = 0 ;
    let leftPosition = 0;
    height.forEach((value,index)=>{
        if(value >= height[leftPosition]){
            // 需要更换边界，跟换边界之前要先统计出之前的水量
            // 更换边界的时候一定是确定的情况
            res += count(leftPosition+1,index,nowHeight);
            nowHeight = 0 ;
            leftPosition = index; 
        }else if(value > nowHeight){
            nowHeight = value ;
            // 我现在应该计算吗
        }
    })

    function count (start,finish,h){
       let res = 0
       while(start < finish){
           res += h - height[start];
           start++ ;
       }return res ;

    }
};

let map;

map = [0,1,0,2,1,3,1,4,2,3,0,2,5,0];
