import Button from "../Button";
import NavList from "./NavList";
import Social from "./Social";
import Copyright from "./Copyright";




export default function Footer() {
  return (
    <footer className="mx-auto py-8 bg-orange-100 flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:justify-center">
      <Button text="GET TICKETS" link="/tickets"/>
      <NavList />
      <Social />
      <Copyright />
    </footer>
  )
}
