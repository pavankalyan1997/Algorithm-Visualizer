import React, { Component } from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/mergeSortAnimarions.js';
import * as selectionSortAlgorithm from '../sortingAlgorithms/selectionSortAnimation.js';
import * as insertionSortAlgorithm from '../sortingAlgorithms/insertionSortAnimation.js';
import * as bubbleSortAlgorithm from '../sortingAlgorithms/bubbleSortAnimation.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
const SECONDARY_COLOR='blue';
const PRIMARY_COLOR='turquoise';
const ANIMATION_SPEED=1;
const DEFAULT_BAR_COUNT=280;
export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         array:[],
         animation_speed:1,
         sortAlgorithm:null,
         array_size:DEFAULT_BAR_COUNT,
         barWidth:2,
         stop:false,
        };

        this.myInput = React.createRef(); 
      }
      componentDidMount(){
          this.resetArray();
      }
      resetArray(){
          const array=[];
          for(let i=0;i<this.state.array_size;i++){
              
              array.push(randomIntFromInterval(5,500));
          }
          this.setState({array});
          this.state.stop=false;
      }


      mergeSort(){
        // const javaScriptSortedArray=this.state.array
        // .slice()
        // .sort(function(a,b){return a-b});
        // const mergeSortedArray=sortingAlgorithms.mergeSort(this.state.array);
        
        // console.log(areArraysEqual(javaScriptSortedArray,mergeSortedArray));


        const animations=sortingAlgorithms.getmergeSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars=document.getElementsByClassName('array-bar');
            const isColorChange= i%3!==2;

            if(isColorChange){
                const [barOneIdx,barTwoIdx]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;

                const color=i%3===0 ? SECONDARY_COLOR: PRIMARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*this.state.animation_speed);
            }else{

                setTimeout(()=>{
                    const [barOneIdx,newHeight]=animations[i];
                    const barOneStyle =arrayBars[barOneIdx].style;
                    barOneStyle.height=`${newHeight}px`;
                },i*this.state.animation_speed);
            }
        }
      }
      

      heapSort(){

      }

      insertionSort(){
        const animations=insertionSortAlgorithm.getInsertionSortAnimation(this.state.array);
        const arrayBars=document.getElementsByClassName('array-bar');
        console.log(animations);
        for(let i=0;i<animations.length;i++){
            console.log(this.state.stop);
            
            if(animations[i].type==='colorChange'){
                const idx=animations[i].idx;
                const barStyle=arrayBars[idx].style;
                let color;
                if(animations[i].color==='PRIMARY'){
                    color=PRIMARY_COLOR;
                }else if(animations[i].color==='SECONDARY'){
                    color=SECONDARY_COLOR;
                }else if(animations[i].color==='GREEN'){
                    color='green';
                }
                
                    setTimeout(()=>{
                        barStyle.backgroundColor=color;
                    },i*this.state.animation_speed);
                
                
        
            }else if(animations[i].type==='swap'){
                const idx=animations[i].idx;
                const value=animations[i].value;

               
                setTimeout(()=>{
                    arrayBars[idx].style.height=`${value}px`;
                },i*this.state.animation_speed);
            
            }
        }
        for(let i=0;i<arrayBars.length;i++){
            arrayBars[i].style.backgroundColor=PRIMARY_COLOR;
        }
      }
      quickSort(){

      }
      bubbleSort(){
        // const javaScriptSortedArray=this.state.array
        // .slice()
        // .sort(function(a,b){return a-b});
        // const bubbleSortedArray=bubbleSortAlgorithm.getBubbleSortAnimations(this.state.array);
        
        // console.log(areArraysEqual(javaScriptSortedArray,bubbleSortedArray));

        const animations=bubbleSortAlgorithm.getBubbleSortAnimations(this.state.array);
        const arrayBars=document.getElementsByClassName('array-bar');
        console.log(animations);
        for(let i=0;i<animations.length;i++){
            if(animations[i].type==='changeColor'){
                const idx=animations[i].idx;
                const barStyle=arrayBars[idx].style;
                let color;
                if(animations[i].color==='SECONDARY'){
                    color=SECONDARY_COLOR;
                }else if(animations[i].color==='PRIMARY'){
                    color=PRIMARY_COLOR;
                }else if(animations[i].color==='RED'){
                    color='red';
                }else if(animations[i].color==='GREEN'){
                    color='green';
                }
                setTimeout(()=>{
                    barStyle.backgroundColor=color;
                },i*this.state.animation_speed);
            }
            else if(animations[i].type==='swap'){
                const idx=animations[i].idx;
                const value=animations[i].value;

                setTimeout(()=>{
                    arrayBars[idx].style.height=`${value}px`;
                },i*this.state.animation_speed);
                
            }
        }
        
      }

      selectionSort(){
        const animations=selectionSortAlgorithm.getselectionSortAnimations(this.state.array);
        const arrayBars=document.getElementsByClassName('array-bar');
        for(let i=0;i<animations.length;i++){
            if(animations[i].type==='changeColor'){
                const idx=animations[i].value;
                const barStyle=arrayBars[idx].style;
                let color;
                if(animations[i].color==='SECONDARY'){
                    color=SECONDARY_COLOR;
                }else if(animations[i].color==='PRIMARY'){
                    color=PRIMARY_COLOR;
                }else if(animations[i].color==='RED'){
                    color='red';
                }else if(animations[i].color==='GREEN'){
                    color='green';
                }
                setTimeout(()=>{
                    barStyle.backgroundColor=color;
                },i*this.state.animation_speed);
            }
            else if(animations[i].type==='swap'){
                const idx=animations[i].index;
                const value=animations[i].value;

                setTimeout(()=>{
                    arrayBars[idx].style.height=`${value}px`;
                },i*this.state.animation_speed);
                
            }
        }
      }

      testSortingAlgorithms(){
          for(let i=0;i<100;i++){
            const array=[];
            const length=randomIntFromInterval(1,1000);
            for(let i=0;i<length;i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
        const javaScriptSortedArray=array
        .slice()
        .sort(function(a,b){return a-b});
        const mergeSortedArray=sortingAlgorithms.mergeSort(array);
        
        console.log(areArraysEqual(javaScriptSortedArray,mergeSortedArray));
          }
      }

      visualize(){
        let sortAlgorithm=this.state.sortAlgorithm;
        if(sortAlgorithm==="Insertion Sort"){
            this.insertionSort();
        }else if(sortAlgorithm==="Merge Sort"){
            this.mergeSort();
        }else if(sortAlgorithm==="Heap Sort"){
            this.heapSort();
        }else if(sortAlgorithm==="Quick Sort"){
            this.quickSort();
        }else if(sortAlgorithm==="Selection Sort"){
            this.selectionSort();
        }else if(sortAlgorithm==="Bubble Sort"){
            this.bubbleSort();
        }else{
            alert('Choose a sorting algorithm');
        }
      }
      changeSortAlgorithm(event){
          this.state.sortAlgorithm=event.target.value;
          console.log(this.state.sortAlgorithm);
      }
      changeAnimationSpeed(event){
          this.state.animation_speed=100/event.target.value;
      }
      changeArraySize(event){
          if(event.target.value===null || event.target.value==0){
            this.state.array_size=DEFAULT_BAR_COUNT;
          }else{
            this.state.array_size=event.target.value;
          }
          const arraySize=this.state.array_size;
          if(arraySize<=10){
            this.state.barWidth=100;
          }
          else if(arraySize<=50){
            this.state.barWidth=20;
          }else if(arraySize<=65){
              this.state.barWidth=15;
          }else if(arraySize<=80){
              this.state.barWidth=12;
          }else if(arraySize<=95){
            this.state.barWidth=10;      
          }else if(arraySize<=113){
              this.state.barWidth=8;
          }else if(arraySize<=125){
              this.state.barWidth=7;
          }else if(arraySize<=140){
              this.state.barWidth=6;
          }else if(arraySize<=160){
            this.state.barWidth=5;
          }else if(arraySize<=185){
            this.state.barWidth=4;
          }else if(arraySize<=230){
            this.state.barWidth=3;
          }else{
              this.state.barWidth=2;
          }
        //   this.state.barWidth=20-((18/279)*(arraySize-2));//(18)*((arraySize-1)/279)+2
        //   console.log("Bar width is "+this.state.barWidth);
          
          
      }
      stopExecution(){
          this.state.stop=true;
      }
    
      render() {
          const {array}=this.state;
        return (
            <div className="sort-visualizer">
            <div className="buttons">

            <Form.Group>
            <Form.Row as={Col}>
            <Form.Label>Size of Array</Form.Label>
            <Form.Control onChange={this.changeArraySize.bind(this)} type="number" max="500" min="1"  placeholder="Array Size" />
            </Form.Row>
            </Form.Group>

            <Form.Group>
            <Form.Row as={Col}>
            <Button variant="outline-primary"
            onClick={()=>this.resetArray()}>Generate Array</Button>{' '}
                
            </Form.Row>

                

            </Form.Group>

            <Form>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Row>
            <Form.Label>Sorting Algorithm</Form.Label>
            <Form.Control onChange={this.changeSortAlgorithm.bind(this)} as="select">
                <option>Choose...</option>
                <option>Insertion Sort</option>
                <option>Merge Sort</option>
                <option>Heap Sort</option>
                <option>Quick Sort</option>
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
            </Form.Control>
            </Form.Row>
            </Form.Group>



            <Form.Group as={Col}>
            <Form.Row>

            <Form.Label>Animation speed</Form.Label>
            <Form.Control onChange={this.changeAnimationSpeed.bind(this)} type="number" max="100" min="1"  placeholder="Animation Speed" />
            </Form.Row>
            </Form.Group>

            <Form.Group>
            <Form.Row as={Col}>
            <Button variant="primary" 
            onClick={()=>this.visualize()}>
            Visualize
            </Button>
                
            </Form.Row>
            </Form.Group>

            <Form.Group>
            <Form.Row as={Col}>
            <Button variant="danger" 
                onClick={()=>this.stopExecution()}>
            Stop Execution
            </Button>
                
            </Form.Row>
            </Form.Group>






            </Form>
                

            </div>
            
            <div id="array-container">
                
                {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{
                    backgroundColor:PRIMARY_COLOR,
                    width:`${this.state.barWidth}px`,
                    height: `${value}px`}}>
                    
                </div>
              ))}
              <br/>
            </div>

            

            

            </div>
            
              
          
          
        );
      }
}
function randomIntFromInterval(min,max){
    let val=Math.floor(Math.random()*(max-min+1)+min);
    //const sortVisualizer=document.getElementsByClassName('array-container');
    // if(val > sortVisualizer.style.height){
    //     val=sortVisualizer.style.height-10;
    // }
    //console.log(sortVisualizer.style.height);
    return val;
}
function areArraysEqual(array1,array2){
    if(array1.length!=array2.length){
        return false;
    }

    for(let i=0;i<array2.length;i++){
        if(array1[i]!=array2[i]){
            return false;
        }
    }
    return true;
}