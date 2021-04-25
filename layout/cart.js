var products = [];

function addCart(id) {
    //btn
    var btn = document.querySelectorAll('.add-cart');
    // lay du lieu cua sp do 
    var api = `http://localhost:3000/products/${id}`;
    var con = confirm("Bạn có chắc chắn muốn thêm sản phẩm này vào giỏ hàng hay không !");
    if (con) {
        fetch(api, {
                method: "GET",
                dataType: "json",
            })
            .then(response => response.json())
            .then(data => {
                let product = {
                    id: id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    totalPrice: parseInt(data.price),
                    quantity: 1
                }
                console.log(product);
                addItemInLocal(product);
            })
    }

}

function addItemInLocal(product) {
    let cartItem = JSON.parse(localStorage.getItem('productInCart'));
    if (cartItem == null) {
        products.push(product);
        console.log(products);
        localStorage.setItem('productInCart', JSON.stringify(products));
    } else {
        cartItem.forEach(item => {
            if (product.id == item.id) {
                product.quantity = item.quantity += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;
            } else {
                products.push(item);
            }
        });
        products.push(product);
    }
    localStorage.setItem('productInCart', JSON.stringify(products));
    window.location.reload();
}


function countProductInCart() {
    let cartNumber = 0;
    let price = 0;
    let cartItem = JSON.parse(localStorage.getItem('productInCart'));
    if (cartItem) {
        cartItem.forEach(item => {
            cartNumber = item.quantity += cartNumber;
            price = item.totalPrice += price;
        })
        document.querySelector('.count').innerHTML = cartNumber;
        document.querySelector('.price').innerHTML = price + "đ";
        document.querySelector('.total-price-list-product-cart').innerHTML = price + "đ";
    }

}
countProductInCart();


function getProductIncart() {
    let content = ``;
    let cartItem = JSON.parse(localStorage.getItem('productInCart'));
    if (cartItem) {
        cartItem.forEach(item => {
            content += `
                <tr>
                    <td class="shoping__cart__item">
                        <img src="${item.image}" alt="" width="100px">
                        <h5 class="name" style="font-weight:bold">${item.name}</h5>
                    </td>
                    <td class="shoping__cart__price">
                        $ ${item.price}
                    </td>
                    <td class="shoping__cart__quantity">
                        <div class="quantity">
                            <div class="pro-qty">
                                <input type="text" value="${item.quantity}" class="quantity-${item.id}">
                            </div>
                        </div>
                    </td>
                    <td class="shoping__cart__total">
                        $ ${item.totalPrice}
                    </td>
                    <td class="shoping__cart__item__close">
                        <span class="deleteitemCart icon_close" onclick="deleteItem(${item.id})"></span>
                    </td>
                </tr>
            `;
        });
        document.querySelector('tbody').innerHTML = content;
    }
}

getProductIncart();

// xoas
function deleteItem(proId) {
    var con = confirm("Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng ?");
    if (con) {
        let cartItem = JSON.parse(localStorage.getItem('productInCart'));
        cartItem = cartItem.filter(pro => pro.id != proId);

        localStorage.setItem('productInCart', JSON.stringify(cartItem));
        window.location.reload();

    }
}


function deletecart() {
    var con = confirm("Bạn có chắc chắn muốn xoá tất cả giỏ hàng không !");
    if (con) {
        localStorage.clear();
        window.location.href = "index.html";
    }
}