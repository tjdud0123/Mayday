<template>
  <div id="UserActDt">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.go(-1)"></div>
        <div class="title center">누군가의 구조활동</div>
        <div class="topRight">
            <img class='hamburger' src="css/hamburger_blk.png" v-on:click="hamAct">
        </div>
    </div>

    <div class="downContainer">
        <div class="userPhoto" v-bind:style='{ "background-image": "url(" + $root.user_contents[$route.params.userContentId].url + ")", "background-position": "center", "background-size":"40vm"}'></div>

        <div class="contentHead">
            <div class="condition">{{getCd(this.$root.user_contents[$route.params.userContentId].condition)}}</div>
            <div class="titleImo">
                <div class="title0">{{this.$root.user_contents[$route.params.userContentId].uTitle}}</div>
                <img class='search' v-on:click="editOn()" src="css/activity/menu.png" v-bind:style="{display:editAble(this.$root.user_contents[$route.params.userContentId].id)}">
            </div>
            <div class="id">@<span id="id">{{this.$root.user_contents[$route.params.userContentId].id}}</span></div>
            <div class="headDown">
                <div class="bookInfo">
                    <img :src="srcBook(this.$root.currentBook.includes($route.params.userContentId))" v-on:click="bookFlip($route.params.userContentId)" alt="" class="markIcon">
                    <div class="bookNum center">{{this.$root.user_contents[$route.params.userContentId].markNum}}</div>
                </div>
                <div class="date">{{this.$root.user_contents[$route.params.userContentId].date}}</div>
            </div>
        </div>

        <div class="textContent">{{this.$root.user_contents[$route.params.userContentId].textContent}}</div>

    </div>

    <!--팝업-->
    <div class="popContainer popContainer0 center" v-bind:style="{display:editPop}">
        <div class="whiteBox">

            <div class="headLine modify" v-on:click="goEdit($route.params.userContentId)"><img src="css/activity/modify.png" alt=""
                    class="orderIcon">수정</div>
            <div class="headLine delete" v-on:click="setDc()"><img src="css/activity/trash.png" alt=""
                    class="orderIcon">삭제</div>

        </div>
    </div>

    <div class="popContainer popContainer1 center" v-bind:style="{display:deleteConfirm}">
            <div class="popConfirmBox">
                <div class="popTitle center" id="isSend">이 게시물을 삭제하시겠어요?</div>
                <div class="popButton center">
                    <div id="no1" class="center" v-on:click="no()">아니요</div>
                    <div id="yes1" class="center" v-on:click="yes($route.params.userContentId)">네</div>
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
                    <div class="infoNum" id="myWrite">{{this.$root.currentInfo.myWrite}}
                    </div>
                </div>
                <div class="hamBox hamBox2" v-on:click="route('/fromMe')">
                    <div class=font12>내가 쓴 답장</div>
                    <div class="infoNum" id="myReple">{{this.$root.currentInfo.myReply}}
                    </div>
                </div>
                <div class="hamBox hamBox3" v-on:click="route('/myActivity')">
                    <div class=font12>내 활동 추천</div>
                    <div class="infoNum" id="myAct">{{this.$root.currentInfo.myAct}}
                    </div>
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

    <!-- UserActDt{{$route.params}} -->
  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script>
import router from "../router";


