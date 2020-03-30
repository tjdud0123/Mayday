<template>
  <div id="LetterWrite">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back" v-on:click="popBack"><img src="css/white_back.png" alt="" class="back_arrow"></div>
        <div class="title center">편지 쓰기</div>
        <div class="complete center" v-on:click="sendMsg">전송</div>
    </div>

    <!-- 카드 -->
    <div class="letter center">


        <div class="card cardBack center" id="card_back">
            <img src="css/letter/wrt_postcard_back.png" alt="" class="cardImg">
            <div class="textNum"><span id="stateNum">{{stateNum}}</span>/500</div>
            <textarea v-on:keyup="writing" v-model="writeText" maxlength="500" type="text" id="writeText"
                placeholder="오늘도 일이 너무 많아 야근을 했다. 죽을맛이다으아아아악 김부장은 왜 나한테만 난리치냐으아아아아아"></textarea>
            <div class="letterDown">
                <div class="downLeft center"><img class="emotion1" src="css/letter/no.png">감정을 표현해주세요</div>
                <div class="downRight center" ><img v-on:click="setGongae" class="emotion2" src="css/letter/checkbox_bf.png">비공개</div>
            </div>

            <div class="emBox">
                <img id="sad" src="css/letter/emotion_img/sad.png" alt="" class="emOn">
                <img id="angry" src="css/letter/emotion_img/angry.png" alt="" class="emOn">
                <img id="depressed" src="css/letter/emotion_img/depressed.png" alt="" class="emOn">
                <img id="anxiety" src="css/letter/emotion_img/anxiety.png" alt="" class="emOn">
                <img id="shame" src="css/letter/emotion_img/shame.png" alt="" class="emOn">
            </div>

        </div>

        <div class="card cardFront center" v-on:click="flipCard">
            <img src="css/letter/wrt_postcard_front.png" alt="" class="cardImg">
            <div class="frontText frontText1">
                <div class="upText">@<span id="id">{{this.$root.currentId}}</span></div>
                <div><span id="category">{{this.$root.currentInfo.category}}</span>&nbsp;|&nbsp;<span id="year">{{this.$root.currentInfo.year}}</span>&nbsp;|&nbsp;<span
                        id="age">{{this.$root.currentInfo.age}}</span></div>
            </div>
            <div class="frontText frontText2">
                <div class="upText">???</div>
                <div>가까운 바다 어딘가</div>
            </div>
        </div>
    </div>
     <!-- 이모티콘 고르기 -->
     <div class="emoticonBox" id="emoticonBox" v-bind:style="{display:emoBox}">
        <img class="emotext" src="css/letter/emotion_img/w0_sad.png" alt="" v-on:click="emotionP('sad')">
        <img class="emotext" src="css/letter/emotion_img/w0_angry.png" alt="" v-on:click="emotionP('angry')">
        <img class="emotext" src="css/letter/emotion_img/w0_depressed.png" alt="" v-on:click="emotionP('depressed')">
        <img class="emotext" src="css/letter/emotion_img/w0_anxiety.png" alt="" v-on:click="emotionP('anxiety')">
        <img class="emotext" src="css/letter/emotion_img/w0_shame.png" alt="" v-on:click="emotionP('shame')">
        <!-- <input type="text" class="trick"> -->
    </div>

    <!-- 안내 -->
    <div class='instruction center'>편지를 터치해주세요</div>

    <!-- 팝업창 -->
    <div class="popContainer popContainer1 center" v-bind:style="{display:sendConfirm}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">편지를 보낼까요?</div>
            <div class="popButton center">
                <div id="no1" class="center" v-on:click="popClose">아니요</div>
                <div id="yes1" class="center" v-on:click="saveComplete">네</div>
            </div>
        </div>
    </div>

    <div class="popContainer popContainer2 center" v-bind:style="{display:backConfirm}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">
                <div>지금 돌아가면 편지가 지워집니다</div>
                <div>돌아갈까요?</div>
            </div>
            <div class="popButton center">
                <div id="no2" class="center" v-on:click="popClose">아니요</div>
                <div id="yes2" class="center" v-on:click="$router.go(-1)">네</div>
            </div>
        </div>
    </div>

    <div class="popContainer popContainer3 center" v-bind:style="{display:notComple}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">
                <div>내용을 입력해주세요</div>
            </div>
            <div class="popButton center">
                <div id="yes3" class="center" v-on:click="popClose">네</div>
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
  name: "LetterWrite",
  props: {

  },
  router,
  data: function() {
        return {
           sendConfirm:"none",
           backConfirm:"none",
           notComple:"none",
           sendComple:"none",
           emoBox:"none",

           writeText:"",
           stateNum:0,
           private :false,
           emotions:[]
           
           
        }
    },
    methods:{

      emotionP(e){
        if(this.emotions.includes(e)){
          this.emotions.pop()
          console.log(this.emotions)
        }
        else{
          this.emotions.push(e)
          console.log(this.emotions)
        }
      },

      setGongae:function(){
        console.log(this.private)
        this.private = !this.private
      },

      writing:function(){
        let textArea = document.getElementById('writeText').value
        this.stateNum = textArea.length;
        //this.stateNum = this.writeText.length
        if (this.stateNum > 500) {
                textArea.substring(0, 500);
        }
      },
      sendMsg: function(){
        if(this.stateNum !=0){
          this.sendConfirm="flex"
        }
        else{
          this.notComple="flex"
        }
      },
      exitComplete:function(){
        this.popClose
        this.$router.push('/home');
      },
      popClose:function(){
            this.sendConfirm="none",
            this.backConfirm="none",
            this.notComple="none",
            this.sendComple="none"
      },
      saveComplete:function(){
        this.sendComple="flex"
        //편지 저장코드

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

        this.$root.Letters.push({
            lpk:this.$root.Letters.length,
            id: this.$root.currentInfo.id,
            category: this.$root.currentInfo.category,
            age: this.$root.currentInfo.age,
            year: this.$root.currentInfo.year,
            writeText: document.getElementById('writeText').value,
            date: yyy,
            emotions: this.emotions,
            private: this.private
            })

         //레벨링
         this.$root.currentInfo.myWrite +=1;
         this.$root.currentInfo.score +=10;
         this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)
        this.$root.save_userTable()

        //편지 저장
        this.$root.save_Letters()
        this.$root.load_Letters()


      },

      popBack:function(){
        this.backConfirm="flex"
      },

      flipCard:function(event){
        var front = event.currentTarget;
        var back = document.getElementById("card_back");

        front.style.transform = "rotateY(-180deg)";
        front.style.webkitTransform =  "rotateY(-180deg)";
        back.style.transform = "rotateY(0deg)";
        back.style.webkitTransform = "rotateY(0deg)";
        $('.card').bind(
            'transitionend oTransitionEnd webkitTransitionEnd',
            function () {
                console.log('flip');
                $('.cardFront').css('display', 'none');
            });

        $(".instruction").fadeOut('slow');

         this.emoBox="flex"
      }
    },

     mounted() {
         let vm = this;
          if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }


      this.$nextTick(() =>{
        let gongae = true
        $('.downRight').on('click', function () {
            console.log('비공개')
            if (gongae) {
                $(".emotion2").attr("src", './css/letter/checkbox_aft.png');
                gongae = false
            } else {
                $(".emotion2").attr("src", './css/letter/checkbox_bf.png');
                gongae = true
            }
        });

        let imOn = 0
        let x = $('.letterDown').offset().left
        let emotions = []
        $('.emotext').on('click', function () {
            let srcText = $(this).attr('src');
            let length = srcText.length;
            $('.emOn').css('display', 'none')
    
            //document.getElementById('writeText').focus();
           
            
            //활성화
            if (srcText.includes("0")) {
                $(this).attr('src', srcText.replace('0', ''));
                imOn++;
               
                let emotion = srcText.substring(26, length - 4);
                emotions.push(emotion)
              
                emotions.forEach((value, index) => {
                    $('#' + value).css({
                        'display': 'inline-block',
                        'left': (x + index * 30) + 'px'
                    });
                });
                

                //비활성화
            } else {
                $(this).attr('src', srcText.replace('w_', 'w0_'))
                imOn--;
                let emotion = srcText.substring(25, length - 4);
               
                emotions.splice(emotions.indexOf(emotion), 1);
              
                emotions.forEach((value, index) => {
                    $('#' + value).css({
                        'display': 'inline-block',
                        'left': (x + index * 30) + 'px'
                    });
                });

           
            }

             if (imOn) {
               
                $('.downLeft').css('visibility', 'hidden');
            } else {
               
                $('.downLeft').css('visibility', 'visible');
            }

        })
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


#LetterWrite{
    background-image: url(../../public/css/letter/letter_back.png);
    background-size: 100vw 100vh;
    background-position: top left;
    font-family: 'NanumSquare';
    width: 100vw;
    height:100vh;
}

.downLeft{
    width:50vw;
    display: flex;
    justify-content: flex-start;
}
/* top bar */
.topContainer {
    position: fixed;
    top:0;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    z-index:2;
    background-color: rgba(0,0,0,0);
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

/* letter */

.letter{
    padding-top:14.04vh;
    height: 44.33vh;
    position: relative;
    perspective: 600px;
    transition : 2s;
}

.card{
    width: 91.46vw;
    position: absolute;
    -webkit-perspective: 0;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: rotateY(0deg);
    backface-visibility: hidden;
    transition : 2s;
    -moz-transition: 2s;
    -o-transition: 2s;
    -webkit-transition: 2s;
    -ms-transition: 2s;
}

.cardImg{
    width: 91.46vw;
    height: 47.33vh;
}

.cardFront{
    -webkit-transform: rotateY(0deg);
    transform:rotateY(0deg);
}
.cardBack{
    -webkit-transform: rotateY(180deg);
    transform:rotateY(180deg);
}

.instruction{
    color: white;
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
}

.frontText{
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 5.79vh;
    position: absolute;
    top:19.63vh;
    left:25.87vw;
}

.frontText1{
    top:19.1vh;
    left:25.87vw;
}

.frontText2{
    top:30vh;
    left:25.87vw;
}

.upText{
    padding-bottom: 1.72vh;
}

/*카드 뒷면*/
.textNum{
    position: absolute;
    top:4.66vh;
    right:6.67vw;
    font-weight: 200;
    font-size: 12px;
}

#writeText{
    line-height: 4.29vh;
    position: absolute;
    background-color: rgba(0,0,0,0);
    left:6.13vw;
    top:6.29vh;
    height: 32.06vh;
    width: 79vw;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border:none;
    box-sizing: border-box;
    padding-left:3vw;
    font-family: 'NanumSquare';
    font-size: 14px;
    font-weight: 400;
}

textarea:focus {
    outline: none;
}

textarea::placeholder {
    color: #A4A4A4;
}

.letterDown{
    position: absolute;
    bottom:3.83vh;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 12px;
    width: 79vw;
    align-items: center;
}
img.emotion1{
    height: 4.19vh;
    margin-right: 4.8vw;;
}
img.emotion2{
    height: 4.19vh;
    margin-right: 1.07;
}

.downRight{
    width:20vw;
    padding-right: 3vh;
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
    width: 88.47vw;
    border-radius: 10px;
    z-index: 3;
    opacity: 1;
    height: 25.63vh;
}


.popButton{
    color:white;
    background-color: white;
    height: 8.39vh;
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

#no1, #no2{
    color: #0A74D8;
    width: 50%;
    height: 100%;
}

#yes1, #yes2{
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
    height: 7.4vh;
}
.a, .a:visited{
    color: white;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
}

.center2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 150%;
}

/* 이모티콘 박스 */


.emoticonBox{
    background-color: white;
    display: flex;
    align-items: center;
    padding:1vh 3vw 0 3vw;
    justify-content: space-between;
    width: 86.4vw;
    box-sizing: border-box;
    margin:0 6.8vw;
    margin-top:-1vh;
}

img.emotext{
    height: 8vh;
}

.emBox{ 
   /* visibility: hidden; */
    position: absolute;
    bottom:3.83vh;
    left:6vw;
    display: flex;
    align-items: center;
    
}

.emOn{
    /* position: fixed; */
    /* top: 48.3vh;  */
    margin-right: 5px;
    height: 4.2vh;
    display: none;
    /* z-index:1; */
}

#yes3{
    background-color: #0A74D8;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
}

input.trick{
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    height: 7vh;
    background-color: rgba(0,0,0,0);
    z-index: 1;
    border: none;
    outline: none;
}

</style>
