$(function(){"use strict";$("#menuToggle, .btn-close").on("click",function(t){t.preventDefault()}),$(".dropdown-menu a").click(function(t){t.stopPropagation()}),$.backstretch(["../images/background/1.jpeg"],{duration:2e3,fade:1500}),new WOW({mobile:!1}).init(),$("#scroll").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top-($("#nav").height()-1)},1200),!1}}),$("[data-toggle='collapse']").on("click",function(t){t.preventDefault();var e=$('.v-icon[data-target="'+$(this).attr("data-target")+'"]'),a=$(e).children("i");/fa-minus/i.test($(a).attr("class"))?$(a).removeClass("fa-minus").addClass("fa-plus"):$(a).removeClass("fa-plus").addClass("fa-minus")});var t=$("#portfolio-container");t.imagesLoaded(function(){t.shuffle({itemSelector:".portfolio-item",speed:100}),$("#filter a").click(function(e){e.preventDefault(),$("#filter a").removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-group");t.shuffle("shuffle",a)})}),$(".GITheWall").GITheWall({nextButtonClass:"fa fa-chevron-right",prevButtonClass:"fa fa-chevron-left",closeButtonClass:"fa fa-times",dynamicHeight:!1,onShow:function(){$("#portfolio-container").slideDown(300).fadeOut(300),$(".filter-tags").slideDown(300).fadeOut(300),$("#portfolio-more").slideDown(300).fadeOut(300)},onHide:function(){$("#portfolio-container").slideUp(300).fadeIn(300),$(".filter-tags").slideUp(300).fadeIn(300),$("#portfolio-more").slideUp(300).fadeIn(300)}}),$("#nav").affix({offset:{top:$("#home").height()-$("#nav").height()}}),$(".navbar-nav").find("a").on("click",function(t){t.preventDefault(),"#"!==$(this).attr("href")&&$.scrollTo($(this).attr("href"),1e3,{offset:{left:0,top:-($("#nav").height()-1)}})})});