export default {
  name: "UserActDt",
  props: {

  },
  router,
  data: function() {
        return {
            hamOn:"none",
            editPop:"none",
            deleteConfirm:"none"
        }
    },
    methods:{
         bookFlip: function(pk){
            let vm = this;
            
            if(vm.$root.currentBook.includes(pk)){
                let idx = this.$root.currentBook.indexOf(pk);
                //vm.$root.currentBook.splice(idx, 1)
                vm.$root.userBook[vm.$root.currentPk].list.splice(idx, 1)
                vm.$root.user_contents[vm.$route.params.userContentId].markNum -= 1;
            
                 //레벨링
            vm.$root.currentInfo.score -=1;
            vm.$root.currentInfo.level = vm.$root.level_func(vm.$root.currentInfo.score)

            }
            else{
                //vm.$root.currentBook.push(pk)
                vm.$root.userBook[vm.$root.currentPk].list.push(pk)
                vm.$root.user_contents[vm.$route.params.userContentId].markNum += 1;
            
             //레벨링
            vm.$root.currentInfo.score +=1;
            vm.$root.currentInfo.level = vm.$root.level_func(vm.$root.currentInfo.score)


            }

            
            //book마크변경
            this.$root.save_userBook()
            this.$root.load_userBook()

            //userTable 세이브
            this.$root.save_userTable()

          //marknum변경
          this.$root.save_user_contents()
          this.$root.load_user_contents()

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
        editAble: function(writeId){
          let vm = this;
          console.log('>>>', writeId)
          console.log('sss', vm.$root.currentId)
          if(writeId == vm.$root.currentId){
            return "flex"
          }
          else{
            return "none"
          }
        },
        editOn: function(){
          this.editPop = "flex"
        },
        goEdit: function(idx){
          this.$router.push({name: 'UserWrite', params: {userContentId : idx}})
        },
        setDc: function(){

          this.editPop = "none",
          this.deleteConfirm = "flex"
        },
        no: function(){
          this.deleteConfirm = "none"
        },
        yes: function(idx){
          //삭제코드
          // **** 디비변경
          this.$root.user_contents.splice(idx, 1)
             //레벨링
         this.$root.currentInfo.myAct -=1;
         this.$root.currentInfo.score -=20;
         this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)

        this.$root.save_userTable()

        // usercontents 저장
        this.$root.save_user_contents()
        this.$root.load_user_contents()


          //라우팅
          this.$router.go(-1)
        },
        getCd: function(cond){
           switch(cond){
            case 'people': return '인간관계가 힘들 때'; break;
            case 'traffic': return '출퇴근으로 지칠 때'; break;
            case 'money': return '금전적 문제로 힘들 때'; break;
            case 'together': return '잦은 회식으로 힘들 때'; break;
            case 'night': return '야근으로 피곤할 때'; break;
            case 'low': return '낮은 성취감으로 우울할 때'; break;
          }
        },
         srcBook:function(booked){
          if(booked){
            return "css/actIcon/bookmark_aft.png"
          }
          else{
            return "css/actIcon/bookmark_bf.png"
          }
        },
        // bookedFlip:function(){
        //   //북마크 추가/제거
          
        //   if(this.$root.user_contents[this.$route.params.userContentId].booked){
        //       this.$root.user_contents[this.$route.params.userContentId].markNum -= 1;
        //   }
        //   else{
        //     this.$root.user_contents[this.$route.params.userContentId].markNum += 1;
        //   }
        //   console.log('changed')
        //   this.$root.user_contents[this.$route.params.userContentId].booked = !this.$root.user_contents[this.$route.params.userContentId].booked

        // }
    },
    mounted() {

        //라우팅 문제 해결
        let vm = this;
        console.log(Object.keys(this.$route.params ).length === 0);
        if(Object.keys(vm.$route.params).length === 0){
            console.log('go back');
            vm.$router.go(-1);
        }

        if(vm.$root.currentId == ""){
            console.log('go home');
            this.$router.push('/login')
        }
    }

};
</script>


<style scoped>
 
.downContainer{
    margin-top: 14.04vh;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
}
/* 사진 */
.userPhoto{
    height: 49.51vh;
    width: 100vw;
    background-image: url(../../public/css/activity/write2.png);
    background-position: center;
    background-size:100%;
    background-repeat:no-repeat;
}

/* 헤드 */
.contentHead{
    padding:2.46vh 4.27vw 0.62vh 4.27vw;
    border-bottom: 2px solid #f7f7f7;
}

.condition{
    font-weight: 700;
    font-size: 14px;
    color: #0A74D8;
    margin-bottom: 0.44vh;
}

.title0{
    font-weight: 700;
    font-size: 18px;
}

.id, .date{
    font-weight: 700;
    font-size: 12px;
    color: #C4C4C4;
    margin-bottom: 0.37vh;
}

.headDown{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.markIcon{
    width: 40px;
    height: 40px;
    margin-left: -3vw;
}

.bookInfo{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #0A74D8;
}

.titleImo{
    height: 4.43vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.7vh;
}

.search{
    margin-right: -4vw;
}

/* 텍스트 */
.textContent{
    padding: 3.08vh 5vw 3.08vh 4.27vw;
    line-height: 150%;
    font-size: 14px;
}


/* 팝업 */

.popContainer0 {
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
    padding: 2.5vh 0 2.5vh 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #e0e0e0
}

.headLine:last-child{
    border:none
}

.headLine>img{
    height: 25px;
    margin-right:5.07vw;
    margin-left: 32.53vw;
}

/*팝업 화면*/
.popContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background-color: rgba(0,0,0,0.6);
    z-index: 2;
}

.popConfirmBox{
    background-color: white;
    position: relative;
    width: 91.47vw;
    border-radius: 10px;
    z-index: 3;
    opacity: 1;
    height: 24.63vh;
}


.popButton{
    color:white;
    background-color: white;
    height: 7.39vh;
    border-top: 1px solid  #0A74D8;
    border-radius: 0 0 10px 10px;
}

.popTitle{
    font-family: 'NanumSquare';
    font-weight: 400;
    font-size: 18px;
    border-bottom:2px solid #F7F7F7;
    height:17.73vh;
}

#no1{
    color: #0A74D8;
    width: 50%;
    height: 100%;
}

#yes1{
    color:white;
    width: 50%;
    height: 100%;
    background-color:#0A74D8;
    border-radius: 0 0 10px 0;
}

 

</style>
