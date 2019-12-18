

let productForm = document.querySelector('#new-product-form');
$('#new-product-form').submit(e => {
  e.preventDefault();


  let title = document.querySelector('#title-input').value;
  let dimensions = document.querySelector('#dimensions-input').value;
  let price = document.querySelector('#price-input').value;
  let shipping = document.querySelector('#shipping-input').value;
  let file = document.querySelector('#product-image-input').files[0];
  let fd = new FormData();
  fd.append('productImage', file);
  fd.append('title', title);
  fd.append('dimensions', dimensions);
  fd.append('price', price);
  fd.append('shipping', shipping);



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
      console.log(e.target.result)
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  }
}








  // $('#submit-button').click(e => {
  //   e.preventDefault();

  //   let fd = new FormData();
  //   let file = document.querySelector('#product-image-input').files[0];
  //   console.log(file);
  //   fd.append('productFile', file);
  //   console.log(fd);


  //   $.ajax({
  //     url: '/uploadProduct',
  //     type: 'post',
  //     data: { 'formData': fd },
  //     contentType: false,
  //     processData: false,
  //     success: function (response) {
  //       console.log('horaahhh');
  //     },
  //   });
  // });




// // newArtworkForm

// let artworkElement = document.getElementById("newArtworkForm");
// if (artworkElement !== null) {
//   window.addEventListener("load", () => {
//     let form = document.querySelector("#newArtworkForm");

//     form.addEventListener(
//       "submit",
//       event => {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         } else {
//           event.preventDefault();

//           let _title = document.querySelector(
//             "#newArtworkForm input[name='title']"
//           ).value;
//           let _dimensions = document.querySelector(
//             "#newArtworkForm input[name='dimensions']"
//           ).value;
//           let _price = document.querySelector(
//             "#newArtworkForm input[name='price']"
//           ).value;
//           let _shipping = document.querySelector(
//             "#newArtworkForm input[name='shipping']"
//           ).value;
//           let _uploader = document.querySelector(
//             "#newArtworkForm input[name='image']"
//           );



//           let _file = _uploader.files[0];
//           console.log(_file)

//           let imgFD = new FormData();
//           imgFD.append("file", _file);

//           // let fd = new FormData();
//           // fd.append("title", title);
//           // fd.append("dimensions", dimensions);
//           // fd.append("price", price);
//           // fd.append("shipping", shipping);
//           // fd.append("file", file.name);

//           // $.ajax({
//           //   type: "post",
//           //   url: "/uploadArtworkImage",
//           //   data: imgFD,
//           //   contentType: false,
//           //   processData: false,
//           //   success: function () {
//           //     console.log(`${file.name} uploaded to the server`);
//           //   },
//           //   error: function () {
//           //     console.log("error uploading to the server");
//           //   }
//           // });

//           $.ajax({
//             type: "POST",
//             url: "/uploadProduct",
//             data: imgFD, //{
//             //   title: _title,
//             //   dimensions: _dimensions,
//             //   price: _price,
//             //   shipping: _shipping,
//             //   image: file,
//             //   contentType: false,
//             //   processData: false,
//             contentType: false,
//             processData: false,
//             success: function () {
//               // $("#successMSG").show();
//               console.log('success')
//             },
//             error: function (x) {
//               console.log(x)
//               console.log("error in post request");
//             }
//           });
//         }

//         form.classList.add("was-validated");
//         // form.reset();
//       },
//       false
//     );
//   });
// }



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