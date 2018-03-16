/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (https://www.opensource.org/licenses/mit-license.php) and GPL (https://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.0.1
 **/
!function(){var a=function(a,b){var c=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c);var d=c.getContext("2d");if(c.width=c.height=b.size,a.appendChild(c),window.devicePixelRatio>1){var e=window.devicePixelRatio;c.style.width=c.style.height=[b.size,"px"].join(""),c.width=c.height=b.size*e,d.scale(e,e)}d.translate(b.size/2,b.size/2),d.rotate((-0.5+b.rotate/180)*Math.PI);var f=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(f-=b.scaleLength+2);var g=function(a,b,c){c=Math.min(Math.max(0,c||1),1),d.beginPath(),d.arc(0,0,f,0,2*Math.PI*c,!1),d.strokeStyle=a,d.lineWidth=b,d.stroke()},h=function(){var a,c,e=24;d.lineWidth=1,d.fillStyle=b.scaleColor,d.save();for(var e=24;e>=0;--e)0===e%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),d.fillRect(-b.size/2+a,0,c,1),d.rotate(Math.PI/12);d.restore()};Date.now=Date.now||function(){return+new Date};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();this.clear=function(){d.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){this.clear(),b.scaleColor&&h(),b.trackColor&&g(b.trackColor,b.lineWidth),d.lineCap=b.lineCap;var c;c="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&g(c,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):i(e)}.bind(this);i(e)}.bind(this)},b=function(b,c){var d,e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,renderer:a,easing:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}},f={},g=0,h=function(){this.el=b,this.options=f;for(var a in e)e.hasOwnProperty(a)&&(f[a]=c&&"undefined"!=typeof c[a]?c[a]:e[a],"function"==typeof f[a]&&(f[a]=f[a].bind(this)));f.easing="string"==typeof f.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[f.easing])?jQuery.easing[f.easing]:e.easing,d=new f.renderer(b,f),d.draw(g),b.dataset&&b.dataset.percent&&this.update(parseInt(b.dataset.percent,10))}.bind(this);this.update=function(a){return a=parseInt(a,10),f.animate?d.animate(g,a):d.draw(a),g=a,this}.bind(this),h()};window.EasyPieChart=b}();
var options = {
  scaleColor: false,
  trackColor: 'rgba(0, 0, 0, 0.34)',
  barColor: '#3D9970',
  lineWidth: 7,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [1];
  [1].forEach.call(document.querySelectorAll('.chartGreen'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});



var options1 = {
  scaleColor: false,
  trackColor: 'rgba(3, 3, 3, 0.31)',
  barColor: 'rgb(238, 104, 23)',
  lineWidth: 7,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [2];
  [2].forEach.call(document.querySelectorAll('.chartOrange'),  function(el) {
    charts.push(new EasyPieChart(el, options1));
  });
});
var options2 = {
  scaleColor: false,
  trackColor: 'rgba(0, 0, 0, 0.34)',
  barColor: '#F1C40F',
  lineWidth: 7,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [3];
  [3].forEach.call(document.querySelectorAll('.chartYellow'),  function(el) {
    charts.push(new EasyPieChart(el, options2));
  });
});
var options3 = {
  scaleColor: false,
  trackColor: 'rgba(0, 0, 0, 0.34)',
  barColor: 'rgb(33, 150, 243)',
  lineWidth: 7,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [4];
  [4].forEach.call(document.querySelectorAll('.chartBlue'),  function(el) {
    charts.push(new EasyPieChart(el, options3));
  });
});








Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(182, 190, 184, 1)';
Chart.defaults.global.defaultFontSize = 10
// for green theme
var chartRadarDOM = $('#chartRadarGreen');
var chartRadarData = {
  labels: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "#3d997080",
    borderColor: "#3d9970cc",
    pointBackgroundColor: "#3d9970",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "#3d9970",
    pointBorderWidth: 2,
    data: [9.5, 9.5, 4, 9.5, 4, 9.5, 5, 9.5]
  }]
};
var chartRadarOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      maxTicksLimit: 7
    },
    pointLabels: {
      fontSize: 13
    },
    gridLines: {
      color: 'rgba(255, 255, 255, 0.5)'
    }
  }

};
var chartRadar = new Chart(chartRadarDOM, {
  type: 'radar',
  data: chartRadarData,
  options: chartRadarOptions
});



