// event pada saat di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href/link
    var tujuan = $(this).attr('href');
    
    // menangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // memindahkan element
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 40
    },1000, 'swing');


    

});