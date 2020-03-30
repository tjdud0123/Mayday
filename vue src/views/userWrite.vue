<template>
  <div id="UserWrite">
    
    <!-- 상단바 -->
    <div class="topContainer center">
        <div class="back"><img src="css/back.png" alt="" class="back_arrow" v-on:click="goBack($route.params)"></div>
        <div class="title center" id = "wholeTitle">업로드</div>
        <div class="complete center" v-on:click="popOn()">작성</div>
    </div>

    <!-- 사진 -->
    <div class="photo" id="photo_back">
        <img id="addCamera" src="css/activity/upload_camera.png" alt=""/>
      <input type="file" id="file_in" name="file_in" accept="image/*"  ref="file_in"  @change="previewFiles">
    </div>

    <!-- 상황선택 -->
    <div class="hashTag center">
        <div class="centerBox center" v-on:click="selectPop">
            <img src="css/letterDetail/reply_hashtag.png" alt="" class="hashImg">
            <div class="hashText center blank" id="condText">상황을 선택해주세요</div>
        </div>
    </div>

    <!-- 인풋 -->
    <div class="inputContainer">
        <input type="" class="userTitle" placeholder="제목" id="uTitle">
        <textarea name="" id="textContent" class="userContent" placeholder="내용을 입력해주세요"></textarea>
    </div>

    <!-- 팝업 -->
    <div class="popContainer popContainer3 center" v-bind:style="{display:condConfirm}">
        <div class="popConfirmBox">
            <div class="popTitle center" id="isSend">
                <div class="send center" id="notCond">사진과 상황을 입력해주세요</div>
            </div>
            <div class="popButton2 center">
                <div id="yes3" class="center" v-on:click="noClose">확인</div>
            </div>
        </div>
    </div>

    <div class="popContainer popContainer3 center" v-bind:style="{display:condConfirm2}">
        <div class="popConfirmBox">
            <div class="popTitle center" id="isSend">
                <div class="send center" id="notCond">업로드를 완료했습니다.</div>
            </div>
            <div class="popButton2 center">
                <div id="yes3" class="center" v-on:click="popComplete()">확인</div>
            </div>
        </div>
    </div>

    <div class="popContainer popContainer4 center" v-bind:style="{display:condChoose}">
        <div class="popChoiceBox">
            <div class="popTitle2 center" id="inst">상황을 선택해 주세요</div>
            <div class="popContent">
                <div class="contentLine contentLine3" v-on:click="setCond('야근으로 피곤할 때','night')">
                    <div class="circle circle3"></div>
                    <div class="content">야근으로 피곤할 때</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setCond('인간관계가 힘들 때','people')">
                    <div class="circle circle3"></div>
                    <div class="content">인간관계가 힘들 때</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setCond('낮은 성취감으로 우울할 때','low')">
                    <div class="circle circle3"></div>
                    <div class="content">낮은 성취감으로 우울할 때</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setCond('금전적 문제로 힘들 때','money')">
                    <div class="circle circle3"></div>
                    <div class="content">금전적 문제로 힘들 때</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setCond('잦은 회식으로 괴로울 때','together')">
                    <div class="circle circle3"></div>
                    <div class="content">잦은 회식으로 괴로울 때</div>
                </div>
                <div class="contentLine contentLine3" v-on:click="setCond('출퇴근으로 지칠 때','traffic')">
                    <div class="circle circle3"></div>
                    <div class="content">출퇴근으로 지칠 때</div>
                </div>

            </div>
            <div class="popButton center" id="yes4" v-on:click="chooseClose">확인</div>
        </div>
    </div>
    {{$route.params}}
  </div>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script src="https://unpkg.com/v-animate-css/dist/v-animate-css.js"></script>

<script>
import router from "../router";
import axios from 'axios';

