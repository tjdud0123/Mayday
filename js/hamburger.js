
var hamHtml = ' <!-- 햄버거 -->\
<div class="popContainer pophamber">\
    <div class="hamburgerBox">\
        <!-- 햄버거윗부분 -->\
        <div class="hamInfo">\
            <!-- 아이콘 -->\
            <div class="iconBox">\
                <div class="leftIcon">\
                    <div class="inline"><img class="hamIcon hamIcon1" src="./css/hamburger_home.png"></div>\
                    <div class="inline"><img class="hamIcon hamIcon2" src="./css/hamburger_my.png"></div>\
                </div>\
                <div class="rightIcon"><img class="hamIcon3" src="./css/close_white.png"></div>\
            </div>\
            <!-- 아이디 출력 -->\
            <p class="welcomeText"><span id="id">ideeper</span>님,<br>오늘 하루도 수고했어요!</p>\
            <!-- 정보 출력 -->\
            <div class="hamInfoBox">\
                <div class="hamBox hamBox1">\
                    <div>내가 쓴 편지</div>\
                    <div class="infoNum" id="myWrite">47</div>\
                </div>\
                <div class="hamBox hamBox2">\
                    <div>내가 쓴 답장</div>\
                    <div class="infoNum" id="myReple">60</div>\
                </div>\
                <div class="hamBox hamBox3">\
                    <div>내 활동 추천</div>\
                    <div class="infoNum" id="myAct">10</div>\
                </div>\
            </div>\
        </div>\
        <div class="hamSelect">\
            <div class="hamMsgBox">\
                <div class="MsTitle"><img class="blueIcon" src="css/hamburger_message.png">편지</div>\
                <div class="selectMenu Menu1">편지 쓰기</div>\
                <div class="selectMenu Menu2">편지 읽기</div>\
                <div class="selectMenu Menu3">나에게 온 답장</div>\
            </div>\
            <div class="hamActBox">\
                <div class="MsTitle"><img class="blueIcon" src="css/hamburger_recommend.png">활동</div>\
                <div class="selectMenu Menu4">활동 추천</div>\
                <div class="selectMenu Menu5">북마크</div>\
                <div class="selectMenu Menu6">글 쓰기</div>\
            </div>\
        </div>\
    </div>\
</div>'


$(document).ready(function () {
    //햄버거 생성
    $('body').append(hamHtml);
    $('.popContainer').hide();
    //뒤로가기
    $('.back').on('click', function () {
        console.log('뒤로가기')
        $('.popContainer').hide();
        history.back();
    });

    // 햄버거 팝업
    $('.hamburger').on('click', function () {
        console.log('햄버거')
        $('.pophamber').show();

        //닫기버튼
        $('.rightIcon').on('click', function () {
            $('.popContainer').hide();
        });

        //홈으로
        $('.hamIcon1').on('click', function () {
            $('.popContainer').hide();
            location.href = './index.html'
        });

        //마이페이지
        $('.hamIcon2').on('click', function () {
            $('.popContainer').hide();
            location.href = './myPage.html'
        });

        //편지쓰기
        $('.Menu1').on('click', function () {
            $('.popContainer').hide();
            location.href = './letterWrite.html'
        });

        //편지읽기
        $('.Menu2').on('click', function () {
            $('.popContainer').hide();
            location.href = './letterRead.html'
        });
        //나에게 온 답장
        $('.Menu3').on('click', function () {
            $('.popContainer').hide();
            location.href = './toMe.html'
        });

        //내가 쓴 편지
        $('.hamBox1').on('click', function () {
            $('.popContainer').hide();
            location.href = './myLetters.html'
        });

        //내가 쓴 답장
        $('.hamBox2').on('click', function () {
            $('.popContainer').hide();
            location.href = './fromMe.html'
        });

        //내가 쓴 활동추천
        $('.hamBox3').on('click', function () {
            $('.popContainer').hide();
            location.href = './myActivity.html'
        });

        //활동 추천
        $('.Menu4').on('click', function () {
            $('.popContainer').hide();
            location.href = './actHome.html'
        });

        //글쓰기
        $('.Menu6').on('click', function () {
            $('.popContainer').hide();
            location.href = './userWrite.html'
        });

        //북마크
        $('.Menu5').on('click', function () {
            $('.popContainer').hide();
            location.href = './bookMark.html'
        });
    });

});