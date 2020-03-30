<template>
  <div id="Login">
    <div class="loginBox">
        <div class="input idBox Box">
            <div class="idLabel">아이디</div><input v-model="userId" class="idLabel" type="text" placeholder="이메일을 입력하세요"/>
        </div>
        <div class="input pwBox Box">
            <div class="idLabel">패스워드</div><input v-model="userPassword" type="password" class="idLabel" placeholder="비밀번호를 입력하세요"/>
        </div>
        <div class="buttonBox Box" v-on:click="confirmId">로그인</div>
        <div class="signUpBox Box">
            <span>아직 회원이 아니세요?</span>
            <router-link to="/signUp">회원가입</router-link>
        </div>
    </div>

     <div class="popContainer popContainer3 center" v-bind:style="{display:notComple}">
        <div class="popConfirmBox">
            <div class="popTitle center2" id="isSend">
                <div>일치하는 회원정보가 없습니다</div>
            </div>
            <div class="popButton center">
                <div id="yes3" class="center" v-on:click="popClose">네</div>
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
  name: "Login",
  props: {

  },
  router,
  data: function() {
        return {
            notComple:"none",

            userTable: this.$root.userTable,
            userId:"",
            userPassword:""
        }
    },
    methods:{
        confirmId: function(){
            var vm = this
            var ok = false
            console.log(this.userId)
            this.userTable.forEach(function(element){
                console.log(vm.userId)
                if(element.id == vm.userId){
                    if(element.password == vm.userPassword){
                        console.log('성공');
                        ok = true;
                        //로그인 한 사람 담기
                        vm.$root.currentId = element.id.split('@')[0]
                        vm.$root.currentInfo = element
                        vm.$root.currentPk = vm.$root.userBook.filter(function (person) { return person.id == element.id})[0].pk

                        vm.$root.currentBook = vm.$root.userBook.filter(function (person) { return person.id == element.id})[0].list
                        vm.$root.currentBook2 = vm.$root.EditorBook.filter(function (person) { return person.id == element.id})[0].list

                        vm.$root.qCategory = element.category
                        vm.$root.qAge = element.age
                        vm.$root.qYear = element.year
                        //sql push
                        //
                        //
                        vm.$router.push({name: 'Home', params: { id: vm.userId }})
                    }
                }
            });
            if(!ok){
                this.notComple ="flex"
            }
        },
        popClose: function(){
            this.notComple ="none" 
        },

    },
    mounted(){
        // setInterval(function () {
        // let viewheight = window.innerHeight;
        // let viewwidth = window.innerWidth;
        // let viewport = document.querySelector("meta[name=viewport]");
        // viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth +
        // "px, initial-scale=1.0");
        // }, 100);
        //스크롤 막기
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


 /* 글씨체 */
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.nanumsquare {
    font-family: 'NanumSquare', sans-serif !important;
}

#Login {
    font-family: 'NanumSquare';
    background-image: url(../../public/css/login_img/log_in.png);
    height: 100vh;
    width: 100vw;
    background-size: cover; 
    background-position: 70% 40%;
    background-color: #1069BC
}

.Box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginBox {
    /*height: 100vh;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 54.93vh;
}

.input {
    font-family: 'NanumSquare';
    box-sizing: border-box;
    width: 80.8vw;
    height: 4.94vh;
    border-bottom: solid 1px white;
    color: white;
    font-family: 'NanumSquare';
    display: flex;
    justify-content: flex-start;
    position: relative;
}

.idLabel {
    position: absolute;
    left: 0;
    top: 0;
    /*margin-bottom: 2vh*/
}

/* input 기본 스타일 초기화 */
input {
    padding-bottom: 1.35vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    width: 50vw;
    margin-left: 20.8vw;
    color: white;
    font-family: 'NanumSquare';
    border-style: none;
    font-size: 16px;
}

input:focus {
    outline: none;
}

input::placeholder {
    color:rgba(255,255,255,0.6);
  }

/* 아이디 창*/
.idBox {
    margin-bottom: 3.08vh;
    display: flex;
    align-items: center;
}

/* 패스워드 창*/
.pwBox {
    margin-bottom: 5.19vh;
}

input[type=password]{
    font-family:'Arial'
}


/* 로그인 버튼 */
.buttonBox {
    background-color: white;
    color: #0A74D8;
    font-size: 18px;
    font-family: 'NanumSquare';
    font-weight: 700;
    height: 7.28vh;
    width: 80.8vw;
    border-radius: 30px;
}

/* 회원가입 */
.signUpBox {
    color: white;
    font-family: 'NanumSquare';
}

span {
    margin-right: 2.67vw;
}

a {
    display: inline-block;
    color: white;
    font-family: 'NanumSquare';
    font-style: none;
    padding: 3.59vh 0;
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


#yes3{
    background-color: #0A74D8;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    box-sizing: border-box;
}

.center2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 150%;
}


</style>
