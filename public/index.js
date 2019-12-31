

let productForm = document.querySelector('#new-product-form');
$('#new-product-form').submit(e => {
  e.preventDefault();


  let title = document.querySelector('#title-input').value;
  let price = document.querySelector('#price-input').value;
  let file = document.querySelector('#product-image-input').files[0];
  let fd = new FormData();
  fd.append('productImage', file);
  fd.append('title', title);
  fd.append('price', price);

  $.ajax({
    url: '/uploadProduct',
    type: 'post',
    data: fd,
    contentType: false,
    processData: false,
    success: function (response) {
      console.log('horaahhh');
    },
  });
});

// show image after selection
let img_input = document.querySelector('#product-image-input');
let previewImage = document.querySelector('#preview-image');
img_input.addEventListener('change', e => {
  showImage(e);
});

function showImage(e) {

  if (e.target.files && e.target.files[0]) {
    console.log('files here')
    let reader = new FileReader();

    reader.onload = e => {
      console.log(e.target.result);
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  }
}

// handle edit product click
let main_div = document.querySelector('.main');

main_div.addEventListener('click', e => {
  let target = e.target;
  if (target.classList.contains('product')) {
    let children = target.children;
    let img = children[0].src;
    let title = children[1].innerText;
    let price = children[2].innerText.substr(2);
    showEditModal(img, title, price);

  }
});

function showEditModal(img, title, price) {
  let img_input = document.querySelector('#edit-preview-image');
  let title_input = document.querySelector('#edit-title-input');
  let price_input = document.querySelector('#edit-price-input');

  img_input.src = img;
  title_input.value = title;
  price_input.value = price;

  $('#edit-modal').modal('show');
}





// // handle product delete buttons
// let products = document.querySelector('#products-page');
// products.addEventListener('click', (e) => {
//   if (e.target.classList.contains('delete')) {
//     let _productName = e.target.parentNode.parentNode.id;

//     if (confirm(`Are you sure you want to delete ${_productName}?`)) {
//       $.ajax({
//         type: "post",
//         url: '/deleteProduct',
//         data: { "productName": _productName },
//         success: () => { e.target.parentNode.parentNode.remove(); },
//         error: () => { window.location.href = '/error'; }
//       });
//     }
//   }

// });

// // handle blog post delete buttons
// let blogPosts = document.querySelector('#blog-post-page');
// blogPosts.addEventListener('click', (e) => {
//   if (e.target.classList.contains('delete')) {
//     let _blogPostName = e.target.parentNode.parentNode.id;

//     if (confirm(`Are you sure you want to delete ${_blogPostName}?`)) {
//       $.ajax({
//         type: "post",
//         url: '/deleteBlogPost',
//         data: { "blogPostName": _blogPostName },
//         success: () => { e.target.parentNode.parentNode.remove(); },
//         error: () => { window.location.href = '/error'; }
//       });
//     }
//   }

// });