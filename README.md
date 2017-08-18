# divs2slides - jQuery plagin to create sildes from DIV
```
...
<head>
  ....
  <script type="text/javascript" src="./js/divs2slides.js">
  ....
</head>
<body>
...
<div id="container">
  <div class="slide">
    .
    .
  </div>
  <div class="slide">
    .
    .
  </div>
  <div class="slide">
    .
    .
  </div>
</div>

<script>
  $("#container).divs2slides({
      first: 1,
      nav: true, /** true,false */
      navNextTxt:"&#8250;",
      navPrevTxt: "&#8249;",
      keyBoardShortCut: true, /** true,false */
      showSlideNum: true, /** true,false */
      showTotalSlideNum: true, /** true,false */
      autoSlide:false, /** false or seconds , TODO */
      loop: false,  /** true,false */
      background: false, //false or color
      transition: "default", /* transition type: "slid","fade","default","random" */
      transitionTime: 1 /** transition time between slides in seconds */
 </script>
 ...
 </body>
```
