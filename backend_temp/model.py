def estimate_price(area, bedrooms, location):
    base_price = 5000  # ₹ per sq ft

    location_factor = {
        "Delhi": 1.4,
        "Mumbai": 1.6,
        "Bangalore": 1.3,
        "Other": 1.0
    }

    price = area * base_price
    price *= location_factor.get(location, 1.0)
    price += bedrooms * 300000

    return round(price / 10000000, 2)  # in Crores
