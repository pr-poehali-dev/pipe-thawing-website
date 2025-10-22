import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
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
                <a href="tel:+79773211115" className="text-xl font-semibold hover:underline">
                  +7 (977) 321-11-15
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={24} />
                <span>Круглосуточно без выходных</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} />
                <span>Выезд по Москве и Московской области</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full mt-8 bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => window.location.href = 'tel:+79773211115'}
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
                  placeholder="+7 (977) 321-11-15"
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
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="privacy-policy"
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  required
                />
                <label htmlFor="privacy-policy" className="text-sm text-muted-foreground">
                  Я согласен с{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;