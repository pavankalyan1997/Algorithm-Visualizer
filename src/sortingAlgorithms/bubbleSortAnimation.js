export function getBubbleSortAnimations(array){
    const n=array.length;
    let animations=[];
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            animations.push({type:'changeColor',idx:j,color:'SECONDARY'});

            animations.push({type:'changeColor',idx:j+1,color:'SECONDARY'});
            if(array[j]>array[j+1]){
                // swap
               animations.push({type:'changeColor',idx:j,color:'RED'});

                animations.push({type:'changeColor',idx:j+1,color:'RED'});

                animations.push({type:'swap',idx:j,value:array[j+1]});
                animations.push({type:'swap',idx:j+1,value:array[j]});
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }

            animations.push({type:'changeColor',idx:j,color:'PRIMARY'});

            animations.push({type:'changeColor',idx:j+1,color:'PRIMARY'});
            
        }
        animations.push({type:'changeColor',idx:n-i-1,color:'GREEN'});
        
    }
    for(let i=0;i<n;i++){
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
    }
    return animations;
}