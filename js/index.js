$(document).ready(function(){

    $('.nav-link').click(function() { 
       var testClass=$(this).hasClass('color')
       if(testClass===true) {
        return false
       }else{
        $(this).parent()
        .siblings()
        .children()
        .removeClass('color')
        $(this).addClass('color')
       }
        
    });

    $('#order').click(function() { 
     let number = $('.zero')
     number.text(parseInt(number.text())+1)
     $('#order').text('remove from cart').click(function(){
        number.text(parseInt(number.text())-1)
     })
    
    });


    $('#order-1').click(function() { 
      let number = $('.zero')
      number.text(parseInt(number.text())+1)
      $('#order-1').text('remove from cart').click(function(){
         number.text(parseInt(number.text())-1)
      })
     
     });


     $('#order-2').click(function() { 
      let number = $('.zero')
      number.text(parseInt(number.text())+1)
      $('#order-2').text('remove from cart').click(function(){
         number.text(parseInt(number.text())-1)
      })
     
     });







  $('#range-slider').on('input change', function(){
   $('.text').css('font-size',$(this).val()+'px')
  })
    
  $('#color-change').on('input change', function(){

   $('.text').css('color',$(this).val())
   }) 
   

   $('.price').on('input change', function(){
      $(this)=$('quantite')*10000
      $(this).val()
   });







    
})