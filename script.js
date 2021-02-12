/*global $*/
$(document).ready(function () {
$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .header-nav-hamburger-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});
});