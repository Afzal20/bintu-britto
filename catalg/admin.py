from django.contrib import admin
from django.utils.html import format_html
from .models import (
    UserProfile, Districts, Category, ItemType, Size, Rating, Color,
    Item, ItemImage, ItemSize, ItemColor, Cart, Order, OrderItems,
    Slider, BillingAddress, Payment, Coupon, Refund
)

# Inline Admin Models
class ItemImageInline(admin.TabularInline):
    model = ItemImage
    extra = 1

class ItemSizeInline(admin.TabularInline):
    model = ItemSize
    extra = 1

class ItemColorInline(admin.TabularInline):
    model = ItemColor
    extra = 1

class OrderItemsInline(admin.TabularInline):
    model = OrderItems
    extra = 1

# Admin Models
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone_number', 'address', 'road_no', 'house_no', 'email')
    search_fields = ('user__username', 'user__email', 'phone_number', 'address')
    list_filter = ('user__date_joined',)  # Assumes `date_joined` is accessed through `User`
    readonly_fields = ('user',)

    fieldsets = (
        (None, {
            'fields': ('user', 'email')
        }),
        ('Personal Info', {
            'fields': ('phone_number',)
        }),
        ('Address', {
            'fields': ('address', 'road_no', 'house_no')
        }),
    )

class ItemAdmin(admin.ModelAdmin):
    inlines = [ItemImageInline, ItemSizeInline, ItemColorInline]
    list_display = [
        "product_id",
        "title",
        "ratings",
        "price",
        "number_of_items",
        "discount_price",
        "brand_name",
        "category",
        "type",
        "get_first_image_url",
        "description",
        "is_featured",
    ]

    def get_first_image_url(self, obj):
        first_image = obj.images.first()
        if first_image:
            return format_html('<img src="{}" width="50" height="50" />'.format(first_image.image.url))
        return None

    get_first_image_url.short_description = 'First Image'

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class DistrictsAdmin(admin.ModelAdmin):
    list_display = ['title']

class ItemTypeAdmin(admin.ModelAdmin):
    list_display = ['name']

class SizeAdmin(admin.ModelAdmin):
    list_display = ['name']

class RatingAdmin(admin.ModelAdmin):
    list_display = ['value']

class ColorAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemsInline]
    list_display = ['user', 'ordered', 'start_date', 'ordered_date', 'district', 'Address', 'Apartment', 'billing_address', 'payment', 'coupon', 'being_delivered', 'received', 'refund_requested', 'refund_granted']
    list_filter = ['ordered', 'being_delivered', 'received', 'refund_requested', 'refund_granted']
    search_fields = ['user__username', 'billing_address__street_address']

class CartAdmin(admin.ModelAdmin):
    list_display = ['user_name', 'item', 'item_color_code', 'item_size', 'quantity', 'ordered', 'applied_coupon']
    search_fields = ['user_name__username', 'item__title']
    list_filter = ['ordered', 'delivered', 'applied_coupon']

class BillingAddressAdmin(admin.ModelAdmin):
    list_display = ('user', 'street_address', 'apartment_address', 'country', 'zip')
    search_fields = ('user__username', 'street_address', 'apartment_address')
    list_filter = ('country',)

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('user', 'amount', 'timestamp', 'payment_method', 'charge_id', 'success')
    search_fields = ('user__username', 'charge_id')
    list_filter = ('success', 'payment_method')

class CouponAdmin(admin.ModelAdmin):
    list_display = ('code', 'amount')
    search_fields = ('code',)

class RefundAdmin(admin.ModelAdmin):
    list_display = ('order', 'reason', 'accepted', 'email')
    search_fields = ('order__id', 'email')
    list_filter = ('accepted',)

class SliderAdmin(admin.ModelAdmin):
    list_display = ('title',)

# Registering Models
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Districts, DistrictsAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ItemType, ItemTypeAdmin)
admin.site.register(Size, SizeAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(Color, ColorAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(ItemImage)
admin.site.register(ItemSize)
admin.site.register(ItemColor)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Slider, SliderAdmin)
admin.site.register(BillingAddress, BillingAddressAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(Coupon, CouponAdmin)
admin.site.register(Refund, RefundAdmin)
