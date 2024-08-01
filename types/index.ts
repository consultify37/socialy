import { type } from "os"

export type Condition = {
  condition: string
  description: string
}

export type Faq = {
  question: string
  answear: string
}

export type Slide = { 
  id?: string
  link: string 
  image: File | string 
  file: null | { fileName: string, fileId: string } 
}

export type Category = {
  category: string
  id?: string
}

export type Program = {
  id: string
  bulletPoints: string[]
  categorie: string
  title: string
  text1: string
  text2: string
  suma: string
  descriere: string
  descriere2: string
  title2: string
  title3: string
  suma2: string
  descriere3: string
  conditions: Condition[]
  faqs: Faq[]
  imaginePrincipala: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
  backgroundImage: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
}

export type Faq2 = {
  id: number,
  intrebari:string,
  raspuns: string,
}

export type User = {
  id: string
  name: string
  isCreating?: boolean
  phone?: string
  email: string
  role: string
  roles: string[]
  inactive: boolean
  invoicePreference: string
  address?: {
    street: string
    county: string
    city: string
  }
  company?: {
    name: string
    identityNumber: string
  }
  profilePic?: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
}

export type Product = {
  stripe_price_id: string
  active: boolean
  id?: string
  name: string
  price: number
  oldPrice: number | null
  description: string
  description2: string
  description3: string
  category: string
  lastUpdated: number
  sells_number: number | undefined
  image: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
  reasons: string[]
  faqs: Faq[]
  title3: string
  createdAt: Date
  onSale: boolean
  file: { 
    file: { fileName: string, fileId: string } 
    url: string 
  }
}

export type ProductCategory = {
  category: string
  description: string
  image: { 
    file: { fileName: string, fileId: string } 
    image: string 
  } | null
  id?: string
}

export type Order = {
  id: string
  channel: string
  checkout_session_id: string
  createdAt: string
  customer_email: string
  line_items: { data: any[] }
  number_of_items: number
}

export type Article = {
  title: string
  id: string
  description: string
  featured: boolean
  active: boolean
  mainImage: any
  images: any[]
  content: string
  formattedContent: string
  duration: string
  author: string
  authorDescription: string
  category: string
  keywords: string[]
  createdAt: Date
  lastUpdated: Date
  formattedCreatedAt?: string
}

export type ArticleCategory = {
  category: string
  id: string
}