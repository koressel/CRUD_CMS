$(document).ready(() => {
  const loginBTN = document.querySelector('#login-button');
  const usernameINPUT = document.querySelector('input[name="username"]');
  const passwordINPUT = document.querySelector('input[name="password"]');

  loginBTN.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    let _username = usernameINPUT.value;
    let _password = passwordINPUT.value;

    let sendLoginInfo = $.ajax({
      method: 'POST',
      url: '/login',
      data: { username: _username, password: _password },
      dataType: 'html'
    });

    sendLoginInfo
      .fail(err => console.log(err))
      .done(result => {
        console.log(result);
      })

  });
});

