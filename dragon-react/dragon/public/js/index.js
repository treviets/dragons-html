
$(document).ready(function() {
    
    var nav = $("#header");
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 0) {
    //         nav.addClass("f-nav");
          
    //     } else {
    //         nav.removeClass("f-nav");
   
           
    //     }
    // });
   
    window.onscroll = function() {myFunction()};
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("f-nav");
        } else {
            header.classList.remove("f-nav");
        }
    }
    $( "#checkIn" ).closest(".react-datepicker-wrapper").css( "width", "90%" );
    $( "#checkOut" ).closest(".react-datepicker-wrapper").css( "width", "90%" );

    var active_sub_menu = $('#root').find('.home');
    $( "#popoverLegacyPop").parents().addClass( "popoverSearch" );

    if (active_sub_menu.length){
        $("#header-search").show();
    } else{
        $("#header-search").hide();
    }
    // $( "#slider-range" ).slider({
    //     range: true,
    //     min: 230000,
    //     max: 25000000,
    //     values: [ 230000, 25000000 ],
    //     slide: function( event, ui ) {
    //       $( "#amount" ).html( "₫" + ui.values[ 0 ] + " - ₫" + ui.values[ 1 ] + "+" );
    //       $( "#amount-hide" ).html( "₫" + ui.values[ 0 ] + " - ₫" + ui.values[ 1 ] + "+" );
    //       $( "#amount1" ).val(ui.values[ 0 ]);
    //       $( "#amount2" ).val(ui.values[ 1 ]);
    //     }
    //   });
    // $( "#amount" ).html( "₫" + $( "#slider-range" ).slider( "values", 0 ) +
    //    " - ₫" + $( "#slider-range" ).slider( "values", 1 )+"+" );
    // $( "#amount-hide" ).html( "₫" + $( "#slider-range" ).slider( "values", 0 ) +
    // " - ₫" + $( "#slider-range" ).slider( "values", 1 )+"+" );


    $( "#amount-range-private" ).hide();
    // $( "#select-range" ).show();
    $( "#btn-open-range" ).click(function(){
        if ($("#amount-range-private").is(":visible")){
            $( "#amount-range-private" ).hide(300);
            $( "#select-range" ).show(300);
            $(this).find("._d5depq").css("transition-duration","0.3s")
            $(this).find("._d5depq").css("transform","rotate(180deg)")
            
        }else {
            $( "#amount-range-private" ).show(300);
            $( "#select-range" ).hide(300);
            $(this).find("._d5depq").css("transition-duration","0.3s")
            $(this).find("._d5depq").css("transform","rotate(0deg)")
        }

    })




    $( "#Entire" ).hide();
    $( "#Entire-checkbox" ).show();
    $( "#open-checkbox" ).click(function(){
        if ($("#Entire").is(":visible")){
            $( "#Entire" ).hide(300);
            $( "#Entire-checkbox" ).show(300);
            $(this).find("._d5depq").css("transition-duration","0.3s")
            $(this).find("._d5depq").css("transform","rotate(180deg)")
            
        }else {
            $(this).find("._d5depq").css("transition-duration","0.3s")
            $(this).find("._d5depq").css("transform","rotate(0deg)")
            $( "#Entire" ).show(300);
            $( "#Entire-checkbox" ).hide(300);
        }

    })



    $("#DynamicFilterCheckboxItem").prop("checked", false);
      $("#DynamicFilterCheckboxItem-room_types-Entire_home").click(function () {
        if ($(this).is(":checked")) {
            console.log("click")
            $("#DynamicFilterSpanItem-room_types-Entire_home").removeClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Entire_home").addClass("_veamvre")
            $("#DynamicFilterSpanItem-room_types-Entire_home").append("<span class='_1op4fol'><svg viewBox='0 0 52 52' fill='currentColor' fill-opacity='0' stroke='currentColor' stroke-width='3' focusable='false' aria-hidden='true' role='presentation' stroke-linecap='round' stroke-linejoin='round' style='height: 1em; width: 1em; display: block; overflow: visible;'><path d='m19.1 25.2 4.7 6.2 12.1-11.2'></path></svg></span>");

        } else {
            //unchecked
            $("#DynamicFilterSpanItem-room_types-Entire_home").addClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Entire_home").removeClass("_veamvre")
            var element = $("#DynamicFilterSpanItem-room_types-Entire_home");
            element.find("span").remove();
        }
          
    });

    $("#DynamicFilterCheckboxItem-room_types-Private_room").prop("checked", false);
      $("#DynamicFilterCheckboxItem-room_types-Private_room").click(function () {
        if ($(this).is(":checked")) {
            $("#DynamicFilterSpanItem-room_types-Private_room").removeClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Private_room").addClass("_veamvre")
            $("#DynamicFilterSpanItem-room_types-Private_room").append("<span class='_1op4fol'><svg viewBox='0 0 52 52' fill='currentColor' fill-opacity='0' stroke='currentColor' stroke-width='3' focusable='false' aria-hidden='true' role='presentation' stroke-linecap='round' stroke-linejoin='round' style='height: 1em; width: 1em; display: block; overflow: visible;'><path d='m19.1 25.2 4.7 6.2 12.1-11.2'></path></svg></span>");


        } else {
            //unchecked
            $("#DynamicFilterSpanItem-room_types-Private_room").addClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Private_room").removeClass("_veamvre")
            var element = $("#DynamicFilterSpanItem-room_types-Private_room");
            element.find("span").remove();
        }
          
    }); 

    $("#DynamicFilterCheckboxItem-room_types-Shared_room").prop("checked", false);
      $("#DynamicFilterCheckboxItem-room_types-Shared_room").click(function () {
        if ($(this).is(":checked")) {
            console.log("click")
            $("#DynamicFilterSpanItem-room_types-Shared_room").removeClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Shared_room").addClass("_veamvre")
            $("#DynamicFilterSpanItem-room_types-Shared_room").append("<span class='_1op4fol'><svg viewBox='0 0 52 52' fill='currentColor' fill-opacity='0' stroke='currentColor' stroke-width='3' focusable='false' aria-hidden='true' role='presentation' stroke-linecap='round' stroke-linejoin='round' style='height: 1em; width: 1em; display: block; overflow: visible;'><path d='m19.1 25.2 4.7 6.2 12.1-11.2'></path></svg></span>");


        } else {
            //unchecked
            $("#DynamicFilterSpanItem-room_types-Shared_room").addClass("_fhj4ui")
            $("#DynamicFilterSpanItem-room_types-Shared_room").removeClass("_veamvre")
            var element = $("#DynamicFilterSpanItem-room_types-Shared_room");
            element.find("span").remove();
        }
          
    });



});

