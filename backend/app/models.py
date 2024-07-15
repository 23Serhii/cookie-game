from . import mongo
from bson import ObjectId

def get_user_data():
    user_data = mongo.db.cookies.find_one()
    if not user_data:
        user_data = {"cookies": 0, "level": 1}
        mongo.db.cookies.insert_one(user_data)
    user_data["_id"] = str(user_data["_id"])
    return user_data

def add_cookie():
    mongo.db.cookies.update_one({}, {'$inc': {'cookies': 1}}, upsert=True)
    user_data = get_user_data()
    user_data["_id"] = str(user_data["_id"])
    return user_data

def get_level(cookies):
    return cookies // 100 + 1

def buy_upgrade(upgrade_cost):
    user_data = get_user_data()
    if user_data['cookies'] >= upgrade_cost:
        mongo.db.cookies.update_one({}, {'$inc': {'cookies': -upgrade_cost}}, upsert=True)
        return {"status": "success"}
    return {"status": "fail", "message": "Not enough cookies"}

def get_achievements(cookies):
    achievements = []
    if cookies >= 10:
        achievements.append("Collected 10 cookies!")
    if cookies >= 50:
        achievements.append("Collected 50 cookies!")
    if cookies >= 100:
        achievements.append("Collected 100 cookies!")
    if cookies >= 1000:
        achievements.append("Collected 1000 cookies!")
    return achievements
