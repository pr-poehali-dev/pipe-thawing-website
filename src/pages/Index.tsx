import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" className="text-primary" size={32} />
            <span className="font-heading font-bold text-2xl text-secondary">ТеплоСервис</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
        </div>
      </header>

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
                  onClick={() => window.location.href = 'tel:+79991234567'}
                >
                  <Icon name="Phone" className="mr-2" size={24} />
                  Позвонить сейчас
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" className="text-primary" size={24} />
                  <span className="font-semibold">Выезд за 1 час</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Wrench" size={200} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная разморозка труб любой сложности с гарантией качества
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Snowflake" className="text-primary" size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-secondary">Разморозка труб</h3>
              <p className="text-muted-foreground leading-relaxed">
                Быстрая разморозка водопроводных и канализационных труб современным оборудованием
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

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white border-0">
              <h3 className="font-heading font-bold text-2xl mb-6">Срочный вызов</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} />
                  <a href="tel:+79991234567" className="text-xl font-semibold hover:underline">
                    +7 (999) 123-45-67
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} />
                  <span>Круглосуточно без выходных</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  <span>Выезд по всему городу</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-8 bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => window.location.href = 'tel:+79991234567'}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </Card>

            <Card className="p-8 border-2 bg-white">
              <h3 className="font-heading font-bold text-2xl mb-6 text-secondary">Онлайн заявка</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Адрес</label>
                  <textarea 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    rows={3}
                    placeholder="Укажите адрес проблемы"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplets" size={24} />
            <span className="font-heading font-bold text-xl">ТеплоСервис</span>
          </div>
          <p className="text-white/80">© 2024 Аварийная разморозка труб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
