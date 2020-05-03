export function getmergeSortAnimations(array){
    const animations=[];
    if(array.length<=1){
        return array;
    }

    const auxilliaryArray=array.slice();
    mergeSortHelper(array,0,array.length-1,auxilliaryArray,animations);
    return animations;
}
function mergeSortHelper(mainArray,startIdx,endIdx,auxilliaryArray,animations){
    if(startIdx===endIdx){
        return;
    }
    const middleIdx=Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxilliaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxilliaryArray,middleIdx+1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxilliaryArray,animations);
}
function doMerge(mainArray,startIdx,middleIdx,endIdx,auxilliaryArray,animations){
    let k=startIdx,i=startIdx,j=middleIdx+1;
    while(i<=middleIdx && j<=endIdx){
        // to change the color
        animations.push([i,j]);

        // to revert the color
        animations.push([i,j]);

        if(auxilliaryArray[i]<=auxilliaryArray[j]){

            // push to swap 
            animations.push([k,auxilliaryArray[i]]);
            mainArray[k++]=auxilliaryArray[i++];
        }else{

            //push to swap
            animations.push([k,auxilliaryArray[j]]);
            mainArray[k++]=auxilliaryArray[j++];
        }
    }

    while(i<=middleIdx){
        animations.push([i,i]);

        animations.push([i,i]);

        animations.push([k,auxilliaryArray[i]]);

        mainArray[k++]=auxilliaryArray[i++];
    }


    while(j<=endIdx){
        animations.push([j,j]);

        animations.push([j,j]);

        animations.push([k,auxilliaryArray[j]]);

        mainArray[k++]=auxilliaryArray[j++];
    }
}