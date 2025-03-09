document.addEventListener("DOMContentLoaded", function() {
    console.log("Добро пожаловать на FunZic!");

    const sellForm = document.getElementById("sell-form");
    if (sellForm) {
        sellForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const productName = document.getElementById("product-name").value;
            const productDescription = document.getElementById("product-description").value;
            const productPrice = document.getElementById("product-price").value;
            const productImage = document.getElementById("product-image").files[0];
            const productData = document.getElementById("product-data").value;

            const product = {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: URL.createObjectURL(productImage),
                data: productData,
                commission: (productPrice * 0.19).toFixed(2)
            };

            const productList = document.getElementById("product-list");
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");

            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Цена: ${product.price} руб. (Комиссия: ${product.commission} руб.)</p>
                <img src="${product.image}" alt="${product.name}">
                <p>Данные товара: ${product.data}</p>
            `;

            productList.appendChild(productItem);
            alert("Товар добавлен в каталог!");

            sellForm.reset();
        });
    }

    const ratingForm = document.getElementById("rating-form");
    if (ratingForm) {
        ratingForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const sellerName = document.getElementById("seller-name").value;
            const rating = document.getElementById("rating").value;
            const comment = document.getElementById("comment").value;

            const review = {
                seller: sellerName,
                rating: rating,
                comment: comment
            };

            const sellerRatings = document.getElementById("seller-ratings");
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");

            reviewItem.innerHTML = `
                <h3>Продавец: ${review.seller}</h3>
                <p>Оценка: ${review.rating} звезд</p>
                <p>Комментарий: ${review.comment}</p>
            `;

            sellerRatings.appendChild(reviewItem);
            alert("Отзыв добавлен!");

            ratingForm.reset();
        });
    }
});