export default {
  name: "UserWrite",
  props: {

  },
  router,
  data: function() {
        return {
           condConfirm:"none",
           condConfirm2:"none",
           condChoose:"none",
           
           //date:new Date().getFullYear().toString()+"."+(new Date().getMonth()+1).toString()+"."+new Date().getDate().toString(),

           condition:"상황을 선택해주세요",
           uTitle:"",
           textContent:"",
           url:"http://203.255.186.215/~yoosamo/upimages/",
           
           id:this.$root.currentId,
           level:this.$root.currentInfo.level

        }
    },
    methods:{
      popComplete(){

            //날짜
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


          let vm2 = this;
          if(vm2.$route.params.userContentId != undefined){
              let idx = vm2.$route.params.userContentId
              
              vm2.$root.user_contents[idx].date = yyy;
              vm2.$root.user_contents[idx].condition = vm2.condition;
              vm2.$root.user_contents[idx].uTitle = vm2.uTitle;
              vm2.$root.user_contents[idx].textContent = vm2.textContent;

              //유저콘텐츠 저장,로드
              this.$root.save_user_contents()
                this.$root.load_user_contents()



                this.$router.push('/myActivity')
            //   this.$root.user_contents.push({
            //     booked:false,
            //     markNum:0,
            //     date:this.date,
            //     condition:this.condition, 
            //     url:this.url,
            //     uTitle: this.uTitle, 
            //     level:this.level, 
            //     id:this.id, 
            //     textContent:this.textContent
            // })


          }
          else{
          //push
          this.$root.user_contents.push({pk:this.$root.user_contents.length, booked:false, markNum:0, date:yyy, condition:this.condition, url:this.url, uTitle: this.uTitle, level:this.level, id:this.id, textContent:this.textContent})
             //레벨링
         this.$root.currentInfo.myAct +=1;
         this.$root.currentInfo.score +=20;
         this.$root.currentInfo.level = this.$root.level_func(this.$root.currentInfo.score)

        this.$root.save_userTable()
        //유저콘텐츠 저장,로드
             // this.$root.save_user_contents()
             //   this.$root.load_user_contents()

        /*
                Initialize the form data
            */
            let formData = new FormData();


            //let yyy = date.getFullYear().toString()+"."+(date.getMonth()+1).toString()+"."+date.getDate().toString();

            /*
                Add the form data we need to submit
            */
           console.log(this.$refs.file_in.files[0]);
           console.log(yyy);
            formData.append('file', this.$refs.file_in.files[0]);
            formData.append('booked', false);
            formData.append('markNum', 0);
            formData.append('date', yyy);
            
            formData.append('uTitle', this.uTitle);
            formData.append('textContent', this.textContent);
            
            formData.append('id', this.id);
            formData.append('level', this.level);
            formData.append('url', this.url);



        /*
          Make the request to the POST /single-file URL203.255.186.215:9003
        */
            axios.post( 'http://203.255.186.215:9003/uploadinput',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });

        this.$router.push('/myActivity')

        }
      },

        popOn(){
            let vm = this;
            if(vm.$route.params.userContentId != undefined){
                this.condConfirm2 = "flex"
                this.uTitle = document.getElementById('uTitle').value
                this.textContent = document.getElementById('textContent').value
            }
            else{
                let isCond = document.getElementById("condText").innerText
                console.log(isCond)

                if(isCond != "상황을 선택해주세요" && this.url !="http://203.255.186.215/~yoosamo/upimages/" ){
                    this.condConfirm2 = "flex"

                    this.uTitle = document.getElementById('uTitle').value
                    this.textContent = document.getElementById('textContent').value
                }
                else{
                    this.condConfirm = "flex"
                }
            }
        },
        noClose: function(){
          this.condConfirm ="none"
        },
        selectPop: function(){
          this.condChoose ="flex"
        },
        chooseClose:function(){
          this.condChoose ="none"
        },
        setCond:function(condTxt, cond){
            console.log(condTxt, cond)
            document.getElementById("condText").style.color = "#0a74d8"
            document.getElementById("condText").innerText = condTxt
            //셋팅
            this.condition = cond
        },
         goBack: function(params){
            console.log(params)
            if(params.userContentId != undefined){
                this.$router.go(-2)
            }
            else{
                this.$router.go(-1)
            }
        },
    
      previewFiles(){

          this.files = this.$refs.file_in.files
          var file =  this.files;

           let vm = this;
                      
          if(!/\.(gif|jpg|jpeg|png)$/i.test(file[0].name)){
                alert('gif, jpg, png 파일만 선택해 주세요.\n\n현재 파일 : ' + file[0].name);

                f.outerHTML = f.outerHTML;
              }
            else {
            
                document.getElementById('addCamera').style.display="none"

              var reader = new FileReader();
              reader.onload = function(rst){  // 파일읽기 완료
            document.getElementById('photo_back').style.backgroundImage= "url("+rst.target.result+" )";
             console.log(file[0].name, vm.url)
             vm.url += file[0].name
          }
             reader.readAsDataURL(file[0]);

      }
      }


  
    },

     mounted() {
         let vm = this;
         if(vm.$root.currentId == ""){
            console.log('go home');
            vm.$router.push('/login')
        }

        this.$nextTick(() =>{
          
          function getCondText(cond){
          switch(cond){
            case 'people': return '인간관계가 힘들 때'; break;
            case 'traffic': return '출퇴근으로 지칠 때'; break;
            case 'money': return '금전적 문제로 힘들 때'; break;
            case 'together': return '잦은 회식으로 힘들 때'; break;
            case 'night': return '야근으로 피곤할 때'; break;
            case 'low': return '낮은 성취감으로 우울할 때'; break;
          }
        }
          
          let i = vm.$route.params.userContentId
          console.log('sss', vm.$route.params.userContentId == undefined)
          if(vm.$route.params.userContentId != undefined){
            
            //불러오기
            document.getElementById('wholeTitle').innerText = "수정"
            document.getElementById('file_in').style.display="none";
            document.getElementById('addCamera').style.display="none"
            document.getElementById('photo_back').style.backgroundImage= "url("+ vm.$root.user_contents[i].url+" )";
            document.getElementById('addCamera').style.display="none"
            document.getElementById("condText").style.color = "#0a74d8"

            document.getElementById("condText").innerText = getCondText(vm.$root.user_contents[i].condition);
            document.getElementById('uTitle').value = vm.$root.user_contents[i].uTitle;
            document.getElementById('textContent').value = vm.$root.user_contents[i].textContent;

            vm.condition = vm.$root.user_contents[i].condition;
            vm.uTitle = vm.$root.user_contents[i].uTitle;
            vm.textContent = vm.$root.user_contents[i].textContent
        }


          $('html, body').animate({
            scrollTop: 0
        }, 500, 'swing');

         $('.contentLine3').on('click', function () {

                let isSelected = $(this).children(':first').hasClass("selected")
                if (!isSelected) {

                    $('.circle3').removeClass('selected')
                    $(this).children(':first').addClass('selected')
                   
                }

      })



    })
     }

};
</script>


