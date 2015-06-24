# queue-js: queue
JS step based procedural execution tool. Use this when you need to wait for something to be available on your page before executing something else

## Syntax
<code>queue(step1, step2[, step3, .., stepN])</code>

### Parameters

*step1*
Function that returns true or false. It will be called multple times until it returns true, or the limit of calls is made.
*step2*
Function that returns true or false. Same as step1. To run this once, `return true` at the bottom of the function.

# Usage
Use the queue.min.js file, copy and paste the code for `var queue`. queue.exists is an optional addon.

# Example
<pre><code>queue(function(){
  //step 1
  return jQuery && jQuery("#button");
}, function(){
  jQuery("#button").on("click", function(){ 
     console.log("Clicked");
  });
  // Always return true on the last step, otherwise this will be called multiple times
  return true;
});
</code></pre>

# queue-js: queue.exists
Checks if something exists, based on brototype.doYouEven() [https://github.com/letsgetrandy/brototype]

## Syntax
<code>queue.exists(varToCheck)</code>

### Parameters

*varToCheck*
A string using dot notation that describes a variable somewhere in JS land

# Usage
Copy the queue.exists function from queue.min.js

# Example
<pre><code>queue(function(){
  //step 1
  return queue.exists("CT.ABE.Step1.Reservation.Cloud.prototype.OnSuccess");
}, function(){
  window.mySuccess = CT.ABE.Step1.Reservation.Cloud.prototype.OnSuccess;
  return true;
});
</code></pre>
