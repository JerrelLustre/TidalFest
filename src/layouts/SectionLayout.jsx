export default function SectionLayout({ children, backgroundImage }) {
  return (
    <section>
        <div 
          className="bg-section-bg bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            {children}
        </div>
    </section>
  )
}
