# divs2slides - jQuery plagin to create sildes from DIV

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
## Setting options:
 <table class="tg">
    <tr>
      <th class="tg-jc4p">#</th>
      <th class="tg-jc4p">name</th>
      <th class="tg-jc4p">description</th>
      <th class="tg-jc4p">default value</th>
    </tr>
    <tr>
      <td class="tg-yw4l">1</td>
      <td class="tg-yw4l">first</td>
      <td class="tg-yw4l">The first slide that will be loaded.</td>
      <td class="tg-yw4l">1</td>
    </tr>
    <tr>
      <td class="tg-yw4l">2</td>
      <td class="tg-yw4l">nav</td>
      <td class="tg-yw4l">show ('true') or hide ('false') navigator buttons.</td>
      <td class="tg-yw4l">true</td>
    </tr>
    <tr>
      <td class="tg-yw4l">3</td>
      <td class="tg-yw4l">navTxtColor</td>
      <td class="tg-yw4l">color of slide number text and total slides number shown in navigator area.</td>
      <td class="tg-yw4l">"black"</td>
    </tr>
    <tr>
      <td class="tg-yw4l">4</td>
      <td class="tg-yw4l">keyBoardShortCut</td>
      <td class="tg-yw4l">if true , enable to control presentation by keyboard shortcuts. </td>
      <td class="tg-yw4l">false</td>
    </tr>
    <tr>
      <td class="tg-yw4l">5</td>
      <td class="tg-yw4l">showSlideNum</td>
      <td class="tg-yw4l">if true , show slide number in navigator area.</td>
      <td class="tg-yw4l">true</td>
    </tr>
    <tr>
      <td class="tg-yw4l">6</td>
      <td class="tg-yw4l">showTotalSlideNum</td>
      <td class="tg-yw4l">if true , show total slides number in navigator area.</td>
      <td class="tg-yw4l">true</td>
    </tr>
    <tr>
      <td class="tg-yw4l">7</td>
      <td class="tg-yw4l">autoSlide</td>
      <td class="tg-yw4l">options:'false' or number (seconds). if set 'false' it disable auto slide mode. if set number then auto slide mode will be enabled and the number will be the time between slides.</td>
      <td class="tg-yw4l">1</td>
    </tr>
    <tr>
      <td class="tg-yw4l">8</td>
      <td class="tg-yw4l">randomAutoSlide</td>
      <td class="tg-yw4l">if true and autoSlide mode are enabled then The slides appear in random order.</td>
      <td class="tg-yw4l">false</td>
    </tr>
    <tr>
      <td class="tg-yw4l">9</td>
      <td class="tg-yw4l">loop</td>
      <td class="tg-yw4l">if true, in presentation mode , after last slide will go to first slide. in auto slideMode, the presentation will play in loop.</td>
      <td class="tg-yw4l">false</td>
    </tr>
    <tr>
      <td class="tg-yw4l">10</td>
      <td class="tg-yw4l">background</td>
      <td class="tg-yw4l">color of presentation background.</td>
      <td class="tg-yw4l">false</td>
    </tr>
    <tr>
      <td class="tg-yw4l">11</td>
      <td class="tg-yw4l">transition</td>
      <td class="tg-yw4l">transition types options: "slid","fade","default","random". </td>
      <td class="tg-yw4l">"default"</td>
    </tr>
    <tr>
      <td class="tg-yw4l">12</td>
      <td class="tg-yw4l">transitionTime</td>
      <td class="tg-yw4l">Time delay in seconds between slides.</td>
      <td class="tg-yw4l">1</td>
    </tr>
  </table>
  
 ### keyboard shortcuts:
 ```
  "Left arrow" or "Backspace"  - back to previous slide.
  "Right arrow" or "Space" or "Enter" - go to next slide.
  "Delete" - go to first slide.
  "Esc" - exit from presentation mode.
  "F5" - enter to presentation mode.
  "F2" - full screen mode (in presentation mode), "Esc" to exit from fullscreen mode.
  "F8" - strt play auto Slide mode.
 ```
## v1.3.3
### fixed some minor issue
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
