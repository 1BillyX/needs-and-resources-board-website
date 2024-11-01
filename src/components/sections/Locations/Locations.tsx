import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { openInNewTab } from "@/lib/openInNewTab"
import { Copy } from "lucide-react"
import { SiGooglemaps } from "react-icons/si"
import { Location } from "./types"


export type Locations = {
    locations: Location[]
}

export const Locations = ({ locations }: Locations) => {

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    return (<section id="locations" className="container mx-auto px-4 py-8" >
        <h2 className="text-3xl font-bold mb-8" > Our Locations </h2>
        < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            {
                locations.map((location, index) => (
                    <Card key={index} >
                        <CardContent className="p-6 h-full flex flex-col" >
                            <h3 className="text-xl font-bold mb-2" > {location.city} </h3>
                            < p className="font-semibold mb-2" > {location.venue} </p>
                            < p className="text-muted-foreground mb-2" > {location.address} </p>
                            {location.phone && <p className="text-muted-foreground" > {location.phone} </p>}
                            <span className="flex-1" />
                            {location.googleMaps &&
                                <Button onClick={() => openInNewTab(location.googleMaps || "")} className="mt-4" variant="outline">
                                    <SiGooglemaps />
                                    Get Directions
                                </Button>
                            }
                            <Button onClick={() => copyToClipboard(location.address)} className="mt-4" variant="outline">
                                <Copy />
                                Copy Address
                            </Button>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    </section>)
}