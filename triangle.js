function calculateTraingleArea(){
   const triangleBaseInput =document.getElementById('triangle-base');
   const triangleBaseText =triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
//    console.log( base);
    const trangleHeightInput= document.getElementById('triangle-height');
    const trangleHeightText =trangleHeightInput.value;
    const height =parseFloat(trangleHeightText);
    // console.log(height);
    
    const area=(base*height)/2;
       console.log('area of the is:',area);

       //  display triangle area
   
    const triangleAreaSpan= document.getElementById('triangle-area');
    triangleAreaSpan.innerText =area;
}
function calculateRectangleArea(){
    const triangleBaseInput =document.getElementById('rectangle-length');
    const triangleBaseText =triangleBaseInput.value;
    const length = parseFloat(triangleBaseText);
 //    console.log( base);
     const trangleHeightInput= document.getElementById('rectangle-width');
     const trangleHeightText =trangleHeightInput.value;
     const width =parseFloat(trangleHeightText);
     // console.log(height);
     
     const area=(length*width);
        console.log('area of the is:',area);
 
        //  display triangle area
    
     const triangleAreaSpan= document.getElementById('rectangle-area');
     triangleAreaSpan.innerText =area;
}