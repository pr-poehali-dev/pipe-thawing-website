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
            <span className="font-heading font-bold text-2xl text-secondary">Разморозка 24</span>
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
                  <span>Выезд по Москве и Московской области</span>
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
            География обслуживания
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Работаем по всей Москве и Московской области
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MapPin" className="text-primary" size={28} />
                <h3 className="font-heading font-bold text-2xl text-secondary">Районы</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Волоколамский район</li>
                <li>• Дмитровский район</li>
                <li>• Егорьевский городской округ</li>
                <li>• Зарайский городской округ</li>
                <li>• Истринский городской округ</li>
                <li>• Лотошинский городской округ</li>
                <li>• Луховицкий городской округ</li>
                <li>• Можайский городской округ</li>
                <li>• Раменский городской округ</li>
                <li>• Рузский городской округ</li>
                <li>• Серебряно-Прудский городской округ</li>
                <li>• Чеховский городской округ</li>
                <li>• Шатурский городской округ</li>
                <li>• Шаховской городской округ</li>
                <li>• Можайский район</li>
                <li>• Наро-Фоминский район</li>
                <li>• Ногинский район</li>
                <li>• Одинцовский район</li>
                <li>• Орехово-Зуевский район</li>
                <li>• Павлово-Посадский район</li>
                <li>• Пушкинский район</li>
                <li>• Раменский район</li>
                <li>• Рузский район</li>
                <li>• Сергиево-Посадский район</li>
                <li>• Серпуховский район</li>
                <li>• Солнечногорский район</li>
                <li>• Ступинский район</li>
                <li>• Талдомский район</li>
                <li>• Чеховский район</li>
                <li>• Шатурский район</li>
                <li>• Щёлковский район</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Building2" className="text-primary" size={28} />
                <h3 className="font-heading font-bold text-2xl text-secondary">Города</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Балашиха</li>
                <li>• Подольск</li>
                <li>• Химки</li>
                <li>• Мытищи</li>
                <li>• Королёв</li>
                <li>• Люберцы</li>
                <li>• Красногорск</li>
                <li>• Электросталь</li>
                <li>• Коломна</li>
                <li>• Одинцово</li>
                <li>• Домодедово</li>
                <li>• Щёлково</li>
                <li>• Серпухов</li>
                <li>• Раменское</li>
                <li>• Орехово-Зуево</li>
                <li>• Долгопрудный</li>
                <li>• Пушкино</li>
                <li>• Реутов</li>
                <li>• Жуковский</li>
                <li>• Ногинск</li>
                <li>• Сергиев Посад</li>
                <li>• Воскресенск</li>
                <li>• Лобня</li>
                <li>• Ивантеевка</li>
                <li>• Клин</li>
                <li>• Видное</li>
                <li>• Дубна</li>
                <li>• Егорьевск</li>
                <li>• Чехов</li>
                <li>• Дмитров</li>
                <li>• Наро-Фоминск</li>
                <li>• Ступино</li>
                <li>• Павловский Посад</li>
                <li>• Лыткарино</li>
                <li>• Фрязино</li>
                <li>• Дзержинский</li>
                <li>• Котельники</li>
                <li>• Солнечногорск</li>
                <li>• Кашира</li>
                <li>• Краснознаменск</li>
                <li>• Протвино</li>
                <li>• Истра</li>
                <li>• Апрелевка</li>
                <li>• Шатура</li>
                <li>• Дедовск</li>
                <li>• Луховицы</li>
                <li>• Можайск</li>
                <li>• Ликино-Дулёво</li>
                <li>• Красноармейск</li>
                <li>• Лосино-Петровский</li>
                <li>• Озёры</li>
                <li>• Звенигород</li>
                <li>• Старая Купавна</li>
                <li>• Зарайск</li>
                <li>• Электрогорск</li>
                <li>• Бронницы</li>
                <li>• Хотьково</li>
                <li>• Черноголовка</li>
                <li>• Электроугли</li>
                <li>• Пущино</li>
                <li>• Куровское</li>
                <li>• Кубинка</li>
                <li>• Рошаль</li>
                <li>• Волоколамск</li>
                <li>• Белоозёрский</li>
                <li>• Голицыно</li>
                <li>• Яхрома</li>
                <li>• Пересвет</li>
                <li>• Краснозаводск</li>
                <li>• Талдом</li>
                <li>• Руза</li>
                <li>• Дрезна</li>
                <li>• Высоковск</li>
                <li>• Верея</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Home" className="text-primary" size={28} />
                <h3 className="font-heading font-bold text-2xl text-secondary">Посёлки</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Белоомут</li>
                <li>• Посёлок Биокомбината</li>
                <li>• Боброво</li>
                <li>• Богородское</li>
                <li>• Большие Вязёмы</li>
                <li>• Большие Дворы</li>
                <li>• Бутово</li>
                <li>• Быково</li>
                <li>• Загорянский</li>
                <li>• Запрудня</li>
                <li>• Заречье</li>
                <li>• Звёздный городок</li>
                <li>• Зеленоградский</li>
                <li>• Измайлово</li>
                <li>• Икша</li>
                <li>• Ильинский</li>
                <li>• Посёлок имени Воровского</li>
                <li>• Малаховка</li>
                <li>• Малино</li>
                <li>• Марусино</li>
                <li>• Менделеево</li>
                <li>• Мирный</li>
                <li>• Мисайлово</li>
                <li>• Михнево</li>
                <li>• Мишеронский</li>
                <li>• Молодёжный</li>
                <li>• Молоково</li>
                <li>• Монино</li>
                <li>• Обухово</li>
                <li>• Октябрьский</li>
                <li>• Отрадное</li>
                <li>• Сабурово</li>
                <li>• Свердловский</li>
                <li>• Северный</li>
                <li>• Селятино</li>
                <li>• Серебряные Пруды</li>
                <li>• Скоропусковский</li>
                <li>• Снегири</li>
                <li>• Софрино</li>
                <li>• Старый Городок</li>
                <li>• Столбовая</li>
                <li>• Сычёво</li>
                <li>• Томилино</li>
                <li>• Тучково</li>
                <li>• Уваровка</li>
                <li>• Удельная</li>
                <li>• Фосфоритный</li>
                <li>• Фряново</li>
                <li>• Хорлово</li>
                <li>• Чашниково</li>
                <li>• Черкизово</li>
                <li>• Черусти</li>
                <li>• Шаховская</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplets" size={24} />
            <span className="font-heading font-bold text-xl">Разморозка 24</span>
          </div>
          <p className="text-white/80">© 2024 Аварийная разморозка труб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;