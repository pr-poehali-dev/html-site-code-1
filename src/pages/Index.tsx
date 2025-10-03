export default function Index() {
  return (
    <div className="min-h-screen p-8" style={{ background: '#1a1625', color: '#fff' }}>
      <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        🎮 GAME CREATOR
      </h1>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-6xl font-bold mb-6" style={{ 
          background: 'linear-gradient(to right, #FF6B35, #4ECDC4, #FFE66D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Играй онлайн с друзьями
        </h2>
        <p className="text-xl mb-8" style={{ color: '#a0a0a0' }}>
          Лучшие игры для совместного прохождения
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 rounded-xl" style={{ background: '#2a2535' }}>
          <img 
            src="/img/cb72331e-ed68-49db-a4a8-092bdab914fd.jpg" 
            alt="Space Shooter"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Space Shooter</h3>
          <p style={{ color: '#a0a0a0' }}>Космический шутер с ретро-графикой</p>
          <button className="mt-4 px-6 py-2 rounded-lg w-full" style={{ background: '#FF6B35', color: '#fff' }}>
            ▶️ Играть
          </button>
        </div>

        <div className="p-6 rounded-xl" style={{ background: '#2a2535' }}>
          <img 
            src="/img/3f84b09d-35b9-44f0-b71c-a5be25fb3ea0.jpg" 
            alt="Puzzle Master"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Puzzle Master</h3>
          <p style={{ color: '#a0a0a0' }}>Головоломка с яркими блоками</p>
          <button className="mt-4 px-6 py-2 rounded-lg w-full" style={{ background: '#FF6B35', color: '#fff' }}>
            ▶️ Играть
          </button>
        </div>

        <div className="p-6 rounded-xl" style={{ background: '#2a2535' }}>
          <img 
            src="/img/9d7c057e-f422-42fd-b67c-939aee46b820.jpg" 
            alt="Neon Racing"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Neon Racing</h3>
          <p style={{ color: '#a0a0a0' }}>Футуристичные гонки на неоновых трассах</p>
          <button className="mt-4 px-6 py-2 rounded-lg w-full" style={{ background: '#FF6B35', color: '#fff' }}>
            ▶️ Играть
          </button>
        </div>
      </div>
    </div>
  );
}