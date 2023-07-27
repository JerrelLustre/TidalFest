import SubBanner from '../components/SubBanner'
import H1Container from '../components/H1Container'

export default function PageLayout({ children, h1Text, sloganText }) {
  return (
    <div className="pt-100">
        <H1Container text={h1Text} />
        <SubBanner text={sloganText} />
        { children }
    </div>
  )
}
