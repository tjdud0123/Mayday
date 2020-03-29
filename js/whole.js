// $('') == document.querySelector('')

// 로그인 (login) js------------------------------------------------

//리사이즈 - 공통 [0]
setInterval(function () {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth +
        "px, initial-scale=1.0");
}, 100);

//-----------------------------------------------------------------


// 회원가입 (signUp) js------------------------------------------------

//리사이즈 - 공통 [0]

//데이터 [0]
let id;
let passWord;
let okPass = false;
let okId = false;
let category;
let age;
let year;

// popup없애놓기 - [0]
$('.popContainer').hide();

//아이디확인 [0]
$(".infoInput1").keyup(function () {
    id = $(this).val();
    if (id.includes(".com") && id.includes("@")) {
        $('.idAlert').css('color', 'green');
        $('.idAlert').text('* 사용가능한 아이디입니다');
        okId = true;
    } else {
        $('.idAlert').css('color', 'red');
        $('.idAlert').text('* 이메일 형식이 아닙니다');
        okId = false;
    }
    $('.idAlert').css('visibility', 'visible')
});

//패스워드확인 [0]
$(".passInput").keyup(function () {
    passWord = $(".infoInput2").val();
    if (passWord) {
        if ($('.infoInput3').val() == $(".infoInput2").val()) {
            $('.passwordAlert').css('color', 'green');
            $('.passwordAlert').text('* 비밀번호가 일치합니다');
            okPass = true;
        } else {
            $('.passwordAlert').css('color', 'red');
            $('.passwordAlert').text('* 비밀번호가 다릅니다');
            okPass = false;
        }
        $('.passwordAlert').css('visibility', 'visible')
    } else {
        $('.passwordAlert').css('visibility', 'hidden')
    }

});

//직종선택 [0]
$('#category').on('click', function () {
    console.log('직종선택')
    $('.popContainer2').show();

    $('.contentLine1').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")

        if (!isSelected) {
            $('.circle1').removeClass('selected')
            $(this).children(':first').addClass('selected')
        }

        $('#yes2').on('click', function () {
            $('.popContainer2').hide();
            $('#category').text(category);
        });
    });
});

//나이선택 [0]
$('#age').on('click', function () {
    console.log('나이선택')

    $('.popContainer3').show();

    $('.contentLine2').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")

        if (!isSelected) {
            console.log('>>>>', $(this).children(':first'))
            $('.circle2').removeClass('selected')
            $(this).children(':first').addClass('selected')
            age = $(this).children(':last').text()
            console.log(age)
        }

    });

    $('#yes3').on('click', function () {
        $('.popContainer3').hide();
        $('#age').text(age);
    });

});
 
//연차선택 [0]
$('#year').on('click', function () {
    console.log('연차선택')
    $('.popContainer4').show();

    $('.contentLine3').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")
        if (!isSelected) {
            console.log('>>>', $('.circle3'))
            $('.circle3').removeClass('selected')
            $(this).children(':first').addClass('selected')
            year = $(this).children(':last').text()
            console.log(year)
        }

    });

    $('#yes4').on('click', function () {
        $('.popContainer4').hide();
        $('#year').text(year);
    });

});

//완료 [0]
$('.complete').on('click', function () {
    console.log(okPass, okId)
    if (okPass && okId && category && year && age) {
        $('.popContainer5').show();
        $('#yes5').on('click', function () {
            $('.popContainer').hide();
            location.href = './login.html'
        });
    } else if (okPass && okId) {
        $('.popContainer6').show();
        $('#yes6').on('click', function () {
            $('.popContainer').hide();
        });
    }

});

//--------------------------------------------------------------------


// 홈 화면 (index) js-------------------------------------------------

//데이터
let date = new Date();
let hours = date.getHours();
// let viewheight = window.innerHeight; - 공통

//배경셋팅 함수
function setBackground(hours) {
    if (6 < hours && hours <= 10) {
        $('.indexBox').css('background-image', 'url(./css/home_img/back/dawn1.png)')
        $('.index2').css('background-image', 'url(./css/home_img/back/dawn2.png)')
        $('.ship').attr("src", "./css/home_img/back/dawn_ship.gif")
    } else if (10 < hours && hours <= 16) {
        $('.indexBox').css('background-image', 'url(./css/home_img/back/day1.png)')
        $('.index2').css('background-image', 'url(./css/home_img/back/day2.png)')
        $('.ship').attr("src", "./css/home_img/back/day_ship.gif")
    } else if (16 < hours && hours <= 24) {
        $('.indexBox').css('background-image', 'url(./css/home_img/back/evening1.png)')
        $('.index2').css('background-image', 'url(./css/home_img/back/evening2.png)')
        $('.ship').attr("src", "./css/home_img/back/evening_ship.gif")
    } else if (0 <= hours <= 6) {
        $('.indexBox').css('background-image', 'url(./css/home_img/back/night1.png)')
        $('.index2').css('background-image', 'url(./css/home_img/back/night2.png)')
        $('.ship').attr("src", "./css/home_img/back/night_ship.gif")
    }
}

