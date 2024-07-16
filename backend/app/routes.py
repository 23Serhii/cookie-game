from flask import Blueprint, request, jsonify
from .models import create_user, update_cookies, get_user_data, add_cookie, buy_upgrade, get_level, get_achievements

main = Blueprint('main', __name__)

@main.route('/create_user', methods=['POST'])
def create_user_route():
    data = request.get_json()
    username = data.get('username')
    if not username:
        return jsonify({'status': 'error', 'message': 'Username is required'}), 400

    user_id = create_user(username)
    return jsonify({'status': 'success', 'user_id': user_id}), 201
 
 @main.route('/cookies', methods=['POST'])
def add_cookie_route():
    data = request.get_json()
    print(f"Received data: {data}")  # Лог для перевірки отриманих даних
    user_id = data.get('user_id')
    if not user_id:
        return jsonify({'status': 'error', 'message': 'User ID is required'}), 400

    add_cookie(user_id, data.get('cookies', 1))  # Додаємо печиво (за замовчуванням 1)
    user_data = get_user_data(user_id)
    user_data['level'] = get_level(user_id)
    return jsonify(user_data), 200

@main.route('/update_cookies', methods=['POST'])
def update_cookies_route():
    data = request.get_json()
    user_id = data.get('user_id')
    cookies = data.get('cookies')
    if not user_id or cookies is None:
        return jsonify({'status': 'error', 'message': 'User ID and cookies are required'}), 400

    update_cookies(user_id, cookies)
    return jsonify({'status': 'success'}), 200
