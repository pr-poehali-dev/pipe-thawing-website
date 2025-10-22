import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const prices = [
    {
      icon: "Truck",
      title: "Выезд специалиста",
      price: "от 2500₽",
      description: "Быстрый выезд по Москве и МО в любое время суток"
    },
    {
      icon: "Flame",
      title: "Разморозка труб",
      price: "от 1000₽",
      description: "Профессиональная разморозка водопроводных и канализационных труб"
    },
    {
      icon: "Cable",
      title: "Установка греющего кабеля",
      price: "от 4000₽",
      description: "Защита труб от промерзания с установкой современного оборудования"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
          Наши цены
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Прозрачное ценообразование без скрытых платежей. Окончательная стоимость определяется после осмотра
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {prices.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name={item.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-secondary">
                {item.title}
              </h3>
              <div className="text-4xl font-bold text-primary mb-4">
                {item.price}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = 'tel:+79773211115'}
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить для уточнения
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/79773211115', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
