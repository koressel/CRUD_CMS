
// // handle navigation tab click
// let tabContainer_ul = document.querySelector('#tab-container');
// let activeIcons = tabContainer_ul.querySelectorAll('span');
// let productsPage_ul = document.querySelector('#products-page');
// let blogPostPage_ul = document.querySelector('#blog-post-page');
// let createNewPage_ul = document.querySelector('#create-new-page');

// tabContainer_ul.addEventListener('click', e => {
//   if (e.target.type === 'submit') {
//     let activeIcon_span = e.target.parentNode.childNodes[1];
//     if (!activeIcon_span.classList.contains('active')) {

//       if (!activeIcon_span.classList.contains('active'))
//         activeIcon_span.classList.add('active');

//       activeIcons.forEach(icon => {
//         if (!activeIcon_span.isSameNode(icon))
//           icon.classList.remove('active');
//       });
//       let tabId = e.target.parentNode.id;

//       switch (tabId) {
//         case 'products-tab':
//           productsPage_ul.classList = 'active';
//           blogPostPage_ul.classList = 'page';
//           createNewPage_ul.classList = 'page';
//           break;
//         case 'blog-post-tab':
//           blogPostPage_ul.classList = 'active';
//           productsPage_ul.classList = 'page';
//           createNewPage_ul.classList = 'page';
//           break;
//         case 'create-new-tab':
//           createNewPage_ul.classList = 'active';
//           productsPage_ul.classList = 'page';
//           blogPostPage_ul.classList = 'page';
//           break;
//         default:
//           productsPage_ul.classList = 'active';
//           blogPostPage_ul.classList = 'page';
//           createNewPage_ul.classList = 'page';
//       }
//     }
//   }
// });

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