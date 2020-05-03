export function getselectionSortAnimations(array){
    let animations=[];
    let minIdx=0;
    for(let i=0;i<array.length-1;i++){
        minIdx=i;
        for(let j=i+1;j<array.length;j++){
            animations.push({type:'changeColor',value:j,color:'SECONDARY'});
            if(array[j]<array[minIdx]){
                minIdx=j;
                //animations.push({type:'minIdx1',value:minIdx});
            }
            animations.push({type:'changeColor',value:j,color:'PRIMARY'});
        }
        animations.push({type:'changeColor',value:minIdx,color:'RED'});
        animations.push({type:'changeColor',value:minIdx,color:'PRIMARY'});
        animations.push({type:'swap',index:i,value:array[minIdx]});
        animations.push({type:'swap',index:minIdx,value:array[i]});
        let temp=array[minIdx];
        array[minIdx]=array[i];
        array[i]=temp;

        animations.push({type:'changeColor',value:i,color:'GREEN'});
    }
    animations.push({type:'changeColor',value:array.length-1,color:'GREEN'});

    for(let i=0;i<array.length;i++){
        animations.push({type:'changeColor',value:i,color:'PRIMARY'});
    }
    return animations;
}