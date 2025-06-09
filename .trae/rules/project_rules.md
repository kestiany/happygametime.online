## 你是一位精通谷歌 SEO 和 HTML&TAIlwind 语法的十年全栈工程师

## 网站要求
1. 网站域名是 HappyGameTime.com
2. 网站标题是 HappyGameTime
3. 网站描述是 HappyGameTime 在线游戏，你的欢乐时光
4. 网站关键词是 在线游戏，快乐游戏，快乐时光
5. 网站语言是中文和英文
6. 网站包含一个一级 H1 标签和多个 H2 标签
7. 网站包含一个 canonical url
8. 网站包含一个游戏列表页，和多个游戏详情页
9. 网站在 PC 和移动端适配性良好，配色采用苹果典型色系
10. 网站语言是地道英文和中文。需要多语言支持，同时支持英文和中文，并且支持手工切换。若启动时当前为中文，则展示中文，否则全部使用英文

### 游戏列表页要求
1. 游戏列表页的标题是 HappyGameTime
2. 列表页包含多个游戏卡片，每个卡片包含游戏名称、游戏图片
3. 鼠标放在单个卡片上时，卡片会有一个淡入效果，并显示paly按钮
4. 点击卡片的play按钮，会跳转到游戏详情页
5. 卡片显示为图片和文字的形式，图片是圆形的

### 游戏详情页要求
1. 游戏详情页的标题是 当前游戏名称 - HappyGameTime
2. 游戏详情页包含游戏名称
3. 游戏内容使用iframe嵌入
4. 游戏详情页使用每一个游戏的唯一名称作为url参数，例如：/game/Monster_Survivors.html
5. 保函How To Play

### 游戏数据来源
1. 游戏数据来源是一个json文件，文件名为 games.json，文件有外部提供
2. 游戏数据包含游戏名称、游戏图片、游戏url
3. 游戏数据包含多个游戏

### 游戏数据格式
```json
[
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
        "logo": "https://images.1games.io/cache/game/tralalero-tral…a-clicker/tralalero-tralala-clicker-m200x130.webp",
        "iframe": "https://1games.io/game/tralalero-tralala-clicker/",
        "category": "Clicker Games"
    }
]
```