//배경셋팅
setBackground(hours);
setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    console.log(hours);
    setBackground(hours);
}, 60000);

//스크롤 밑으로
$('.down_arrow.down').click(function () {
    console.log('밑으로')
    $('html, body').animate({
        scrollTop: viewheight
    }, 800, 'swing');

    $('.fade3').css('animation', 'fadeOut ease-in 0.5s')
    $('.fade2').css('animation', 'fadeIn ease-in 1s')
    $('.person').css('animation', 'fadeIn 2s, swim 2s alternate infinite')

});
//스크롤 위로
$('.down_arrow.up').click(function () {

    console.log('위로')
    $('html, body').animate({
        scrollTop: 0
    }, 800, 'swing');

    $('.fade2').css('animation', 'fadeOut ease-in 0.5s')
    $('.fade3').css('animation', 'fadeIn ease-in 1s')

});
//스크롤 막기
$('.indexBox').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
});

//--------------------------------------------------------------------


// 내 정보 (myPage) js-------------------------------------------------

// popup없애놓기 - 공통

// 레벨정보
$('img.animal').on('click', function () {

    $('.popContainer_animal').show();

    $('.close').on('click', function () {
        $('.popContainer').hide();
    });

});

//--------------------------------------------------------------------


// 수정화면 (edit) js-------------------------------------------------

//리사이즈 - 공통
// popup없애놓기 - 공통

//데이터
var okPass = true;
var passWord;
let category;
let age;
let year;

//패스워드확인
$(".passInput").keyup(function () {
    passWord = $(".infoInput2").val();
    if (passWord) {
        if ($('.infoInput3').val() == $(".infoInput2").val()) {
            $('.passwordAlert').css('color', 'green');
            $('.passwordAlert').text('* 비밀번호가 일치합니다');
            okPass = true;
        } else {
            $('.passwordAlert').css('color', 'red');
            $('.passwordAlert').text('* 비밀번호가 다릅니다');
            okPass = false;
        }
        $('.passwordAlert').css('visibility', 'visible')
    } else {
        $('.passwordAlert').css('visibility', 'hidden')
    }

});

//직종선택
$('#category').on('click', function () {
    console.log('직종선택')
    $('.popContainer2').show();

    $('.contentLine1').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")

        if (!isSelected) {
            $('.circle1').removeClass('selected')
            $(this).children(':first').addClass('selected')
            category = $(this).children(':last').text()
            console.log(category)
        }

        $('#yes2').on('click', function () {
            $('.popContainer2').hide();
            $('#category').text(category);
        });
    });
});

//나이선택
$('#age').on('click', function () {
    console.log('나이선택')

    $('.popContainer3').show();

    $('.contentLine2').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")

        if (!isSelected) {
            console.log('>>>>', $(this).children(':first'))
            $('.circle2').removeClass('selected')
            $(this).children(':first').addClass('selected')
            age = $(this).children(':last').text()
            console.log(age)
        }

    });

    $('#yes3').on('click', function () {
        $('.popContainer3').hide();
        $('#age').text(age);
    });

});

//연차선택
$('#year').on('click', function () {
    console.log('연차선택')
    $('.popContainer4').show();

    $('.contentLine3').on('click', function () {

        let isSelected = $(this).children(':first').hasClass("selected")
        if (!isSelected) {
            console.log('>>>', $('.circle3'))
            $('.circle3').removeClass('selected')
            $(this).children(':first').addClass('selected')
            year = $(this).children(':last').text()
            console.log(year)
        }

    });


    $('#yes4').on('click', function () {
        $('.popContainer4').hide();
        $('#year').text(year);
    });

});

//수정완료
$('.complete').on('click', function () {

    if (okPass) {
        $('.popContainer5').show();
        $('#yes5').on('click', function () {
            $('.popContainer').hide();
            location.href = './myPage.html'
        });
    }
    
});

//--------------------------------------------------------------------


// 편지쓰기 (letterWrite) js------------------------------------------



//--------------------------------------------------------------------


// 편지읽기 -  병화면 (letterRead) js
// 상세편지읽기 & 답장 (letterReply) js

// 나에게 온 답장 리스트 (toMe) js
// 내가 쓴 편지 리스트(myLetters) js
// 내편지 & 답장들 (myLetterDt) js

// 내가 쓴 답장리스트 (fromMe) js
// 내가 쓴 답장 상세내용(fromMeDetail) js


// 활동추천 홈 화면(actHome) js

// 북마크 (bookMark) js

// 에디터 픽 카테고리 고르기 (pickList1) js
// 에디터 픽 콘텐츠 고르기 (pickList2) js
// 에디터픽 상세내용 (editorDetail) js


// 유저 활동추천 글 리스트 (userList) js
// 누군가의 구조활동 상세 (userActDt) js

// 사용자 활동추천 업로드 (userWrite) js
// 내 활동추천 리스트 (myActivity) js