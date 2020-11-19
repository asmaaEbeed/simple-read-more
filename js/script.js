/*****Created by Asmaa Ebeed*****/
/*Toggle Mascot Divs */
$(function(){
    /*********1-Money mascot**********/
    $("#lnk_mascot_container").on('click', function(){
        $("#div_mascot").toggleClass('active');
        $("#div_mascot_algorithm, #div_mascot_api, #div_mascot_mail").removeClass('active');
    });
    // $("#lnk_mascot_container").mouseenter(function(){
    //     $("#div_mascot").addClass('active');
    //     $("#div_mascot_algorithm").removeClass('active');
    // });
    // $("#lnk_mascot_container").mouseleave(function(){
    //     $("#div_mascot").removeClass('active');
    // });
    /*********2-Algorithm mascot**********/
    $("#lnk_algorithm_container").on('click', function(){
        $("#div_mascot_algorithm").toggleClass('active');
        $("#div_mascot, #div_mascot_mail, #div_mascot_api").removeClass('active');
    });
    // });
    /*********3-Mail mascot**********/
    $("#lnk_mail_container").on('click', function(){
        $("#div_mascot_mail").toggleClass('active');
        $("#div_mascot, #div_mascot_api, #div_mascot_algorithm").removeClass('active');
    });
    /*********4-API mascot**********/
    $("#lnk_api_container").on('click', function(){
        $("#div_mascot_api").toggleClass('active');
        $("#div_mascot, #div_mascot_algorithm, #div_mascot_mail").removeClass('active');
    });
    
});