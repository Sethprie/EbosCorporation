import { BioLink } from "@/components/bio-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EBOS Corporation - Bio Links",
  description: "Connect with EBOS Corporation on all social media platforms",
  openGraph: {
    title: "EBOS Corporation - Bio Links",
    description: "Connect with EBOS Corporation on all social media platforms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EBOS Corporation - Bio Links",
    description: "Connect with EBOS Corporation on all social media platforms",
  },
}

export default function BioPage() {
  return <BioLink />
}
