var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});
router.get('/login', function (request, response) {
    fs.readFile('../public/login/index.html', function (error, data) {
        response.send(data.toString());
    });
});
router.post('/login', function (request, response) {
    // 쿠키를 생성합니다.
    var login = request.param('login');
    var password = request.param('password');

    // 출력합니다.
    console.log(login, password);
    console.log(request.body);

    // 로그인을 확인합니다.
    if (login == 'rint' && password == '1234') {
        // 로그인 성공
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        // 로그인 실패
        response.redirect('/login');
    }
});

module.exports = router;
