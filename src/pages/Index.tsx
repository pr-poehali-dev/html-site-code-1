import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    title: 'Костюм рыболовный демисезонный',
    description: 'Влагозащитный костюм для комфортной рыбалки весной и осенью',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500',
    price: 9990
  },
  {
    id: 2,
    title: 'Термобелье зимнее',
    description: 'Сохраняет тепло даже в самые морозные дни на льду',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500',
    price: 3990
  },
  {
    id: 3,
    title: 'Куртка рыболовная зимняя',
    description: 'Утепленная куртка с защитой от ветра и влаги',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
    price: 7990
  },
  {
    id: 4,
    title: 'Сапоги рыбацкие',
    description: 'Непромокаемые сапоги с утеплителем до -30°C',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500',
    price: 5490
  },
  {
    id: 5,
    title: 'Перчатки неопреновые',
    description: 'Водонепроницаемые перчатки для работы со снастями',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500',
    price: 1490
  },
  {
    id: 6,
    title: 'Жилет рыболовный',
    description: 'Многофункциональный жилет с множеством карманов',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500',
    price: 4290
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1545450660-7084c7e0cfda?w=600',
  'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=600',
  'https://images.unsplash.com/photo-1504887005746-f9db2fb3e69d?w=600'
];

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[hsl(var(--fishing-green))] to-[hsl(var(--fishing-light-green))] shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">
              🎣 Рыболовный гардероб
            </h1>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-white hover:text-white/80 transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-white/80 transition-colors">
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[500px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://ohotaktiv.ru/upload/iblock/82e/pzj3mmk6ekf8elr3z50q0czq9f2sixr3.png)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Добро пожаловать в магазин одежды для рыбаков
          </h2>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Широкий выбор качественной экипировки для рыбалки в любое время года
          </p>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--fishing-green))]">
            Каталог товаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--fishing-green))]">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="text-3xl font-bold text-[hsl(var(--fishing-red))] mb-4">
                    {product.price.toLocaleString()} ₽
                  </div>
                  <Button className="w-full bg-[hsl(var(--fishing-green))] hover:bg-[hsl(var(--fishing-light-green))]">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[hsl(var(--fishing-green))]">
            О нас
          </h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
            Мы специализируемся на продаже профессиональной одежды для рыбалки. 
            Наша миссия — обеспечить рыбаков качественной экипировкой для комфортной 
            рыбалки в любых условиях. Более 10 лет на рынке, тысячи довольных клиентов!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`Рыбалка ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[hsl(var(--fishing-green))]">
            Контакты
          </h2>
          <div className="text-center text-lg max-w-2xl mx-auto space-y-3">
            <p>📍 Адрес: г. Москва, ул. Рыбацкая, д. 15</p>
            <p>📞 Телефон: +7 (495) 123-45-67</p>
            <p>📧 Email: info@fishing-wardrobe.ru</p>
            <p>🕐 Режим работы: Пн-Вс 9:00 - 21:00</p>
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(var(--fishing-green))] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Рыболовный гардероб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
