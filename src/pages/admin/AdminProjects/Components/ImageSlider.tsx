import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import { ABI_BASE_IMG } from "@/lib";

export const ImageSlider: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
    const [index, setIndex] = useState(0)

    if (!images || images.length === 0) return null

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

    return (
        <div className="relative w-full h-full overflow-hidden rounded-md">
            <img
                src={`${images[index]}`}
                alt={`${alt}-${index}`}
                className="w-full h-full object-cover transition-all"
            />

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </>
            )}

            {/* Small dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
