$(function () {
  'use strict';

  $('#menuToggle, .btn-close').on('click', function (e) {
    e.preventDefault();
  });

  $('.dropdown-menu a').click(function(e) {
    e.stopPropagation();
  });

  /* ---------------------------------------------------------
   *  Background
   * --------------------------------------------------------- */

  // $.backstretch([
  //   '../images/background/1.jpeg'
  // ], {duration: 2000, fade: 1500});

  /* ---------------------------------------------------------
   *  WOW
   * --------------------------------------------------------- */

  new WOW({
    mobile: false
  }).init();


  /* ---------------------------------------------------------
   *  Scroll arrow
   *  -------------------------------------------------------- */

  $('#scroll').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-($('#nav').height()-1)
        }, 1200);
        return false;
      }
    }
  });


  /* ---------------------------------------------------------
   *  Timeline
   * --------------------------------------------------------- */

  $("[data-toggle='collapse']").on("click", function(e){
    e.preventDefault();
    var id = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]');
    var icon = $(id).children("i");
    if(/fa-minus/i.test($(icon).attr("class"))){
        $(icon).removeClass("fa-minus").addClass("fa-plus");
    }
    else{
      $(icon).removeClass("fa-plus").addClass("fa-minus");
    }
  });


  /* ----------------------------------------------------------------- 
   * Navigation
   * ----------------------------------------------------------------- */

   // Affix navigation on 130px from head.
  $('#nav').affix({
      offset: {
        top: $('#home').height() - $('#nav').height()
      }
  });

  // Affix navigation bar on 130px from head.
  $('.navbar-nav').find('a').on('click', function(e){
    e.preventDefault();
    if($(this).attr('href') !== '#'){
      $.scrollTo($(this).attr('href'),1000, {offset: {left: 0, top: -($('#nav').height()-1)}});
    }
  });

  /* ----------------------------------------------------------------- 
   * Google Analytics
   * ----------------------------------------------------------------- */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-25227535-1', 'auto');
  ga('send', 'pageview');
  
});
