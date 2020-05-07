export function getInsertionSortAnimation(array){
    const n=array.length;
    let animations=[];
    let key,j;
    for(let i=1;i<n;i++){
        key=array[i];
        j=i-1;
        animations.push({type:'changeColor',idx:i,color:'GREEN'});
        while(j>=0 && array[j]>key){
            array[j+1]=array[j];
            animations.push({type:'changeColor',idx:j,color:'SECONDARY'});
            animations.push({type:'changeColor',idx:j,color:'PRIMARY'});
            animations.push({type:'swap',idx:j+1,value:array[j]});
            j=j-1;
        }
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
        array[j+1]=key;
        animations.push({type:'swap',idx:j+1,value:key});
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
    }
    for(let i=0;i<array.length;i++){
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
    }
    return animations;
}