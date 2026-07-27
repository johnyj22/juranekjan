"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type GalleryImage = {
  src: string
  alt: string
}

export function PropertyGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card">
        <Image
          key={images[active].src}
          src={images[active].src || "/placeholder.svg"}
          alt={images[active].alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Zobrazit fotku ${index + 1}: ${image.alt}`}
              aria-current={index === active}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-lg border transition-all",
                index === active
                  ? "border-brand ring-2 ring-brand/40"
                  : "border-border opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 25vw, 15vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
