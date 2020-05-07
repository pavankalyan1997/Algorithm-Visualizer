export function getQuickSortAnimations(array){
    const n=array.length;
    let animations=[];
    quickSort(array,0,n-1,animations);
    return animations;
}
function quickSort(array,low,high,animations){
    if(low<high){
        let pi=partition(array,low,high,animations);

        quickSort(array,low,pi-1,animations);
        quickSort(array,pi+1,high,animations);
    }
}
function partition(array,low,high,animations){
    let pivot=array[high];
    let i=(low-1);
    for(let j=low;j<=high-1;j++){
        animations.push({type:'changeColor',idx:high,color:'RED'});

        animations.push({type:'changeColor',idx:j,color:'SECONDARY'});
        if(array[j]<pivot){
            i++;
            animations.push({type:'swap',idx:i,value:array[j]});
            animations.push({type:'swap',idx:j,value:array[i]});
            
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }

        animations.push({type:'changeColor',idx:high,color:'PRIMARY'});

        animations.push({type:'changeColor',idx:j,color:'PRIMARY'});
    }
    animations.push({type:'swap',idx:i+1,value:array[high]});
    animations.push({type:'swap',idx:high,value:array[i+1]});

    let temp=array[i+1];
    array[i+1]=array[high];
    array[high]=temp;

    

    return (i+1);
}