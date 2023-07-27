export default function SectionLayout({ children }) {
  return (
    <section className="bg-jade-100">
        <div className="bg-section-bg bg-cover bg-center">
            {children}
        </div>
    </section>
  )
}
