export default function BoxLayout({ children, imgUrl, imgAlt, isReverse }) {
  return (
    <div className="desktop:grid desktop:grid-cols-12 desktop:gap-10 pb-12">
        <div className={isReverse ? `flex justify-center items-center py-6 col-span-5 desktop:order-2` : `flex justify-center items-center py-6 col-span-5` }>
          <img 
            src={imgUrl} 
            alt={imgAlt}
          />
        </div>
        <div className="flex flex-col justify-center items-center desktop:items-start col-span-7">
          { children }
        </div>
    </div>
  )
}
