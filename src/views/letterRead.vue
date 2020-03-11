<template>
  <div id="LetterRead">
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/white_back.png" v-on:click="$router.go(-1)" alt="" class="back_arrow"></div>
        <div class="title center">편지 읽기</div>
        <img class='hamburger topRight' src="css/hamburger_icon.png" v-on:click="hamAct">
    </div>

    <!-- 안내 -->
    <!-- 필터 -->
    <div class="outerBox center">
        <div class="filterContainer center">
            <div class="infoText center">바다에 떠 있는 편지를 확인해 보세요</div>
            <div class="filterBox">
                <div class="filter center filter2" v-on:click="popCate">{{$root.qCategory}}</div>
                <div class="filter center filter3" v-on:click="popAge">{{$root.qAge}}</div>
                <div class="filter center filter4" v-on:click="popYear">{{$root.qYear}}</div>
            </div>
        </div>
    </div>

    <!-- 이미지 -->
    <img class="sea wave" src="css/bottle/wave6.png" alt=""  style="z-index:1;height:50.33vh;">
    <img class="sea wave" src="css/bottle/wave5.png" alt="" style="z-index:2;height:47.13vh;">
    <transition>
      <img id ="b1" class="sea bottle 1 " src="css/bottle/bottle1.png" alt="" 
          style="z-index:3;top:49.57vh;left:54.4vw" >
    </transition>
    <img class="sea wave" src="css/bottle/wave4.png" alt=""  style="z-index:4;height:43.12vh;">
    <img id ="b2" class="sea bottle 2 " src="css/bottle/bottle2.png" alt="" 
        style="z-index:5;top:58.28vh;left:13.6vw">
    <img class="sea wave" src="css/bottle/wave3.png" alt=""  style="z-index:6;height:32.28vh;">
    <img class="sea wave" src="css/bottle/wave2.png" alt=""  style="z-index:7;height:26vh;">
    <img id ="b3" class="sea bottle 3 " src="css/bottle/bottle3.png" alt="" 
        style="z-index:8;top:71.45vh;left:53.6vw">
    <img class="sea wave" src="css/bottle/wave1.png" alt=""  style="z-index:9;height:17.67vh;">

    <!-- 가짜보틀 -->
    <div id = "1" class="1 fakebottle" style="top:46.87vh;left:54.4vw" v-on:click="pong('b1')" ></div>
    <div id = "2" class="2 fakebottle" style="top:58.28vh;left:13.6vw" v-on:click="pong('b2')"></div>
    <div id = "3" class="3 fakebottle" style="top:69.45vh;left:53.6vw" v-on:click="pong('b3')"></div>

    <!-- 반짝이 -->
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:51.48vh;left:50.13vw;height:1.48vh;">
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:64.9vh;left:75.2vw;height:1.11vh;">
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:63.55vh;left:12.53vw;height:1.48vh;">
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:75.12vh;left:40.53vw;height:1.11vh;">
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:75.98vh;left:37.6vw;height:0.74vh;">
    <img class="sea twinkle" src="css/bottle/light1.png" alt=""
        style="top:79.56vh;left:87.2vw;height:0.74vh;">


    <!-- 팝업 -->
    <div class="popContainer popContainer2 center" v-bind:style="{display:cateChoose}">
        <div class="popChoiceBox">
            <div class="popTitle center" id="inst">직종을 선택해 주세요</div>
            <div class="popContent">
                <div class="contentLine contentLine1" v-on:click="setCate('경영 사무')">
                    <div class="circle circle1"></div>
                    <div class="content">경영 사무</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('연구개발 설계')">
                    <div class="circle circle1"></div>
                    <div class="content">연구개발 설계</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('마케팅 광고 홍보')">
                    <div class="circle circle1"></div>
                    <div class="content">마케팅 광고 홍보</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('생산 제조')">
                    <div class="circle circle1"></div>
                    <div class="content">생산 제조</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('IT 인터넷')">
                    <div class="circle circle1"></div>
                    <div class="content">IT 인터넷</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('교육')">
                    <div class="circle circle1"></div>
                    <div class="content">교육</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('디자인')">
                    <div class="circle circle1"></div>
                    <div class="content">디자인</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('건설')">
                    <div class="circle circle1"></div>
                    <div class="content">건설</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('무역 유통')">
                    <div class="circle circle1"></div>
                    <div class="content">무역 유통</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('의료')">
                    <div class="circle circle1"></div>
                    <div class="content">의료</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('영업 고객상담')">
                    <div class="circle circle1"></div>
                    <div class="content">영업 고객상담</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('서비스')">
                    <div class="circle circle1"></div>
                    <div class="content">서비스</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('전문 특수직')">
                    <div class="circle circle1"></div>
                    <div class="content">전문 특수직</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('미디어')">
                    <div class="circle circle1"></div>
                    <div class="content">미디어</div>
                </div>
                <div class="contentLine contentLine1" v-on:click="setCate('기타')">
                    <div class="circle circle1"></div>
                    <div class="content">기타</div>
                </div>
            </div>
            <div class="popButton center" id="yes2" v-on:click="popClose">확인</div>
        </div>
    </div>

    <div class="popContainer popContainer3 center" v-bind:style="{display:ageChoose}">
        <div class="popChoiceBox">
            <div class="popTitle center" id="inst">나이를 선택해 주세요</div>
            <div class="popContent">
                <div class="contentLine contentLine2" v-on:click="setAge('20-24세')">
                    <div class="circle circle2"></div>
                    <div class="content">20-24세</div>
                </div>
                <div class="contentLine contentLine2" v-on:click="setAge('25-29세')">
                    <div class="circle circle2"></div>
                    <div class="content">25-29세</div>
                </div>
                <div class="contentLine contentLine2" v-on:click="setAge('30-34세')">
                    <div class="circle circle2"></div>
                    <div class="content">30-34세</div>
                </div>
                <div class="contentLine contentLine2" v-on:click="setAge('35-39세')">
                    <div class="circle circle2"></div>
                    <div class="content">35-39세</div>
                </div>
                <div class="contentLine contentLine2" v-on:click="setAge('40세 이상')">
                    <div class="circle circle2"></div>
                    <div class="content">40세 이상</div>
                </div>
                <div class="contentLine contentLine2" v-on:click="setAge('50세 이상')">
                    <div class="circle circle2"></div>
                    <div class="content">50세 이상</div>
                </div>

            </div>
            <div class="popButton center" id="yes3" v-on:click="popClose">확인</div>
        </div>
    </div>

    <div class="popContainer popContainer4 center" v-bind:style="{display:yearChoose}">
        <div class="popChoiceBox">
            <div class="popTitle center" id="inst">연차를 선택해 주세요</div>
            <div class="popContent">
                <div class="contentLine contentLine3" v-on:click="setYear('1년 이하')">
                    <div class="circle circle3"></div>
                    <div class="content">1년 이하</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('1-2년')">
                    <div class="circle circle3"></div>
                    <div class="content">1-2년</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('2-3년')">
                    <div class="circle circle3"></div>
                    <div class="content">2-3년</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('3-5년')">
                    <div class="circle circle3"></div>
                    <div class="content">3-5년</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('5-7년')">
                    <div class="circle circle3"></div>
                    <div class="content">5-7년</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('7-10년')">
                    <div class="circle circle3"></div>
                    <div class="content">7-10년</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setYear('10년 이상')">
                    <div class="circle circle3"></div>
                    <div class="content">10년 이상</div>
                </div>

            </div>
            <div class="popButton center" id="yes4" v-on:click="popClose">확인</div>
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
                <div class="selectMenu Menu2" v-on:click="hamClose">편지 읽기</div>
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

