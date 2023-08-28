

def get_category_data(post):
    return {
        "id": post.category.id,
        "title": post.category.title,
    }