import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('museums');

  const museums = [
    {
      title: 'Музей византийского искусства',
      description: 'Коллекция уникальных артефактов византийской эпохи',
      icon: 'Palette'
    },
    {
      title: 'Археологический музей',
      description: 'Находки древнего Херсонеса Таврического',
      icon: 'Landmark'
    },
    {
      title: 'Музей церковного искусства',
      description: 'Собрание икон, литургических предметов и реликвий',
      icon: 'Church'
    }
  ];

  const tours = [
    {
      title: 'Обзорная экскурсия',
      duration: '2 часа',
      description: 'Знакомство с основными достопримечательностями комплекса'
    },
    {
      title: 'Храмовый комплекс',
      duration: '1.5 часа',
      description: 'История и архитектура православных храмов'
    },
    {
      title: 'Археологические раскопки',
      duration: '2.5 часа',
      description: 'Углубленная экскурсия по древнему городу'
    }
  ];

  const news = [
    {
      date: '15 декабря 2024',
      title: 'Открытие новой выставки византийского искусства',
      content: 'Приглашаем посетить уникальную экспозицию, посвященную культуре Византии'
    },
    {
      date: '10 декабря 2024',
      title: 'Праздничные мероприятия в Новом Херсонесе',
      content: 'Расписание рождественских концертов и богослужений'
    },
    {
      date: '5 декабря 2024',
      title: 'Завершение археологического сезона',
      content: 'Итоги раскопок 2024 года и новые находки'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Church" size={32} className="text-secondary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Новый Херсонес</h1>
                <p className="text-sm text-muted-foreground">Музейно-храмовый комплекс</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="Phone" size={18} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Добро пожаловать в Новый Херсонес
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Откройте для себя величие древней истории и православной культуры. 
              Музейно-храмовый комплекс объединяет археологическое наследие и духовные традиции.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2 bg-transparent">
              <TabsTrigger 
                value="museums" 
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="Building" size={18} />
                <span className="hidden sm:inline">Музеи</span>
              </TabsTrigger>
              <TabsTrigger 
                value="tours"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="Users" size={18} />
                <span className="hidden sm:inline">Экскурсии</span>
              </TabsTrigger>
              <TabsTrigger 
                value="map"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="Map" size={18} />
                <span className="hidden sm:inline">Карта</span>
              </TabsTrigger>
              <TabsTrigger 
                value="news"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="Newspaper" size={18} />
                <span className="hidden sm:inline">Новости</span>
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="BookOpen" size={18} />
                <span className="hidden sm:inline">История</span>
              </TabsTrigger>
              <TabsTrigger 
                value="help"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3"
              >
                <Icon name="HelpCircle" size={18} />
                <span className="hidden sm:inline">Помощь</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="museums" className="animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6">
                {museums.map((museum, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={museum.icon as any} size={24} className="text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{museum.title}</CardTitle>
                      <CardDescription>{museum.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full gap-2">
                        Подробнее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tours" className="animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6">
                {tours.map((tour, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{tour.title}</CardTitle>
                        <div className="flex items-center gap-1 text-accent">
                          <Icon name="Clock" size={16} />
                          <span className="text-sm font-medium">{tour.duration}</span>
                        </div>
                      </div>
                      <CardDescription>{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-accent hover:bg-accent/90 gap-2">
                        <Icon name="Calendar" size={16} />
                        Записаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map" className="animate-slide-up">
              <Card>
                <CardHeader>
                  <CardTitle>Интерактивная карта территории</CardTitle>
                  <CardDescription>
                    Схема расположения музеев, храмов и археологических объектов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" size={64} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Интерактивная карта комплекса</p>
                      <Button className="mt-4 gap-2">
                        <Icon name="Download" size={16} />
                        Скачать план в PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news" className="animate-slide-up">
              <div className="space-y-4">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Icon name="Calendar" size={16} />
                        {item.date}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.content}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="gap-2">
                        Читать далее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="animate-slide-up">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">История комплекса</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Музейно-храмовый комплекс "Новый Херсонес" создан на месте древнего 
                      греческого города Херсонеса Таврического, основанного в V веке до н.э. 
                      Это уникальное место, где соединяются античная история и православные традиции.
                    </p>
                    <p>
                      Древний Херсонес был важнейшим центром Северного Причерноморья, здесь 
                      в 988 году принял крещение великий князь Владимир, что стало отправной 
                      точкой христианизации Руси.
                    </p>
                    <p>
                      Современный комплекс включает археологические памятники, музейные экспозиции 
                      и действующие храмы, создавая уникальное пространство для изучения истории 
                      и духовного просвещения.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="help" className="animate-slide-up">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Clock" size={24} />
                      Режим работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>Вторник - воскресенье: 9:00 - 18:00</p>
                    <p>Понедельник: выходной день</p>
                    <p>Касса закрывается за 30 минут до окончания работы</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="DollarSign" size={24} />
                      Стоимость посещения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>Взрослый билет: 500 ₽</p>
                    <p>Льготный билет: 250 ₽</p>
                    <p>Дети до 7 лет: бесплатно</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" size={24} />
                      Как добраться
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>Адрес: г. Севастополь, ул. Древняя, 1</p>
                    <p>Автобусы: №2, №109, №110</p>
                    <p>Парковка: бесплатная</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Phone" size={24} />
                      Контакты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>Телефон: +7 (978) 123-45-67</p>
                    <p>Email: info@novyhersones.ru</p>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="icon">
                        <Icon name="Facebook" size={18} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Instagram" size={18} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Youtube" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t mt-16 py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Church" size={24} className="text-secondary" />
              <p className="text-sm text-muted-foreground">
                © 2024 Новый Херсонес. Все права защищены
              </p>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Правила посещения</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
