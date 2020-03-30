<template>
  <div id="SignUp">
    <div class="topContainer center">
        <div class="back"><img src="css/back.png " v-on:click="$router.go(-1)" alt=""></div>
        <div class="title center">회원가입</div>
        <div class="complete center" v-on:click="complete">완료</div>
    </div>

    <div class="infoContainer center">
        <div class="infoBox1">
            <div class="infoTitle">아이디</div>
            <input class="infoInput infoInput1" v-on:keyup="idCheck" v-model="newId" placeholder="example@example.com" type="text"/>
            <div class="idAlert"> * 이메일 형식이 아닙니다</div>
        </div>
        <div class="infoBox1">
            <div class="infoTitle" >패스워드</div>
            <input class="infoInput infoInput2 passInput" v-on:keyup="passCheck" v-model="newPassword" placeholder="비밀번호를 입력해주세요" type="password"/>
        </div>
        <div class="infoBox1">
            <div class="infoTitle">패스워드 확인</div>
            <input class="infoInput infoInput3 passInput" v-on:keyup="passCheck" v-model="newPassword2" placeholder="비밀번호를 한번 더 입력해주세요" type="password"/>
            <div class="passwordAlert">* 비밀번호가 다릅니다</div>
        </div>
        <div class="infoBox2">
            <div class="infoTitle">직종</div>
            <div class="selectBox" id="category" v-on:click="popCate">{{newCategory}}<img src="css/signUp_img/drop_down.png" alt=""></div>
        </div>
        <div class="infoBox2">
            <div class="infoTitle">나이대</div>
            <div class="selectBox" id="age" v-on:click="popAge">{{newAge}}<img src="css/signUp_img/drop_down.png" alt=""></div>
        </div>
        <div class="infoBox2">
            <div class="infoTitle">연차</div>
            <div class="selectBox" id="year" v-on:click="popYear">{{newYear}}<img src="css/signUp_img/drop_down.png" alt=""></div>
        </div>
    </div>


    <!-- 팝업창 -->

    <!-- <div class="popContainer popContainer1 center" v-bind:style="{display:idConfirm}">
        <div class="popConfirmBox">
            <div class="popTitle center" id="isId">사용할 수 있는 아이디입니다.</div>
            <div class="popButton center" id="yes1">확인</div>
        </div>
    </div> -->

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

    <div class="popContainer popContainer5 center" v-bind:style="{display:comple}">
        <div class="popConfirmBox">
            <div class="popTitle center" id="isId">회원가입이 완료되었습니다.</div>
            <div class="popButton center" id="yes5" v-on:click="saveComplete">확인</div>
        </div>
    </div>

    <div class="popContainer popContainer6 center" v-bind:style="{display:notComple}">
        <div class="popConfirmBox">
            <div class="popTitle center" id="isId">모든 내용을 입력해주세요</div>
            <div class="popButton center" id="yes6" v-on:click="popClose">확인</div>
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
  name: "SignUp",
  props: {

  },
  router,
  data: function() {
        return {
            newPassword:"",
            newPassword2:"",
            newId:"",
            newCategory:"선택",
            newAge:"선택",
            newYear:"선택",

            cateChoose:"none",
            ageChoose:"none",
            yearChoose:"none",
            comple:"none",
            notComple:"none",

            okPass: false,
            okId: false,


        }
    },
    methods:{
      idCheck:function(){
          
          if (this.newId.includes(".") && this.newId.includes("@")) {
                $('.idAlert').css('color', 'green');
                $('.idAlert').text('* 사용가능한 아이디입니다');    
            } else {
                $('.idAlert').css('color', 'red');
                $('.idAlert').text('* 이메일 형식이 아닙니다');
            }
            $('.idAlert').css('visibility', 'visible')
      },
      passCheck:function(){
        
        if (this.newPassword) {
            if (this.newPassword == this.newPassword2) {
                $('.passwordAlert').css('color', 'green');
                $('.passwordAlert').text('* 비밀번호가 일치합니다');
            } else {
                $('.passwordAlert').css('color', 'red');
                $('.passwordAlert').text('* 비밀번호가 다릅니다');
            }
        $('.passwordAlert').css('visibility', 'visible')
        } else {
        $('.passwordAlert').css('visibility', 'hidden')
    }
      },
      saveComplete:function(){
          //저장
          this.$root.userTable.push({ id: this.newId, password: this.newPassword, category:this.newCategory, age:this.newAge, year:this.newYear, myWrite:0, myReply:0, myAct:0, level:"니모", score: 0 })
          this.$root.userBook.push({pk: this.$root.userBook.length, id:this.newId, list:[]})
          this.$root.EditorBook.push({pk: this.$root.EditorBook.length, id:this.newId, list:[]})
          // sql push
          this.$root.save_userTable()
          this.$root.load_userTable()

          this.$root.save_userBook()
          this.$root.load_userBook()

          this.$root.save_EditorBook()
          this.$root.load_EditorBook()
          //
          
          this.$router.push('/login')
      },

      popClose:function(){
            this.cateChoose="none",
            this.ageChoose="none",
            this.yearChoose="none",
            this.comple="none",
            this.notComple="none"
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
        this.newCategory = c;
      },
      setAge:function(a){
          this.newAge = a;
      },
      setYear:function(y){
          this.newYear = y;
      },

      complete:function(){

        if(this.newId.includes(".com") && this.newId.includes("@")){
            this.okId= true
        }
        else{
            this.okId= false
        }

        if(this.newPassword != "" && this.newPassword == this.newPassword2){
            this.okPass= true
        }
        else{
            this.okPass= false
        }

          if (this.okId && this.okPass && this.newCategory!="선택" && this.newAge!="선택" && this.newYear!="선택"){
              console.log('ok');
              this.comple="flex"
          }
          else{
              console.log('no');
              this.notComple="flex"
          }
      }

    },
    mounted() {
      this.$nextTick(() =>{
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

.complete {
    font-family: 'NanumSquare';
    font-weight: 700;
    color: #0A74D8;
    width: 15.47vw;
    height: 4.43vh;
    position: absolute;
    right: 0;
    font-size: 18px;
}

/* 정보 입력 */

.infoContainer {
    padding-top: 14.94vh;
    flex-direction: column;
}

.infoBox1 {
    position: relative;
    width: 82.93vw;
    border-bottom: 1px solid black;
    margin-bottom: 5.54vh;
}

.idAlert{
    position: absolute;
    font-size:14px;
    color:red;
    padding-top:1vh;
    visibility: hidden;
}

.passwordAlert{
    position: absolute;
    font-size:14px;
    color:red;
    padding-top:1vh;
    visibility: hidden;
}

.infoBox2 {
    width: 82.93vw;
    margin-bottom: 3.82vh;
}

.selectBox {
    height: 4.93vh;
    border-radius: 10px;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #A4A4A4;
    font-family: 'NanumSquare';
    padding-left: 2.93vw;
}

.infoTitle {
    font-family: 'NanumSquare';
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 1.6vh;
}

.infoInput {
    box-sizing: border-box;
    width: 80vw;
    height: 3.94vh;
    border-bottom: solid 1px white;
    color: black;
    font-family: 'NanumSquare';
    display: flex;
    justify-content: flex-start;
}

input {
    padding-bottom: 0.74vh;
    background-color: rgba(0, 0, 0, 0);
    color: black;
    font-family: 'Franklin Gothic Medium';
    border-style: none;
    font-size: 16px;
}

input[type=password] {
    font-family: 'Arial'
}

input:focus {
    outline: none;
}

input::placeholder {
    color: #A4A4A4;
}

/* 정보 입력 */
.popContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 2;
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

</style>
