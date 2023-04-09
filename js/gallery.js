// const filterBox = $('.galleryItem')



$('.galleryMenuItem').on('click', function() {
    let filterId = $(this).attr('id');
    $('.galleryItem').each(function() {
        let filterBox = $(this).attr('id');
        if (filterId != filterBox) {
            $(this).addClass('galleryHide');
        } else {
            $(this).removeClass('galleryHide');
        }
    });
});

// $('galleryItem').each(function() {
//     $(this).onTransitionEnd('transitionend webkitTransitionEnd oTransitionEnd', function () {
//         if ($(this).hasClass('scale')) {
//             console.log('popa');
//         }
//     });
// });