<style scoped>
 
/* 글씨체 */
#addCamera{
    width: 150px;
    position:absolute;
}

#file_in{
  width:100vw;
  height: 100vw;
  opacity: 0;
}

@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.nanumsquare {
    font-family: 'NanumSquare', sans-serif !important;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

body{

    font-family: 'NanumSquare';
}

/* top bar */
.topContainer {
    box-sizing: border-box;
    /*padding-top: 5vh;*/
    z-index: 2;
    position: fixed;
    top:0;
    width: 100vw;
    height: 14.04vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:black;
    background-color: white;
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
}

.complete {
    font-weight: 700;
    width: 15.47vw;
    height: 4.43vh;
    position: absolute;
    right: 0;
    font-size: 18px;
    color:#0a74d8;
}

/* photo */
.photo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:14.04vh;
    width: 100vw;
    height: 100vw;
    background-color: #F0F0F0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

/* 상황선택 */
.hashImg{
    width: 91.46vw;
    position: absolute;
    top:0;
}

.centerBox{
    margin-top: 2.8vh;
    margin-bottom: 1vh;
    width: 91.46vw;
    height: 5.4vh;
    position: relative;
}

.hashText{
    padding-bottom: 1vh;
    color:black;
    font-weight: 700;
    font-size: 14px;
    z-index: 1;
}

.blank{
    color:#C4C4C4;
}

.inputContainer{
    margin: 0 5vw 2vh 5vw;
    width: 90vw;
    height: 40vh;
    background-color: #f7f7f7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding : 2vh 5vw;
    box-sizing: border-box;
}

.userTitle{
    background-color: rgba(0,0,0,0);
    border:none;
    border-bottom: 1px solid #B8b8b8;
    line-height: 200%;
    width: 80vw;
}

.userContent{
    background-color: rgba(0,0,0,0);
    width: 80vw;
    line-height: 150%;
    height: 30vh;
    border:none;
    padding:1vh 0;
    font-family:'NanumSquare';
}

.userTitle:focus{
    outline: none;
}

.userContent:focus{
    outline: none;
}

/* 팝업 */
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

#yes3{
    color:white;
    width: 50%;
    height: 100%;
    background-color:#0A74D8;
    border-radius: 0 0 10px 0;
}

/*선택팝업*/
#inst {
    border-bottom: 2px solid #F7F7F7;
    font-weight: 700;
}

.contentLine {
    height: 7vh;
    border-bottom: 1px solid #F7F7F7;
    display: flex;
    align-items: center;
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

.popButton {
    color: white;
    background-color: #0A74D8;
    height: 7.39vh;
    border-radius: 0 0 10px 10px;
} 

</style>
