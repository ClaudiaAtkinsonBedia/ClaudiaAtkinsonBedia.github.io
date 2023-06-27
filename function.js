window.onload = init;

function init()
{
    let SpanishFlag = document.getElementById("flag");
    let EnglishFlag = document.getElementById("flag");

    SpanishFlag.addEventListener("mouseover", getBigger);
    EnglishFlag.addEventListener("mouseover", getBigger);
    SpanishFlag.addEventListener("mouseout", getSmaller);
    EnglishFlag.addEventListener("mouseout", getSmaller);

    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) 
    {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) 
      {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);

    var elements2 = document.getElementsByClassName('txt-rotate2');
    for (var i=0; i<elements2.length; i++) 
    {
      var toRotate2 = elements2[i].getAttribute('data-rotate');
      var period2 = elements2[i].getAttribute('data-period');
      if (toRotate2)
      {
        new TxtRotate(elements2[i], JSON.parse(toRotate2), period2);
      }
    }

    var css2 = document.createElement("style");
    css2.type = "text/css";
    css2.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css2);
}

function getBigger(event) 
{
  event.target.style.height = "2em";
}

function getSmaller(event)
{
  event.target.style.height = "1.5em";
}

var TxtRotate = function(el, toRotate, period) 
{
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
  
  TxtRotate.prototype.tick = function() 
  {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) 
    {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } 
    else 
    {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) 
    { 
      delta /= 2; 
    }
  
    if (!this.isDeleting && this.txt === fullTxt) 
    {
      delta = this.period;
      this.isDeleting = true;
    } 
    else if (this.isDeleting && this.txt === '') 
    {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() 
    {
      that.tick();
    }, delta);
  };

/*
1. Make website scrollable and limit number of buttons 

2. Say who you are in the header, name, freelancer or not.

3. Be careful with color, each color should have a purpose (eg. Link color, primary button color, etc) . Create a system

4. CTA!!!! WTF DOES THIS MEAN

5. Focus more on the content of your work samples instead of how you present it.

00:40 Principle #1 = Unique Selling Proposition
02:56 Principle #2 = Using Quality Mockups
05:00 Principle #3 = Using Social Proof*/