var startbutton = $('.startbutton')
var button1 = $('.button1')
var button2 = $('.button2')
var button3 = $('.button3')

var box1 = $('.invisible1')
var box2 = $('.invisible2')
var box3 = $('.invisible3')

startbutton.click(function(){
  startbutton.hide();
  box1.removeClass('invisible1')
  box1.addClass('.visible1')
  box1.show()
});

button1.click(function(){
    box1.hide();
    box2.show();
});

button2.click(function(){
    box2.hide();
    box3.show();
});

button3.click(function(){
    bottom_box.hide();
    top_box.show();
});

function begin(){
  box1.removeClass(".invisible1");
  box1.addClass(".visible1");
  startbutton.hide();
}

function hideAndShow(current, next) {
  current.removeClass(".visible")
  current.addClass(".invisible")
  next.removeClass(".invisible"
  next.addClass(".visible")
}
