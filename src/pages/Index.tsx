import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCart = (id: number) => {
    setCart(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const products = [
    {
      id: 1,
      name: "Элегантное чёрное платье",
      price: 15900,
      originalPrice: 19900,
      image: "/img/3aa30f87-626c-48c1-99fb-5bc6e065973c.jpg",
      sizes: ["XS", "S", "M", "L"],
      category: "women"
    },
    {
      id: 2,
      name: "Премиальный костюм",
      price: 45000,
      originalPrice: 55000,
      image: "/img/a5ad6292-f576-4939-94d5-8f5d21e8534b.jpg",
      sizes: ["48", "50", "52", "54"],
      category: "men"
    },
    {
      id: 3,
      name: "Коллекция аксессуаров",
      price: 8900,
      originalPrice: 12900,
      image: "/img/3a4e17c3-0780-470b-af19-73d2596e62b4.jpg",
      sizes: ["ONE SIZE"],
      category: "accessories"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Потрясающее качество! Платье сидит идеально.",
      avatar: "AK",
      verified: true
    },
    {
      id: 2,
      name: "Михаил П.",
      rating: 5,
      text: "Костюм превосходный, получил много комплиментов.",
      avatar: "МП",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">PREMIUM</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-700 hover:text-black transition-colors">Каталог</a>
                <a href="#delivery" className="text-gray-700 hover:text-black transition-colors">Доставка и оплата</a>
                <a href="#contacts" className="text-gray-700 hover:text-black transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favorites.size > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {favorites.size}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingBag" size={20} />
                {cart.size > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.size}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Элегантность в каждой детали
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Откройте для себя коллекцию премиальной одежды, созданную для тех, кто ценит качество и стиль
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Смотреть коллекцию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Программа лояльности
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Изысканная коллекция одежды и аксессуаров для современного гардероба
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все товары</TabsTrigger>
              <TabsTrigger value="women">Женская одежда</TabsTrigger>
              <TabsTrigger value="men">Мужская одежда</TabsTrigger>
              <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
            </TabsList>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Размер</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Цена</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      min={0}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Сортировка</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select defaultValue="popular">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-low">Сначала дешёвые</SelectItem>
                      <SelectItem value="price-high">Сначала дорогие</SelectItem>
                      <SelectItem value="newest">Новинки</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Скидки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      До 30% скидка
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center">
                      Программа лояльности
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 space-y-2">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={16} 
                            className={favorites.has(product.id) ? "fill-red-500 text-red-500" : ""} 
                          />
                        </Button>
                      </div>
                      {product.originalPrice > product.price && (
                        <Badge className="absolute top-4 left-4 bg-red-500">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-black">
                            {product.price.toLocaleString()} ₽
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.originalPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Доступные размеры:</p>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                              <Badge key={size} variant="outline" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            className="flex-1"
                            onClick={() => toggleCart(product.id)}
                            variant={cart.has(product.id) ? "secondary" : "default"}
                          >
                            <Icon name="ShoppingBag" size={16} className="mr-2" />
                            {cart.has(product.id) ? "В корзине" : "В корзину"}
                          </Button>
                          <Button variant="outline" size="icon">
                            <Icon name="Eye" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="women">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === "women").map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={16} 
                            className={favorites.has(product.id) ? "fill-red-500 text-red-500" : ""} 
                          />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>
                        <span className="text-2xl font-bold text-black">
                          {product.price.toLocaleString()} ₽
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full"
                        onClick={() => toggleCart(product.id)}
                        variant={cart.has(product.id) ? "secondary" : "default"}
                      >
                        <Icon name="ShoppingBag" size={16} className="mr-2" />
                        {cart.has(product.id) ? "В корзине" : "В корзину"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="men">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === "men").map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={16} 
                            className={favorites.has(product.id) ? "fill-red-500 text-red-500" : ""} 
                          />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>
                        <span className="text-2xl font-bold text-black">
                          {product.price.toLocaleString()} ₽
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full"
                        onClick={() => toggleCart(product.id)}
                        variant={cart.has(product.id) ? "secondary" : "default"}
                      >
                        <Icon name="ShoppingBag" size={16} className="mr-2" />
                        {cart.has(product.id) ? "В корзине" : "В корзину"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accessories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === "accessories").map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={16} 
                            className={favorites.has(product.id) ? "fill-red-500 text-red-500" : ""} 
                          />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>
                        <span className="text-2xl font-bold text-black">
                          {product.price.toLocaleString()} ₽
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full"
                        onClick={() => toggleCart(product.id)}
                        variant={cart.has(product.id) ? "secondary" : "default"}
                      >
                        <Icon name="ShoppingBag" size={16} className="mr-2" />
                        {cart.has(product.id) ? "В корзине" : "В корзину"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Что говорят наши клиенты о качестве и сервисе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверенный покупатель
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Icon name="Truck" size={48} className="mx-auto text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Бесплатная доставка</h3>
              <p className="text-gray-600">От 5000 ₽ по всей России</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Icon name="RotateCcw" size={48} className="mx-auto text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Возврат 30 дней</h3>
              <p className="text-gray-600">Легкий возврат без лишних вопросов</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Icon name="Shield" size={48} className="mx-auto text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Только оригинальные товары</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Icon name="Headphones" size={48} className="mx-auto text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Всегда готовы помочь</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PREMIUM</h3>
              <p className="text-gray-400 mb-4">
                Элегантная одежда для современного стиля жизни
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Женская одежда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мужская одежда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новинки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Размерная сетка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Icon name="Phone" size={16} className="inline mr-2" />
                  +7 (800) 123-45-67
                </li>
                <li>
                  <Icon name="Mail" size={16} className="inline mr-2" />
                  info@premium.ru
                </li>
                <li>
                  <Icon name="MapPin" size={16} className="inline mr-2" />
                  Москва, ул. Тверская, 10
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 PREMIUM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;