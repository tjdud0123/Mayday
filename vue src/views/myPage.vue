<template>
  <div id="Mypage">
    <div class="topContainer center">
        <div class="back"><img src="css/white_back.png" v-on:click="$router.go(-1)" alt="" class="back_arrow"></div>
        <div class="title2 center">마이 페이지</div>
        <img class='hamburger topRight' src="css/hamburger_icon.png " v-on:click="hamAct">
    </div>

    <div class="animalBox nanumB16">
        <img :src="lUrl(this.$root.currentInfo.level)" alt="" class="animal" v-on:click="popLevel">
        <div class="infoText">@<span id="id">{{this.$root.currentInfo.id.split('@')[0]}}</span></div>

        <div class="hamInfoBox2">
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

    <div class="titleText nanumB18">내 정보<img src="css/myPage_img/mypage_edit.png" class="edit" v-on:click="route('/edit')"></div>
    <div class="infoBox">
        <div class="infoLine">
            <div class="title nanumB16">아이디</div>
            <div class="text" id="email">{{this.$root.currentInfo.id}}</div>
        </div>
        <div class="infoLine">
            <div class="title nanumB16">레벨</div>
            <div class="text" id="level">{{this.$root.currentInfo.level}}</div>
        </div>

        <div class="line"></div>

        <div class="infoLine">
            <div class="title nanumB16">직종</div>
            <div class="text" id="category">{{this.$root.currentInfo.category}}</div>
        </div>
        <div class="infoLine">
            <div class="title nanumB16">연차</div>
            <div class="text" id="year">{{this.$root.currentInfo.year}}</div>
        </div>
        <div class="infoLine">
            <div class="title nanumB16">나이대</div>
            <div class="text" id="age">{{this.$root.currentInfo.age}}</div>
        </div>
    </div>

    <div class="logOut nanumB16" v-on:click="route('/login')">로그아웃</div>

    <div class="popContainer popContainer_animal center" v-bind:style="{display:levelPop}">
        <div class="whiteBox">

            <div class="headLine center">@<span id="id">{{this.$root.currentInfo.id.split('@')[0]}}</span>님의 레벨 <img
                    src="css/myPage_img/mypage_close_black.png" alt="" class="close" v-on:click="popClose"></div>
            <div class="nick center">"<span id="nickname">{{this.$root.currentInfo.level}}</span>"</div>
            <div class="popAnimalBox center">
                <img :src="lUrl(this.$root.currentInfo.level)" alt="" class="popAnimal">
            </div>

            <div class="center">
                <div class="innerProg">
                    <div class="outerProg" id="restbar"></div>
                </div>
            </div>

            <div class="center nextInfo">다음 레벨까지<br><span id="rest">{{restCount(this.$root.currentInfo.score)}}</span>점이 더 필요해요</div>
            <div class="line2"></div>
            <div class="center inst"><img src="css/myPage_img/mypage_level_std.png" alt="" class="instruction"></div>
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
                    <div class="inline"><img class="hamIcon hamIcon1" src="css/hamburger_home.png" v-on:click="route('/home')"></div>
                    <div class="inline"><img class="hamIcon hamIcon2" src="css/hamburger_my.png" v-on:click="hamClose"></div>
                </div>
                <div class="rightIcon"><img class="hamIcon3" src="css/close_white.png" v-on:click="hamClose"></div>
            </div>
            <!-- 아이디 출력 -->
            <p class="welcomeText"><span id="id">{{this.$root.currentInfo.id.split('@')[0]}}</span>님,<br>오늘 하루도 수고했어요!</p>
            <!-- 정보 출력 -->
            <div class="hamInfoBox">
                <div class="hamBox hamBox1" v-on:click="route('/myLetters')">
                    <div class=font12>내가 쓴 편지</div>
                    <div class="infoNum" id="myWrite">{{this.$root.currentInfo.myWrite}}</div>
                </div>
                <div class="hamBox hamBox2" v-on:click="route('/fromMe')">
                    <div class=font12>내가 쓴 답장</div>
                    <div class="infoNum" id="myReple">{{this.$root.currentInfo.myReply}}</div>
                </div>
                <div class="hamBox hamBox3" v-on:click="route('/myActivity')">
                    <div class=font12>내 활동 추천</div>
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
  name: "Mypage",
  props: {

  },
  router,
  data: function() {
        return {
          hamOn:"none",
          levelPop:"none",
          rest:0
        }
    },
    methods:{
       popLevel:function(){
            this.levelPop="flex"
      },
       popClose:function(){
            this.levelPop="none"
      },
      //햄버거
      hamAct: function(){
               this.hamOn = "flex"
        },
        hamClose: function(){
               this.hamOn = "none"
        },
        route: function(to){
            this.$router.push(to)
        },

        lUrl: function(cond){
            switch(cond){
                case '고래': return "css/myPage_img/gorae.png"; break;
                case '돌고래': return "css/myPage_img/dolgorae.png"; break;
                case '니모': return "css/myPage_img/nimo.png"; break;
                case '가오리': return "css/myPage_img/gaori.png"; break;
            }   
          },

        restCount: function(){
            let vm = this
            switch(vm.$root.currentInfo.level){
                case '고래':
                    vm.rest = 0;
                    //document.getElementById('restbar').style.width = (0).toString()+ "vw"
                    return vm.rest; break;
                case '돌고래':
                    let width = (vm.$root.currentInfo.score - 400) * 57.6 / 250;
                    vm.rest = 800 - vm.$root.currentInfo.score;
                    //document.getElementById('restbar').style.width = width.toString()+ "vw"
                    return vm.rest; break;
                case '니모':
                    let width2 = (vm.$root.currentInfo.score) * 57.6 / 150;
                    vm.rest = 150 - vm.$root.currentInfo.score;
                    //document.getElementById('restbar').style.width = width2.toString()+ "vw"
                    return vm.rest; break;
                case '가오리':
                    let width3 = (vm.$root.currentInfo.score - 150) * 57.6 / 250;
                    //document.getElementById('restbar').style.width = width3.toString()+ "vw"
                    vm.rest = 400 - vm.$root.currentInfo.score; 
                    return vm.rest; break;
            }  
        },

    },
    mounted() {
      let vm = this
         if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }

         switch(vm.$root.currentInfo.level){
                case '고래':
                  
                    document.getElementById('restbar').style.width = (0).toString()+ "vw"
                   break;
                case '돌고래':
                    let width = (vm.$root.currentInfo.score - 400) * 57.6 / 400;
                    
                    let w = width.toString() + "vw"
                    console.log(w)
                    document.getElementById('restbar').style.width = w
                    break;
         
                case '니모':
                    let width2 = (vm.$root.currentInfo.score) * 57.6 / 150;
                   
                    document.getElementById('restbar').style.width = width2.toString()+ "vw"
                  break;
                case '가오리':
                    let width3 = (vm.$root.currentInfo.score - 150) * 57.6 / 250;
                    document.getElementById('restbar').style.width = width3.toString()+ "vw"
                  break;
            }  
        },


    };

