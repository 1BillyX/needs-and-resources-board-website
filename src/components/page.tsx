"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Mail, Menu, Rocket } from "lucide-react"
import { useState } from "react"
import { Content, contentData } from "./data"
import { Contact } from "./sections/Contact"
import { Details } from "./sections/Details/Details"
import { GoogleMaps } from "./sections/GoogleMaps/GoogleMaps"
import { Locations } from "./sections/Locations"
import { Slideshow } from "./sections/Slideshow/Slideshow"




export function Page() {

    const [content] = useState<Content>(contentData)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleContactClick = () => {
        window.location.href = "mailto:unconditional@needsandresourcesboard.org"
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
                <div className="flex items-center space-x-4">
                    <img
                        alt="Needs and Resources Board Logo"
                        className="h-8 w-8"
                        height="32"
                        src="/logo.svg"
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <h1 className="text-2xl font-bold">Needs and Resources Board</h1>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col space-y-4 h-full">
                            <div className="flex flex-col gap-4 flex-1">
                                <button onClick={() => scrollToSection("home")} className="text-left hover:underline text-xl">
                                    Photos
                                </button>
                                <button onClick={() => scrollToSection("about")} className="text-left hover:underline text-xl">
                                    About
                                </button>
                                <button onClick={() => scrollToSection("locations")} className="text-left hover:underline text-xl">
                                    Locations
                                </button>
                            </div>

                            <Button onClick={() => scrollToSection('contact')} variant="outline" className="flex items-center space-x-1">
                                <Rocket className="h-4 w-4" />
                                <span>Get started</span>
                            </Button>
                            <Button onClick={handleContactClick} className="flex items-center space-x-1">
                                <Mail className="h-4 w-4" />
                                <span>Contact Now</span>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
                <nav className="hidden lg:flex items-center space-x-6">
                    <button onClick={() => scrollToSection("home")} className="hover:underline">
                        Photos
                    </button>
                    <button onClick={() => scrollToSection("about")} className="hover:underline">
                        About
                    </button>
                    <button onClick={() => scrollToSection("locations")} className="hover:underline">
                        Locations
                    </button>
                    <Button onClick={() => scrollToSection('contact')} variant="outline" className="flex items-center space-x-1">
                        <Rocket className="h-4 w-4" />
                        <span>Get started</span>
                    </Button>
                    <Button onClick={handleContactClick} className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>Contact Now</span>
                    </Button>
                </nav>
            </header>
            <main className="flex-grow">

                <Slideshow slides={content.slides} />

                <Details />

                <Locations locations={content.locations} />

                <Contact />

                <GoogleMaps />
            </main>
            <footer className="bg-gray-100 py-4 text-center">
                <p>&copy; 2024 Needs and Resources Board. All rights reserved.</p>
            </footer>
        </div>
    )
}