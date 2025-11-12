import TopHeader from "./top-header";
import NavigationMenu from "./navigation-menu";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <TopHeader />
      <NavigationMenu />
    </header>
  );
}
