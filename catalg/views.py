from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import (
    UserProfile, Districts, Category, ItemType, Size, Rating, Color,
    Item, ItemImage, ItemSize, ItemColor, Cart, Order, OrderItems,
    Slider, BillingAddress, Payment, Coupon, Refund
)
from .serializers import (
    UserProfileSerializer, DistrictsSerializer, CategorySerializer, ItemTypeSerializer,
    SizeSerializer, RatingSerializer, ColorSerializer, ItemSerializer,
    ItemImageSerializer, ItemSizeSerializer, ItemColorSerializer, CartSerializer,
    OrderSerializer, OrderItemsSerializer, SliderSerializer, BillingAddressSerializer,
    PaymentSerializer, CouponSerializer, RefundSerializer
)

# ModelViewSets for the basic CRUD operations

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class DistrictsViewSet(viewsets.ModelViewSet):
    queryset = Districts.objects.all()
    serializer_class = DistrictsSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemTypeViewSet(viewsets.ModelViewSet):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer

class SizeViewSet(viewsets.ModelViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'product_id'  # Use product_id instead of the default 'id'
    
    lookup_value_regex = '[\w-]+'

class ItemImageViewSet(viewsets.ModelViewSet):
    queryset = ItemImage.objects.all()
    serializer_class = ItemImageSerializer

class ItemSizeViewSet(viewsets.ModelViewSet):
    queryset = ItemSize.objects.all()
    serializer_class = ItemSizeSerializer

class ItemColorViewSet(viewsets.ModelViewSet):
    queryset = ItemColor.objects.all()
    serializer_class = ItemColorSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class SliderViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer

class BillingAddressViewSet(viewsets.ModelViewSet):
    queryset = BillingAddress.objects.all()
    serializer_class = BillingAddressSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class CouponViewSet(viewsets.ModelViewSet):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer

class RefundViewSet(viewsets.ModelViewSet):
    queryset = Refund.objects.all()
    serializer_class = RefundSerializer

@api_view(['GET'])
def get_item_by_product_id(request, product_id):
    try:
        # Fetch the item by product_id
        item = Item.objects.prefetch_related('images', 'item_size__size', 'item_color__color').filter(product_id=product_id).first()

        if item:
            # Serialize the item using the ItemSerializer
            serializer = ItemSerializer(item)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
