import { Location } from "./sections/Locations"
import { Slide } from "./sections/Slideshow"

export type Content = {
    slides: Slide[]
    locations: Location[]
}

export const contentData: Content = {
    slides: [
        {
            image: "/camp.jpg",
            headline: "'Earth provides enough to satisfy every man's needs, but not every man's greed.' ~ Gandhi",
        },
        {
            image: "/occupy.jpg",
            headline: "A forum for Unconditional Giving and Unconditional Receiving",
        },
        {
            image: "/cafe.jpg",
            headline: "Dare to Give - Dare to Receive",
        },
    ],
    locations: [
        {
            "city": "Amsterdam",
            "venue": "Cafe de Barones",
            "address": "Torensteeg 2, 1012 TH Amsterdam",
            "googleMaps": "https://g.co/kgs/5BEcEZf",
            "phone": "+31 20 427 4079"
        },
        {
            "city": "Berlin",
            "venue": "Curious Fox: English Books",
            "address": "Flughafenstrasse 22, 12053 Berlin",
            "googleMaps": "https://g.co/kgs/TH3tv5u",
            "phone": null
        },
        {
            "city": "Berlin",
            "venue": "Frollein Langer Cafe Bar",
            "address": "Weisestrasse 34, Neunkoelln, 12049 Berlin",
            "googleMaps": "https://g.co/kgs/rE6rbzK",
            "phone": null
        },
        {
            "city": "Berlin",
            "venue": "Tempelhof Arche Metropolis",
            "address": "Kottbusser Damm 25-26 - office address, 10967 Berlin",
            "googleMaps": "https://g.co/kgs/QkLtXXL",
            "phone": null
        },
        {
            "city": "Berlin",
            "venue": "Das Baumhaus",
            "address": "Gerichtstrasse 23, 13347 Berlin",
            "googleMaps": "https://g.co/kgs/qSWZwch",
            "phone": null
        },
        {
            "city": "Berlin",
            "venue": "TauschLaden",
            "address": "Mareschstrasse 10, 12055 Berlin-Neukolln",
            "googleMaps": "https://g.co/kgs/LkAAB2n",
            "phone": null
        },
        {
            "city": "Leipzig",
            "venue": "Neues Sauspiel",
            "address": "Lutzner Strasse 29, 04177 Leipzig",
            "googleMaps": "https://g.co/kgs/EQdmcPP",
            "phone": null
        },
        {
            "city": "England",
            "venue": "Harbour House, The Promenade",
            "address": "Kingsbridge, Devon TQ7 1JD",
            "googleMaps": "https://maps.app.goo.gl/5xfC2jkhS9FR7SWEA",
            "phone": null
        },
        {
            "city": "Norway",
            "venue": "Cafe Gul",
            "address": "3182 Horten",
            "googleMaps": "https://g.co/kgs/rvLnZtv",
            "phone": null
        }
        // Add more locations as needed
    ],
}