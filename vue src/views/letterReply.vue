<template>
  <div id="LetterReply">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/white_back.png" v-on:click="$router.go(-1)" alt="" class="back_arrow"></div>
        <div class="title center">편지 읽기</div>
        <div class="complete center" v-on:click="sendMsg">전송</div>
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
        <div class="centerBox center">
            <img src="css/letterDetail/reply_hashtag.png" alt="" class="hashImg">
            <div id = "ht" class="hashText center blank" v-on:click="tagPop">{{tag}}</div>
        </div>
    </div>

    <!-- 답장 -->
    <div class="reply center">
        <img src="css/letterDetail/reply_postcard.png" alt="" class="replyCard">
        <textarea v-on:keyup="writing" v-model="replyText" class="replyField" id="rpField"></textarea>
        <div class="rePlyDown">
            <div class="textNum"><span id="stateNum">{{stateNum}}</span>/300</div>
        </div>
    </div>

    <!-- 팝업 -->
    <div class="popContainer popContainer3 center" v-bind:style="{display:isContent}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">
                <div>내용을 입력해주세요</div>
            </div>
            <div class="popButton2 center">
                <div id="yes3" class="center" v-on:click="popClose">네</div>
            </div>
        </div>
    </div>

    <div class="popContainer popContainer2 center" v-bind:style="{display:popTag}">
        <div class="popChoiceBox">
            <div class="popTitle2 center" id="inst" >해시태그를 선택해 주세요</div>
            <div class="popContent">
                <div class="contentLine contentLine1" v-on:click="setTag('저도 비슷한 일이 있었어요')">
                    <div class="content">#저도 비슷한 일이 있었어요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('시간이 해결해 줄 거에요')">
                    <div class="content">#시간이 해결해 줄 거에요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('완벽하지 않아도 괜찮아요')">
                    <div class="content">#완벽하지 않아도 괜찮아요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('아프지 않은 날이 더 많을거에요')">
                    <div class="content">#아프지 않은 날이 더 많을거에요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('내 감정에 솔직해지세요')">
                    <div class="content">#내 감정에 솔직해지세요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('당신의 하루가 별보다 빛나길')">
                    <div class="content">#당신의 하루가 별보다 빛나길</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('잘하고 있어요')">
                    <div class="content">#잘하고 있어요</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setTag('지루한 일상에 지치지 말아요')">
                    <div class="content">#지루한 일상에 지치지 말아요</div>
                </div>
            </div>
            <div class="popButton2 center" id="yes2" v-on:click="popClose" >확인</div>
        </div>
    </div>

    <div class="popContainer popContainer1 center" v-bind:style="{display:sendConfirm}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">답장을 보낼까요?</div>
            <div class="popButton center">
                <div id="no1" class="center" v-on:click="popClose">아니요</div>
                <div id="yes1" class="center" v-on:click="saveComplete" >네</div>
            </div>
        </div>
    </div>

    <!-- 확인 창 -->
    <div class="completeBox" v-bind:style="{display:sendComple}">
        <div class="completeText">바다에 편지를 띄워 보냈어요</div>
        <div class="aBox center" v-on:click="exitComplete" >
            <div class="a" >확인</div>
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
  name: "LetterReply",
  props: {

  },
  router,
  data: function() {
        return {
           //query: this.$route.params,
           isContent:"none",
           popTag:"none",
           sendConfirm:"none",
           sendComple:"none",

           stateNum:0,
           replyText:"",
           tag:"해시태그를 선택해 주세요"
        }
    },
    methods:{
    sendMsg: function(){
        if(this.stateNum !=0){
          this.sendConfirm="flex"
        }
        else{
          this.isContent="flex"
        }
      },
      popClose:function(){
            this.isContent="none",
            this.popTag="none",
            this.sendConfirm="none",
            this.sendComple="none"
      },
       writing:function(){
        let textArea = document.getElementById('rpField').value
        this.stateNum = textArea.length;

        if (this.stateNum > 300) {
                textArea.substring(0, 500);
        }
      },
      saveComplete:function(){
        let vm = this;

         let date = new Date();
            let yyy = date.getFullYear().toString()+"."
            //월
            if(date.getMonth()+1<10){
                yyy += ("0" + (date.getMonth()+1).toString() + ".") 
            }else{
                yyy += ((date.getMonth()+1).toString() + ".")
            }
            //일
            if(date.getDate()<10){
                yyy += ("0" + date.getDate().toString());
            }else{
                yyy += date.getDate().toString();
            }

        this.sendComple="flex"
        if(vm.tag == "해시태그를 선택해 주세요"){
            vm.tag = ""
        }

        //갯수
        let number = this.$root.Replys.filter(function (reple) { return reple.lpk == vm.$route.params.LetterId}).length 


        //답장 저장코드
        this.$root.Replys.push({
         lpk:vm.$route.params.LetterId,
         rpk:number,
         id:vm.$root.currentInfo.id,
         date:yyy,
         tag:vm.tag,
         replyText:document.getElementById('rpField').value,
         replyLike:false
         })

         //레벨링
         this.$root.currentInfo.myReply +=1;
         this.$root.currentInfo.score +=10;
         this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)
        
        this.$root.save_userTable()

        //답장셋팅
        this.$root.save_Replys()
        this.$root.load_Replys()

     
     },
      exitComplete:function(){
        this.popClose
        this.$router.go(-1);
      },
      tagPop:function(){
        this.popTag="flex"
      },
      setTag:function(t){
        this.tag=t;
        document.getElementById('ht').style.color = "#0A74D8"
      }

    },
    mounted() {



        let x = $('.letterDown').offset().left
          let vm = this;

          
         if(vm.$root.currentId == ""){
            console.log('go home');
            this.$router.push('/login')
        }
      this.$nextTick(() =>{
          //감정찍기
           vm.$root.Letters[vm.$route.params.LetterId].emotions.forEach((value, index) => {
                    $('#' + value).css({
                        'display': 'inline-block',
                        'left': (x + index * 30) + 'px'
                    });
                });

          //해시태그
        $('.hashTag').on('click', function () {

            $('.contentLine1').on('click', function () {

                let isSelected = $(this).children(':first').hasClass("tagSelected")

                if (!isSelected) {
                    $('.content').removeClass('tagSelected')
                    $(this).children(':first').addClass('tagSelected')
                    
                }
            });
        });
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

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#LetterReply{
    height: 100vh;
    background-image: url(../../public/css/letter/letter_back.png);
    background-size: 100vw 100vh;
    background-position: top left;
    font-family: 'NanumSquare';
    /*position: fixed;*/
    top:0
}
/* top bar */
.topContainer {
    z-index: 2;
    position: fixed;
    top:0;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color: rgba(0,0,0,0)
}

.back {
    position: absolute;
    left: 0;
}

.back_arrow {
    width: 15.47vw;
}

.title {
    font-weight: 700;
    font-size: 18px;
    color:white;
}

.complete {
    font-weight: 700;
    width: 15.47vw;
    height: 4.43vh;
    position: absolute;
    right: 0;
    font-size: 18px;
}

/* 카드 */

.card{
    position: relative;
    padding-top:14.04vh;
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
    top: 19.5vh;
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
    width: 83.46vw;
    position: absolute;
    top:0;
    left: 0;
}

.centerBox{
    /* margin-top: 2.8vh;
    margin-bottom: 1vh; */
    width: 91.46vw;
    height: 7vh;
    position: relative;
}

.hashText{
    /* padding-bottom: 1vh; */
    color:#0A74D8;
    font-weight: 700;
    font-size: 14px;
    z-index: 2;
    position: absolute;
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
}

.replyCard{
    width: 91.46vw; 
    height: 27.46vh;  
}

.replyCard2{
    width: 85.06vw; 
    height: 27.46vh;  
}

.replyField{
    position: absolute;
    width: 77.2vw;
    height: 18vh;
    overflow: auto;
    font-size: 14px;
    line-height: 4.7vh;
    top:2.7vh;
}

.replyField2{
    white-space: normal;
    overflow-y: auto;
    position: absolute;
    width: 73.2vw;
    height: 16vh;
    font-size: 14px;
    line-height: 4.7vh;
    top:2.7vh;
    left:7vw;
}

.cardItem{
    position: relative;
    width: 85.06vw;
    display: inline-block;
}


.rePlyDown{
    position: absolute;
    bottom:4vh;
    right:11.07vw;
    font-size: 12px;
}


.likeBox{
    font-size: 14px;
    color:#0A74D8;
}

.like{
    width: 3.07vh;
    margin-right: 2vw;
}

textarea.replyField{
    background-color: rgba(0,0,0,0);
    border:none;
}

textarea:focus {
    outline: none;
}

textarea::placeholder {
    color: #A4A4A4;
}

.blank{
    color: #A4A4A4;
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
    color: #0A74D8;
    background-color: white;
    height: 7.39vh;
    border-top: 1px solid  #0A74D8;
    border-radius: 0 0 10px 10px;
}

.popButton2{
    background-color: #0A74D8;
    border-radius: 0 0 10px 10px;
    height: 7.39vh;
    color:white;
}

.popTitle{
    font-family: 'NanumSquare';
    font-weight: 400;
    font-size: 18px;
    border-bottom:2px solid #F7F7F7;
    height:17.73vh;
}

#no1, #no2{
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

/*확인 창*/
.completeBox{
    display: none;
    color:white;
    height: 100vh;
    width: 100vw;
    background-image: url(../../public/css/letter/send_back.png);
    background-size: 100vw 100vh;
    background-position: center center;
    z-index: 5;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.completeText{
    padding:74.47vh 0 6.53vh 0;
    font-size: 18px;
}
.aBox{
    width: 25.33vw;
    height: 6.4vh;
}
.a, .a:visited{
    text-decoration: none;
    font-weight: 700;
    color: white;
    font-size: 20px;
}

.center2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 150%;
}

.popChoiceBox {
    width: 91.47vw;
    background-color: white;
    border-radius: 10px;
}

.popTitle2 {
    font-family: 'NanumSquare';
    font-weight: 400;
    border-bottom: 2px solid #F7F7F7;
    height: 8.62vh;
}


.contentLine {
    height: 6vh;
    display: flex;
    align-items: center;
}

.popContent {
    padding:2.59vh 0;
}


.content {
    font-family: 'NanumSquare';
    margin-left: 7.2vw;
    padding: 1vh 3.2vw;
    border-radius: 32px;
    border: 1px solid #0A74D8;
    color: #0A74D8;
    background-color: white;
}

.tagSelected{
    color: white;
    background-color: #0A74D8;
}

/* .popButton {
    color: white;
    background-color: #0A74D8;
    height: 7.39vh;
    border-radius: 0 0 10px 10px;

} */
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

</style>
