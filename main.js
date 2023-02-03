var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";  
    adjustHeights();
    //Forces images to fully load
})



$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
    
});

function getLineHeight() {
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue('--line_height') )  
  }

  function setLineHeight(height) {
    var r = document.querySelector(':root');
    r.style.setProperty('--line_height', height + "px");
  }

  function getPosition(name){
    var target = document.getElementById(name);
    var rect = target.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    return [rect.top,rect.bottom];
  }

  function adjustHeights(){
    getLineHeight();
    setLineHeight(getPosition("icon_2")[0]-getPosition("icon_1")[1]); //Sets the height of line between two icons by taking the difference between both positions
    getLineHeight();
  }

    var globalResizeTimer = null;

  $(window).resize(function() {
      if(globalResizeTimer != null) window.clearTimeout(globalResizeTimer);
      globalResizeTimer = window.setTimeout(function() {
        adjustHeights();
      }, 100);
  });