$(document).ready(function () {
    attivaSlider()
    autoplay()
});

// dopo ogni cambio immagine aspetta n secondi
var timeAutoplay = 10000;

function autoplay(){

    setTimeout( () =>{
        console.log('- autoplay next')
        nextImage()
    }, timeAutoplay )
}

function nextImage(){

    if(!$('.active').hasClass('last')){

        $('img.active')
            .next()
            .addClass('active')
            .siblings('img')
            .removeClass('active')
            
            // console.log('ramo true')

        $('.pagesCircle .circles.active')
            .removeClass('active')
            .next()
            .addClass('active')

    } else {

        $('img.active')
            .removeClass('active')

        $('.slider')
            .find('img.first')
            .addClass('active')

        $('#circle .circles.active')
            .removeClass('active')

        $('#circle')
            .find('.circles.first')
            .addClass('active')
        
        // console.log('ramo true')
    }

    console.log($('img.active').attr('src'))

    setTimeout(nextImage, timeAutoplay)
        
}

function prevImage(){

    if(!$('.active').hasClass('first')){

            $('img.active')
                .prev('img')
                .addClass('active')
                .siblings('img')
                .removeClass('active')

            $('.pagesCircle .circles.active')
                .removeClass('active')
                .prev()
                .addClass('active')
        

            // console.log('ramo true')

        } else {

            $('img.active')
                .removeClass('active')

            $('.slider')
                .find('img.last')
                .addClass('active')

            $('#circle .circles.active')
            .removeClass('active')

            $('#circle')
                .find('.circles.last')
                .addClass('active')

            // console.log('ramo true')
        }
        
        console.log($('img.active').attr('src'))
}

function attivaSlider(){

    console.log('attiva slider')
    console.log($('.slider img.active').attr('src'))
    
    // click sui pulsante next
    console.log('active arrow right')
    $('#right').click( () => {
        console.log('- pulsante prev premuto')
        nextImage()
    })

    // click sul pulsante prev
    console.log('active arrow left')
    $('#left').click( () => {
        console.log(' - pulsante next premuto')
        prevImage()
    })

    // pressione click su keyboard arrow left e right
    console.log('attiva pulsanti frecce')
    $('body').keydown(function (e) { 
        
        // key -> and key A
        console.log('pulsante premuto: '+e.keyCode)
        if(e.keyCode == 39 || Element.keyCode == 68 ){
            console.log('- pulsante key array right')
            nextImage()

        // key <- and key D
        } else if(e.keyCode == 37  || Element.keyCode == 65){
            console.log('- pulsante key array left')
            prevImage()
        }
    });
}