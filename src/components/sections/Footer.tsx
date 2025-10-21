import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="Droplets" size={24} />
          <span className="font-heading font-bold text-xl">Разморозка 24</span>
        </div>
        <p className="text-white/80">© 2024 Аварийная разморозка труб. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
