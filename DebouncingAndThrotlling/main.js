

let count=0;
function getData(){
 console.log("Fetching Data",count++);
}

const dobounceFun= function(fn,delay){
    
 let timer;
 
    return function(){
        //to get context ie this
        let context=this;
        args=arguments;
        //clear timer after call
        clearTimeout(timer);

     timer = setTimeout(()=>{
       getData.apply(context,arguments);
    },delay)
    }

}
//debounceFun return use function so store it in var and then pass it to 
//onkeyup
let doDelay= dobounceFun(getData,300);



function throttle(func, limit) {
    let inThrottle;
    
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
  
  // Example usage
  const throttleFunction = throttle(function () {
    console.log('Throttled function executed');
  }, 1000);
  
  