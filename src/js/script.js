$(function(){
    $('ul.links li:first').addClass('active');
    $('.box article').hide();
  
  
    $('.box article:first').show();
    $('ul.links li').on('click',function(){
      $('ul.links li').removeClass('active');
      $(this).addClass('active')
      $('.box article').hide();
   
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
      return false;
    });
  })


  
  let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let selectValue = document.getElementById('selectValue')
let progressBar = document.getElementById('progressBar')

selectValue.innerHTML = slider.value

slider.oninput = function() {
  selectValue.innerHTML = this.value
  selector.style.left = this.value + '%'
  progressBar.style.width = this.value + '%'
}