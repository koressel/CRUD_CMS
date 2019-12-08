$(document).ready(() => {
  const loginBTN = document.querySelector('#login-button');

  loginBTN.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const usernameINPUT = document.querySelector('input[name="username"]');
    const passwordINPUT = document.querySelector('input[name="password"]');
    let _username = usernameINPUT.value;
    let _password = passwordINPUT.value;
    let errorMSG = document.querySelector('#error-message');

    if (_username !== '' && _password !== '') {
      let sendLoginInfo = $.ajax({
        method: 'POST',
        url: '/login',
        data: { username: _username, password: _password },
        dataType: 'json'
      });

      sendLoginInfo
        .fail(err => {
          errorMSG.style.visibility = 'visible';
          usernameINPUT.value = '';
          passwordINPUT.value = '';
        })
        .done(result => {
          // let _userId = JSON.stringify(result.userId);
          window.location.href = "/products";
        });
    }
    else {
      errorMSG.style.visibility = 'visible';
    }
  });
});

