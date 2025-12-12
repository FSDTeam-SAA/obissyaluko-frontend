import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BlogCardProps {
  image: string
  title: string
  date: string
}

export default function BlogCard({ image, title, date }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-none bg-card rounded-none">
      <div className="w-full h-[100px] md:h-[275px] relative overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} width={1000} height={1000} className="object-cover" />
      </div>
      <div className="p-4 space-y-5">
        <div className=" text-xs md:text-base text-[#BACDDD] font-medium uppercase tracking-wider">{date}</div>
        <h3 className=" text-sm md:text-xl font-semibold leading-tight text-[#000000]">{title}</h3>
        <Button
          variant="outline"
          className="text-primary border-2 h-[35px]  md:h-[40px] rounded-[8px] border-[#CD9B46] hover:bg-transparent hover:text-[#CD9B46] text-[#CD9B46] transition-colors bg-transparent"
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}
