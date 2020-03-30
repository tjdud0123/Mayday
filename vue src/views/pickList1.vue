<template>
  <div id="PickList1">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.push('actHome')"></div>
        <div class="title center">에디터의 pick</div>
        <img class='hamburger topRight' src="css/hamburger_blk.png" v-on:click="hamAct">
    </div>

    <!-- 셀랙트 바 -->
    <div class="topBox">
        <div class="leftBox">
            <div class="condition center">{{getCd(this.$root.curCondition[0])}}</div>
            <div class="conditionNum">{{getNum(this.$root.curCondition.length)}}</div>
        </div>
        <div class="rightBox" v-on:click="orderAct">
            <div class="orderBy">{{this.$root.orderStd}}</div>
            <div class="orderImg"><img src="css/activity/recommend_sort_btn.png" alt="" class="orderArrow"></div>
        </div>
    </div>

    <!-- 리스트 -->
    <div class="listContainer0">

        <div class="outContainer" v-for="(item, i) in ordered" v-bind:key="i">
          <div class="list" v-if="$root.curCondition.includes(item.condition)" v-on:click="goToE(item.pk)">
              <div class="listImg" v-bind:style='{ "background-image": "url(" + item.url + ")", "background-position": "center center", "background-size":"cover"}'></div>
              <div class="condition2">{{conText(item.condition)}}</div>
              <div class="aTitle" id="a">{{item.bigA}}</div>
              <div class="nTitle" id="n">{{item.bigN}}</div>     
          </div>
        </div>

    </div>

    <!--팝업-->
    <div class="popContainer popContainer0 center" v-bind:style="{display:orderPop}">
        <div class="whiteBox">

            <div class="headLine" v-on:click="orderClose('최신순')"><img src="css/activity/recommend_menu_latest_onlyicon.png" alt=""
                    class="orderIcon" >최신순</div>
            <div class="headLine" v-on:click="orderClose('북마크순')"><img src="css/activity/recommend_menu_bookmark_onlyicon.png" alt=""
                    class="orderIcon">북마크순</div>

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



  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js"></script>


<script>
import router from "../router";


export default {
  name: "PickList1",
  props: {

  },
  router,
  data: function() {
        return {
           hamOn:"none",
           orderPop:"none"
           
        }
    },
    computed:{
        ordered : function(){
            return _.orderBy(this.$root.editor_contents, this.$root.orderKey, 'desc');
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
        orderAct: function(){
               this.orderPop = "flex"
        },
        orderClose: function(std){
            //order 순서바꾸기
            this.$root.orderStd = std
            
            let vm = this;
            console.log(vm.$root.editor_contents)

            if(std == '최신순'){
                vm.$root.orderKey = "pk"
            }
            else{
                for(let i = 0 ; i < vm.$root.editor_contents.length; i++){
                    let wholeBook = 0
                    vm.$root.editor_contents_small[i].forEach(function(element){
                        wholeBook += element.markNum 
                    })
                    vm.$root.editor_contents[i]["wb"] = wholeBook
                }
                
                vm.$root.orderKey = "wb"
                
            }
            
            this.orderPop = "none"
        },
        getNum: function(n){
          if (n>1){
            return "+" + (n-1).toString()
          }
          else{
            return ""
          }
        },
        getCd: function(cond){
          switch(cond){
            case 'people': return '인간관계'; break;
            case 'traffic': return '출퇴근'; break;
            case 'money': return '금전적 문제'; break;
            case 'together': return '잦은 회식'; break;
            case 'night': return '야근'; break;
            case 'low': return '낮은 성취감'; break;
          }

        },
        goToE: function(i){
              this.$router.push({name: 'PickList2', params: {bigContentId : i}})
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
 
 .topBox{
    margin-top:14.04vh;
    height: 3.69vh;
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    padding: 0 4.2vW;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.09vh;
}

.leftBox{
    height: 3.69vh;
    display: flex;
    align-items: center;
}

.condition{
    background-color:#0a74d8;
    height: 3.69vh;
    padding: 0 3.5vw;
    color: white;
    border-radius: 32px;
    margin-right:1.07vw;
    font-size: 14px;
    font-weight: 700;
    box-sizing: border-box;
}
.conditionNum{
    color:#0a74d8;
    font-weight: 700;
}


.rightBox{
    height: 3.69vh;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size:14px;
}


.orderImg{
    width: 9.07vw;
    display: flex;
    align-items: center;
}

/* 리스트 */

.listContainer0{
    padding: 0 2vw;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    font-weight: 700;
    box-sizing: border-box;
}

.outContainer:nth-child(even){
    /*margin-left: 3.46vw;*/
}

.list{
    margin-bottom: 5.05vh;
    position: relative;
    margin-left:2vw;
    margin-right:2vw;
}

.listImg{
    border-radius: 10px;
    width: 44vw;
    height: 19.33vh;
    background-image: url(../../public/css/activity/editor1.png);
    background-position: center center;
    background-size: cover;
}

.condition2{
    font-size: 10px;
    color: #0a74d8;
    margin-top: 10px;
}

.aTitle{
    font-size: 14px;
    margin-top: 6px;
}

.nTitle{
    font-size: 14px;
    margin-top: 8px;
}

/* 유저리스트 */
.Title{
    font-size: 14px;
    margin-top: 6px;
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

.listImg2{
    border-radius: 10px;
    width: 44vw;
    height: 19.33vh;
    background-image: url(../../public/css/activity/userpick4.png);
    background-position: center center;
    background-size: cover;
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
    margin-left: 29.53vw;
}
.bookBox{
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    font-weight: 700;
    font-size: 10px;
    top:1.11vh;
    right:2.4vw;
}
.bookBox>img{
    height: 11px;
}


</style>
