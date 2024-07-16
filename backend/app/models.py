from bson.objectid import ObjectId
from . import mongo

def create_user(username):
    user = mongo.db.users.insert_one({'username': username, 'cookies': 0, 'level': 1})
    return str(user.inserted_id)

def update_cookies(user_id, cookies):
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$set': {'cookies': cookies}})

def get_user_data(user_id):
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    return user

def add_cookie(user_id, cookies):
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$inc': {'cookies': cookies}})

def buy_upgrade(user_id):
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    level = user['level'] + 1
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$set': {'level': level}})

def get_level(user_id):
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    return user['level']

def get_achievements(user_id):
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    return user.get('achievements', [])
