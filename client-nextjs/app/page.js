import Image from 'next/image'
import Product from '@/components/Product'
import CardSection from '@/components/CardSection'

export default function Home() {
  return (
    <main className="">
      <CardSection>
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
      </CardSection>
    </main>
  )
}
