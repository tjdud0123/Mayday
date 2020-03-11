<template>
  <div id="MyActivity">
       <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.go(-1)"></div>
        <div class="title center">내 활동 추천</div>
        <img class='hamburger topRight' src="css/hamburger_blk.png"  v-on:click="hamAct">
    </div>

    <!-- 리스트 -->

    <div class="listContainer listContainer2">
        <!-- 사용자 픽 -->
        
        <div class="outContainer" v-for="(item, i) in $root.user_contents" v-bind:key="i" v-on:click="goToU(i)">
          <div class="list userPick" v-if="(item.id == $root.currentId)">
              <div class="imgBox2" v-bind:style='{ "background-image": "url(" + item.url + ")", "background-position": "center", "background-size":"40vm"}'></div>
              <div class="contentBox2">
                  <div class="condition">{{conText(item.condition)}}</div>
                  <div class="contentTitle3">{{item.uTitle}}</div>
                  <div class="infoContents" id="date">{{item.date}}</div>
              </div>
          </div>
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
                    <div class="inline"><img class="hamIcon hamIcon2" src="css/hamburger_my.png" v-on:click="route('/myPage')"></div>
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
                <div class="hamBox hamBox3" v-on:click="hamClose">
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
<script>
import router from "../router";


export default {
  name: "MyActivity",
  props: {

  },
  router,
  data: function() {
        return {
           hamOn:"none"
        }
    },
    methods:{
      conText: function(cond){
          switch(cond){
            case 'people': return '인간관계가 힘들 때'; break;
            case 'traffic': return '출퇴근으로 지칠 때'; break;
            case 'money': return '금전적 문제로 힘들 때'; break;
            case 'together': return '잦은 회식으로 힘들 때'; break;
            case 'night': return '야근으로 피곤할 때'; break;
            case 'low': return '낮은 성취감으로 우울할 때'; break;
          }
        },
        goToU: function(i){
              this.$router.push({name: 'UserActDt', params: {userContentId : i, fw:4}})
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
        }
    },
     mounted() {
      let vm = this;
          if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }
    }
};
</script>


<style scoped>
 
 /* 글씨체 */
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.nanumsquare {
    font-family: 'NanumSquare', sans-serif !important;
}

body{
    font-family: 'NanumSquare';
}

/* 리스트 */

.selectContainer{
    margin-top: 14.04vh;
    height: 7vh;
    box-sizing: border-box;
    border-top: 2px solid #F7F7F7;
    display: flex;
    width: 100vw;
    z-index: 2;
}

.listContainer{
    height:80.17vh;
    overflow: auto;
}

.select{
    width: 50vw;
    font-weight: 400;
    color:#c4c4c4;
    border-bottom: 2px solid #F4F4F4;
}

.selected{
    font-weight: 700;
    color:#0474D8;
    border-bottom: 2px solid #0474D8;
}

.list{
    position: relative;
    border-bottom: 2px solid #F7F7F7;
    width: 100vw;
    height:16.5vh;
    box-sizing: border-box;
    padding-left: 4.26vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

/* 에디터 픽 */
.imgBox{
    width: 27.2vw;
    height: 12.56vh;
    background-image: url(../../public/css/activity/editor4.png);
    background-position: center;
    background-size: 40vw;
    border-radius: 10px;
}

.contentBox{
    height:16.5vh;
    width: 68.54vw;
    box-sizing: border-box;
    padding-left: 5.33vw;
    display: flex;
    flex-direction: column;
    padding-top: 4.43vh;
    justify-content: flex-start;
}

.condition{
    font-weight: 700;
    font-size: 10px;
    color:#0474D8;
    margin-bottom: 2.09vh;
}

.contentTitle{
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 1vh;
}

.theme{
    font-weight: 700;
    font-size: 12px;
    color:#8A8A8A;
}

.markIcon{
    width: 40px;
    height: 40px;
    position: absolute;
    top:1.72vh;
    right: 1.07vw;
}

/* 사용자 픽 */
.imgBox2{
    width: 27.2vw;
    height: 12.56vh;
    background-image: url(../../public/css/activity/userpick3.png);
    background-position: center;
    background-size: 40vw;
    border-radius: 10px;
}

.contentBox2{
    height:16.5vh;
    width: 68.54vw;
    box-sizing: border-box;
    padding-left: 5.33vw;
    padding-top: 4.43vh;
}

.animalIcon{
    width: 8.33vw;
    margin-left: -1vw;
}

.infoContents{
    display: flex;
    align-items: center;
    color:#c4c4c4;
    font-size: 12px;
    font-weight: 700;
}

.contentTitle2{
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 1.37vh;
}

/* 내 활동 추천 */
.listContainer2{
    margin-top: 14.04vh;
    height:85.96vh;
    overflow: auto;
}

.firstList{
    border-top: 2px solid #F7F7F7;
}

.contentTitle3{
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 2.71vh;
}

/* 사용자 픽 */
.headContainer{
    margin-top: 14.04vh;
    height: 14.9vh;
    display: flex;
    flex-direction: column;
    width: 100vw;
    z-index: 2;
    background-image: url(../../public/css/activity/editor1.png);
    background-position: center center;
    background-size: 110%;
    color:white;
    font-weight: 700;
}

.listContainer3{
    overflow: auto;
}

.conTitle{
    font-size:10px;
    margin-bottom: 1vh;
}

.aTitle{
    margin-bottom: 1vh;
}

.nTitle{
    font-size:18px;
}

.listContainer{
    height:80.17vh;
    overflow: auto;
}

.shortDetail{
    font-size:14px;
    padding-top: 0.35vh;
    color:#8a8a8a;
}

.longDetail{
    margin-top: 1.35vh;
    padding-right:4vw;
    font-size: 12px;
    color:#8a8a8a;
    line-height: 120%;
}

/*picklist2*/
.contentBox3{
    height:16.5vh;
    width: 68.54vw;
    padding-left: 5.33vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
}

.clickBox{
    height:16.5vh;
    width: 80vw;
    position: absolute;
    top:0;
}

</style>