<div class="imgBox" v-bind:style="{display:notLetter}">
    <img src="css/letter/notarrive.png" alt="" class="textImg">
</div>


  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script src="https://unpkg.com/v-animate-css/dist/v-animate-css.js"></script>
<script>
import router from "../router";


export default {
  name: "LetterRead",
  props: {

  },
  router,
  data: function() {
      let vm = this;
      return {
           cateChoose:"none",
            ageChoose:"none",
            yearChoose:"none",
            hamOn:"none",
            notLetter:"none",
            //qCategory:this.$root.qCategory,
            //qAge:this.$root.qAge,
            //qYear:this.$root.qYear,

            readlist:[],
            samecategory:[],
            avList:[],
            readPk:0
        
            //bfLetter:
        }
    },
    methods:{

      pong:function(cla){
        //여기 안먹음
        let pongTarget = document.getElementById(cla)
        let vm = this;
        console.log(pongTarget)
        pongTarget.style.animation = "pong 2s ease-in-out"
        pongTarget.addEventListener('animationend', function() {
            console.log('gg')
            let temp = vm.avList.pop();
            console.log(temp.lpk)
            //읽은 것으로 처리
            vm.$root.lpkRead[vm.readPk].list.push(temp.lpk);

            vm.$router.push({name: 'LetterReply', params: { LetterId : temp.lpk}})
        }, false)
        
      },

      popClose:function(){
            this.cateChoose="none",
            this.ageChoose="none",
            this.yearChoose="none"
      },
      popCate:function(){
          this.cateChoose="flex"
      },
      popAge:function(){
          this.ageChoose="flex"
      },
      popYear:function(){
          this.yearChoose="flex"
      },

       setCate:function(c){
        this.$root.qCategory = c;

        // 병 받아오기
        let vm = this;

        this.readPk = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].pk
        this.readlist = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].list
        console.log(this.readlist)
        this.samecategory = this.$root.Letters.filter(function (letter) { return letter.id != vm.$root.currentInfo.id && letter.category == vm.$root.qCategory && vm.$root.qAge == letter.age && vm.$root.qYear == letter.year});
        console.log(this.samecategory)
        this.avList = this.samecategory.filter(function (bfl) { return !vm.readlist.includes(bfl.lpk) })
        console.log(this.avList)

        this.bottleSet()

      },
      setAge:function(a){
          this.$root.qAge = a;

        // 병 받아오기
        let vm = this;

        this.readPk = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].pk
        this.readlist = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].list
        console.log(this.readlist)
        this.samecategory = this.$root.Letters.filter(function (letter) { return letter.id != vm.$root.currentInfo.id && letter.category == vm.$root.qCategory && vm.$root.qAge == letter.age && vm.$root.qYear == letter.year});
        console.log(this.samecategory)
        this.avList = this.samecategory.filter(function (bfl) { return !vm.readlist.includes(bfl.lpk) })
        console.log(this.avList)

        this.bottleSet()


      },
      setYear:function(y){
          this.$root.qYear = y;

        // 병 받아오기
        let vm = this;
        

        this.readPk = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].pk
        this.readlist = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].list
        console.log(this.readlist)
        this.samecategory = this.$root.Letters.filter(function (letter) { return letter.id != vm.$root.currentInfo.id && letter.category == vm.$root.qCategory && vm.$root.qAge == letter.age && vm.$root.qYear == letter.year});
        console.log(this.samecategory)
        this.avList = this.samecategory.filter(function (bfl) { return !vm.readlist.includes(bfl.lpk) })
        console.log(this.avList)

        this.bottleSet()
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

        //병셋팅
        bottleSet: function(){
            let vm = this;
            //병 셋팅
          if(Object.keys(vm.avList).length === 0){
              vm.notLetter = "flex";

              document.getElementById("b1").style.display = "none";
              document.getElementById("b2").style.display = "none";
              document.getElementById("b3").style.display = "none";

              document.getElementById("1").style.display = "none";
              document.getElementById("2").style.display = "none";
              document.getElementById("3").style.display = "none";
              
          }
          else if(Object.keys(vm.avList).length === 1){

              vm.notLetter = "none";

              document.getElementById("b1").style.display = "flex";
              document.getElementById("b2").style.display = "none";
              document.getElementById("b3").style.display = "none";

              document.getElementById("1").style.display = "flex";
              document.getElementById("2").style.display = "none";
              document.getElementById("3").style.display = "none";

          }
          else if(Object.keys(vm.avList).length === 2){

              vm.notLetter = "none";

              document.getElementById("b1").style.display = "flex";
              document.getElementById("b2").style.display = "flex";
              document.getElementById("b3").style.display = "none";

              document.getElementById("1").style.display = "flex";
              document.getElementById("2").style.display = "flex";
              document.getElementById("3").style.display = "none";

          }
          else{

              vm.notLetter = "none";

              document.getElementById("b1").style.display = "flex";
              document.getElementById("b2").style.display = "flex";
              document.getElementById("b3").style.display = "flex";

              document.getElementById("1").style.display = "flex";
              document.getElementById("2").style.display = "flex";
              document.getElementById("3").style.display = "flex";

          }
        }


    },
    mounted() {
        
        //편지 로드
        this.$root.load_Letters()

        let vm = this;

         if(vm.$root.currentId == ""){
            console.log('go home');
            this.$router.push('/login')
        }

        // 병 받아오기
        this.readPk = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].pk
        this.readlist = this.$root.lpkRead.filter(function (person) { return person.id == vm.$root.currentInfo.id})[0].list
        console.log(this.readlist)
        this.samecategory = this.$root.Letters.filter(function (letter) { return letter.id != vm.$root.currentInfo.id && letter.category == vm.$root.qCategory && vm.$root.qAge == letter.age && vm.$root.qYear == letter.year});
        console.log(this.samecategory)
        this.avList = this.samecategory.filter(function (bfl) { return !vm.readlist.includes(bfl.lpk) })
        console.log(this.avList)
      
      this.$nextTick(() =>{

          vm.bottleSet()

          $('.contentLine1').on('click', function () {

            let isSelected = $(this).children(':first').hasClass("selected")

            if (!isSelected) {
                $('.circle1').removeClass('selected')
                $(this).children(':first').addClass('selected')
            }
          });

            $('.contentLine2').on('click', function () {

            let isSelected = $(this).children(':first').hasClass("selected")

            if (!isSelected) {
                $('.circle2').removeClass('selected')
                $(this).children(':first').addClass('selected')
            }
            });

            $('.contentLine3').on('click', function () {

            let isSelected = $(this).children(':first').hasClass("selected")

            if (!isSelected) {
                $('.circle3').removeClass('selected')
                $(this).children(':first').addClass('selected')
            }

        });

        //여기 안먹음
         $('div.fakebottle').on('click', function () {
            let index = $(this).attr('class')[0];
            //console.log(document.querySelector('.' + index))
            $('.' + index).css('animation', 'pong 2s ease-in-out');
            $('.' + index).bind('oanimationend animationend webkitAnimationEnd', function () {
                $('.' + index).css('animation', 'swing 3.5s infinite 0.5s');
                
            });
        });

        $('.popButton').on('click', function () {
                
                    $('img.bottle').css('animation', 'pong 2s ease-in-out');
                    $('img.bottle').bind(
                        'oanimationend animationend webkitAnimationEnd',
                        function () {
                            console.log(this);
                            $(this).css('animation', 'swing 3.5s infinite 0.8s');
                        });
                });

      })
    }
};
</script>