</script>


<style scoped>
 
 /* 글씨체 */

 .font12{
   font-size:12px;
 }
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.nanumsquare {
    font-family: 'NanumSquare', sans-serif !important;
}

.nanumB18 {
    font-family: 'NanumSquare';
    font-size: 18px;
    font-weight: 700;
}

.nanumB16 {
    font-family: 'NanumSquare';
    font-size: 16px;
    font-weight: 700;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#Mypage {
    height: 100vh;
    width: 100vw;
    background-image: url(../../public/css/myPage_img/mypage_background.png);
    background-color: white;
    background-position: -20% left;
    background-size: 100vw 44.04vh;
    background-repeat: no-repeat;
    box-sizing: border-box;
    position: relative;
    font-family: 'NanumSquare';
}

/* top bar */
.topContainer {
    position: fixed;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    color:white;
}

.back {
    position: absolute;
    left: 0;
}

.back_arrow {
    width: 15.47vw;
}

.title2 {
    color:white;
    font-weight: 700;
    font-size: 18px;
}

.complete {
    font-weight: 700;
    width: 15.47vw;
    height: 4.43vh;
    position: absolute;
    right: 0;
    font-size: 18px;
}

.hamburger {
    
    position: absolute;
    right: 0;
}

/* 파란 부분 */
.animalBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
}

img.animal {
    height: 16.63vh;
}

.infoText {
    color: white;
    margin-top: -2vh;
}

.hamInfoBox2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.33vh 11.2vw 9.5vh 11.2vw;
    width: 100vw;
    box-sizing: border-box;
}

.hamBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: white;
    font-family: 'NanumSquare';
    box-sizing: border-box;
}

.hamBox>.infoNum {
    padding-top: 1.6vh;
    font-size: 18px;
    font-weight: 800;
}

/* 흰 부분 */

.titleText {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 3.69vh 4.27vw;
    color: #0A74D8;

}

img.edit {
    width: 19.2vw;
}

.infoLine {
    position: relative;
    width: 100vw;
    display: flex;
    align-items: center;
    padding-bottom: 2.46vh;
}

.title {
    position: relative;
    left: 4.27vw;
}

.text {
    position: absolute;
    left: 32.53vw;
    font-family: 'NanumSquare';
}

.line {
    border: 2px solid #F7F7F7;
    margin: 0 4.27vw 2.46vh 4.27vw;
}

.logOut {
    color: #C4C4C4;
    padding: 0.97vh 0 2vh 4.27vw;
    width: 20vw;
}


/*팝업*/
.popContainer {
    /*visibility: hidden;*/
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.whiteBox {
    border-radius: 10px;
    background-color: white;
    width: 91.46vw;
}

.headLine {
    font-weight: 700;
    font-size: 14px;
    padding: 2.94vh 0 3.37vh 0;
    position: relative;
}

img.close {
    width: 15.47vw;
    position: absolute;
    right:0;
}

.nick{
    font-weight: 800;
    font-size: 18px;
    color: #0A74D8;
}

img.popAnimal {
    height: 19.83vh;
}

.popAnimalBox{
    background-image: url(../../public/css/myPage_img/mypage_leve_background_circle.png);
    background-position: center center;
    background-size: 47.73vw;
    background-repeat: no-repeat;
    margin-bottom: 2.3vh;
}

.innerProg{
    height: 0.25vh;
    width: 57.6vw;
    background-color: #F7F7F7;
    margin-bottom:1.84vh;  
}

.outerProg{
    height: 0.25vh;
    width: 30vw;
    background-color: #0A74D8;
}

.nextInfo{
    font-weight: 700;
    font-size: 14px;
    padding-bottom: 3.45vh;
}

span#rest{
    font-weight: 800;
    color: #0A74D8;
}

.line2{
    border: 2px solid #F7F7F7;
}
.inst{
    padding: 2.96vh 0;
}
img.instruction{
    height: 12.63vh;
}

</style>
