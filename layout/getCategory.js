window.getCate = {
    getCate: async() => {
        var content = "";
        var api_get_cate = "http://localhost:3000/categories";
        fetch(api_get_cate, {
                method: "GET",
                dataType: "json",
            })
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    content += `<li><a href="list-product.html?cateId=${element.id}">${element.name}</a></li>`;
                })
                return document.querySelector('.category').innerHTML = content;
            })

    }
}