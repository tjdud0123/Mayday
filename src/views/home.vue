<template>
  <div id="Home">
      <audio src='./One_day.mp3' autoplay='True' loop='true'></audio>
    <div class="topContainer">
        <img class='logo' src="../../public/css/home_img/mayday_logo.png">
        <img class='hamburger topRight' src="../../public/css/hamburger_icon.png" v-on:click="hamAct">
    </div>
    <div class="indexBox index">
        <div class="light"><img src="../../public/css/home_img/light.png"></div>

        <div class="infoContainer ">
            <div class="fade info" v-on:click="route('/myPage')">
                <div class="job">
                    {{this.$root.currentInfo.category.split(' ')[0]}}계 {{this.$root.currentInfo.year}}
                </div>
                <div class="name">
                    {{this.$root.currentInfo.id.split('@')[0]}}님
                </div>
            </div>
        </div>


        <img class="ship fade fade3" src="../../public/css/home_img/back/night_ship.gif">


        <div class="fade fade3 arrow"><img class='arrow1' src="../../public/css/home_img/arrow1.png" alt=""></div>
        <div class="fade fade3 arrow"><img class='arrow2' src="../../public/css/home_img/arrow2.png" alt=""></div>
        <div class="fade fade3 arrow"><img class='arrow3' src="../../public/css/home_img/arrow3.png" alt=""></div>

        <div class="fade fade3 alert">
            <img class="alert_img" src="../../public/css/home_img/alert.png" alt="">
            <div class="num">51</div>
        </div>

        <div class="fade fade3 icon icon1" v-on:click="route('/toMe')">
            <img class="circle_img" src="../../public/css/home_img/msg_icon1.png" alt="">
            <div class="func func1">나에게 온 답장</div>
        </div>
        <div class="fade fade3 icon icon2" v-on:click="route('/letterRead')">
            <div class="func func2">편지 읽기</div>
            <img class="circle_img" src="../../public/css/home_img/msg_icon2.png" alt="">

        </div>
        <div class="fade fade3 icon icon3" v-on:click="route('/letterWrite')">
            <div class="func func3">편지 쓰기</div>
            <img class="circle_img" src="../../public/css/home_img/msg_icon3.png" alt="">
        </div>

        <div class="downContainer">
            <img class='down_arrow down' src="../../public/css/home_img/down_arrow.png" alt="">
        </div>
    </div>


    <div class="indexBox index2">
        <div class="light"><img src="../../public/css/home_img/light.png"></div>

        <div class="infoContainer">
            <div class="fade info"  v-on:click="route('/myPage')">
                 <div class="job">
                    {{this.$root.currentInfo.category.split(' ')[0]}}계 {{this.$root.currentInfo.year}}
                </div>
                <div class="name">
                    {{this.$root.currentInfo.id.split('@')[0]}}님
                </div>
            </div>
        </div>

        <img class="fish" src="../../public/css/home_img/back/fish.gif">


        <div class="fade2 person">
            <img src="../../public/css/home_img/person.png" alt="">
        </div>


        <div class="fade2 arrow"><img class='arrow4' src="../../public/css/home_img/recommend_arrow.png" alt=""></div>
        <div class="fade2 arrow"><img class='arrow5' src="../../public/css/home_img/bookmark_arrow.png" alt=""></div>
        <div class="fade2 arrow"><img class='arrow6' src="../../public/css/home_img/write_arrow.png" alt=""></div>

        <div class="fade2 icon icon4" v-on:click="route('/actHome')">
            <img class="circle_img" src="../../public/css/home_img/active_icon1.png" alt="">
            <div class="func func1">활동 추천</div>
        </div>

        <div class="fade2 icon icon5" v-on:click="route('/bookMark')">
            <div class="func func3">북마크</div>
            <img class="circle_img" src="../../public/css/home_img/active_icon2.png" alt="">
        </div>

        <div class="fade2 icon icon6" v-on:click="route('/userWrite')">
            <img class="circle_img" src="../../public/css/home_img/active_icon3.png" alt="">
            <div class="func func1">글 쓰기</div>
        </div>

        <div class="downContainer">
            <img class='down_arrow up' src="../../public/css/home_img/down_arrow.png" alt="">
        </div>

    </div>

    <!-- 햄버거 -->
      <div class="popContainer pophamber" v-bind:style="{display:hamOn}">
    <div class="hamburgerBox">
        <!-- 햄버거윗부분 -->
        <div class="hamInfo">
            <!-- 아이콘 -->
            <div class="iconBox">
                <div class="leftIcon">
                    <div class="inline"><img class="hamIcon hamIcon1" src="css/hamburger_home.png" v-on:click="hamClose"></div>
                    <div class="inline"><img class="hamIcon hamIcon2" src="css/hamburger_my.png" v-on:click="route('/myPage')"></div>
                </div>
                <div class="rightIcon"><img class="hamIcon3" src="css/close_white.png" v-on:click="hamClose"></div>
            </div>
            <!-- 아이디 출력 -->
            <p class="welcomeText"><span id="id">{{this.$root.currentInfo.id.split('@')[0]}}</span>님,<br>오늘 하루도 수고했어요!</p>
            <!-- 정보 출력 -->
            <div class="hamInfoBox">
                <div class="hamBox hamBox1" v-on:click="route('/myLetters')">
                    <div>내가 쓴 편지</div>
                    <div class="infoNum" id="myWrite">{{this.$root.currentInfo.myWrite}}</div>
                </div>
                <div class="hamBox hamBox2" v-on:click="route('/fromMe')">
                    <div>내가 쓴 답장</div>
                    <div class="infoNum" id="myReple">{{this.$root.currentInfo.myReply}}</div>
                </div>
                <div class="hamBox hamBox3" v-on:click="route('/myActivity')">
                    <div>내 활동 추천</div>
                    <div class="infoNum" id="myAct">{{this.$root.currentInfo.myAct}}</div>
                </div>
            </div>
        </div>
        <div class="hamSelect">
            <div class="hamMsgBox">
                <div class="MsTitle"><img class="blueIcon" src="css/hamburger_message.png">편지</div>
                <div class="selectMenu Menu1" v-on:click="route('/letterWrite')">편지 쓰기</div>
                <div class="selectMenu Menu2" v-on:click="route('/letterRead')">편지 읽기</div>
                <div class="selectMenu Menu3" v-on:click="route('/toMe')">나에게 온 답장</div>
            </div>
            <div class="hamActBox">
                <div class="MsTitle"><img class="blueIcon" src="css/hamburger_recommend.png">활동</div>
                <div class="selectMenu Menu4" v-on:click="route('/actHome')">활동 추천</div>
                <div class="selectMenu Menu5" v-on:click="route('/bookMark')">북마크</div>
                <div class="selectMenu Menu6" v-on:click="route('/userWrite')">글 쓰기</div>
            </div>
        </div>
    </div>
