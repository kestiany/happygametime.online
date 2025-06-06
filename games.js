// 加载游戏数据并生成游戏卡片
document.addEventListener('DOMContentLoaded', function() {
    const games = [
        {
            "name": "Monster Survivors",
            "description": "Monster Survivors is an free online survival game with a minimalistic design and roguelite elements. The monsters are here, and you must survive!  Aggressive crabs, eerie pumpkins, flesh-eating plants and yes, even evil bees!  But on a vast open land, there's no place to run or hide. All you can do is survive as long as you can until waves of monsters end your struggles. Gather loot in each run to buy upgrades, strengthen your survivor and help the next survivor stand longer.",
            "logo": "https://www.onlinegames.io/media/posts/942/Monster-survivors.jpg",
            "iframe": "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
            "category": "Survivor Games"
        },
        {
            "name": "Super Mario",
            "description": "Red Rush hurls you into a blazing-fast arcade world where every second cranks up the speed and pressure. Reflexes need to fire instantly as barriers zip toward you in neon-soaked chaos. The pulse-pounding soundtrack fuels the madness, while the screen becomes a blur of danger and momentum. Dive into the rush, dodge with precision, and survive the storm—only the sharpest make it through. Are you fast enough to handle the storm? Get ready to break limits and scroll down to master the chaos!",
            "logo": "https://images.1games.io/cache/game/red-rush/red-rush-m200x130.webp",
            "iframe": "https://1games.io/game/red-rush/",
            "category": "Action Games"
        },
        {
            "name": "Doom Rider",
            "description": "Doom Rider unleashes you into a blazing underground world where speed, fury, and flaming wheels rule. Ride a bike like vengeance itself as you blaze past haunted landscapes and face the undead army. The stakes are high, the path is brutal, and only one legend rides out alive. Ignite your ride and enter the chaos in this driving game now!",
            "logo": "https://images.1games.io/cache/game/doom-rider/doom-rider-m200x130.webp",
            "iframe": "https://1games.io/game/doom-rider/",
            "category": "Action Games"
        },
        {
            "name": "Tralalero Tralala Clicker",
            "description": "Tralalero Tralala Clicker is an engaging idle game that draws inspiration from the essence of Italian Brainrot. With each absurd click, Tralalero unleashes an echo of musical madness that multiplies faster than your brain can comprehend. An endless spiral of accordion loops, explosive vocals, and visual overstimulation engulfs you. This is not a game you win. This is a game you survive. If you enjoy mind-numbing clicker chaos that grows louder and weirder, your fingers are about to be possessed!",
            "logo": "https://images.1games.io/cache/game/tralalero-tralala-clicker/tralalero-tralala-clicker-m200x130.webp",
            "iframe": "https://1games.io/game/tralalero-tralala-clicker/",
            "category": "Clicker Games"
        }
    ];
    
    const container = document.getElementById('games-container');
    
    games.forEach(game => {
                // 创建游戏卡片
                const card = document.createElement('div');
                card.className = 'game-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg relative group';
                
                // 游戏图片
                const img = document.createElement('img');
                img.src = game.logo;
                img.alt = game.name;
                img.className = 'w-full h-48 object-cover rounded-t-lg';
                
                // 游戏信息容器
                const infoContainer = document.createElement('div');
                infoContainer.className = 'p-4 w-full';
                
                // 游戏名称
                const name = document.createElement('h3');
                name.textContent = game.name;
                name.className = 'text-xl font-semibold text-gray-800 mb-2';
                
                // 游戏类别
                const category = document.createElement('span');
                category.textContent = game.category;
                category.className = 'text-sm text-gray-500 mb-4';
                
                // Play按钮
                const playBtn = document.createElement('a');
                playBtn.href = `game_template.html?name=${encodeURIComponent(game.name)}&iframe=${encodeURIComponent(game.iframe)}&description=${encodeURIComponent(game.description)}`;
                playBtn.target = '_blank';
                playBtn.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100';
                playBtn.textContent = 'Play';
                
                // 将元素添加到卡片
                infoContainer.appendChild(name);
                infoContainer.appendChild(category);
                infoContainer.appendChild(playBtn);
                
                card.appendChild(img);
                card.appendChild(infoContainer);
                
                // 将卡片添加到容器
                container.appendChild(card);
            });
    });