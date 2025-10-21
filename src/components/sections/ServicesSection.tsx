import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
          Наши услуги
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Профессиональная разморозка труб любой сложности с гарантией качества
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Snowflake" className="text-primary" size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-secondary">Разморозка труб</h3>
            <p className="text-muted-foreground leading-relaxed">
              Быстрая разморозка водопроводных, канализационных труб и септиков современным оборудованием
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Truck" className="text-primary" size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-secondary">Выезд 24/7</h3>
            <p className="text-muted-foreground leading-relaxed">
              Круглосуточная работа без выходных. Выезд специалиста в течение часа после звонка
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Cable" className="text-primary" size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-secondary">Греющий кабель</h3>
            <p className="text-muted-foreground leading-relaxed">
              Установка греющего кабеля после разморозки для защиты труб от повторного замерзания
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Shield" className="text-primary" size={32} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-secondary">Гарантия</h3>
            <p className="text-muted-foreground leading-relaxed">
              Гарантия на выполненные работы. Безопасные методы без повреждения труб
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
