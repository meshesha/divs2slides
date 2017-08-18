(function( $ ){
    var pptxjslideObj = {
        nextSlide: function(){
            var data = pptxjslideObj.data;
            var isLoop = data.loop;
            if (data.slideCount < data.totalSlides-1){
                pptxjslideObj.gotoSlide(data.slideCount+1);
                //pptxjslideObj.data.slideCount++;
            }else{
                if(isLoop){
                    pptxjslideObj.gotoSlide(1);
                }
            }
            return this;
        },
        prevSlide: function(){
            var data = pptxjslideObj.data;
            if (data.slideCount > 1){
                pptxjslideObj.gotoSlide(data.slideCount-1);
                //pptxjslideObj.data.slideCount--;
            }
            return this;
        },
        gotoSlide: function(idx){
            var index = idx - 1;
            var data = pptxjslideObj.data;
            var slides = data.slides;
            var transType = data.transition; /*"slid","fade","default" */
            if(transType=="random"){
                var tType = ["","default","fade","slid"];
                var randomNum = Math.floor(Math.random() * 3) + 1;
                transType = tType[randomNum];
            }
            var transTime = 1000*(data.transitionTime);
            if (slides[index]){
                var nextSlide = $(slides[index]);
                if (index >= 1 && $(slides[index - 1]).is(":visible")){
                    if(transType=="default"){
                        $(slides[index - 1]).hide(transTime);
                    }else if(transType=="fade"){
                        $(slides[index - 1]).fadeOut(transTime);
                    }else if(transType=="slid"){
                        $(slides[index - 1]).slideUp(transTime);
                    }
                    
                }else if(index >= 0 && $(slides[index + 1]).is(":visible")){
                    if(transType=="default"){
                        $(slides[index + 1]).hide(transTime); 
                    }else if(transType=="fade"){
                        $(slides[index + 1]).fadeOut(transTime);
                    }else if(transType=="slid"){
                        $(slides[index + 1]).slideUp(transTime);
                    }
                }
                if(transType=="default"){
                    nextSlide.show(transTime); 
                }else if(transType=="fade"){
                    nextSlide.fadeIn(transTime);
                }else if(transType=="slid"){
                    nextSlide.slideDown(transTime);
                }
                pptxjslideObj.data.slideCount = idx;
                $("#slides-slide-num").html(idx);
            }
            return this;
        },
        keyDown: function(event){
            event.preventDefault();
            var key = event.keyCode;
            //console.log(key);
            switch(key){
                case(37): // Left arrow
                case(8): // Backspace
                    pptxjslideObj.prevSlide();
                    break;
                case(39): // Right arrow
                case(32): // Space 
                case(13): // Enter 
                    pptxjslideObj.nextSlide();
                    break; 
                case(27): //Esc
                    //if in auto mode , stop auto mode TODO
                    var div_id = pptxjslideObj.data.divId;
                    $("#"+div_id+" .slide").hide();
                    pptxjslideObj.gotoSlide(2);
                    break;
                case(46): // Delete
                    pptxjslideObj.closeSileMode();
                    break;
                case(113): // F1
                    pptxjslideObj.fullscreen();
                break;
                case(119): // F8
                    pptxjslideObj.startAutoSlide();
                break;
            }
            return true;
        },
        closeSileMode: function(){
            var div_id= pptxjslideObj.data.divId;
            $("#"+div_id+" .slides-toolbar").hide();
            $("#"+div_id+" .slide").show();
            $(document.body).css("background-color",pptxjslideObj.data.prevBgColor)
        },
        startAutoSlide: function(){
            var data = pptxjslideObj.data;
            var isStrtLoop = data.isLoop;
            t = data.loop;
            //console.log(isStrtLoop)
            if(t && !isStrtLoop){
                var timeBtweenSlides = t*1000; //milisecons
                data.isLoop = true;
                data.loopIntrval = setInterval(function(){
                    pptxjslideObj.nextSlide();
                }, timeBtweenSlides);
            }else if(isStrtLoop){
                clearInterval(data.loopIntrval);
                data.isLoop = false;
            }
        },
        fullscreen: function(){
            if (!document.fullscreenElement &&    // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
            
        }

    };
    $.fn.divs2slides = function( options ) {
        var target = $(this);
        var divId = target.attr("id");
        var slides = target.children();
        var totalSlides = slides.length;
        var prevBgColor;
        var settings = $.extend({
            // These are the defaults.
            first: 1,
            nav: true, /** true,false */
            navNextTxt:"&#8250;",
            navPrevTxt: "&#8249;",
            keyBoardShortCut: true, /** true,false */
            showSlideNum: true, /** true,false */
            showTotalSlideNum: true, /** true,false */
            autoSlide:false, /** false or seconds , F8 to active ,keyBoardShortCut: true */
            loop: false,  /** true,false */
            background: false, //false or color
            transition: "default", /* transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
            transitionTime: 1 /** transition time between slides in seconds */
        }, options );
        $("#"+divId+" .slide").hide();
        var slideCount = settings.first
        pptxjslideObj.data = {
            target: target,
            divId: divId,
            slides:slides,
            totalSlides:totalSlides,
            slideCount: slideCount,
            transition: settings.transition,
            transitionTime: settings.transitionTime,
            prevBgColor: prevBgColor,
            loop: settings.loop,
            isLoop: false
        }
        if(settings.background != false){
            prevBgColor = $(document.body).css("background-color");
            pptxjslideObj.data.prevBgColor = prevBgColor;
            //console.log(prevBgColor)
            $(document.body).css("background-color",settings.background)
        }
        if (settings.nav){
            // Create navigators and register events
            $("#"+divId).prepend(
                $("<div></div>").attr({
                    "class":"slides-toolbar",
                    "style":"width: 100%; padding: 10px; text-align: center;"
                })                
            );
            $("#"+divId+" .slides-toolbar").prepend(
                $("<button></button>").attr({
                    "id":"slides-next",
                    "class":"slides-nav",
                    "alt":"Next Slide",
                    "style":"float: right;"
                }).html(settings.navNextTxt).on("click", pptxjslideObj.nextSlide)
            );
            if(settings.showTotalSlideNum){
                $("#"+divId+" .slides-toolbar").prepend(
                    $("<span></span>").attr({
                        "id":"slides-total-slides-num",
                        "class":"slides-nav",
                        "style":"color: red;"
                    }).html(pptxjslideObj.data.totalSlides)
                );
            }
            if(settings.showSlideNum && settings.showTotalSlideNum){
                $("#"+divId+" .slides-toolbar").prepend(
                    $("<span></span>").attr({
                        "id":"slides-slides-num-separator",
                        "class":"slides-nav",
                        "style":"color: red;"
                    }).html(" / ")
                );

            }
            if(settings.showSlideNum){
                $("#"+divId+" .slides-toolbar").prepend(
                    $("<span></span>").attr({
                        "id":"slides-slide-num",
                        "class":"slides-nav",
                        "style":"color: red;"
                    }).html(pptxjslideObj.data.slideCount)
                );
            }
            $("#"+divId+" .slides-toolbar").prepend(
                $("<button></button>").attr({
                    "id":"slides-prev",
                    "class":"slides-nav",
                    "alt":"Prev. Slide",
                    "style":"float: left;"
                }).html(settings.navPrevTxt).bind("click", pptxjslideObj.prevSlide)
            );

            // Resize navigators
            //resize();
            //$(window).bind("resize.slides", resize());
            

        }
        // Keyboard shortcuts
        if (settings.keyBoardShortCut)
            $(document).bind("keydown",pptxjslideObj.keyDown);

        // Go to first slide
        pptxjslideObj.gotoSlide(slideCount);

    }
})(jQuery);
