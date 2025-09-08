interface CardProps {
  heading: string;
  plan: string;
  price: number;
  desc: string;
  isBest: boolean;
}

interface EnhancedCardProps {
  Card: React.ComponentType<CardProps>; // ✅ Component type that accepts CardProps
}

export default function Card({ heading, plan, price, desc, isBest }: CardProps){
    return <>
       
        <div className={`w-fit bg-white px-12 py-20 rounded-4xl flex flex-col gap-7 items-center justify-center
            ${isBest && "border-8 border-[#453C89]"}
        `}
        >
            <div className="text-2xl font-bold">{heading}</div>
            <div className="text-sm">{plan}</div>
            <div className="text-4xl font-bold">&#8377; {price} <span className="text-xl font-semibold">+GST</span></div>
            <div className="text-sm">{desc}</div>
            <div><button className="border-2 border-[#453C89] rounded-3xl text-[#453C89] text-xs px-6 py-2.5 cursor-pointer">Buy Now</button></div>
        </div>
    </>
}

export function EnhancedCard(WrappedCard: React.ComponentType<CardProps>) {
  return function Enhanced(props: CardProps) {
    return (
      <div className="w-fit px-1.5 pt-5 pb-1.5 bg-[#453C89] rounded-4xl">
        <div className="text-sm text-center font-bold text-white">Best Selling</div>
        <WrappedCard {...props} />
      </div>
    );
  };
}