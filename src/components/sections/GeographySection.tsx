import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GeographySection = () => {
  return (
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
            <ul className="columns-2 gap-x-4 space-y-2 text-sm text-muted-foreground">
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
  );
};

export default GeographySection;
