<template>
  <div id="ActHome">
     <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" v-on:click="$router.go(-1)" alt="" class="back_arrow"></div>
        <div class="title center">활동 추천</div>
        <div class="topRight">
            <img class='hamburger' src="css/hamburger_blk.png" v-on:click="hamAct">
        </div>
    </div>

    <!-- 해시태그 셀렉트 -->
    <div class="hashTop">
        <div id = "people" class="cdHash center" v-on:click="setCondition('people')">인간관계</div>
        <div id = "traffic" class="cdHash center" v-on:click="setCondition('traffic')">출퇴근</div>
        <div id = "money" class="cdHash center" v-on:click="setCondition('money')">금전적 문제</div>
        <div id = "together" class="cdHash center" v-on:click="setCondition('together')">잦은 회식</div>
        <div id = "night" class="cdHash center" v-on:click="setCondition('night')">야근</div>
        <div id = "low" class="cdHash center" v-on:click="setCondition('low')">낮은 성취감</div>
    </div>

    <!-- 에디터 픽 -->
    <div class="titleBox">에디터의 pick <img src="css/activity/arrow.png" alt="" class="more" v-on:click="route('/pickList1')"></div>

    <div class="edtPickBox">

        <div class="outContainer" v-for="(item, i) in $root.editor_contents" v-bind:key="i" v-on:click="goToE(i)">
          <div class="edList center" v-if="$root.curCondition.includes(item.condition)" v-bind:style='{ "background-image": "url(" + item.url + ")", "background-position": "center center", "background-size":"cover"}'>
              <div class="filter center">
                  <div class="conTitle" id="condition">{{conText(item.condition)}}</div>
                  <div class="aTitle" id="a">{{item.bigA}}</div>
                  <div class="nTitle" id="n">{{item.bigN}}</div>
              </div>
          </div>
        </div>

    </div>

    <!-- 유저 픽 -->
    <div class="titleBox">누군가의 구조활동 <img src="css/activity/arrow.png" alt="" class="more2" v-on:click="route('/userList')"></div>
    <div class="sub">다른 사람의 스트레스 완화 방법을 만나보세요</div>

    <div class="userPickBox">

        <div class="outContainer" v-for="(item, i) in $root.user_contents" v-bind:key="i" v-on:click="goToU(i)">
            <div class="userList center" v-if="$root.curCondition.includes(item.condition)" v-bind:style='{ "background-image": "url(" + item.url + ")", "background-position": "center center", "background-size":"cover"}'>
                <div class="filter2 center">
                    <div class="conTitle2" id="condition">{{conText(item.condition)}}</div>
                    <div class="userTitle" id="a">{{item.uTitle}}</div>
                </div>
                <img :src="lUrl(item.level)" alt="" class="listAnimal" >
                <img src="css/activity/triangle.png" alt="" class="triangle">
                <div class="levelInfo">{{item.level}} 등급 @<span>{{item.id}}</span>님의 추천</div>
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
                <div class="selectMenu Menu4" v-on:click="hamClose">활동 추천</div>
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
  name: "ActHome",
  props: {

  },
  router,
  data: function() {
        return {
          hamOn:"none",
          curCondition:this.$root.curCondition
        }
    },
    methods:{
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
        setCondition: function(cond){
          //선택 되어 있을 때
          if(this.$root.curCondition.includes(cond)){
            console.log(this.$root.curCondition)
            console.log(this.$root.curCondition.includes(cond))
            this.$root.curCondition.splice(this.$root.curCondition.indexOf(cond), 1);
            document.getElementById(cond).className = "cdHash center"
            
            
            console.log(this.$root.curCondition)
          }
          //선택 안되어 있을 때
          else{
            console.log(this.$root.curCondition)
            console.log(this.$root.curCondition.includes(cond))
            this.$root.curCondition.push(cond)
            document.getElementById(cond).className += " " + "cdSelected"
            console.log(this.$root.curCondition)
          }
        },

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
        isCond: function(cond){
          if (cond){
            return 'flex'
          }else{
            return 'none'
          }

        },
          lUrl: function(cond){
            switch(cond){
                case '고래': return "css/myPage_img/gorae.png"; break;
                case '돌고래': return "css/myPage_img/dolgorae.png"; break;
                case '니모': return "css/myPage_img/nimo.png"; break;
                case '가오리': return "css/myPage_img/gaori.png"; break;
            }   
          },
          goToU: function(i){
              this.$router.push({name: 'UserActDt', params: {userContentId : i, fw:2}})
          },
          goToE: function(i){
              this.$router.push({name: 'PickList2', params: {bigContentId : i}})
          }

},
 mounted() {

     //에디터 콘텐츠, 유저콘텐츠 로드
        this.$root.load_user_contents()
        this.$root.load_editor_contents_small()


      let vm = this;
          if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }
       //console.log(curCondition)
       
       this.$root.curCondition.forEach(function(element){
         document.getElementById(element).className += " " + "cdSelected"
        });

       

        
    }
}
</script>


