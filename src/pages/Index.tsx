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
    <div className="min-h-screen bg-background byzantine-pattern">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <header className="border-b-2 ornament-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary/30">
                <Icon name="Church" size={36} className="text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground tracking-wide">Новый Херсонесъ</h1>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Музейно-храмовый комплексъ</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-2 hover:bg-secondary/10">
              <Icon name="Phone" size={18} />
              <span className="hidden md:inline">Связаться</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-foreground">
              Добро пожаловать
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed font-serif">
              Откройте для себя величие древней истории и православной культуры. 
              Музейно-храмовый комплекс объединяет археологическое наследіе и духовныя традиціи 
              тысячелѣтней Византійской цивилизаціи.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 h-auto gap-3 bg-card/60 p-2 border-2 border-border">
              <TabsTrigger 
                value="museums" 
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="Building" size={20} />
                <span className="hidden sm:inline">Музеи</span>
              </TabsTrigger>
              <TabsTrigger 
                value="tours"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="Users" size={20} />
                <span className="hidden sm:inline">Экскурсіи</span>
              </TabsTrigger>
              <TabsTrigger 
                value="map"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="Map" size={20} />
                <span className="hidden sm:inline">Карта</span>
              </TabsTrigger>
              <TabsTrigger 
                value="news"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="Newspaper" size={20} />
                <span className="hidden sm:inline">Новости</span>
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="BookOpen" size={20} />
                <span className="hidden sm:inline">Исторія</span>
              </TabsTrigger>
              <TabsTrigger 
                value="help"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-4 text-base border border-transparent data-[state=active]:border-secondary/50"
              >
                <Icon name="HelpCircle" size={20} />
                <span className="hidden sm:inline">Помощь</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="museums" className="animate-slide-up">
              <div className="grid md:grid-cols-3 gap-8">
                {museums.map((museum, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-secondary/10 rounded-sm flex items-center justify-center mb-6 border-2 border-secondary/20">
                        <Icon name={museum.icon as any} size={28} className="text-secondary" />
                      </div>
                      <CardTitle className="text-2xl mb-3">{museum.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{museum.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full gap-2 border-2 hover:bg-secondary/10 py-6 text-base">
                        Подробнѣе
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tours" className="animate-slide-up">
              <div className="grid md:grid-cols-3 gap-8">
                {tours.map((tour, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <CardTitle className="text-2xl">{tour.title}</CardTitle>
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          <Icon name="Clock" size={18} />
                          <span className="text-sm">{tour.duration}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 gap-2 py-6 text-base">
                        <Icon name="Calendar" size={18} />
                        Записаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map" className="animate-slide-up">
              <Card className="border-2 bg-card/80 backdrop-blur-sm">
                <CardHeader className="border-b-2 ornament-border">
                  <CardTitle className="text-3xl">Интерактивная карта территоріи</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Схема расположенія музеевъ, храмовъ и археологическихъ объектовъ
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <div className="bg-muted/50 border-2 border-border rounded-sm h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-secondary/20">
                        <Icon name="Map" size={48} className="text-secondary" />
                      </div>
                      <p className="text-xl text-muted-foreground mb-6">Интерактивная карта комплекса</p>
                      <Button className="gap-2 py-6 px-8 text-base bg-secondary hover:bg-secondary/90">
                        <Icon name="Download" size={18} />
                        Скачать планъ въ PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news" className="animate-slide-up">
              <div className="space-y-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 text-base text-muted-foreground mb-3">
                        <Icon name="Calendar" size={18} />
                        <span className="font-semibold">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.content}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="gap-2 text-base hover:bg-secondary/10">
                        Читать далѣе
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="animate-slide-up">
              <Card className="border-2 bg-card/80 backdrop-blur-sm">
                <CardHeader className="border-b-2 ornament-border pb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                  </div>
                  <CardTitle className="text-5xl text-center">Исторія комплекса</CardTitle>
                </CardHeader>
                <CardContent className="pt-12">
                  <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground leading-relaxed text-lg">
                    <div className="relative pl-8 border-l-2 border-secondary/30">
                      <div className="absolute -left-2 top-0 w-3 h-3 bg-secondary rounded-full"></div>
                      <p className="mb-6">
                        Музейно-храмовый комплексъ "Новый Херсонесъ" созданъ на мѣстѣ древняго 
                        греческаго города Херсонеса Тавріческаго, основаннаго въ V вѣкѣ до н.э. 
                        Это уникальное мѣсто, гдѣ соединяются античная исторія и православныя традиціи.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-secondary/30">
                      <div className="absolute -left-2 top-0 w-3 h-3 bg-secondary rounded-full"></div>
                      <p className="mb-6">
                        Древній Херсонесъ былъ важнѣйшимъ центромъ Сѣвернаго Причерноморья, здѣсь 
                        въ 988 году принялъ крещеніе великій князь Владиміръ, что стало отправной 
                        точкой христіанизаціи Руси и началомъ тысячелѣтней духовной традиціи.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-secondary/30">
                      <div className="absolute -left-2 top-0 w-3 h-3 bg-secondary rounded-full"></div>
                      <p>
                        Современный комплексъ включаетъ археологическіе памятники, музейныя экспозиціи 
                        и дѣйствующіе храмы, создавая уникальное пространство для изученія исторіи 
                        и духовнаго просвѣщенія. Каждый камень хранитъ память о величіи Византійской имперіи.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="help" className="animate-slide-up">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="border-b ornament-border">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name="Clock" size={28} className="text-secondary" />
                      Режимъ работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3 text-muted-foreground text-base">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Вторникъ - воскресенье: 9:00 - 18:00
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Понедѣльникъ: выходной день
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Касса закрывается за 30 минутъ до окончанія работы
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="border-b ornament-border">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name="Coins" size={28} className="text-secondary" />
                      Стоимость посѣщенія
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3 text-muted-foreground text-base">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Взрослый билетъ: 500 ₽
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Льготный билетъ: 250 ₽
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Дѣти до 7 лѣтъ: безплатно
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="border-b ornament-border">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name="MapPin" size={28} className="text-secondary" />
                      Какъ добраться
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3 text-muted-foreground text-base">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Адресъ: г. Севастополь, ул. Древняя, 1
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Автобусы: №2, №109, №110
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Парковка: безплатная
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="border-b ornament-border">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name="Phone" size={28} className="text-secondary" />
                      Контакты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4 text-muted-foreground text-base">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Телефонъ: +7 (978) 123-45-67
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Email: info@novyhersones.ru
                    </p>
                    <div className="flex gap-3 pt-3">
                      <Button variant="outline" size="icon" className="border-2 hover:bg-secondary/10 w-12 h-12">
                        <Icon name="Facebook" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="border-2 hover:bg-secondary/10 w-12 h-12">
                        <Icon name="Instagram" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="border-2 hover:bg-secondary/10 w-12 h-12">
                        <Icon name="Youtube" size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t-2 ornament-border mt-20 py-12 bg-card/60 backdrop-blur-sm relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary/30">
                <Icon name="Church" size={24} className="text-secondary" />
              </div>
              <p className="text-base text-muted-foreground">
                © 2024 Новый Херсонесъ. Всѣ права защищены
              </p>
            </div>
            <div className="flex gap-6 text-base text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors border-b border-transparent hover:border-secondary">
                Политика конфиденціальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors border-b border-transparent hover:border-secondary">
                Правила посѣщенія
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
