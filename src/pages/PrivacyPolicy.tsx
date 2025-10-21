import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Icon name="Droplets" className="text-primary" size={32} />
            <span className="font-heading font-bold text-2xl text-secondary">Разморозка 24</span>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="mr-2" size={18} />
            На главную
          </Button>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                1. Общие положения
              </h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует 
                в отношении всей информации, которую сервис «Разморозка 24» может получить о пользователе 
                во время использования сайта и его сервисов.
              </p>
              <p className="leading-relaxed">
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой 
                и указанными в ней условиями обработки его персональной информации.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                2. Персональная информация пользователей
              </h2>
              <p className="leading-relaxed">
                В рамках настоящей Политики под «персональной информацией пользователя» понимаются:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Персональные данные, которые пользователь предоставляет самостоятельно при заполнении форм обратной связи (имя, номер телефона, адрес)</li>
                <li>Данные, которые автоматически передаются в процессе использования сайта (IP-адрес, информация из cookies, данные о браузере)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                3. Цели обработки персональной информации
              </h2>
              <p className="leading-relaxed">
                Мы обрабатываем персональные данные пользователей в следующих целях:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связь с пользователем для оказания услуг по разморозке труб и септиков</li>
                <li>Уточнение деталей заказа (адрес, время выезда)</li>
                <li>Улучшение качества услуг и пользовательского опыта на сайте</li>
                <li>Информирование об изменениях условий предоставления услуг</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                4. Условия обработки и передачи персональной информации
              </h2>
              <p className="leading-relaxed">
                Мы обязуемся:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Хранить информацию в тайне, не разглашать без предварительного письменного разрешения пользователя</li>
                <li>Не продавать, обменивать, публиковать персональные данные пользователя</li>
                <li>Принимать меры предосторожности для защиты конфиденциальности персональных данных</li>
                <li>Обрабатывать персональные данные только в указанных целях</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                5. Изменение и удаление персональной информации
              </h2>
              <p className="leading-relaxed">
                Пользователь может в любой момент изменить или удалить предоставленную им персональную 
                информацию, связавшись с нами по телефону +7 (999) 123-45-67 или отправив запрос 
                на электронную почту.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                6. Защита персональной информации
              </h2>
              <p className="leading-relaxed">
                Мы принимаем необходимые организационные и технические меры для защиты персональной 
                информации пользователя от неправомерного или случайного доступа, уничтожения, 
                изменения, блокирования, копирования, распространения.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                7. Изменение Политики конфиденциальности
              </h2>
              <p className="leading-relaxed">
                Мы имеем право вносить изменения в настоящую Политику конфиденциальности. 
                При внесении изменений в актуальной редакции указывается дата последнего обновления. 
                Новая редакция Политики вступает в силу с момента ее размещения, если иное не 
                предусмотрено новой редакцией Политики.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-secondary mt-8">
                8. Контактная информация
              </h2>
              <p className="leading-relaxed">
                По всем вопросам, касающимся обработки персональных данных, вы можете связаться с нами:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="font-semibold">Телефон: +7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span>Круглосуточно, без выходных</span>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/')}
              >
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Вернуться на главную
              </Button>
            </div>
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

export default PrivacyPolicy;
