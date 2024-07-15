import asyncio
import os
from aiogram import Bot, Dispatcher, Router
from aiogram.enums import ParseMode
from aiogram.types import Message, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.filters import CommandStart
from dotenv import load_dotenv

load_dotenv()

API_TOKEN = os.getenv('BOT_TOKEN')
FRONTEND_URL = os.getenv('FRONTEND_URL')

def webapp_builder() -> InlineKeyboardMarkup:
    button = InlineKeyboardButton(text="Wassap. Let's click!", web_app=WebAppInfo(url=FRONTEND_URL))
    keyboard = InlineKeyboardMarkup(inline_keyboard=[[button]])
    return keyboard

router = Router()

@router.message(CommandStart())
async def start(message: Message) -> None:
    await message.reply('🍪 Click me!', reply_markup=webapp_builder())

async def main() -> None:
    bot = Bot(token=API_TOKEN, parse_mode=ParseMode.HTML)

    dp = Dispatcher()
    dp.include_router(router)

    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
