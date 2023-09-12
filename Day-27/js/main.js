productTable = document.querySelector("#product_table");
// console.log(productTable);
var cartTable = document.querySelector("#cart_table");
// console.log(cartTable);
var products = [
    {
        id: 1,
        name: "Sản phẩm 1",
        price: 1000,
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        price: 2000,
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        price: 3000,
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        price: 4000,
    },
];
//local Storage
var goods;
if(localStorage.getItem("goods")) {
    goods = JSON.parse(localStorage.getItem("goods"))
} else {
    goods = [];
}

var updatelocalStorage = function() {
    localStorage.setItem("goods", JSON.stringify(goods));
}

var currentGoods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")): [];

var render = function() {
    products.forEach(function(product, index) {
        var productItem = document.createElement("tr");
        productItem.classList.add(`product-itemp-${index}`);
        var html = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <input type="number" name="" class="quantity" min="1" value="1" style="width:80%; display: block;margin: 0 auto;">
                <buttton class="btn">Thêm vào giỏ</buttton>
            </td>
        `;
        productItem.innerHTML = html;
        productTable.appendChild(productItem);
    });
    var btns = document.querySelectorAll(".btn");
    // console.log(btns);

    var quantitys = document.querySelectorAll(".quantity");
    btns.forEach(function(btn, index) {
        btn.addEventListener("click", function() {
            var ids = goods.map(function(good) {
                good.product_index;
            })
            var check = ids.includes(index+1);
            if(check) {
                var repeat = goods.find(function(good) {
                    return good.product_index === index + 1;
                });
                repeat.quantity++;
                goods[goods.length-1].total = goods[goods.length - 1].quantity * goods[goods.length-1].price;
                showBill();
            } else { 
                goods.push({
                    id: goods.length + 1,
                    product_index: index + 1,
                    name: products[index].name,
                    price: products[index].price,
                    quantity: quantitys[index].value,
                    total: 0,
                });
                goods[goods.length-1].total = goods[goods.length - 1].quantity * goods[goods.length-1].price;
                showBill();
            }
            updatelocalStorage();
            currentGoods = JSON.parse(localStorage.getItem("goods"));
            showBill();
            handleBill();
        });
    })
}
render();

var showBill = function() {
    if(goods.length === 0) {
        cartTable.innerHTML = "Bạn chưa thêm sản phẩm nào vào giỏ hàng";
        return;
    }
    var headerCart = `
        <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
        </tr>
    `;
    cartTable.innerHTML = headerCart;
    currentGoods.forEach(function(good, index) {
        var cartItem = document.createElement("tr");
        cartItem.classList.add(`cart-item-${index}`);
        var html = `
            <td>${good.id}</td>
            <td>${good.name}</td>
            <td>${good.price}</td>
            <td>
                <input type="number" value="${good.quantity}" class="quantity-product-cart"/>
            </td>
            <td>${good.total}</td>
            <td>
                <button class="deleteItem">Xóa</button>
            </td>
        `;
        cartItem.innerHTML = html;
        cartTable.appendChild(cartItem);
    });
    var total = document.createElement("tr");
    total.innerHTML = `
    <td colspan="3">Tổng</td>
    <td>${currentGoods.reduce((total, cart) => total + +cart.quantity, 0)}</td>
    <td>${currentGoods.reduce((total, cart) => total + +cart.total, 0)}</td>
    `;
    cartTable.appendChild(total);
    var deleteBtns = document.querySelectorAll(".deleteItem");
    deleteBtns.forEach(function(btn, index) {
        btn.addEventListener("click", function() {
            if(confirm("Are you sure?") === true) {
                goods.splice(index, 1);
                updatelocalStorage();
                currentGoods = JSON.parse(localStorage.getItem("goods"));
                showBill();
                handleBill();
            }
        });
    });
}

var handleBill = function() {
    var cartShow = document.querySelector(".cart-show");
    if(goods.length === 0) {
        cartShow.innerHTML = "";
        return;
    }
    var main = document.querySelector(".main");
    var html = `
        <button class="update-btn">Cập nhật giỏ</button>
        <button class="delete-all-btn">Xóa giỏ hàng</button>
    `;
    cartShow.innerHTML = html;
    var updateBtn = document.querySelector(".update-btn");
    var deleteAllBtn = document.querySelector(".delete-all-btn");
    updateBtn.addEventListener("click", function() {
        var updateQuantity = document.querySelector(".quantity-product-cart")
        updateQuantity.forEach(function(number, index) {
            goods[index] = carts[index].quantity * carts[index].price;
            if(+number.value <= 0) {
                goods.splice(index, 1);
            } else if(+number.value > 0) {
                goods[index].quantity = +number.value;
            }
        });
    });

    updatelocalStorage();
    currentGoods = JSON.parse(localStorage.getItem("goods"));
    showBill();
    alert("Cập nhật giỏ hàng thành công");
    deleteAllBtn.addEventListener("click", function() {
        if(confirm("Are you sure>") === true) {
            goods.length = 0;
            updatelocalStorage();
            currentGoods = JSON.parse(localStorage.getItem("goods"));
            showBill();
            alert("Xóa giỏ hàng thành công");
            cartShow.innerHTML = "";
        }
    });
}
handleBill();

