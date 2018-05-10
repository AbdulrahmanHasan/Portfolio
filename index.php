<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes|Old+Standard+TT|Cabin">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/jquery-letterfx.min.css" />
  <link rel="stylesheet" href="css/styles.css">
  <!--[if it IE 9]>
  <script src="../respond.min.js"></script>
  <script src="../html5shiv.min.js"></script>
  <![endif]]-->
  <title>Personal Website</title>
</head>
<body data-default-color="yellow" data-spy="scroll" data-target="#Navbar" data-offset="70">
  <main class="backgrounds-height" id="Home">
    <header>
      <nav class="animated navbar navbar-expand-lg navbar-dark navbar-transparent fadeIn" id="Navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto d-flex justify-content-between buttons-effect nav-pills">
            <a class="nav-item nav-link active hover-color" href="#Home">Home</a>
            <a class="nav-item nav-link hover-color" href="#Skills">Skills</a>
            <span class="navbar-brand main-color">Abdulrahman Hasan</span>
            <a class="nav-item nav-link hover-color" href="#Projects">Projects</a>
            <a class="nav-item nav-link hover-color" href="#About">About</a>
          </div>
        </div>
      </nav>
    </header>
    <aside id="menu" class="menu">
      <div class="themes">Themes</div>
      <ul class="change-colors">
        <li data-color="yellow"></li>
        <li data-color="blue"></li>
        <li data-color="orange"></li>
      </ul>
    </aside>
  </main>

  <section class="skills blackBG backgrounds-height" id="Skills">
    <div class="borderColor heading d-flex justify-content-center align-items-center">
      <h2>Skills</h2>
    </div>
    <div class="container">
      <div class="language row justify-content-lg-between">
        <div class="col-md-4 col-lg-3">
          <div class="card-deck">
            <div class="card" data-toggle="modal" data-target="#turkish">
              <h5 class="card-title">ENGLISH</h5>
              <div class="chartOrange mx-auto" data-percent="70"><span>7</span></div>
              <div class="chartYellow mx-auto" data-percent="70"><span>7</span></div>
              <div class="chartBlue mx-auto" data-percent="70"><span>7</span></div>
              <div class="card-body">
                <!-- modal for ENGLISH dagree -->
                <div class="modal fade" id="english" tabindex="-1" role="dialog" aria-labelledby="Turkish Language" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Intermedite Dagree</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img src="images/english Dagree.jpg" class="img-fluid" alt="english">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-info mx-auto btn-md" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6>Reading</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                  <h6>Speaking</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>

                  <h6>Listening</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                  <h6>Writing</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xm-10 col-lg-3">
          <div class="card-deck">
            <div class="card" data-toggle="modal" data-target="#turkish">
              <h5 class="card-title">TURKISH (TURKÇA)</h5>
              <div class="chartOrange mx-auto" data-percent="50"><span>5</span></div>
              <div class="chartYellow mx-auto" data-percent="50"><span>5</span></div>
              <div class="chartBlue mx-auto" data-percent="50"><span>5</span></div>
              <div class="card-body">
                <!-- modal for tuckish dagree -->
                <div class="modal fade" id="turkish" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Elementary Dagree(A1)</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img src="images/Turkish Dagree.jpg" class="img-fluid" alt="turkish">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-info mx-auto btn-md" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  <h6>Reading (Okuma)</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 35%;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                  </div>
                  <h6>Speaking (Konuşma)</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                  <h6>Listening (Dinleme)</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 55%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                  </div>
                  <h6>Writing (Yazma)</h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xm-10 col-lg-3">
          <div class="card-deck">
            <div class="card" style="cursor:auto;">
              <h5 class="card-title">ARABIC <bdi>(العربية)</bdi></h5>
              <div class="chartOrange mx-auto" data-percent="100"><span>10</span></div>
              <div class="chartYellow mx-auto" data-percent="100"><span>10</span></div>
              <div class="chartBlue mx-auto" data-percent="100"><span>10</span></div>
              <div class="card-body">
                <section>
                  <h6>Reading <bdi>(القراءة)</bdi></h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                  <h6>Speaking <bdi>(المحادثة)</bdi></h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                  <h6>Listening <bdi>(السماع)</bdi></h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                  <h6>Writing <bdi>(الكتابة)</bdi></h6>
                  <div class="progress">
                    <div class="progress-bar main-background" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-lg-6 col-sm-12 computer-skills">
          <canvas id="myBarChart"></canvas>
        </div>
        <div class="wrapper col-md-6 col-lg-5 col-sm-12 web-skills">
          <div class="chart w-100">
            <canvas id="chartRadarOrange"></canvas>
            <canvas id="chartRadarYellow"></canvas>
            <canvas id="chartRadarBlue"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Projects blackBG" id="Projects">
    <div class="borderColor heading d-flex justify-content-center align-items-center flyRightFunction">
      <h2>Projects</h2>
    </div>
    <div class="text-center row container-fluid p-0 m-0">

      <div class="card bg-dark border-light borderColor border-bottom text-white col-lg-6 col-md-6 col-sm-12 p-0">
          <img class="card-img" src="images/back1.png" alt="Card image">
        <article class="card-img-overlay ProjectCard">
          <h1 class="main-color">My Personal Website</h1>
          <p>I've build it with</p>
          <hr class="borderColor"/>
          <p>html5, scss, javascript harmony, jquery, bootstrap4, jquery-letterfx, animate.css, chart.js</p>
          <a href="#">
            <button type="button" class="btn main-background">
              <i class="fab fa-leanpub"></i>
               View Project
            </button>
          </a>
        </article>
      </div>
      <div class="card bg-dark text-white borderColor border-bottom border-left col-lg-6 col-md-6 col-sm-12 p-0">
        <img class="card-img" src="images/memoryGame.png" alt="Card image">
        <article class="card-img-overlay ProjectCard">
          <h1 class="main-color">Memory Game</h1>
          <p>I've build it with</p>
          <hr class="borderColor"/>
          <p>html, css, javascript harmony, jquery</p>
          <a href="https://codepen.io/LR96/pen/xWoRgo?editors=0100" target="_blank">
            <button type="button" class="btn main-background">
              <i class="fab fa-leanpub"></i>
               View Project
            </button>
          </a>
        </article>
      </div>
      <div class="card bg-dark text-white borderColor border-right col-lg-6 col-md-6 col-sm-12 p-0">
        <img class="card-img" src="images/coming Soon.jpg" alt="Card image">
        <article class="card-img-overlay">
          <h1 class="main-color">Coming Soon</h1>
          <p>I've build it with</p>
          <hr class="borderColor"/>
          <p>html5, scss, javascript harmony, jquery, bootstrap4, jquery-letterfx, animate.css, chart.js</p>
          <a href="https://codepen.io/LR96/pen/xWoRgo?editors=0100" target="_blank">
            <button type="button" class="btn main-background">
              <i class="fab fa-leanpub"></i>
               View Project
            </button>
          </a>
        </article>
      </div>
      <div class="card bg-dark text-white col-lg-6 col-md-6 col-sm-12 p-0">
        <img class="card-img" src="images/coming soon.jpg" alt="Card image">
        <article class="card-img-overlay">
          <h1 class="main-color">Coming Soon</h1>
          <p>I've build it with</p>
          <hr class="borderColor"/>
          <p>html5, scss, javascript harmony, jquery, bootstrap4, jquery-letterfx, animate.css, chart.js</p>
          <a href="https://codepen.io/LR96/pen/xWoRgo?editors=0100" target="_blank">
            <button type="button" class="btn main-background">
              <i class="fab fa-leanpub"></i>
               View Project
            </button>
          </a>
        </article>
      </div>
    </div>
  </section>

  <div class="borderColor heading d-flex justify-content-center align-items-center">
    <h2>About</h2>
  </div>
  <footer class="about blackBG" id="About">
    <div class="container">
      <div class="row justify-content-sm-between ">
        <div class="col-md-5 col-sm-6 col-lg-4">
          <ul class="list-unstyled lead mx-xs-auto">
            <li><span class="main-color">Name: </span>Abdulrahman Hasan</li><hr class="main-background"/>
            <li><span class="main-color">Date Of Birth: </span><time datetime="1996-02-28">Feb, 28th, 1996</time></li><hr class="main-background"/>
            <li><span class="main-color">Nationality: </span>Syrian</li><hr class="main-background"/>
            <li><span class="main-color">Address: </span>Antakya Narlıca, Hatay, Turkey</li><hr class="main-background"/>
          </ul>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4">
          <article>
              <h3 class="main-color">Some Life Bookmarks!</h3>
            <p class="lead">I attended Google Developer Challenge at Udacity, and have been subsequently awarded a corresponding Nanodegree program. I'm also attending the android track in One Million Arab Coders at Udacity as well. Moreover, I studied Automatic Controll At the University of Aleppo.</p>
          </article>
      </div>
        <div class="col-md-12 col-sm-12 col-lg-4">
          <h3 class="main-color">Let's Keep In Touch</h3>
          <ul class="list-unstyled contant">
            <li><a href="https://www.facebook.com/abdulrahman.Hasan.1996" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a></li>
            <li><a href="https://github.com" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
            <li><a href="https://codepen.io/LR96/" target="_blank"><i class="fab fa-codepen fa-2x"></i></a></li>
            <li><a href="tel:(+90)5513846511"><i class="fa fa-mobile-alt fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="mailto:abdulrahmanhasan96@hotmail.com" target="_blank"><i class="fas fa-envelope fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyR">
      <p class="m-0">Copyright <i class="far fa-copyright fa-sm"></i> 2018 by Abdulrahman Hasan. All Rights Reserved.</p>
    </div>
  </footer>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/popper.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/tuxsudo.min.js"></script>
  <script type="text/javascript" src="js/jquery-letterfx.min.js"></script>
  <script type="text/javascript" src="js/chart.min.js"></script>
  <script type="text/javascript" src="js/circle chart.js"></script>
  <script type="text/javascript" src="js/javascript.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
