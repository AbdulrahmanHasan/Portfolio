var chartOrange = {
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
    charts.push(new EasyPieChart(el, chartOrange));
  });
});
var chartYellow = {
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
    charts.push(new EasyPieChart(el, chartYellow));
  });
});
var chartBlue = {
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
    charts.push(new EasyPieChart(el, chartBlue));
  });
});








Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(182, 190, 184, 1)';
Chart.defaults.global.defaultFontSize = 10

//for orange theme

var chartRadarDOM = $('#chartRadarOrange');
var chartRadarData = {
  labels: ["HTML5", "CSS3", "JS Harmony","php", "jQuery", "Bootstrap4", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "rgba(238, 104, 23, 0.5)",
    borderColor: "rgba(238, 104, 23, 0.8)",
    pointBackgroundColor: "rgba(238, 104, 23, 1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "rgba(238, 104, 23, 1)",
    pointBorderWidth: 2,
    data: [9, 9.5, 6.5, 3, 6, 9, 9, 8, 8]
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
  labels: ["HTML5", "CSS3", "JS Harmony","php", "jQuery", "Bootstrap4", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "#F1C40F80",
    borderColor: "#F1C40FCc",
    pointBackgroundColor: "#F1C40F",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "#F1C40F",
    pointBorderWidth: 2,
    data: [9, 9.5, 6.5, 3, 6, 9, 9, 8, 8]
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
  labels: ["HTML5", "CSS3", "JS Harmony","php", "jQuery", "Bootstrap4", "Scss", "Git & Github", "Gulp.js"],
  datasets: [{
    label: "Skill Level",
    backgroundColor: "rgba(33, 150, 243, 0.5)",
    borderColor: "rgba(33, 150, 243, 0.8)",
    pointBackgroundColor: "rgba(33, 150, 243, 1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#2f2929",
    pointHoverBorderColor: "rgba(33, 150, 243, 1)",
    pointBorderWidth: 2,
    data: [9, 9.5, 6.5, 3, 6, 9, 9, 8, 8]
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
     labels: ["Ms Word", "Ms PowerPoint", "MS outlook", "MS Excel", "Android Development", "Photoshop"],
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
