<template>
  <div id="BookMark">
     <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.go(-1)"></div>
        <div class="title center">북마크</div>
        <img class='hamburger topRight' src="css/hamburger_blk.png"  v-on:click="hamAct">
    </div>

    <!-- 셀랙트 바 -->
    <div class="selectContainer">
        <div class="select center" id="editSelect" v-on:click="selectStd('editor')">에디터 픽</div>
        <div class="select center" id="userSelect" v-on:click="selectStd('user')">사용자 추천</div>
    </div>
    <!-- 리스트 -->

    <div class="listContainer">
        <!-- 에디터 픽 -->
       
          <div class="editContainer" v-bind:style="{display:state}"  v-for="(item, i) in $root.editor_contents_small" v-bind:key="i">
            <div class="outEditor" v-for="(item2, j) in $root.editor_contents_small[i]" v-bind:key="j">
              <div class="list editorPick" v-if="has(i,j)">
                  <div class="imgBox" v-bind:style='{ "background-image": "url(" + item2.url + ")", "background-position": "center", "background-size":"40vw"}'></div>
                  <div class="contentBox">
                      <div class="condition">{{conText(item2.condition)}}</div>
                      <div class="contentTitle">{{item2.contentTitle.substring(0,17)}}</div>
                      <div class="theme">{{$root.editor_contents[i].bigA}} {{$root.editor_contents[i].bigN}}</div>
                  </div>
                  <img class="markIcon" src="css/actIcon/bookmark_aft.png" v-on:click="trash(i,j)">
                  <div class="clickBox clickBox1" v-on:click="goToEd(i,j)"></div>
              </div>
            </div>
          </div>

           <!-- 사용자 픽 -->
        <div class="outUser" v-bind:style="{display:state2}" v-for="(item, k) in $root.user_contents" v-bind:key="k">
          <div class="list userPick" v-if="$root.currentBook.includes(item.pk)">
              <div class="imgBox2" v-bind:style='{ "background-image": "url(" + item.url + ")", "background-position": "center", "background-size":"40vw"}'></div>
              <div class="contentBox2">
                  <div class="condition">{{conText(item.condition)}}</div>
                  <div class="contentTitle2">{{item.uTitle}}</div>
                  <div class="infoContents"><img class="animalIcon" :src="lUrl(item.level)">@<span id="id">{{item.id}}</span></div>
              </div>
              <img class="markIcon" src="css/actIcon/bookmark_aft.png" v-on:click="bookFlip(item.pk)">
              <div class="clickBox clickBox2" v-on:click="goToU(k)"></div>
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
                <div class="selectMenu Menu5" v-on:click="hamClose">북마크</div>
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
  name: "BookMark",
  props: {

  },
  router,
  data: function() {
        return {
           hamOn:"none",
           state:"block",
           state2:"none"
        }
    },
    methods:{
        has: function(x,y){
            return this.$root.currentBook2.includes(""+x+y)
        },
        
        bookFlip: function(pk){
            let vm = this;
            
            if(vm.$root.currentBook.includes(pk)){
                let idx = this.$root.currentBook.indexOf(pk);
                //vm.$root.currentBook.splice(idx, 1)
                vm.$root.userBook[vm.$root.currentPk].list.splice(idx, 1)
                vm.$root.user_contents[pk].markNum -= 1
            console.log('delete')
            //레벨링
            vm.$root.currentInfo.score -=1;
            vm.$root.currentInfo.level = vm.$root.level_func(vm.$root.currentInfo.score)
            console.log('delete2')

            

            }
            else{
                //vm.$root.currentBook.push(pk)
                vm.$root.userBook[vm.$root.currentPk].list.push(pk)
                vm.$root.user_contents[pk].markNum += 1

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
               this.hamOn = "block"
        },
        hamClose: function(){
               this.hamOn = "none"
        },
        route: function(to){
            this.$router.push(to)
        },
        selectStd: function(std){

          this.$root.currSelected = std;
     
          if(this.$root.currSelected == 'editor'){
            document.getElementById('editSelect').className = "select center selected"
            document.getElementById('userSelect').className = "select center"
            this.state="block"
            this.state2="none"
            
          }
          else{
            document.getElementById('editSelect').className = "select center"
            document.getElementById('userSelect').className = "select center selected"
            this.state="none"
            this.state2="block"
          }
        },
        displayOn: function(currSelected){
          if(this.$root.currSelected == "editor"){
            return "flex"
          }
          else{
            return "none"
          }
        },
        displayOn2: function(currSelected){
          if(this.currSelected == "editor"){
            return "none"
          }
          else{
            return "flex"
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
        trash: function(b,s){
            console.log(b,s)
            console.log(""+b+s)
            let idx = this.$root.currentBook2.indexOf(""+b+s);
                //vm.$root.currentBook.splice(idx, 1)
            console.log(idx)
            this.$root.EditorBook[this.$root.currentPk].list.splice(idx, 1)
            this.$root.editor_contents_small[b][s].markNum -= 1

             //레벨링
         
         this.$root.currentInfo.score -=1;
         this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)

         //book마크변경
            this.$root.save_EditorBook()
            this.$root.load_EditorBook()

            //userTable 세이브
            this.$root.save_userTable()

          //marknum변경
          this.$root.save_editor_contents_small()
          this.$root.load_editor_contents_small()
          
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
              this.$router.push({name: 'UserActDt', params: {userContentId : i, fw:1}})
        },
        goToEd: function(i, j){
          this.$router.push({name: 'EditorDetail', params: {bigContentId:i, edContentId: j, fw:1}})
        },
    },
    mounted() {

         let vm = this;
          if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }

      this.$nextTick(() =>{
         if(this.$root.currSelected == 'editor'){
            document.getElementById('editSelect').className = "select center selected"
            document.getElementById('userSelect').className = "select center"
            this.state="block"
            this.state2="none"
            
          }
          else{
            document.getElementById('editSelect').className = "select center"
            document.getElementById('userSelect').className = "select center selected"
            this.state="none"
            this.state2="block"
          }

      })

     
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
    position: fixed;
    top: 14.04vh;
    height: 7vh;
    box-sizing: border-box;
    border-top: 2px solid #F7F7F7;
    display: flex;
    width: 100vw;
    z-index: 2;
}

.listContainer{
    margin-top: 21.04vh;
    height:80.17vh;
    overflow: auto;
}

.select{
    width: 50vw;
    font-weight: 400;
    color:#c4c4c4;
    border-bottom: 2px solid #F4F4F4;
    background-color: white;
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