<style>
@keyframes pong-data-v-0d2d0676{
    0%{
        transform: translateY(0);
        opacity: 1;
    }
    40%{
        transform: translateY(5vh);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes pong{
    0%{
        transform: translateY(0);
        opacity: 1;
    }
    40%{
        transform: translateY(5vh);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes swing-data-v-0d2d0676{
    
    0%, 50%{
        transform: rotate(0deg);
        }
      5%, 15%, 25%, 35%, 45% {
        transform: rotate(2deg);
      }
      10%, 20%, 30%, 40% {
        transform: rotate(-2deg);
      }
}

@keyframes swing{
    
    0%, 50%{
        transform: rotate(0deg);
        }
      5%, 15%, 25%, 35%, 45% {
        transform: rotate(2deg);
      }
      10%, 20%, 30%, 40% {
        transform: rotate(-2deg);
      }
}

</style>
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

#LetterRead{
    height: 100vh;
    background-color:#1069BC;
    font-family: 'NanumSquare';
}
/* top bar */
.topContainer {
    position: relative;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    color:white;
}

.back {
    position: absolute;
    left: 0;
}

.back_arrow {
    width: 15.47vw;
}

.title {
    color:white;
    font-weight: 700;
    font-size: 18px;
}

.complete {
    font-weight: 700;
    width: 15.47vw;
    height: 4.43vh;
    position: absolute;
    right: 0;
    font-size: 18px;
}

.hamburger {
    
    position: absolute;
    right: 0;
}

/* 필터 */

.filterContainer{
    position: absolute;
    top:19.97vh;
    flex-direction: column;
}

.infoText{
    color:white;
    padding-bottom: 3.57vh;
}

.filter{
    background-color: white;
    border-radius:32px ;
    padding:0 4vw;
    height: 3.69vh;
    margin-right: 2.4vw;
    box-shadow: 0px 2px 3px 1px rgba(129, 7, 7, 0.2);
}

.filter:nth-child(3){
    margin-right: 0;
}

.filterBox{
    display: flex;
    justify-content: center;
    align-items: center;
}

.sea{
    position:absolute;
}

img.wave{
    bottom:0;
    width: 100vw;
    left:0;
}

img.bottle{
    height: 19.82vh;
    animation: swing 3.5s infinite 0.5s;
}

img.twinkle{
 z-index: 13;
}

div.fakebottle{
    position:absolute;
    height: 19.82vh;
    z-index:15;
    width: 25vw;
}

@keyframes pong-data-v-0d2d0676{
    0%{
        transform: translateY(0);
        opacity: 1;
    }
    60%{
        transform: translateY(5vh);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes swing-data-v-0d2d0676{
    
    0%, 50%{
        transform: rotate(0deg);
        }
      5%, 15%, 25%, 35%, 45% {
        transform: rotate(2deg);
      }
      10%, 20%, 30%, 40% {
        transform: rotate(-2deg);
      }
}

@keyframes swing{
    
    0%, 50%{
        transform: rotate(0deg);
        }
      5%, 15%, 25%, 35%, 45% {
        transform: rotate(2deg);
      }
      10%, 20%, 30%, 40% {
        transform: rotate(-2deg);
      }
}

/* 팝업 */
/* 정보 입력 */
.popContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 18;
}

.popConfirmBox {
    /*확인 창*/
    /* display: none; */
    /**/
    background-color: white;
    position: relative;
    width: 91.47vw;
    border-radius: 10px;
    z-index: 3;
    opacity: 1;
    height: 24.63vh;
}

.popChoiceBox {
    width: 91.47vw;
    background-color: white;
    border-radius: 10px;
}

.popTitle {
    font-family: 'NanumSquare';
    font-weight: 400;
    border-bottom: 2px solid #F7F7F7;
    height: 8.62vh;
}

#isId {
    height: 17.24vh;
}

#inst {
    border-bottom: 2px solid #F7F7F7;
    font-weight: 700;
}

.contentLine {
    height: 5.93vh;
    border-bottom: 1px solid #F7F7F7;
    display: flex;
    align-items: center;
}

.popContent {
    height: 53.45vh;
    overflow: scroll;
}

.circle {
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #c8c8c8;
    display: inline-block;
    margin-left: 9.1vw;
}

.circle.selected {
    border: 6px solid #0A74D8;
    box-sizing: border-box;
}

.content {
    font-family: 'NanumSquare';
    display: inline-block;
    padding-left: 7.2vw;
}

.popButton {
    color: white;
    background-color: #0A74D8;
    height: 7.39vh;
    border-radius: 0 0 10px 10px;

}

.imgBox{
    display:flex;
    justify-content: center;
    margin-top: 20.62vh;
}


img.textImg{
    height:10.47vh;
}

</style>
