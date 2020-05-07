export function getheapSortAnimations(array){
    const n=array.length;
    let animations=[];
    heapSort(array,n,animations);
    return animations;
}
function heapSort(array,n,animations){
    for(let i=n/2 -1; i>=0;i--){
        heapify(array,n,i,animations);
    }

    for(let i=n-1;i>0;i--){

        animations.push({type:'swap',idx:0,value:array[i]});
        animations.push({type:'swap',idx:i,value:array[0]});

        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;

        heapify(array, i, 0,animations); 
    }
}
function heapify(array,n,i,animations){
    let largest=i;
    let l=2*i+1;
    let r=2*i+2;

    if(l<n && array[l]>array[largest]){
        largest=l;
    }
    if(r<n && array[r]>array[largest]){
        largest=r;
    }
    animations.push({type:'changeColor',idx:largest,color:'RED'});
    animations.push({type:'changeColor',idx:i,color:'SECONDARY'});
    
    
    

    
    if(largest!=i){
        
        
        animations.push({type:'swap',idx:i,value:array[largest]});
        animations.push({type:'swap',idx:largest,value:array[i]});
        
        animations.push({type:'changeColor',idx:largest,color:'PRIMARY'});
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
    
        
        
        let temp=array[i];
        array[i]=array[largest];
        array[largest]=temp;

        heapify(array,n,largest,animations);
    }else{
        animations.push({type:'changeColor',idx:largest,color:'PRIMARY'});
        animations.push({type:'changeColor',idx:i,color:'PRIMARY'});
    
    }
    
    
}