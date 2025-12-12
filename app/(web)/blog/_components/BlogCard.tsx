import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BlogCardProps {
  image: string
  title: string
  category: string
}

export default function BlogCard({ image, title, category }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-none bg-card">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <div className="text-xs text-primary font-medium uppercase tracking-wider">{category}</div>
        <h3 className="text-base font-semibold leading-tight text-foreground">{title}</h3>
        <Button
          variant="outline"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}
