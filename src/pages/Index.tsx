import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

const Index = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Византійская икона',
      price: 15000,
      category: 'icons',
      image: '🖼️',
      description: 'Рукописная икона въ традиціонномъ стилѣ',
      inStock: true
    },
    {
      id: 2,
      name: 'Античная амфора',
      price: 25000,
      category: 'ceramics',
      image: '🏺',
      description: 'Копія древнегреческой амфоры',
      inStock: true
    },
    {
      id: 3,
      name: 'Серебряный крестъ',
      price: 8000,
      category: 'jewelry',
      image: '✝️',
      description: 'Серебро 925 пробы съ позолотой',
      inStock: true
    },
    {
      id: 4,
      name: 'Книга исторіи Херсонеса',
      price: 1200,
      category: 'books',
      image: '📖',
      description: 'Иллюстрированное изданіе',
      inStock: true
    },
    {
      id: 5,
      name: 'Мозаичное панно',
      price: 45000,
      category: 'ceramics',
      image: '🎨',
      description: 'Византійская мозаика ручной работы',
      inStock: false
    },
    {
      id: 6,
      name: 'Ладанъ церковный',
      price: 500,
      category: 'church',
      image: '🕯️',
      description: 'Афонскій ладанъ 100г',
      inStock: true
    },
    {
      id: 7,
      name: 'Бронзовая статуэтка',
      price: 12000,
      category: 'souvenirs',
      image: '🗿',
      description: 'Копія античной скульптуры',
      inStock: true
    },
    {
      id: 8,
      name: 'Чётки изъ янтаря',
      price: 3500,
      category: 'jewelry',
      image: '📿',
      description: 'Балтійскій янтарь, 33 зерна',
      inStock: true
    },
    {
      id: 9,
      name: 'Карта древняго Херсонеса',
      price: 800,
      category: 'souvenirs',
      image: '🗺️',
      description: 'Печать на пергаментѣ',
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Всѣ товары', icon: 'Store' },
    { id: 'icons', name: 'Иконы', icon: 'Image' },
    { id: 'ceramics', name: 'Керамика', icon: 'Package' },
    { id: 'jewelry', name: 'Украшенія', icon: 'Gem' },
    { id: 'books', name: 'Книги', icon: 'Book' },
    { id: 'church', name: 'Церковная утварь', icon: 'Church' },
    { id: 'souvenirs', name: 'Сувениры', icon: 'Gift' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const removeFromCart = (productId: number) => {
    const index = cart.indexOf(productId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const getCartItemCount = (productId: number) => {
    return cart.filter(id => id === productId).length;
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, id) => {
      const product = products.find(p => p.id === id);
      return sum + (product?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background byzantine-pattern">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <header className="border-b-2 ornament-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary/30">
                <Icon name="Store" size={28} className="text-secondary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">Лавка Херсонеса</h1>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Музейный магазинъ</p>
              </div>
            </div>
            <Button className="gap-2 bg-secondary hover:bg-secondary/90 relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                  {cart.length}
                </Badge>
              )}
              <span className="hidden md:inline">Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Музейная Лавка
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Уникальныя изделія и сувениры, вдохновлённые древней исторіей и византійской культурой. 
              Каждый товаръ хранитъ частицу тысячелѣтняго наслѣдія.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 gap-2 bg-card/60 p-2 border-2 border-border h-auto">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground flex items-center gap-2 py-3 text-sm border border-transparent data-[state=active]:border-secondary/50"
                  >
                    <Icon name={cat.icon as any} size={18} />
                    <span className="hidden sm:inline">{cat.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredProducts.map(product => {
              const inCart = getCartItemCount(product.id);
              return (
                <Card key={product.id} className="border-2 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-secondary/50 flex flex-col">
                  <CardHeader>
                    <div className="w-full h-32 bg-secondary/5 rounded-sm flex items-center justify-center mb-4 border-2 border-secondary/10 text-6xl">
                      {product.image}
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      {!product.inStock && (
                        <Badge variant="outline" className="text-xs">Нѣтъ въ наличіи</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground">
                        {product.price.toLocaleString('ru-RU')}
                      </span>
                      <span className="text-lg text-muted-foreground">₽</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {product.inStock ? (
                      <>
                        {inCart > 0 ? (
                          <div className="flex items-center gap-2 w-full">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => removeFromCart(product.id)}
                              className="border-2"
                            >
                              <Icon name="Minus" size={18} />
                            </Button>
                            <div className="flex-grow text-center font-bold text-lg">
                              {inCart}
                            </div>
                            <Button 
                              size="icon"
                              onClick={() => addToCart(product.id)}
                              className="bg-secondary hover:bg-secondary/90"
                            >
                              <Icon name="Plus" size={18} />
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            className="w-full gap-2 bg-secondary hover:bg-secondary/90 py-6"
                            onClick={() => addToCart(product.id)}
                          >
                            <Icon name="ShoppingCart" size={18} />
                            Въ корзину
                          </Button>
                        )}
                      </>
                    ) : (
                      <Button disabled className="w-full" variant="outline">
                        Недоступно
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Card className="border-2 border-secondary bg-card/95 backdrop-blur-sm shadow-2xl min-w-[280px]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="ShoppingBag" size={20} />
                Ваша корзина
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-base">
                <span className="text-muted-foreground">Товаровъ:</span>
                <span className="font-semibold">{cart.length}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Итого:</span>
                <span className="text-secondary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-6">
                <Icon name="CreditCard" size={18} />
                Оформить заказъ
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <section className="py-16 bg-secondary/5 border-y-2 ornament-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30">
                <Icon name="Truck" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Доставка по всей Россіи</h3>
              <p className="text-muted-foreground">Безопасная упаковка и быстрая доставка</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантія подлинности</h3>
              <p className="text-muted-foreground">Сертификаты на всю продукцію</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30">
                <Icon name="Gift" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Подарочная упаковка</h3>
              <p className="text-muted-foreground">Красивое оформленіе въ подарокъ</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 ornament-border py-12 bg-card/60 backdrop-blur-sm relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="Store" size={20} />
                Лавка Херсонеса
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Музейный магазинъ при комплексѣ "Новый Херсонесъ". 
                Уникальныя изделія и сувениры съ тысячелѣтней исторіей.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Информація</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-foreground transition-colors">О насъ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Возвратъ товара</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (978) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  shop@novyhersones.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Севастополь, ул. Древняя, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Лавка Херсонеса. Всѣ права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденціальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Договоръ оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
