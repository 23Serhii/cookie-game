# Cookie Clicker Game

## Огляд

**Cookie Clicker Game** - інтерактивна гра, де гравці збирають печиво, натискаючи на кнопку. Гра має механіку покращень, що дозволяє гравцям збільшувати кількість зібраного печива за один клік. Крім того, гравці можуть отримати доступ до гри через Telegram бота для зручного користування.

![Screenshot](https://i.imgur.com/rAo7dN6.png)


## Можливості

- **Збирання печива:** Натискайте на кнопку, щоб збирати печиво.
- **Покращення:** Підвищуйте свої можливості, щоб збирати більше печива за клік.
- **Прогресбар:** Візуалізуйте свій прогрес до наступного рівня покращення.
- **Інтеграція з Telegram:** Грайте безпосередньо з Telegram, використовуючи веб-інтерфейс.

## Використані технології

### Фронтенд
- **React:** Для побудови користувацьких інтерфейсів.
- **Vite:** Для швидкої та ефективної розробки та збирання веб-додатків.
- **TypeScript:** Для типобезпечної розробки на JavaScript.
- **Tailwind CSS:** Для швидкого та узгодженого стилізування.

### Бекенд
- **Flask:** Легкий WSGI веб-фреймворк.
- **Flask-CORS:** Для обробки Cross-Origin Resource Sharing (CORS).
- **Flask-PyMongo:** Для інтеграції MongoDB з Flask.
- **MongoDB:** NoSQL база даних для зберігання даних гри.

### Інтеграція з Telegram
- **aiogram:** Фреймворк для розробки Telegram ботів.
- **ngrok:** Для безпечного доступу до вашого локального сервера через інтернет.

## Встановлення та запуск

### Передумови
- **Python 3.9+**
- **Node.js 14+**
- **MongoDB**

### Налаштування бекенду

1. **Клонуйте репозиторій та перейдіть до директорії backend:**
    ```bash
    git clone https://github.com/yourusername/cookie-clicker-game.git
    cd cookie-clicker-game/backend
    ```

2. **Встановіть необхідні Python пакети:**
    ```bash
    pip install -r requirements.txt
    ```

3. **Запустіть Flask сервер:**
    ```bash
    python run.py
    ```

### Налаштування фронтенду

1. **Перейдіть до директорії frontend:**
    ```bash
    cd ../frontend
    ```

2. **Встановіть необхідні npm пакети:**
    ```bash
    npm install
    ```

3. **Запустіть фронтенд сервер:**
    ```bash
    npm run start
    ```

### Налаштування Telegram бота

1. **Створіть файл `.env` у кореневій директорії з наступним вмістом:**
    ```plaintext
    BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
    FRONTEND_URL=http://localhost:5000
    ```

2. **Запустіть Telegram бота:**
    ```bash
    python bot.py
    ```

## Використання

1. **Доступ до фронтенду:**
    ```plaintext
    http://localhost:5000
    ```

2. **Взаємодія з бекендом:**
    ```plaintext
    http://localhost:8000
    ```

## SCREENSHOTS

![Screenshot](https://i.imgur.com/N7IC62p.png)
![Screenshot](https://i.imgur.com/L2FeAN9.png)
