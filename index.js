window.addEventListener("keydown",function(event){
    // console.log(event); is an object
     const keycode=event.keyCode;//You will get the key
    //  instead of keycode-->we have to use code only
    //  console.log(event.which);
    // console.log(String.charCodeAt(keycode));
    const audio=document.querySelector(`audio[data-key="${event.key}"]`);
    // console.log(audio);
    if(!audio)  return;//stop the function
    audio.play();
    const key=this.document.querySelector(`div[data-key="${event.key}"]`);
    console.log(key);
    if(!key) return;
    key.setAttribute("style","transform:scale(1.5);border:.3rem solid yellow;");
});
window.addEventListener("keyup",function(event){
    
    const key=document.querySelector(`div[data-key="${event.key}"]`);
    console.log(key);
    if(!key) return;
    key.setAttribute("style","transform:scale(1);border:.2rem solid black;");
    const audio=document.querySelector(`audio[data-key="${event.key}"]`);
    // console.log(audio);
    if(!audio)  return;//stop the function
    audio.pause();
});