# divs2slides - jQuery plagin to create sildes from DIV
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
<div>
.
.
<script>
  $("#container).divs2slides({
      first: 1,
      nav: true,
      keyBoardShortCut: true,
      showSlideNum: true,
      showTotalSlideNum: false,
      background : "black",
      transition: "default", /*"slid","fade","default","random" */
      transitionTime: 0 /** in second */
    });
 </script>
