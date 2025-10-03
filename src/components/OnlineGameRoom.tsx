import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Player {
  id: string;
  name: string;
  isReady: boolean;
}

export default function OnlineGameRoom() {
  const [roomCode] = useState('GAME-' + Math.random().toString(36).substring(7).toUpperCase());
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Игрок 1', isReady: true }
  ]);
  const [copied, setCopied] = useState(false);

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" className="mb-4">
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад к играм
          </Button>
          <h1 className="text-4xl font-bold mb-2">Комната ожидания</h1>
          <p className="text-muted-foreground">Пригласи друзей и начни игру</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={24} />
                Игроки ({players.length}/8)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {players.map((player) => (
                  <div key={player.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--game-orange))] to-[hsl(var(--game-cyan))] text-white">
                          {player.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{player.name}</span>
                    </div>
                    {player.isReady && (
                      <Badge className="bg-green-600 text-white">
                        <Icon name="Check" size={14} className="mr-1" />
                        Готов
                      </Badge>
                    )}
                  </div>
                ))}
                
                {Array.from({ length: 8 - players.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex items-center gap-3 p-3 rounded-lg border-2 border-dashed border-muted">
                    <Avatar>
                      <AvatarFallback className="bg-muted">
                        <Icon name="UserPlus" size={20} />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground">Ожидание игрока...</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Link" size={24} />
                  Код комнаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={roomCode}
                      readOnly
                      className="font-mono text-lg text-center"
                    />
                    <Button
                      onClick={copyRoomCode}
                      variant="outline"
                      className="shrink-0"
                    >
                      <Icon name={copied ? "Check" : "Copy"} size={18} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Отправь этот код друзьям, чтобы они присоединились
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[hsl(var(--game-orange))]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={24} />
                  Настройки игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Максимум игроков</span>
                  <Badge variant="outline">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Режим игры</span>
                  <Badge variant="outline">Командный</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Сложность</span>
                  <Badge variant="outline">Средняя</Badge>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full bg-[hsl(var(--game-orange))] hover:bg-[hsl(var(--game-orange))]/90 text-white font-orbitron text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать игру
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
