import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const games = [
  {
    id: 1,
    title: 'Space Shooter',
    description: 'Классический космический шутер с ретро-графикой',
    image: '/img/cb72331e-ed68-49db-a4a8-092bdab914fd.jpg',
    players: '1-4',
    category: 'Экшен',
    online: true
  },
  {
    id: 2,
    title: 'Puzzle Master',
    description: 'Головоломка с яркими блоками и логикой',
    image: '/img/3f84b09d-35b9-44f0-b71c-a5be25fb3ea0.jpg',
    players: '1-2',
    category: 'Головоломка',
    online: true
  },
  {
    id: 3,
    title: 'Neon Racing',
    description: 'Футуристичные гонки на неоновых трассах',
    image: '/img/9d7c057e-f422-42fd-b67c-939aee46b820.jpg',
    players: '1-8',
    category: 'Гонки',
    online: true
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState<'home' | 'games'>('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--game-orange))] to-[hsl(var(--game-cyan))] bg-clip-text text-transparent">
              GAME CREATOR
            </h1>
            <div className="flex gap-4">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="font-orbitron"
              >
                🏠 Главная
              </Button>
              <Button
                variant={activeTab === 'games' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('games')}
                className="font-orbitron"
              >
                🎮 Игры
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--game-orange))] via-[hsl(var(--game-cyan))] to-[hsl(var(--game-yellow))] bg-clip-text text-transparent">
              Играй онлайн с друзьями
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Лучшие игры для совместного прохождения. Создавай комнаты, приглашай друзей и побеждай вместе!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[hsl(var(--game-orange))] hover:bg-[hsl(var(--game-orange))]/90 text-white font-orbitron text-lg px-8"
                onClick={() => setActiveTab('games')}
              >
                ▶️ Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-orbitron text-lg px-8"
              >
                👥 Создать комнату
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--game-orange))] to-[hsl(var(--game-cyan))] flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Мгновенный старт</h3>
              <p className="text-muted-foreground">Без загрузки, играй прямо в браузере</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--game-cyan))] to-[hsl(var(--game-yellow))] flex items-center justify-center text-3xl">
                👥
              </div>
              <h3 className="text-xl font-bold mb-2">Мультиплеер</h3>
              <p className="text-muted-foreground">Играй с друзьями в реальном времени</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--game-yellow))] to-[hsl(var(--game-orange))] flex items-center justify-center text-3xl">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-2">Рейтинги</h3>
              <p className="text-muted-foreground">Соревнуйся и стань лучшим</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'games' && (
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-2">Доступные игры</h2>
            <p className="text-muted-foreground">Выбери игру и начни играть с друзьями</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card
                key={game.id}
                className="group overflow-hidden border-2 hover:border-[hsl(var(--game-orange))] transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className="bg-[hsl(var(--game-cyan))] text-white">
                      {game.category}
                    </Badge>
                    {game.online && (
                      <Badge className="bg-[hsl(var(--game-orange))] text-white">
                        📡 Online
                      </Badge>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      👥 <span>{game.players} игроков</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-[hsl(var(--game-orange))] hover:bg-[hsl(var(--game-orange))]/90 text-white font-orbitron"
                    >
                      ▶️ Играть
                    </Button>
                    <Button
                      variant="outline"
                      className="font-orbitron"
                    >
                      ➕
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}