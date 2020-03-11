<template>
  <div id="MyLetterDt">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="$router.go(-1)"></div>
        <div class="title center">내 편지</div>
        <img class='hamburger topRight' src="css/hamburger_blk.png" v-on:click="hamAct">
    </div>

     <!-- 카드 -->
     <div class="card cardBack center" id="card_back">
        <img src="css/letterDetail/postcard_redshadow.png" alt="" class="cardImg">
        <div class="textField" v-html="$root.Letters[$route.params.LetterId].writeText"></div>
        <div class="letterDown">
            <div class="downLeft center" style="visibility:hidden"><img class="emotion1" src="css/letter/emotion_img/angry.png"></div>
            <div class="downRight center">{{$root.Letters[$route.params.LetterId].date}}</div>
        </div>

         <div class="emBox">
                <img id="sad" src="css/letter/emotion_img/sad.png" alt="" class="emOn">
                <img id="angry" src="css/letter/emotion_img/angry.png" alt="" class="emOn">
                <img id="depressed" src="css/letter/emotion_img/depressed.png" alt="" class="emOn">
                <img id="anxiety" src="css/letter/emotion_img/anxiety.png" alt="" class="emOn">
                <img id="shame" src="css/letter/emotion_img/shame.png" alt="" class="emOn">
            </div>
    </div>

     <!-- 해시태그 -->
     <div class="hashTag center">
        <div class="centerBox">
            <img src="css/letterDetail/reply_hashtag.png" alt="" class="hashImg hashImg2">
            <div class="hashText center">{{currentTag}}</div>
        </div>
    </div>

    <!-- 답장 -->
    <div class="reply2" v-on:scroll.passive="onScroll">
        <div class="cardItem" v-for="(item, i) in write_replys" v-bind:key="i">
            <img src="css/letterDetail/reply_postcard.png" alt="" class="replyCard2">
            <div class="replyField2">{{item.replyText}}</div>
            <div class="rePlyDown2">
                <div class="likeBox center"><img class="like" :src="srcLike(item.replyLike)" v-on:click="likeFlip(i)">{{isLike(item.replyLike)}}</div>
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
  name: "MyLetterDt",
  props: {

  },
  router,
  data: function() {
        let vm =this;
        return {
           hamOn:"none",
           currentTag:"",
           write_replys: this.$root.Replys.filter(function (reply) { return reply.lpk == vm.$route.params.LetterId }),
           fromtagId: vm.$route.params.ReplyId
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
        isLike:function(like){
          if(like){
            return "고마움을 표현했습니다"
          }
          else{
            return "하트를 눌러 고마움을 표현해보세요"
          }
        },
        srcLike:function(like){
          if(like){
            return "css/letterDetail/reply_give_heart_af.png"
          }
          else{
            return "css/letterDetail/reply_give_heart_bf.png"
          }
        },
        onScroll (event) {
             console.log(event);
             let idx = parseInt((20 + event.target.scrollLeft) / 320);
             console.log(event.target.scrollLeft);
             this.currentTag = this.write_replys[idx].tag
             
        },

        //하트바뀔 때 업데이트
        likeFlip:function(idx){
          console.log(idx)

          let replyIndex;
          let vm = this;

          //답장 인덱스 찾기
          this.$root.Replys.forEach(function(element, index){
              if (element.lpk == vm.$route.params.LetterId && element.rpk == idx ){
                replyIndex = index;
                console.log(element.rpk);
                console.log(element.lpk == vm.$route.params.LetterId);
                console.log(element.rpk == idx)
              }
          })
            console.log(replyIndex);
          //플립
          if(this.$root.Replys[replyIndex].replyLike){
              //레벨링
            vm.$root.currentInfo.score -=10;
            vm.$root.currentInfo.level = vm.$root.level_func(vm.$root.currentInfo.score)

          }
          else{
              //레벨링
            vm.$root.currentInfo.score +=10;
            vm.$root.currentInfo.level = vm.$root.level_func(vm.$root.currentInfo.score)

          }
            //정보저장
          this.$root.save_userTable()

          this.$root.Replys[replyIndex].replyLike = !this.$root.Replys[replyIndex].replyLike
        
         //답장저장
         this.$root.save_Replys()
         this.$root.load_Replys()


        
        }

    },
    mounted() {
        let vm = this;
         if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }
        console.log('ss', this.$route.parmas)

        //currentTag Set
        if(Object.keys(vm.$route.params).length === 3){
            this.currentTag = this.write_replys[vm.$route.parmas.ReplyId].tag;
        }
        else{
            if(Object.keys(vm.write_replys).length !== 0){
                this.currentTag = this.write_replys[0].tag;
            }
            else{
                this.currentTag = "아직 편지가 바다를 떠돌고 있어요"
            }
        }

        // 감정 찍어내기
        let x = $('.letterDown').offset().left
        this.$nextTick(() =>{
         vm.$root.Letters[vm.$route.params.LetterId].emotions.forEach((value, index) => {
                    $('#' + value).css({
                        'display': 'inline-block',
                        'left': (x + index * 30) + 'px'
                    });
                });

        

      })

      //태그 셋팅
        console.log('ss', this.fromtagId)
      this.$nextTick(() =>{
          console.log(vm.fromtagId)
         jQuery('.reply2').animate({
            scrollLeft: vm.fromtagId * 320
        }, 800, 'swing');

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
/* top bar */
.topContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}


.back {
    position: absolute;
    left: 0;
}

.back>img {
    width: 15.47vw;
}

.title {
    font-family: 'NanumSquare';
    font-weight: 700;
    color: black;
    font-size: 18px;
}

img.hamburger{
    height:4.43vh;
    right:0;
    position: absolute;
}

/* 카드 */

.card{
    position: relative;
    margin-top:14.04vh;
    width: 100vw;
    height: 42.33vh;
}

.cardImg{
    width: 91.46vw;
    height: 42.33vh;
}

.letterDown{
    position: absolute;

}

.textField{
    width: 75.46vw;
    height: 27.83vh;
    position: absolute;
    line-height: 4.1vh;
    top: 5.5vh;
    font-size:14px;
    box-sizing: border-box;
    /* margin-bottom:6.2vh; */
    overflow: auto;
}

.hashImg{
    width: 91.46vw;
    /* position: absolute;
    top:0; */
}

.hashImg2{
    width: 85.06vw;
    /* position: absolute;
    top:0;
    left: 0; */
}

.centerBox{
    /* margin-top: 2.8vh;
    margin-bottom: 1vh; */
    width: 91.46vw;
    height: 5.4vh;
    position: relative;
    display: flex;
    align-items: center;
}

.hashText{
    color:#0A74D8;
    font-weight: 700;
    font-size: 14px;
    z-index: 2;
    position: absolute;
    left:20vw;
}

.letterDown{
    position: absolute;
    bottom:3.83vh;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 12px;
    width: 75.46vw;
    align-items: center;
}
img.emotion1{
    height: 3.19vh;
    margin-right: 4.8vw;;
}
img.emotion2{
    height: 3.19vh;
    margin-right: 1.07;
}

.downRight{
    color: #a4a4a4;
    font-size: 12px;
}

/* 답장 */

.reply{
    position: relative;
    margin-top: 1vh;
}

.reply2{
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    margin-left: 4vw;
    overflow-wrap: normal;
    margin-top: 1vh;
}

.replyCard{
    width: 91.46vw; 
    height: 27.46vh;  
}

.replyCard2{
    width: 320px; 
    height: 27.46vh;  
}

.replyField{
    position: absolute;
    width: 77.2vw;
    height: 15vh;
    overflow: auto;
    font-size: 14px;
    line-height: 4.7vh;
    top:2.7vh;
}

.replyField2{
    white-space: normal;
    overflow-y: auto;
    position: absolute;
    width: 270px;
    height: 16vh;
    font-size: 14px;
    line-height: 4.7vh;
    top:2.7vh;
    left:7vw;
}



.cardItem{
    margin-right: 10px;
    position: relative;
    width: 320px;
    display: inline-block;
}

.cardItem:last-child{
    margin-right: 100px;
    
}

.rePlyDown{
    position: absolute;
    bottom:4vh;
    left:9.07vw;
}

.rePlyDown2{
    position: absolute;
    bottom:4vh;
    left:6.07vw;
}

.likeBox{
    font-size: 14px;
    color:#0A74D8;
}

.like{
    width: 3.07vh;
    margin-right: 2vw;
}

.emBox{ 
   /* visibility: hidden; */
    position: absolute;
    bottom:3.83vh;
    left:11vw;
    display: flex;
    align-items: center;
    
}

.emOn{
    /* position: fixed; */
    /* top: 48.3vh;  */
    margin-right: 5px;
    height: 3.19vh;
    display: none;
    /* z-index:1; */
}
/*--------------*/

/* 해시태그 */

/* 답장2 */

</style>
