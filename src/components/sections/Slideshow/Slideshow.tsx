import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Slide } from "./types"



export type Slideshow = {
    slides: Slide[]
}

export const Slideshow = ({ slides }: Slideshow) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section id="home" className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img
                            alt={slide.headline}
                            className="w-full h-[700px] object-cover opacity-75 filter"
                            height="700"
                            src={slide.image}
                            style={{
                                aspectRatio: "800/700",
                                objectFit: "cover",
                            }}
                            width="800"
                        />
                        <div className="container max-w-screen-md absolute bottom-5 left-5">
                            <h2 className="text-white leading-normal text-7xl font-bold p-2 rounded opacity-75">
                                {slide.headline}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                className="absolute top-1/2 left-4 transform -translate-y-1/2"
                onClick={prevSlide}
                variant="default"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 width-10"
                onClick={nextSlide}
                variant="default"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </section>
    )
}