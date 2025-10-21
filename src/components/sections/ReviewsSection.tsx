import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
          Отзывы клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Нам доверяют сотни жителей Москвы и области
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Алексей М.</h4>
                <p className="text-sm text-muted-foreground">Химки</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Замёрзла труба в загородном доме ночью. Приехали через 40 минут, разморозили за час. 
              Профессионально и быстро. Спасибо огромное!
            </p>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Елена К.</h4>
                <p className="text-sm text-muted-foreground">Одинцово</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Заморозило септик. Мастер приехал быстро, всё объяснил, установил греющий кабель. 
              Теперь проблем нет. Рекомендую!
            </p>
          </Card>

          <Card className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Дмитрий П.</h4>
                <p className="text-sm text-muted-foreground">Пушкино</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
              <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Вызывал на разморозку водопровода. Работают 24/7 — это правда! Приехали в 3 ночи, 
              решили проблему. Цена адекватная.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
