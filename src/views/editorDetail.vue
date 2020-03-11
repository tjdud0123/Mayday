<template>
  <div id="EditorDetail">
      <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="backTo($route.params)" ></div>
        <div class="title center">에디터의 pick</div>
        <div class="topRight">
            <img class='hamburger' src="css/hamburger_blk.png" v-on:click="hamAct">
        </div>
    </div>

    <!-- 사진 -->
    <div class="photoBox" v-bind:style='{ "background-image": "url(" + this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].url + ")", "background-position": "center", "background-size":"100%", "background-repeat":"no-repeat"}'></div>

    <!-- 상단정보 -->
    <div class="Info upInfo">

        <div class="bkMarkBox">
            <img class="markIcon marked" :src="srcBook($route.params.bigContentId,$route.params.edContentId)" v-on:click="bookedFlip($route.params.bigContentId,$route.params.edContentId)">
            <div class="markNum">{{this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].markNum}}</div>
        </div>

        <div class="condition">{{conText(this.$root.editor_contents_small[this.$route.params.bigContentId].condition)}}</div>
        <div class="title0">{{this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].contentTitle}}</div>
        <div class="shortDetail">{{this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].shortDetail}}</div>

        <!-- 정보출력 -->
        <div class="detailBox">
            <div class="dtCategory">{{getDtcategory0(this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].category)}}</div>
            <div class="dtItem"> {{this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].dtItem0}}</div>
        </div>
        <div class="detailBox">
            <div class="dtCategory">{{getDtcategory1(this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].category)}}</div>
            <div class="dtItem">{{this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].dtItem1}}</div>
        </div>

    </div>
    <!-- 하단정보 -->
    <div class="Info downInfo">
        <div class="dtCategory2">{{getDtcategory2(this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].category)}}</div>
        <div class="longDetail" v-html="this.$root.editor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId].longDetail"></div>
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


    <!-- EditorDetail{{$route.params}} -->
  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script>
import router from "../router";


export default {
  name: "EditorDetail",
  props: {

  },
  router,
  data: function() {
        return {
           hamOn:"none",
            //bId: this.$route.params.bigContentId,
            //edId: this.$route.params.edContentId,
            //dtContent: this.$root.ditor_contents_small[this.$route.params.bigContentId][this.$route.params.edContentId]
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

        backTo: function(params){
          if(params.fw == 1){
            this.$router.go(-1)
          }
          else{
            this.$router.push({name: 'PickList2', params: {bigContentId : params.bigContentId, fw:0}})
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
        getDtcategory0: function(ctg){
          switch(ctg){
            case 'movie': return '등급'; break;
            case 'music': return '앨범'; break;
            case 'book': return '출판사'; break;
            case 'restaurant': return '전화번호'; break;
            case 'video': return '링크'; break;
          }
        },
        getDtcategory1: function(ctg){
          switch(ctg){
            case 'movie': return '방영일'; break;
            case 'music': return '발매일'; break;
            case 'book': return '출판일'; break;
            case 'restaurant': return '영업시간'; break;
            case 'video': return '게시일'; break;
          }
        },
        getDtcategory2: function(ctg){
          switch(ctg){
            case 'movie': return '줄거리'; break;
            case 'music': return '가사'; break;
            case 'book': return '줄거리'; break;
            case 'restaurant': return '메뉴'; break;
            case 'video': return '소개글'; break;
          }
        },
        srcBook:function(k,l){
            let vm = this;
            console.log(""+k+l)
            console.log(vm.$root.currentBook2)
            console.log(vm.$root.currentBook2.includes(""+k+l))
          if(vm.$root.currentBook2.includes(""+k+l)){
            //북마크 제거
            return "css/actIcon/bookmark_aft.png"
          }
          else{
            //북마크 추가
            return "css/actIcon/bookmark_bf.png"
          }
        },
        bookedFlip:function(k,l){
          //북마크에 push,pop

              let vm = this;
            
            if(vm.$root.currentBook2.includes(""+k+l)){
                let idx = this.$root.currentBook2.indexOf(""+k+l);
                //vm.$root.currentBook.splice(idx, 1)
                vm.$root.EditorBook[vm.$root.currentPk].list.splice(idx, 1)
                this.$root.editor_contents_small[k][l].markNum -= 1;

                 //레벨링
            this.$root.currentInfo.score -=1;
            this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)

            }
            else{
                //vm.$root.currentBook.push(pk)
                vm.$root.EditorBook[vm.$root.currentPk].list.push(""+k+l)
                this.$root.editor_contents_small[k][l].markNum += 1;

                 //레벨링
            this.$root.currentInfo.score -=1;
            this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)

            }

             //book마크변경
            this.$root.save_EditorBook()
            this.$root.load_EditorBook()

            //userTable 세이브
            this.$root.save_userTable()

          //marknum변경
          this.$root.save_editor_contents_small()
          this.$root.load_editor_contents_small()

        }

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
            vm.$router.push('/login')
        }
    }
};
</script>


<style scoped>
 
 .photoBox{
    margin-top: 14.04vh;
    width: 100vw;
    height: 40.22vh;
    background-image: url(../../public/css/activity/editor4.png);
    background-position: center;
    background-size:100%;
    background-repeat:no-repeat;
}

/* 상단정보 */
.Info{
    position: relative;
    padding: 0 4.27vw;
    width: 100vw;
    box-sizing: border-box;
}

.upInfo{
    padding-top: 2.46vh;
    padding-bottom: 4.06vh;
    font-weight: 700;
}
.bkMarkBox{
    position: absolute;
    right: 4.27vw;
    top:3.94vh;
    display: flex;
    align-items: center;
    
}

.markIcon{
    width: 40px;
}

.markNum{
    color:#0a74d8;
    font-size: 14px;
    font-weight: 400;
}

.condition{
    color:#0a74d8;
    font-size: 14px;
    margin-bottom: 14px;
}

.title0{
    font-size: 18px;
    margin-bottom: 14px;
}

.shortDetail{
    color:#8a8a8a;
    font-size: 14px;
    margin-bottom: 14px;
}

.detailBox{
    margin-bottom: 10px;
    display: flex;
}

.dtCategory{
    color:#8a8a8a;
    font-size: 12px;
}

.dtItem{
    font-weight: 400;
    font-size: 12px;
    position: absolute;
    left:19.73vw;
    color:#8a8a8a;
}

/* 하단정보 */
.downInfo{
    padding-top: 4.06vh;
    border-top: 2px solid #f7f7f7;
    position: relative;
    display: flex;
}

.dtCategory2{
    font-weight: 700;
    font-size: 14px;
}

.longDetail{
    font-weight: 400;
    font-size: 12px;
    position: absolute;
    left:19.73vw;
    width: 69.87vw;
    line-height: 150%;
    color:#8a8a8a;
}

</style>
