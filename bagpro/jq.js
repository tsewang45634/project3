$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $(".navbar").addClass('n'); $(".a").hide(); $(".a").show(); $(".off").show();

    }
    else
    {
        $(".navbar").removeClass('n'); $(".a").hide(); $(".a").show();$(".off").hide();
    }
})
$(".off .clo").click(function(){
    $(".off").remove();
})
 
$(".off .pp").click(function(){
  $(".off").remove();
})

 
$(document).ready(function(){
    $("#nav").mouseover(function(){
      $(".shop").show();
    });
    $(".shop").mouseover(function(){
      $("#shop1").show();
    });
    $(".shop").mouseout(function(){
      $("#shop1").hide();
    });
    $("#nav").click(function(){
      $(".shop").hide();
    });
  });


 

  $(document).ready(function(){
    $("#pro").mouseover(function(){
      $(".products").show();
    });
    $(".products").mouseover(function(){
        $("#proo").show();
      });
      $("#proo").mouseout(function(){
          $(".products").hide();
        });
        $(".products").mouseout(function(){
          $("#proo").hide();
        });
        $("#pro").click(function(){
          $(".products").hide();
        });

      });



        $(document).ready(function(){
          $("#bi-2").mouseover(function(){
            $(".ab-search").show();
          });
          $(".ab-search").mouseover(function(){
              $("#sea-id").show();
            });
            $("#sea-id").mouseout(function(){
                $(".ab-search").hide();
              });
              $(".ab-search").mouseout(function(){
                $("#sea-id").hide();
              });
             
              $("#bi-2").click(function(){
                $(".ab-search").hide();
              });

    });
  



    $(document).ready(function(){
      $("#bi-3").mouseover(function(){
        $(".ab-setting").show();
      });
      $(".ab-setting").mouseover(function(){
          $("#set-id").show();
        });
        $("#set-id").mouseout(function(){
            $(".ab-setting").hide();
          });
          $(".ab-setting").mouseout(function(){
            $("#set-id").hide();
          });
         
          $("#bi-3").click(function(){
            $(".ab-setting").hide();
          });

});

   


$(document).ready(function(){
  $(".b3").mouseover(function(){
    $(".ab-cart").show();
  });
  $(".ab-cart").mouseover(function(){
      $("#cart-id").show();
    });
    $(".ad-cart").mouseout(function(){
        $("#cart-id").hide();
      });
     
      $(".b3").click(function(){
        $(".ab-cart").hide();
      });

});


$(document).ready(function () {
 
  $(function () {
      $("#my_date_picker").
      datepicker();
  });
}) 