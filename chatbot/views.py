from rest_framework.views import APIView
from rest_framework.response import Response

class ChatBotView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').lower()
        if 'price' in user_message:
            reply = "Our cashew prices start from ₹500 per kg."
        elif 'hello' in user_message or 'hi' in user_message:
            reply = "Hello! How can I help you with our cashew products today?"
        elif 'buy' in user_message:
            reply = "You can add products to your cart and proceed to checkout!"
        else:
            reply = "Sorry, I didn’t understand that. You can ask about products, prices, or orders."
        return Response({"reply": reply})
