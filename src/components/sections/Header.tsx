import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Droplets" className="text-primary" size={32} />
          <span className="font-heading font-bold text-2xl text-secondary">Разморозка 24</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