</div>


  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script>
import router from "../router";


export default {
  name: "Home",
  props: {

  },
  router,
  data: function() {
        return {
            currentId:this.$root.currentId,
            userTable: this.$root.userTable,
            sample:this.$root.userTable[0],
            hamOn:"none"
        }
    },
    methods:{
       
        route: function(to){
            this.$router.push(to)
        },

        hamAct: function(){
               this.hamOn = "flex"
        },
        hamClose: function(){
               this.hamOn = "none"
        }
        
        
    },
    mounted() {

         let vm = this;
          if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }

      this.$nextTick(() =>{

        jQuery('html, body').animate({
            scrollTop: 0
        }, 500, 'swing');

        let date = new Date();
        let hours = date.getHours();
        if (6 < hours && hours <= 10) {
        jQuery('.indexBox').css('background-image', 'url(./css/home_img/back/dawn1.png)')
        jQuery('.index2').css('background-image', 'url(./css/home_img/back/dawn2.png)')
        jQuery('.ship').attr("src", "./css/home_img/back/dawn_ship.gif")
    } else if (10 < hours && hours <= 16) {
        jQuery('.indexBox').css('background-image', 'url(./css/home_img/back/day1.png)')
        jQuery('.index2').css('background-image', 'url(./css/home_img/back/day2.png)')
        jQuery('.ship').attr("src", "./css/home_img/back/day_ship.gif")
    } else if (16 < hours && hours <= 24) {
        jQuery('.indexBox').css('background-image', 'url(./css/home_img/back/evening1.png)')
        jQuery('.index2').css('background-image', 'url(./css/home_img/back/evening2.png)')
        jQuery('.ship').attr("src", "./css/home_img/back/evening_ship.gif")
    } else if (0 <= hours <= 6) {
        jQuery('.indexBox').css('background-image', 'url(./css/home_img/back/night1.png)')
        jQuery('.index2').css('background-image', 'url(./css/home_img/back/night2.png)')
        jQuery('.ship').attr("src", "./css/home_img/back/night_ship.gif")
    }

    //스크롤 밑으로
    jQuery('.down_arrow.down').click(function () {
        console.log('밑으로')
        jQuery('html, body').animate({
            scrollTop: window.innerHeight
        }, 800, 'swing');
    
        jQuery('.fade3').css('animation', 'fadeOut ease-in 0.5s !important')
        jQuery('.fade2').css('animation', 'fadeIn ease-in 1s')
        jQuery('.person').css('animation', 'fadeIn 2s, swim 2s alternate infinite')
    
    });
    //스크롤 위로
    jQuery('.down_arrow.up').click(function () {
    
        console.log('위로')
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800, 'swing');
    
        jQuery('.fade2').css('animation', 'fadeOut ease-in 0.5s')
        jQuery('.fade3').css('animation', 'fadeIn ease-in 1s')
    
    });
    //스크롤 막기
    jQuery('.indexBox').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });

      })
   
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

