import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { 
      name: 'Колбасные изделия', 
      description: 'Варёные, полукопчёные, сырокопчёные',
      icon: 'ChefHat',
    },
    { 
      name: 'Деликатесы', 
      description: 'Изысканные мясные деликатесы',
      icon: 'Award',
    },
    { 
      name: 'Охлаждённое мясо', 
      description: 'Свежее мясо высшего качества',
      icon: 'Beef',
    },
    { 
      name: 'Полуфабрикаты', 
      description: 'Готовые решения для кухни',
      icon: 'Package',
    },
  ];

  const news = [
    {
      title: 'Новая линия по производству деликатесов',
      date: '15 дек 2024',
      description: 'Запущена современная производственная линия европейского образца',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/cb8723bc-01b7-4b2e-aefb-56550824c3a0.jpg',
      category: 'Производство'
    },
    {
      title: 'МЯСТОРГ получил сертификат качества ISO',
      date: '3 дек 2024',
      description: 'Подтверждено соответствие международным стандартам',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg',
      category: 'Сертификация'
    },
    {
      title: 'Расширение производства в 2025 году',
      date: '20 ноя 2024',
      description: 'Планируется увеличение мощностей на 40%',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/6bad1b10-5e5a-472d-9bff-ea5a245b0ab0.jpg',
      category: 'Развитие'
    },
  ];

  const vacancies = [
    {
      title: 'Технолог мясного производства',
      type: 'Полная занятость',
      salary: '80-120k ₽',
      location: 'Москва',
      tags: ['Производство', 'Технологии']
    },
    {
      title: 'Оператор линии',
      type: 'Сменный график',
      salary: '60-80k ₽',
      location: 'Москва',
      tags: ['Производство']
    },
    {
      title: 'Менеджер по продажам',
      type: 'Полная занятость',
      salary: '70-100k ₽',
      location: 'Москва',
      tags: ['Продажи', 'B2B']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Beef" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground font-heading">МЯСТОРГ</h1>
                <p className="text-xs text-muted-foreground">С 1994 года</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              {['home', 'products', 'news', 'vacancies', 'contact'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(section)}
                  className="font-medium"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'products' && 'Продукция'}
                  {section === 'news' && 'Новости'}
                  {section === 'vacancies' && 'Вакансии'}
                  {section === 'contact' && 'Контакты'}
                </Button>
              ))}
            </nav>

            <Button className="hidden lg:flex shadow-lg">
              <Icon name="Phone" className="mr-2" size={18} />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="text-sm px-4 py-2 bg-primary text-white">
                Работаем с 1994 года
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight font-heading text-foreground">
                  Мясные продукты премиум класса
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Современное оборудование, строгий контроль качества и команда профессионалов
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-lg" onClick={() => scrollToSection('products')}>
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  <Icon name="Phone" className="mr-2" size={18} />
                  Связаться с нами
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary font-heading">30+</p>
                  <p className="text-sm text-muted-foreground">Лет опыта</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary font-heading">500+</p>
                  <p className="text-sm text-muted-foreground">Наименований</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary font-heading">ISO</p>
                  <p className="text-sm text-muted-foreground">Сертификат</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg" 
                  alt="Производство"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent rounded-3xl shadow-xl flex flex-col items-center justify-center text-white">
                <Icon name="Award" size={48} />
                <p className="mt-2 font-bold text-lg">Качество</p>
                <p className="text-sm opacity-90">ISO 9001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Продукция</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Наш ассортимент</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор мясной продукции высшего качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={product.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Новости</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Последние события</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следите за новостями и достижениями компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Icon name="Calendar" className="mr-1" size={14} />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-heading line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section id="vacancies" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Карьера</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Открытые вакансии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl font-heading">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {vacancy.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="shadow-lg">
                      Откликнуться
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                  <CardDescription className="text-base">
                    <div className="flex flex-wrap gap-4 mt-4">
                      <span className="flex items-center">
                        <Icon name="Briefcase" className="mr-2 text-primary" size={16} />
                        {vacancy.type}
                      </span>
                      <span className="flex items-center">
                        <Icon name="DollarSign" className="mr-2 text-primary" size={16} />
                        {vacancy.salary}
                      </span>
                      <span className="flex items-center">
                        <Icon name="MapPin" className="mr-2 text-primary" size={16} />
                        {vacancy.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white">Контакты</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-heading">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Производственная, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-heading">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-heading">Email</h3>
                      <p className="text-muted-foreground">info@myastorg.ru</p>
                      <p className="text-muted-foreground">sales@myastorg.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full shadow-lg" size="lg">
                  Отправить
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Beef" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">МЯСТОРГ</h3>
              </div>
              <p className="text-sm text-white/70">
                Мясные продукты премиум класса с 1994 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Колбасные изделия</li>
                <li>Деликатесы</li>
                <li>Охлаждённое мясо</li>
                <li>Полуфабрикаты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Новости</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@myastorg.ru</li>
                <li>г. Москва, ул. Производственная, 15</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>© 2024 МЯСТОРГ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
