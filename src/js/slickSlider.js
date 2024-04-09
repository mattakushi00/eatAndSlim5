import $ from 'jquery'
import 'slick-carousel'

const breakpoint = 1280
const mobileWidthMediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

const expertSettings = {
    rows: 0,
    infinite: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        }
    ]
}

const expertSliderHandler = () => {
    $('.expert__list').filter('.slick-initialized').slick('unslick')
    return window.innerWidth > breakpoint ? undefined : $('.expert__list').slick(expertSettings)
}

expertSliderHandler()
mobileWidthMediaQuery.addEventListener('change', expertSliderHandler)

$('.lessons__list').slick({
    rows: 2,
    infinite: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                rows: 1,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                rows: 1,
            }
        }

    ]

})

$('.comments__list').slick({
    rows: 0,
    infinite: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: true,
})
