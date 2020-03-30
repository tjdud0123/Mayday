<template>
  <div id="Myletters">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.go(-1)"></div>
        <div class="title center">내가 쓴 편지</div>
        <img class='hamburger topRight' src="css/hamburger_blk.png" v-on:click="hamAct">
    </div>

    <!-- 리스트 -->

    <div class="listContainer">
        <div class="outContainer" v-for="(item, i) in $root.Letters" v-bind:key="i">
            <div class="list"  v-if="(item.id == $root.currentInfo.id)" v-on:click="goTo(i)" >
                <div class="listTitle2">{{item.date}}</div>
                <div class="listContent3">{{item.writeText.substring(0,51)}}...</div>
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
                <div class="hamBox hamBox1" v-on:click="hamClose">
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
<script>
import router from "../router";


export default {
  name: "Myletters",
  props: {

  },
  router,
  data: function() {
        return {
           hamOn:"none"
        }
    },
    methods:{
      hamAct: function(){
               this.hamOn = "flex"
        },
        hamClose: function(){
               this.hamOn = "none"
        },
        route: function(to){
            this.$router.push(to)
        },
         goTo:function(idx){
          console.log(idx)
          this.$router.push({name: 'MyLetterDt', params: {LetterId : idx}})
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

.listContainer{
    margin-top: 14.04vh;
}
.list:nth-child(1){
    border-top: 2px solid #F7F7F7;
}
.list{
    border-bottom: 2px solid #F7F7F7;
    width: 100vw;
    height:16.5vh;
    box-sizing: border-box;
    padding-left: 4vw;
    padding-right: 4vw;
    padding:3.33vh 4vw 0 4vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.bfRead{
    background-color:rgba(27, 115, 191,0.05);
}

.listTitle{
    padding-bottom: 3.75vh;
    font-size: 12px;
    color: #A0A0A0;
}

.listTitle2{
    padding-bottom: 3.08vh;
    font-size: 12px;
    color: #A0A0A0;
}

.listContent1{
    font-weight: 700;
    padding-bottom: 2.22vh;
    font-size: 14px;
}

.listContent2{
    font-weight: 400;
    padding-bottom: 1.48vh;
    font-size: 12px;
    color: #A0A0A0;
}

.listContent3{
    font-weight: 400;
    padding-bottom: 1.48vh;
    font-size: 14px;
    line-height: 130%;
}

.aftRead{
    color: #A0A0A0;
}

 

</style>
