$(document).ready(function () {
    attivaSlider()
    autoplay()
});

function autoplay(){

    setInterval( () =>{
        console.log('- autoplay next')
        nextImage()
    }, 10000 )
}

function nextImage(){

    if(!$('.active').hasClass('last')){

        $('img.active')
            .next()
            .addClass('active')
            .siblings('img')
            .removeClass('active')
            
            // console.log('ramo true')

    } else {

        $('img.active')
            .removeClass('active')

        $('.slider')
            .find('img.first')
            .addClass('active')
        
        // console.log('ramo true')
    }

    console.log($('img.active').attr('src'))
        
}

function prevImage(){

    if(!$('.active').hasClass('first')){

            $('img.active')
                .prev('img')
                .addClass('active')
                .siblings('img')
                .removeClass('active')

            // console.log('ramo true')

        } else {

            $('img.active')
                .removeClass('active')

            $('.slider')
                .find('img.last')
                .addClass('active')

            // console.log('ramo true')
        }
        
        console.log($('img.active').attr('src'))
}

function attivaSlider(){

    console.log('attiva slider')
    console.log($('.slider img.active').attr('src'))
    
    console.log('active arrow right')
    $('#right').click( () => {
        console.log('- pulsante prev premuto')
        nextImage()
    })

    console.log('active arrow left')
    $('#left').click( () => {
        console.log(' - pulsante next premuto')
        prevImage()
    })

}