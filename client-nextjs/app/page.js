import Image from 'next/image'
import Product from '@/components/Product'
import CardSection from '@/components/CardSection'
import Category from '@/components/Category'
import Display from "@/components/Display";


export default function Home() {
  return (
<>
<div className='menu menu-horizontal'>
  <Category/>
  <Display/>
</div>

    <div>
      <CardSection>
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
      </CardSection>

      <CardSection>
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
      </CardSection>

      <CardSection>
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
        <Product title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" img='./vercel.svg' categories={["Fashion", "Products"]} size="M" color="Red" price={49.99} />
      </CardSection>
    </div>
    </>
  )
}
