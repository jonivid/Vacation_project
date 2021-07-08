import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export const MyCarousel = () => {
    return (
        <div>
            <Carousel fade className="carouselMain">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mocah.org/uploads/posts/4551228-forest-trees-house-vacation.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://marvel-b1-cdn.bc0a.com/f00000000053797/www.generalitravelinsurance.com/content/dam/gga/images/headers/header-dream%20vacation.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.shermanstravel.com/Advice/952x460_personclimbingmountain_istock.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpapershome.com/images/wallpapers/fuji-3840x2160-4k-hd-wallpaper-sakura-river-japan-travel-tourism-10327.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/d6PrtdUFal8/maxresdefault.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://travel.usnews.com/images/vacation_landing_hero.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
