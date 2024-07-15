from flask import Blueprint, jsonify, request
from .models import get_user_data, add_cookie, buy_upgrade, get_level, get_achievements

main = Blueprint('main', __name__)

@main.route('/cookies', methods=['GET'])
def get_user_data_route():
    user_data = get_user_data()
    user_data['level'] = get_level(user_data['cookies'])
    return jsonify(user_data), 200

@main.route('/cookies', methods=['POST'])
def add_cookie_route():
    user_data = add_cookie()
    user_data['level'] = get_level(user_data['cookies'])
    return jsonify(user_data), 200

@main.route('/buy_upgrade', methods=['POST'])
def buy_upgrade_route():
    data = request.get_json()
    upgrade_cost = data.get('upgrade_cost')
    result = buy_upgrade(upgrade_cost)
    return jsonify(result), 200

@main.route('/achievements', methods=['GET'])
def get_achievements_route():
    user_data = get_user_data()
    achievements = get_achievements(user_data['cookies'])
    return jsonify(achievements), 200
