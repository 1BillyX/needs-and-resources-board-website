import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { openInNewTab } from "@/lib/openInNewTab"


export const Details = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }



    return (
        <section id="about" className="sm:container mx-auto px-4 py-8 flex lg:flex-row gap-7 flex-col">
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">What is the Needs & Resources Board?</h2>
                <p className="text-lg mb-6">A forum for Unconditional Giving and Unconditional Receiving</p>
                <h3 className="text-2xl font-semibold mb-4">Intentions behind it</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>To help apply Resources to Needs directly.</li>
                    <li>To offer an alternative to the present reliance on money.</li>
                    <li>To allow the utilisation of dormant resources.</li>
                    <li>To encourage persons to share.</li>
                    <li>To Reduce the Fear of Lack.</li>
                    <li>To encourage less ownership of and more caretaking of this worlds resources.</li>
                    <li>To Connect People.</li>
                </ul>
            </div>

            <Card className="flex flex-col justify-center relative content-center flex-1">
                <img
                    src="/tomato.png"
                    className="rounded-xl opacity-25 filter grayscale absolute left-0 top-0 h-[100%] w-[100%] object-cover"
                />

                <CardContent className="p-6 flex flex-col justify-center content-center text-center gap-2 relative flex-wrap">

                    <h2 className="text-3xl font-bold mb-4">Get started</h2>
                    <p className="text-lg mb-6 w-2/3">Join our network and help build the community</p>


                    <Button className="mt-4" variant="outline" onClick={() => scrollToSection('contact')}>Join Now</Button>

                    <Button onClick={() => openInNewTab("/guide.pdf")}>Download Guideline.pdf</Button>
                </CardContent>
            </Card>
        </section>
    )
}