

$(document).ready(function () {

    loadAjaxProducts();


});




function loadAjaxProducts() {
    axios.get("/api/product/section/featured", {
        params: {}
    })
        .then(function (response) {
            const products = response.data.rows;


            $('#products-container').empty();

            for (let i = 0; i < products.length; i++) {
                const product = products[i];

                let urlImage = '';
                if (product.gallery) {
                    const gallery = product.gallery[0];
                    const photo = gallery.photo;
                    urlImage = generateImageUrl(photo.hash, photo.extension, photo.type)
                }

                $('#products-container').append(
                    buildHtmlProduct(product.name, product.discount, product.price, `/produto/detalhe/${product.id}`, urlImage)
                );
            }

            $('.same-height').each(function () {
                $(this).css("height", $(this).width());
            });
        })
        .catch(function (error) {
            console.log(error)
        });
}


function buildHtmlProduct(title = '', discont = '', price = '', urlDetail = '', urlImage = '') {
    return `
    <a class="col-md-3 col-sm-6" title="${title}" href="${urlDetail}">
        <div class="d-inline-block w-100 rounded p-3 mb-3 position-relative product-hover">
            <div class="bg-cover d-inline-block same-height rounded"
                style="width: 100%; background-image: url(&quot;${urlImage}&quot;);">
            </div>
            <p class="text-dark text-uppercase d-inline-block m-0" style="min-height: 4.3rem;">
                ${title.length > 70 ? title.substring(0, 70) + '...' : title}
            </p>
            <div class="mb-0">
                <p class="text-dark mb-0"><strong> Por apenas </strong></p>
                <div class="d-flex align-items-end">
                    <p class="text-primary m-0 mr-2"> R$ </p>
                    <h4 class="text-primary d-inline-block mb-0 h2"><strong>${Number(price).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong></h4>
                </div>
            </div>
            <p class="text-dark mb-1">10x de ${(Number(price) / 10).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <span class="btn btn-primary btn-block text-white rounded"> Comprar </span>
        </div>
    </a>
    `;
}