<style scoped>
 
 .hashTop{
    margin-top:14.04vh;
    padding:3.33vh 0 3.33vh 4.27vw;
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    overflow-wrap: normal;
}

.cdHash{
    height: 4vh;
    padding: 0 3.5vw;
    background-color: white;
    border-radius: 32px;
    color: #0A74D8;
    margin-right:2.13vw;
    font-size: 14px;
    font-weight: 700;
    box-sizing: border-box;
    border:1px solid #0A74D8;
}

.cdSelected{
    background-color: #0A74D8;
    color: white;
}

.titleBox{
    height: 4.43vh;
    padding-left: 4.27vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size:18px;
}

.titleBox>img{
    height: 4.43vh;
}

.edtPickBox{
    padding: 1.11vh 0 4.93vh 4.27vw;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    overflow-wrap: normal;
    display: flex;
}

.edList{
    margin-right: 3.47vw;
    height: 21.95vh;
    border-radius: 10px;
    width: 37.33vw;
    background-image: url(../../public/css/activity/editor1.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    color:white;
    font-weight: 800;
}

.conTitle{
    font-weight: 700;
    font-size: 9px;
    margin-bottom: 5px;
}

.aTitle{
    font-size: 12px;
    margin-bottom: 5px;
}

.nTitle{
    font-size: 14px;
}

.filter{
    height: 21.95vh;
    width: 37.33vw;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.45) 0%, rgba(255, 255, 255, 0) 100%); ;
}

.sub{
    padding-left: 4.27vw;
    font-weight: 700;
    font-size: 12px;
    color: #c4c4c4;
}

.userPickBox{
    padding: 2.96vh 0 2vh 4.27vw;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    overflow-wrap: normal;
    display: flex;
}

.userList{
    position: relative;
    margin-right: 3.2vw;
    height: 32.91vh;
    border-radius: 10px;
    width: 64.53vw;
    background-image: url(../../public/css/activity/userpick1.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    color:white;
    font-weight: 800;
}

.userList:last-child{
    margin-right: 3.2vw;
}

.filter2{
    height: 32.91vh;
    width: 64.53vw;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.45) 0%, rgba(255, 255, 255, 0) 100%); ;
    position: relative;
    align-items: flex-start;
    justify-content: flex-end;
}

.conTitle2{
    font-weight: 700;
    font-size: 12px;
    padding-left:3.2vw;
}

.userTitle{
    margin-top:5px;
    font-weight: 800;
    font-size: 18px;
    padding-left:3.2vw;
    padding-bottom: 1.72vh;
}

.listAnimal{
    z-index: 2;
    width: 19.2vw;
    position: absolute;
    right:0;
    top:-4.7vh;
}

.triangle{
    z-index: 2;
    height: 2vh;
    position: absolute;
    right:8vw;
    top:3vh;
}

.levelInfo{
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    padding:1vh 3vw;
    background-color: #0A74D8;
    border-radius: 32px;
    right:2vw;
    top:5vh;
}

</style>
