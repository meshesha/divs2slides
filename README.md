# divs2slides - jQuery plagin to create sildes from DIV
## V.1.3.0
```
...
<head>
  ....
  <script type="text/javascript" src="./js/divs2slides.js">
  OR
  <script type="text/javascript" src="./js/divs2slides.min.js">
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
      nav: true, /** true,false : show or not nav buttons*/
      showPlayPauseBtn: true, /** true,false */
      navTxtColor: "black", /** color */
      keyBoardShortCut: true, /** true,false */
      showSlideNum: true, /** true,false */
      showTotalSlideNum: true, /** true,false */
      autoSlide:false, /** false or seconds (the pause time between slides) , F8 to active(condition: keyBoardShortCut: true) */
      randomAutoSlide: false, /** true,false ,(condition: autoSlide:true */ 
      loop: false,  /** true,false */
      background: false, /** false or color*/
      transition: "default", /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
      transitionTime: 1 /** transition time in seconds */
 </script>
 ...
 </body>
```

## v1.3.0
### fixed some minor bugs
### new toolbar
### 'navNextTxt' and 'navPrevTxt' Canceled 
## v1.2.1
### fixed some minor bugs
## v1.2.0
### Added randomAutoSlide
## v1.1.0
### Added auto slide
