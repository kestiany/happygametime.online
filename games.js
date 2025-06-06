// 加载游戏数据并生成游戏卡片
document.addEventListener('DOMContentLoaded', function() {
    fetch('./games.json')
        .then(response => response.json())
        .then(games => {
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
        })
        .catch(error => console.error('Error loading games data:', error));
    });