@keyframes swim {
    0% {
        
    }

    100% {
        transform: translateY(1.97vh);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes move_to_top {
    0% {
        transform: translateY(30px);
    }

    100% {
        transform: translateY(0px);
    }
}

@keyframes swim-v-7eb2bc79 {
    0% {
        
    }

    100% {
        transform: translateY(1.97vh);
    }
}

@keyframes fadeIn-v-7eb2bc79 {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut-v-7eb2bc79 {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes move_to_top-v-7eb2bc79 {
    0% {
        transform: translateY(30px);
    }

    100% {
        transform: translateY(0px);
    }
}

</style>

<style scoped>

/* 글씨체 */
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.nanumsquare {
    font-family: 'NanumSquare', sans-serif !important;
}

/*--------------------- 위 화면 --------------------*/


/* 스크롤막기 */
.scrollOff{position:fixed;overflow:hidden;height:100%;}

/* 배경 */

audio {
    display:none;
}
.indexBox {
    padding-top: 10vh;
    height: 100vh;
    width: 100vw;
    background-image: url(../../public/css/home_img/back/day1.png);
    background-position: center 40%;
    background-size: cover;
    box-sizing: border-box;
    position: relative;
}


.ship{
    position:absolute;
    width: 65.75vw;
    top:46.64vh;
    left:32vw;
}

.light>img {
    z-index:2;
    top:0;
    position: absolute;
    height: 100vh;
    mix-blend-mode: screen;
    animation: fadeIn 4s ease-in-out alternate infinite;
}

.index2 {
    background-image: url(../../public/css/home_img/back/day2.png);
}

.boatContainer{
    display: flex;
    align-items: center;
    justify-content: center;
}

.boat{
    position:absolute;
    width:47.6vw;
    height:20.45vh;
}

/* nav 바 */
.topContainer {
    position: fixed;
    top:0;
    left:0;
    background: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    z-index:1;
}

.logo {
    top:4.3vh;
    position: absolute;
}

.hamburger {
    top: 4.3vh;
    position: absolute;
    right: 0;

}

/* 아이콘 */
.icon {
    z-index:3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.alert{
    z-index:4 !important;
    position: absolute;
    left:29vw;
    top:67vh;
    z-index:2;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-family: NanumSquareOTF;
    font-size: 12px;
    font-weight: 200;
}

.num{
    position: absolute;
    padding-right:2.5px;
}

.alert_img{
    width:2.8vh;
    height:2.8vh;
}

img.circle_img {
    height: 6.28vh;
    width: 6.28vh;
}

.icon1 {
    position: absolute;
    left: 25vw;
    top: 68.2vh;
}

.icon2 {
    position: absolute;
    left: 74.7vw;
    top: 30.8vh;
}

.icon3 {
    position: absolute;
    left: 20.8vw;
    top: 34vh;
}


.icon4 {
    position: absolute;
    left: 72vw;
    top: 70.06vh;
}

.icon5 {
    position: absolute;
    left: 48.53vw;
    top: 31.03vh;
}

.icon6 {
    position: absolute;
    left: 20.53vw;
    top: 61.59vh;
}

.arrow1 {
    width: 25.3vw;
    height: 7.38vh;
    top: 62.8vh;
    left: 38.4vw;
    position: absolute;
}

.arrow2 {
    width: 14.93vw;
    height: 19.58vh;
    top: 36.2vh;
    left: 66.6vw;
    position: absolute;
}

.arrow3 {
    width: 16.53vw;
    height: 18.84vh;
    top: 39.9vh;
    left: 27.73vw;
    position: absolute;
}

.arrow4 {
    width: 13.6vw;
    height: 2.67vh;
    top: 70.06vh;
    left: 65.3vw;
    position: absolute;
}

.arrow5 {
    width: 10.16vw;
    height: 17.3vh;
    top: 34.72vh;
    left: 53.98vw;
    position: absolute;
}

.arrow6 {
    width: 20.65vw;
    height: 10.81vh;
    top: 53.98vh;
    left: 28.13vw;
    position: absolute;
}

.func {
    font-family: 'NanumSquare';
    font-size: 14px;
    font-weight: 700px;
    color: white;
    position: absolute;
}

.func1 {
    padding-top: 8px;
    position: relative;
    
}

.func2 {
    padding-bottom: 8px;
    position: relative;
    
}

.func3 {
    padding-bottom: 8px;
    position: relative;
}



/* 인포메이션 */
.info {
    /*width: 33.6vw;*/
    height: 5.78vh;
    padding: 8px 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'NanumSquare';

}

.infoContainer {
    z-index:3 !important;
    position:absolute;
    width:100%;
    top: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8vh;
    animation: move_to_top ease-in-out 1s;
    z-index:1;
}

.person{
    padding-top: 23vh;
    padding-left: 16vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fish{
    position: absolute;
    top:20vh;
}

.job {
    padding-bottom: 2px;
}


/* 밑에 화살표 */
.down_arrow {
    width: 40px;
    height: 40px;
}

.downContainer {
    position:absolute !important;
    bottom:5vh;
    width:100%;
    width:100vm;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index:2;
}

.up{
    transform: rotate(180deg);
}

/* 애니메이션 */
.fade {
    animation: fadeIn ease-in 1s;
}

.fadeOut{
    animation: fadeOut ease-in 1s;
}

.person{
    animation: swim 2s ease-in-out alternate infinite;
}

.fish{
    opacity:0.4;
}

@keyframes swim {
    0% {
        
    }

    100% {
        transform: translateY(1.97vh);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes move_to_top {
    0% {
        transform: translateY(30px);
    }

    100% {
        transform: translateY(0px);
    }
}



/*--------------------- 아래 화면 --------------------*/

.up_arrow {
    transform: rotate(180deg);

}

/* circle */
.circle{
    border-radius: 100px;
    width: 20px;
    height: 20px;
    color:white;
    position: absolute;
    top:50vh;
    animation: fadeinout 10s infinite;
    opacity: 0;
}

@keyframes fadeinout {
    0% {
        opacity:0
    }

    50% {
        opacity:1
    }

    100%{
        opacity:0
    }
}


</style>
