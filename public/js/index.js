

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