//for orange theme

var chartRadarDOM = $('#chartRadarOrange');
var chartRadarData = {
  labels: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "rgba(238, 104, 23, 0.5)",
    borderColor: "rgba(238, 104, 23, 0.8)",
    pointBackgroundColor: "rgba(238, 104, 23, 1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "rgba(238, 104, 23, 1)",
    pointBorderWidth: 2,
    data: [9.5, 9.5, 4, 9.5, 4, 9.5, 5, 9.5]
  }]
};
var chartRadarOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      maxTicksLimit: 7
    },
    pointLabels: {
      fontSize: 13
    },
    gridLines: {
      color: 'rgba(255, 255, 255, 0.5)'
    }
  }

};
var chartRadar = new Chart(chartRadarDOM, {
  type: 'radar',
  data: chartRadarData,
  options: chartRadarOptions
});



//For yellow theme

var chartRadarDOM = $('#chartRadarYellow');
var chartRadarData = {
  labels: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "#F1C40F80",
    borderColor: "#F1C40FCc",
    pointBackgroundColor: "#F1C40F",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "#F1C40F",
    pointBorderWidth: 2,
    data: [9.5, 9.5, 4, 9.5, 4, 9.5, 5, 9.5]
  }]
};
var chartRadarOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      maxTicksLimit: 7
    },
    pointLabels: {
      fontSize: 13
    },
    gridLines: {
      color: '#00000080'
    }
  }

};
var chartRadar = new Chart(chartRadarDOM, {
  type: 'radar',
  data: chartRadarData,
  options: chartRadarOptions
});



// For blue theme

var chartRadarDOM = $('#chartRadarBlue');
var chartRadarData = {
  labels: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "rgba(33, 150, 243, 0.5)",
    borderColor: "rgba(33, 150, 243, 0.8)",
    pointBackgroundColor: "rgba(33, 150, 243, 1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "rgba(33, 150, 243, 1)",
    pointBorderWidth: 2,
    data: [9.5, 9.5, 4, 9.5, 4, 9.5, 5, 9.5]
  }]
};
var chartRadarOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      maxTicksLimit: 7
    },
    pointLabels: {
      fontSize: 13
    },
    gridLines: {
      color: 'rgba(255, 255, 255, 0.5)'
    }
  }

};
var chartRadar = new Chart(chartRadarDOM, {
  type: 'radar',
  data: chartRadarData,
  options: chartRadarOptions
});

// computer skills bar myBarChart

 var barForCompSkill = $('#myBarChart');
 var barSkills = new Chart(barForCompSkill, {
   type: 'bar',
   data: {
     labels: ["Ms Word", "Ms PowerPoint", "MS outlook", "MS Excel", "Android Track", "Photoshop"],
     datasets: [{
       label: 'Computer Skills',
       data: [10, 10, 9.5, 4, 4, 5,0],
       backgroundColor: [
         'rgba(255, 98, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 68, 0.6)',
         'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)',
         'rgba(255, 159, 64, 0.6)'
       ],
       borderColor: [
         'rgba(255, 98, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 68, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 2,
       hoverBackgroundColor: 'rgba(127, 208, 77, 0.49)',
       hoverBorderColor: 'rgb(127, 208, 77)',
     }]
   },
   options: {

   gridLines: {
     color: 'rgba(255, 255, 255, 0.5)'
   }
 }
 });



$(function() {
  var topoffset = 69; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

});
