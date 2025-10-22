import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-secondary leading-tight">
              Аварийная разморозка труб
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Круглосуточный выезд специалиста в течение часа. Профессиональное оборудование и опыт работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = 'tel:+79773211115'}
              >
                <Icon name="Phone" className="mr-2" size={24} />
                Позвонить сейчас
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/79773211115', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                WhatsApp
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="font-semibold">24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="font-semibold">Выезд за 1 час</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Banknote" className="text-primary" size={24} />
                <span className="font-semibold">от 1500₽</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon name="Droplets" size={200} className="text-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;