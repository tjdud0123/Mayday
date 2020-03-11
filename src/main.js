import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

var addr = "http://203.255.186.215:9003/";

//put
 function put_userTable(userTable)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_userTable");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(userTable));
 }

 function put_userBook(userBook)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_userBook");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(userBook));
 }

 function put_EditorBook(EditorBook)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_EditorBook");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(EditorBook));
 }

 function put_Letters(Letters)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_Letters");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(Letters));
 }

 function put_Replys(Replys)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_Replys");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(Replys));
 }

 function put_editor_contents(editor_contents)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_editor_contents");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(editor_contents));
 }

 function put_editor_contents_small(editor_contents_small)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_editor_contents_small");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(editor_contents_small));
 }

 function put_user_contents(user_contents)
 {
   var http = new XMLHttpRequest();
   http.open("POST", addr + "put_user_contents");
   http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   http.send(JSON.stringify(user_contents));
 }


//get
function get_userTable() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "userTable", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_EditorBook() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "EditorBook", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_userBook() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "userBook", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_Letters() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "Letters", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_Replys() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "Replys", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_user_contents() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "user_contents", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_editor_contents() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "editor_contents", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

function get_editor_contents_small() {
  var http = new XMLHttpRequest();

  http.open("GET", addr + "editor_contents_small", false);   // false for wait
  http.send();
  return JSON.parse(http.responseText);
}

new Vue({
  data: {
    currSelected:"editor",
    curCondition:[ "people" ],
    orderStd:"최신순",
    orderStd2:"최신순",
    orderKey:"pk",
    orderKey2:"date",

    qCategory:"IT 인터넷",
    qAge:"25-29세",
    qYear:"1년이하",

    currentId:"",
    currentInfo:{ id: "tjdud0123@naver.com", level:"가오리", score:321,
    password: "1234", category:"IT 인터넷", age:"25-29세", year:"1년이하",
    myWrite:30,myReply:47, myAct:10 },
    
    currentPk:0,
    currentBook:[],
    currentBook2:["00","11","22"],

    userTable: get_userTable(),
    userBook: get_userBook(),
    EditorBook: get_EditorBook(),
    Letters: get_Letters(),
    Replys: get_Replys(),
    editor_contents: get_editor_contents(),
    editor_contents_small: get_editor_contents_small(),
    user_contents: get_user_contents(),

    

//북마크
userBook2: [
  {pk:0, id: "tjdud0123@naver.com", list: [0,2,4]},
  {pk:1, id: "sixx0312@naver.com", list: [1,3,5]},
  {pk:2, id: "cykoo9@naver.com", list: []},
  {pk:3, id: "xwcjw13@naver.com", list: [0,2,4]}
],

EditorBook2: [
  {pk:0, id: "tjdud0123@naver.com", list: ["00","11","22"]},
  {pk:1, id: "sixx0312@naver.com", list: ["21","11","22"]},
  {pk:2, id: "cykoo9@naver.com", list: ["21","11","22"]},
  {pk:3, id: "xwcjw13@naver.com", list: ["21","11","22"]}
],



// 편지 쓰기

    // 읽은 것 처리
    lpkRead: [
      {pk:0, id: "tjdud0123@naver.com", list: []},
      {pk:1, id: "sixx0312@naver.com", list: []},
      {pk:2, id: "cykoo9@naver.com", list: []},
      {pk:3, id: "xwcjw13@naver.com", list: []}
    ],

    // 편지들
    Letters2:[
      {
        lpk:0,
        id: "tjdud0123@naver.com",
        category:"IT 인터넷", age:"25-29세", year:"1년이하",
        writeText:"콘시프 언제끝날까... 요즘...디버깅 하는 꿈만 꾼다..괴롭다..",
        date:"2019.12.15",
        emotions:['sad','angry','anxiety'],
        private: false
      },
      {
        lpk:1,
        id: "cykoo9@naver.com",
        category:"경영 사무", age:"20-24세", year:"1년이하",
        writeText:"데이터 언제 모으냐 .... 아무리 내가 엑셀장인이라지만.. 힘들군..",
        date:"2019.12.11",
        emotions:['angry'],
        private: true

      },
      {
        lpk:2,
        id: "sixx0312@naver.com",
        category:"디자인", age:"20-24세", year:"1년이하",
        writeText:"디자인 하는데 손목이 나갈 것 같다... 으아아아아아악 피피티 만드는 것도 괴롭다",
        date:"2019.12.05",
        emotions:['depressed'],
        private: false

      },
      {
        lpk:3,
        id: "xwcjw13@naver.com",
        category:"기타", age:"20-24세", year:"1년이하",
        writeText:"영상 음악 고르는데 너무 힘들어요.. 요즘 몸도 안좋고 너무 힘듭니다..",
        date:"2019.12.17",
        emotions:['sad','depressed'],
        private: true
      },
      {
        lpk:4,
        id: "xwcjw13@naver.com",
        category:"IT 인터넷", age:"25-29세", year:"1년이하",
        writeText:"IT 인터넷25-29세1년이하1",
        date:"2019.12.17",
        emotions:['sad','angry'],
        private: true
      },
      {
        lpk:5,
        id: "xwcjw13@naver.com",
        category:"IT 인터넷", age:"25-29세", year:"1년이하",
        writeText:"IT 인터넷25-29세1년이하2",
        date:"2019.12.17",
        emotions:['anxiety'],
        private: true
      },
      {
        lpk:6,
        id: "xwcjw13@naver.com",
        category:"IT 인터넷", age:"25-29세", year:"1년이하",
        writeText:"IT 인터넷25-29세1년이하3",
        date:"2019.12.17",
        emotions:['sad','depressed'],
        private: true
      },
      {lpk:7, id:"one@naver.com", category:"경영 사무", age:"30-34세", year:"5-7년", writeText:"9시부터 6시까지 꼬박꼬박 5일을 매우 일하고도 모자라서 야근도 꽤 많이 하는 편인데 월급은 쥐꼬리만해서 정말 현타온다... 주변 친구들은 나보다 적게 일하고 많이 버는 애도 있는데. 물론 이 길을 택한건 나지만 우울한건 어쩔수 없구나... 나도 비싼 음식 맘껏 먹고 다니고 싶다ㅋㅋㅠ... 처음 경리 일 시작했을 때는 좋았는데 역시 돈문제가 발목을 잡는구나... 우울하네", date:"2019.12.10", emotions:['sad','depressed'], private:false},
      {lpk:8, id:"two@naver.com", category:"디자인", age:"25-29세", year:"3-5년", writeText:"왜 클라이언트들은 디자인 다 해가지고 어떠냐고 물어보면 그제서야 이건 별로고 저건 고쳐주세요 이런말 하는걸까. 중간에 피드백 달라고 하면 좋다고 하면서. 지금 같이 일하는 클라이언트때문에 속터져서 죽겠다. 게다가 고쳐달라고 하는 내용이 지금보다 훨씬 별로라고ㅠㅠ 영고 디자이너ㅠ", date:"2019.12.11", emotions:"['angry']", private:false},
      {lpk:9, id:"three@naver.com", category:"영업 고객상담", age:"25-29세", year:"1년 이하", writeText:"취직했다고 기뻐했던게 엊그제 같은데 지금은 당장이라도 퇴사하고 싶다... 학력도 이냥저냥 스펙도 이냥저냥이고 꿈도 없어서 어쩌다가 영업쪽으로 오게됐는데 나랑 너무 안맞아. 같이 들어온 동기는 영업 몇 건이나 물어오는데 나는 진짜 잘해봐야 한 두개... 상사분도 저한테는 기대없는거 티난다. 근데 나도 그러고 싶어서 그런거 아니라고.. 근데 눈치보이고... 그렇다고 이직을 생각하기에는 나이도 그렇고 다른분야에 특출나지도 않고 막막함 갑...", date:"2019.12.09", emotions:['sad', 'anxiety'], private:false},
      {lpk:10, id:"four@naver.com", category:"제조", age:"35-39세", year:"10년 이상", writeText:"제조업에 종사한지도 11년이 됐는데. 여자라고 무시하는게 아직도 많네요... 정말~ 아직도 구식 생각을 가지고 있는 사람들이 많구나... 느낍니다... 그래도 포기 안하렵니다. 이번에 신입으로 들어온 여자 직원 제가 잘 끌어줘야죠...!", date:"2019.12.13", emotions:[], private:false},
      {lpk:11, id:"five@naver.com", category:"IT 인터넷", age:"30-34세", year:"2-3년", writeText:"김대리 세상에서 제일 밉다. 내가 뭘 잘못했다고 왕따시켜. 내가 모를 줄 알아? 밥 먹을 때도 지네들끼리만 쏙 내빼고. 커피 사오면 내껏만 안사오고. 나도 입있다 나도 커피 마실 줄 알고 재밌는 이야기할 줄 알아.", date:"2019.12.13", emotions:['depressed'], private:false},
      {lpk:12, id:"six@naver.com", category:"교육", age:"40세 이상", year:"10년 이상", writeText:"최근들어서 아이들을 어떻게 교육해야할지가 정말 고민이네요. 유튜브때문인지~... 학생들이 이상한 것만 배워와서 학교 분위기를 흐리는 것 같아 스트레스 받습니다ㅜ..ㅜ... 하필 제가 또 학년 부장이예요... 학부모들 불만도 다 제가 해결해야되고~... 특히 남학생들이 문제입니다... 저하고 같은 교직생활 하시는 분들은 이런 고민들 어떻게 헤쳐나가시는지~~ 이 교사 한번만 살려주세요", date:"2019.12.15", emotions:['anxiety'], private:false},
      {lpk:13, id:"seven@naver.com", category:"마케팅 광고 홍보", age:"20-24세", year:"1-2년", writeText:"회식이 많다. 인간적으로 너어어무 많다. 금요일 저녁에 룰루랄라 친구랑 놀러갈 약속잡아놨는데 당일 점심에 오늘 저녁 회식있다고 어디 갈생각 하지말라고 하는 팀장 당신... 나한테 죽고싶어?ㅠㅠ 너만 회식 좋으면 다냐 주변에 사람들 표정 좀 봐 다 썩어간다고! 눈 안마주치는 이유가 뭐라고 생각해? 안그래도 요즘 프로젝트때문에 바빠 죽겠는데 뭐? 무슨 회식이야 진짜 하고싶으면 혼자해라 제에에발!!!!!!! 회식하는 대신 그냥 회사에 남아서 잔업하는게 낫겠다고 생각하게 만든 인간은 당신이 처음이야ㅠㅠㅠㅠㅠ", date:"2019.02.17", emotions:['angry'], private:false},
      {lpk:14, id:"eight@naver.com", category:"미디어", age:"50세 이상", year:"10년 이상", writeText:"나이가 드니까 확실히 젊은 친구들보다 머리가 안돌아갑니다. 안그래도 몇 개월마다 바뀌는. 미디어 환경에서... 50대 넘은 사람이 일하려니. 배워야 할게 한 두가지가 아니네요. . 힘듭니다 ㅎㅎ", date:"2019.12.10", emotions:['shame'], private:false},
      {lpk:15, id:"nine@naver.com", category:"전문 특수직", age:"35-39세", year:"7-10년", writeText:"대학생 졸업하고 바로 변리사가 됐으니... 이 일도 이제 9년정도 한 것 같습니다.. 누가 보면 배부른 소리라고 할 지 모르겠지만 최근들어 뭐랄까... 예전의 반짝임이 없어진 것 같아요. 변리사 시험 붙고 나서 열정적으로 일했던 나는 사라지고. 기계처럼 들어오는 일만 후딱 헤치우고 있는 나 자신을 보자니 여러 감정이 밀려옵니다. 약간 허탈함도 있고 내 자신에 대해 화나기도 하고, 한편으로는 그럴 수도 있지 하면서 위로해주고 싶기도 하고... 어렵습니다. 변리사라는 타이틀만 얻으면 더 이상 바랄게 없다고 생각했던게 엊그제 같은데 사람이란게 참 간사하네요.", date:"2019.12.16", emotions:['shame','depressed'], private:false},
      {lpk:16, id:"ten@naver.com", category:"건설", age:"30-34세", year:"5-7년", writeText:"남초직장인거 알고 들어갔지만 정말 해도해도 너무하네. 기본적인 매너도 못지키면서 어떻게 회사 들어온거야? 담배 냄새는 좀 빼고 사무실에 들어와라. 사무실 좁은거 알면서 뻔히 독한 담배 피고 들어오는건 뭔 매너야? 탕비실도 무슨 니네 자취방이냐? 정말...작작해 ^^ 우리 회사 사람들 이 어플 가입해서 내 글 보고 찔렸으면 좋겠다! 아무도 나 못말려 나 사직서 낼거야 그리고 클린하고 분위기좋은 회사로 이직할거야 내가 칼퇴하고 바로 집에 가는 이유가 이거다. 집에 가서 내 개인 포폴 미친듯이 만들고 있다고! 제발 제발 다른 회사 붙어라 제발 나 종교 없는데 하느님한테 빌고있다", date:"2019.12.11", emotions:['angry'], private:false},
      {lpk:17, id:"whastdee@naver.com", category:"경영 사무", age:"35-39세", year:"5-7년", writeText:"세무대리인 6년차 대리입니다. 이직을 오래 전부터 생각했는데 1년의 3/4는 세무신고와 야근과 함께하다보니 조금이라도 깊게 생각할 틈이 없어 업무 쳐내기에 바쁜 시간들이었네요. 당장 월급 안들어오면 생활하기 힘든 형편이라 지금까지 버티고 있긴 한데 점점 숨이 막혀요. 1년에 1월부터 7월까지는 새벽 2,3시 퇴근하고 10-12월에는 저녁 9,10시에 퇴근하고..회사 집 외에 거의 다른 생활이 없어요. 언제까지 이렇게 살아야 할까요..", date:"2019.12.6", emotions: ["angry"], private:false},
      {lpk:18, id:"woonyy@naver.com", category:"경영 사무", age:"25-29세", year:"2-3년", writeText:"바로 윗 상사한테 이유없이 미운털 박힌 채로 지낸지 어언 1년…버틸 때까지 버티자는 생각으로 지금까지 왔는데 너무 힘들어요.. 예상치 못한 순간에 지랄한다던가 다른 동료들 앞에서도 너무 자존심 상합니다. 정말 해도해도 너무하고 끝도 없네요..조건이 괜찮아서 그나마 버텼는데 제가 언제까지 버틸 수 있을까요..", date:"2019.12.7", emotions: ["sad"], private:false},
      {lpk:19,id:"yangheenam@naver.com", category:"경영 사무", age:"35-39세", year:"5-7년", writeText:"하루이틀도 아니고 주말에 연락 오는건 일상다반사. 며칠 전에 오후반차였는데 연락 온 횟수만 5번. 내년 이직생각하고 있긴 한데 갈수록 정 떨어져서 회사 못다니겠네요;;", date:"2019.12.8", emotions: ["angry"], private:false},
      {lpk:20, id:"yoonakim@naver.com",category:"경영 사무", age:"25-29세", year:"2-3년",writeText:"평일 출근후 울화통도 간신히 버티는데 주말 단합대회라니;; 되지도 않는 단합...내용없이 정말 아우아우아우! 분기마다 하자는데 미쳐버리겠다요..", date:"2019.12.9",emotions: ["angry"],private:false},
      {lpk:21,id:"yeji1219@naver.com",category:"디자인", age:"30-34세", year:"3-5년",writeText:"제 상사는 디자인 전공도 아닌데 제가 디자인 시안 낼 때마다 그렇게 아는척을 해대면서 저보고 디자인 실력을 키우라고 난리를 칩니다. 디자인도 모르는 인간이 왜 디자인 지적질을 할까요^^ 얼마전에는 시안 두개 보내랬는데 왜 하나만 보내냐고 ㅈㄹ해서 두개라고 했더니 계속 하나만 보인다는거에요. 제가 레이어 2개로 보냈는데 레이어 개념도 몰라서 왜 안보이는지도 몰랐던거에요ㅋㅋㅋㅋㅋ이런 놈한테 디자인 지적을 받으려니 정말 회의감이 드네요..하….",date:"2019.12.10",emotions: ["angry"],private:false},
      {lpk:22,id:"kug2212@naver.com",category:"마케팅 광고 홍보", age:"20-24세", year:"1년 이하",writeText:"야근도 거의 없고, 워라밸도 좋고 같이 일하는 사람들도 좋은데..제가 직접 기획하거나 광고를 직접 만드는게 아니라 알바를 시켜도 될만한 간단한 영상이나 바이럴 영상 같은걸 만들고 있어요 기획도 위에서 다 시키는대로 해야됩니다.여기서 뭘 얻어갈 수 있을지 모르겠어요..연봉도 적은 편이고요..ㅜㅜ막막합니다",date:"2019.12.11",emotions: ["depressed"],private:false},
      {lpk:23,id:"minji3324@naver.com",category:"교육", age:"25-29세", year:"1년 이하",writeText:"신입 교사인데요..애들이랑 친구처럼 지내고 나름 웃긴 스타일인데..수업만 하면 애들이 제 수업을 안듣습니다ㅠㅠ다른 교사분들은 학생들이 반에서 몇명이나 수업에 집중하나요? 제 수업방식이 이상한걸까요..",date:"2019.12.9",emotions: ["depressed"],private:false},
      {lpk:24,id:"soobinham@naver.com",category:"영업 고객상담", age:"25-29세", year:"1년 이하",writeText:"영업 인턴 7개월차 대학 졸예자입니다.. 영업직인데 회의할때마다 상사분들 앞에서 너무 떨려요.. 그렇다보니까 평소보다 말도 더듬게 되고 기죽게 돼요 영업직이면 커뮤니케이션 능력이 중요한데 자꾸 자존감이 떨어집니다. 곧 정규직 전환인데 더 걱정돼요..",date:"2019.12.9",emotions: ["depressed"],private:false},
      {lpk:25,id:"soobinham@naver.com",category:"영업 고객상담", age:"30-34세", year:"5-7년",writeText:"요즘 술마시는 시즌이라 힘드네요..올해 실적이 적어서 내년에는 더 올려야 하는데…ㅜㅜ이번에 밀크시슬 3박스 샀습니다. 이놈의 영업직..정말 때려치고 싶네요ㅜㅜ",date:"2019.12.11",emotions: ["depressed"],private:false},
      {lpk:26,id:"soobinham@naver.com",category:"건설", age:"25-29세", year:"1년 이하",writeText:"3주차 신입입니다.. 아직 할 줄 아는게 많이 없어서 팀원들에게 미안하기도 하고 여기 계속 다닐지 말지도 고민되네요..대표님이 일을 너무 많이 시키세요.. 주말에도 나와서 일하라네요. 그래봐야 월 220임….야근수당도 없어요ㅋㅋ",date:"2019.12.11",emotions: ["depressed"],private:false},
      {lpk:27, id:"wlsdkk123@naver.com", category:"마케팅 광고 홍보", age:"30-34세", year: "3-5년", writeText:"스타트업은 죄악이다. 사람 갈아서 회사 간신히 굴러가게만 하면 뭐해.. 능력 있는 사람들은 다 떠나고 입사한 지 3달 미만인 사람들만 남는다. 동기들은 다 떠나고 두 명 밖에 안 남아서 고민 털어놓기도 힘들다 ㅜㅜ", date: "2019.12.09", emotions:["angry", "sad"], private:false},
      {lpk:28, id:"hwchoi917@gmail.com", category:"서비스", age:"25-29세", year: "2-3년", writeText:"사람 대하는 일이 잘 맞아서 여기 온 건데 같이 일하는 사람들 때문에 그만두게 될 줄은 몰랐어.. 손님이 훨씬 편할 지경이라니 ㅜ 이게 말이 된다고 생각해?", date: "2019.12.12", emotions:["angry", "depressed"], private:false},
      {lpk:29, id:"jmkoo9@gmail.com", category:"미디어", age:"35-39세", year: "7-10년", writeText:"연예인들… 사고치지 않았으면 좋겠다…<br> 사고친놈들 지우려면 영상팀 전부 철야해야한다 <br> 야근수당 주면 좋겠다… <br> 수면실 있는 회사는 오는 게 아니었는데 <br> 근데 취준생이 뭔 선택지가 있어 붙여주면 오는거지 <br> 아 지금은 새벽 2시… 슬슬 잠이 깬다… <br> 내 피는 카폐인 나는 폐인 <br> 노 페인 예스 게인 플리즈 ", date: "2019.12.08", emotions:["angry"], private:false},
      {lpk:30, id:"ccnpc403@gmail.com", category:"무역 유통", age:"25-29세", year: "1년 이하", writeText:"출근한지 사주째. 사장되고싶다. <br>사장놈은 출근을 간간히한다. 미친놈.개부럽다<br>나도 건물이있었다면<br>이딴 회사 오지 않았어.<br>지금 뭐해야되는지 잘 모르겠다<br>물어보면 귀찮아한다<br>야발ㅜ<br>뽑았으면 케어좀ㅜ<br>내 헛소리를 누군가 들어줄까?<br>S<br>O<br>S", date: "2019.12.14", emotions:["depressed"], private:false},
      {lpk:31, id:"kpyrhd89@naver.com", category:"IT 인터넷", age:"30-34세", year: "3-5년", writeText:"– – · 　· 　· · · – 　· · · – 　· · · 　· – – · 　· · · · 　– – · 　– · – – 　– · – 　– · 　· – · – · – 　　　– · – 　· · · 　· – · · 　· · – 　· · – · 　– · · 　· · – · 　　　– – – 　· 　· · – · 　· – · · 　– · 　· – · – · – 　　　– · – 　· · · 　· – · · 　· · – 　· · – · 　– · · 　· · – · 　　　– – – 　· 　· · – · 　· – · · 　– · 　· – · – · – 　　　　　– – – 　· 　· · – · 　· – · · 　– · 　· · · – 　· – 　　　· · – – – 　· · · · · 　– · · · · 　· – – 　– 　· · – · 　· – · · 　· · – 　· · · – 　　　– – · · ·(살려주세요. 여기는 판교. 여기는 판교. 판교로 256번길 7.)", date: "2019.12.03", emotions:["sad", "angry", "depressed"], private:false},
      {lpk:32, id:"httyderer@naver.com", category:"경영 사무", age:"20-24세", year: "1년 이하", writeText:"안녕하세요! 다음주부터 출근하는 신입입니다ㅎㅎ너무 어렵게 들어간 회사라 벌써부터 설레네요 먼저 취업한 친구가 이 어플 추천해줘서 깔게 되었어요 직장생활 힘들다지만 답없었던 취준생활보다는 낫지 않을까 생각해봅니다ㅠ이 편지가 누군가에게 전달되면 좋겠네요! 그럼 다들 화이팅입니다ㅎㅎ", date: "2019.12.11", emotions:[], private:false},
      {lpk:33, id:"sorarrr122@naver.com", category:"서비스", age:"25-29세", year: "2-3년", writeText:"김이 서려서 자동차 창문에 그림도 그릴 수 있는 계절이 왔네요. <br>팀원들은 벌써 크리스마스에 무슨 일을 할 지 얘기중이에요. <br>장난끼 많은 저희 조카에게 무슨 선물을 줄지 행복한 고민을 하고 있습니다. <br>죽이라도 먹어야 할 것같은 오늘 저녁, 소화가 잘 안 되네요. <br>어… 이제 할 말이 없어요 모두 메리크리스마스.", date: "2019.12.15", emotions:[], private:false},
      {lpk:34, id:"jisuk97@naver.com", category:"교육", age:"40세 이상", year: "10년 이상", writeText:"안녕하세요. <br>현직 고등학교 교사입니다.  <br>젊은 선생님들이 알려주어 시작하게 되었습니다.<br>아이들을 가르친다는 건 보람도 있지만<br>그만큼의 책임과 어려움도 따르는 것 같습니다.<br>세상에 쉬운 일이 어디있겠냐만은 요즘따라 많은 생각이 드네요. <br>교사를 꿈꾸시는 분들이나 이제 막 교사가 되신 분들<br>처음 가졌던 마음을 잃지 않고 정진하셨으면 좋겠습니다.<br><br>눈이 내리는 12월의 밤, 돈암동에서…", date: "2019.12.02", emotions:[], private:false},
      {lpk:35, id:"sojungchoi@gmail.com", category:"디자인", age:"30-34세", year: "5-7년", writeText:"심플한듯! 화려하게~<br>힘을 준 듯! 안 준 듯~<br>컬러풀하면서! 모노톤느낌으로~<br>복잡하면서! 심플하게~<br>느낌알죠?<br><br>세상의 모든 디자이너 분들 오늘도 화이팅입니다", date: "2019.12.05", emotions:["angry", "depressed"], private:false},
      {lpk:36, id:"godkoo77@gmail.com", category:"연구개발 설계", age:"30-34세", year: "1-2년", writeText:"실험일지<br>  날짜 : 2020.3.21 <br> 곰팡이 포자 배양 37일째.<br>내가 곰팡이인지 곰팡이가 나인지 모르겠다. <br> 곰팡이가 나에게 말한다. <br> 너도 곰팡이지. 너도 곰팡이지. <br> 나는 대답한다. <br> 곰팡. <br> 햇빛을 보고싶다…", date: "2019.12.08", emotions:["anxiety", "depressed", "sad"], private:false}
      
    ],

    // 답장들
    Replys2:[
      {
        lpk: 0,
        
        rpk: 0,
        id:"cykoo9@naver.com",
        date: "2019.12.16",
        tag: "0-0",
        replyText:"저도..밤새고 있어요.. 저는 데이터 모으는 꿈만 꾼답니다.. 힘내세요!",
        replyLike:false
      },
      {
        lpk: 0,

        rpk: 1,
        id:"sixx0312@naver.com",
        date: "2019.12.17",
        tag: "0-1",
        replyText:"밤새고 있어요.. 저는 데이터 모으는 꿈만 꾼답니다.. 힘내세요!",
        replyLike:true
      },
      {
        lpk: 2,

        rpk: 0,
        id:"sixx0312@naver.com",
        date: "2019.12.18",
        tag: "2-0",
        replyText:"데이터 모으는 꿈만 꾼답니다.. 힘내세요!",
        replyLike:false
      },
      {
        lpk: 0,

        rpk: 2,
        id:"xwcjw13@naver.com",
        date: "2019.12.18",
        tag: "0-2",
        replyText:"데이터 모으는 꿈만 꾼답니다.. 힘내세요!",
        replyLike:false
      },

      {
        lpk: 2,
    
        rpk: 1,
        id: "tjdud0123@naver.com",
        date: "2019.12.18",
        tag: "2-1",
        replyText:"아프지 말고.. 힘내세요!",
        replyLike:true
      },
      {lpk:7, rpk:0, id:"eleven@naver.com", date:"2019.12.11", tag:"저도 비슷한 일이 있었어요", replyText:"와... 저랑 진짜 똑같으시네요.. 저는 사무는 아니고 전문직종인데도 매달 허덕이면서 삽니다... 심지어 8시부터 6시 길면 8시까지도 야근해야돼요 저희 힘냅시다ㅠㅠ", replyLike:false},
      {lpk:8, rpk:0, id:"twelve@naver.com", date:"2019.12.12", tag:"", replyText:"디자이너라는 직종이 여기 치이고 저기 치이는거 같은 느낌이 많이 듭니다... 저도 다 겪었고요... 저는 그럴때마다 영화 봅니다. 디자인 생각 안하고 싶어서요. 글쓴 분에게도 맛있는거 먹으면서 즐거운 영화 한 편 보시는건 어떨까요...?", replyLike:false},
      {lpk:9, rpk:0, id:"thirteen@naver.com", date:"2019.12.09", tag:"잘하고 있어요", replyText:"글쓴분, 인생은 깁니다. 조심스럽지만 서울시에서 지원해주는 여러 사업도 많으니 한 번 찾아보고 맞는 직종으로 조금씩 이직 준비해보는건 어떨까요? 주변에서도 30살인데 아예 새로운 분야로 이직해서 즐겁게 지내는 친구들 많습니다. 한 번 고려해보세요! 응원합니다. ", replyLike:true},
      {lpk:10, rpk:0, id:"fourteen@naver.com", date:"2019.12.14", tag:"시간이 해결해 줄 거예요", replyText:"저도 여자고, 제조업 공장장으로 지금 10년 좀 넘게 재직하고 있습니다. 이쪽 분야가 여자한테 힘드네요. 그치만 절대 포기할 생각은 없습니다. 저도 글쓴 분처럼 밑에 여자 직원 들어오면 좀 더 잘 챙겨주고 노하우도 많이 알려주려고 노력하고 있습니다. 저희 조금만 더 버텨봐요.", replyLike:true},
      {lpk:11, rpk:0, id:"fifteen", date:"2019.12.13", tag:"아프지 않은 날이 더 많을거예요", replyText:"진짜 못된 사람들이네요.... 에휴... 글쓴이 분 힘내세요... 좋은 날이 꼭 올거예요", replyLike:false},
      {lpk:12, rpk:0, id:"sixteen@naver.com", date:"2019.12.17", tag:"", replyText:"저는 지금 교사된지 2년도 안된 신입 선생인데, 요즘 선생들이 가지고 있는 고민이 다 똑같나봐요ㅠㅠ 완전한 해결책이라고 하기는 좀 부족하지만... 저는 유튜브에서 배운 막말같은거 학교에서 쓰면 벌점 매기고 있습니다ㅠㅠ", replyLike:false},
      {lpk:13, rpk:0, id:"seventeen@naver.com", date:"2019.12.18", tag:"저도 비슷한 일이 있었어요", replyText:"여기 수정버튼 어디있나요... 저랑 진짜 상황 똑같네요 암울하다 암울해... 부장이라는 사람들은 죄다 당일에 회식 통보하고, 저는 심지어 술을 잘 마시는 편도 아닙니다. 숙취가 너무 심해서 술 안마시려고 하는데 회식가서 매번 빼기도 정말 곤란하네요...", replyLike:true},
      {lpk:14, rpk:0, id:"eighteen@naver.com", date:"2019.12.12", tag:"당신의 하루가 별보다 빛나길", replyText:"저는 아직 30대이지만... 존경스럽습니다. 미디어쪽이 선생님 말씀하신대로 정말 빠르게 바뀌는데, 과거에 안주해계시지 않고 계속해서 시대 흐름에 맞춰가려고 하는 모습 멋있습니다! 자책하지 마세요. 지금 페이스 그대로 천천히 가도 분명 아랫사람들에게는 좋은 본보기가 될거같습니다 ㅎㅎ", replyLike:true},
      {lpk:15, rpk:0, id:"nineteen@naver.com", date:"2019.12.16", tag:"내 감정에 솔직해지세요", replyText:"사람이니까, 당연히 그런 생각이 들 수 있다고 생각합니다. 저도 20년 동안 교사 생활하다가 요 몇년 전 제가 하고 싶은 일 찾아서 귀농했습니다. 글쓴이분께서 많이 힘드시다면... 새로운 길을 찾아보시는 것도 추천드립니다. 인생은 한 번이니 해보고 싶은거 다 해보면서 살아야죠.", replyLike:false},
      {lpk:16, rpk:0, id:"twenty@naver.com", date:"2019.12.11", tag:"", replyText:"남초 직장들은 다 그런가요? 저도 여자인데 정말 냄새때문에... 죽겠습니다. 심지어 야근 많은 회사라 그런지 꿉꿉한 냄새까지 더해져서 미치겠네요... 원래 디퓨저같은거 사는 편 아닌데 최근에 하나 구매했습니다 ^^... 여하튼 꼭 이직 성공하시길 바래요. 같은 여자로서 응원합니다~!", replyLike:true},
      {lpk:17,rpk:0,id:"0rankoo9@naver.com",date:"2019.12.7",tag:"지루한 일상에 지치지 말아요",replyText:"새벽 퇴근은 너무하네요..하반기인데도 그 시간까지 야근을 하다니ㅜㅜ담당업체가 많은건가요? 이 직종의 장점이 그나마 상반기에 비해 하반기가 여유롭다는 것인데…진지하게 이직 생각해보셨으면 좋겠네요. 힘내세요..",replyLike:true},
      {lpk:18,rpk:0,id:"soowon@naver.com",date:"2019.12.7",tag:"저도 비슷한 일이 있었어요",replyText:"저도 비슷한 상황을 겪어봤었어요. 너무 힘들고 돈줘도 다니기 싫더라구요. 사실 슬프게도 그런 사람들은 밥 잘 먹고, 잘 자고, 잘 웃고 글쓴 분 별로 신경 안쓸거에요. 그러니 보란듯이 잘 지내셨음 좋겠네요. 그만 둘 상황 되면 퇴사하면 그만이겠지만..그게 아니라면 최대한 일적으로 안부딪히게 일하시고요. 이유가 있어서 미운털이 박히기도 하지만, 나를 그냥 싫어하는 사람도 있더라구요. 절대 자책하지마세요. 힘내세요..!!",replyLike:true},
      {lpk:19,rpk:0,id:"iniworld@naver.com",date:"2019.12.9",tag:"저도 비슷한 일이 있었어요",replyText:"이직각이네요..근무시간 외에 연락하는거 극혐…저는 그냥 안읽씹합니다 ㅋㅋ",replyLike:true},
      {lpk:20,rpk:0,id:"jinvely@naver.com",date:"2019.12.9",tag:"저도 비슷한 일이 있었어요",replyText:"대체 누구를 위한 단합인가….",replyLike:false},
      {lpk:21,rpk:0,id:"fwhangjh@naver.com",date:"2019.12.10",tag:"저도 비슷한 일이 있었어요",replyText:"원래 모르는 것들이 말이 많습니다..그냥 그러려니 하세요..^^",replyLike:false},
      {lpk:22,rpk:0,id:"yoonjiham@naver.com",date:"2019.12.11",tag:"잘하고 있어요",replyText:"아직 한달밖에 안된거면..좀 서두르는 감이 있는거같은데요? 회사에서도 글쓴 분을 파악할 시간이 필요하지 않을까요! 기초를 탄탄히 해두면 언젠간 능력치에 맞는 업무를 할당해주실겁니다!! 화이팅!",replyLike:false},
      {lpk:23,rpk:0,id:"jinakwon@naver.com",date:"2019.12.10",tag:"완벽하지 않아도 괜찮아요",replyText:"활동중심으로 하면 참여 잘 하더라구요. 저도 강의만 하면 애들이 죽을라해요ㅋㅋ 그리고 애들이랑 친구처럼 지내지 않는걸 추천합니다..",replyLike:false},
      {lpk:24,rpk:0,id:"yujinpark44@naver.com",date:"2019.12.10",tag:"완벽하지 않아도 괜찮아요",replyText:"기죽지말고 열심히 하세요. 처음부터 잘하는 사람 없어요. 조금씩 발전하는 모습 보여주면 좋을 것 같습니다. 잘하려고 하는거보다 노력하고 배우려고 노력하세요!",replyLike:true},
      {lpk:25,rpk:0,id:"gain0424@naver.com",date:"2019.12.11",tag:"저도 비슷한 일이 있었어요",replyText:"술도 술이지만 저도 실적 땜에 너무 스트레스입니다. 스트레스로 심신이 파괴되고 있어요…..영업에 컴플레인 대응에 스케줄 조정에….영업도 아무나 하는게 아니라 적성에 잘 맞아야 하는 것 같아요….ㅜㅜ",replyLike:true},
      {lpk:26,rpk:0,id:"gain0424@naver.com",date:"2019.12.11",tag:"시간이 해결해 줄 거예요",replyText:"저랑 비슷하시네요..저도 건축이 좋아서 무턱대고 시작하긴 했지만 맨날 아침 8시 출근이고 8시 퇴근입니다 너무 힘들어요..그래도 나름 배우는게 많아서 좋습니다. 그거 하나보고 버티고 있어요. 글쓴 분도 좋아서 시작한 일이니, 참고 견디면 언젠간 빛보는 날이 올겁니다. 화이팅!",replyLike:true},
      {lpk:27, rpk: 0,id: "gainchoi97@naver.com", date: "2019.12.10", tag: "저도 비슷한 일이 있었어요", replyText: "대기업에 종사 중인 1인입니다. 같은 고민을 하고 있는 것 같아 공감되어 답장 남깁니다. 큰 프로세스의 일부가 되어 태엽처럼 돌아가는 제 삶이 불만족스러워 스타트업은 더 낫지 않을까 생각했는데 어디나 회사는 똑같은가봅니다. 동기들이 있어도 소문이 무서워서 회사 사람들하고는 얘기를 잘 안 하게 되구요. 그래도 이런 통로가 있어서 서로에게 위로가 될 수 있다는 게 참 좋은 것 같습니다. 이만 답장 줄이겠습니다. 행복한 하루 되시길.", replyLike:true},
      {lpk:28, rpk: 0,id: "hykkim88@gmail.com", date: "2019.12.12", tag: "잘하고 있어요", replyText: "으악ㅜㅜㅜ 내가 쓴 줄 알았어! 나도 같은 직종 근무중이고 연차도 비슷해서 너무 공감된다ㅠㅠㅠㅠ 같이 일하는 사람때문에 출근하는게 진짜 지옥같아… 하루종일 말 한 마디도 안 하고 싶은 심정이야.. 내가 외향적이고 사교적이라고 생각했는데 일해보니까 그것도 아닌 것 같고ㅠㅠㅠㅠ 그래도 존버하면 좀 달라지지 않을까 생각하고 있어ㅜㅜ 너도 화이팅하길 바랄게!!", replyLike:true},
      {lpk:29, rpk: 0,id: "yujinpark@naver.com", date: "2019.12.09", tag: "저도 비슷한 일이 있었어요", replyText: "안녕하세요…! 저는 이제 막 방송국 영상편집팀 들어온 신입입니다 이 편지를 보고 남일같지 않아서 답장 남겨요ㅜㅜㅜ 어릴때부터 좋아하는 드라마나 예능 프로그램을 기다리는 낙으로 일주일을 버텼어서 그런 경험을 사람들한테 제공하는 직업을 가지고 싶었는데… 일주일에 한 번 한시간짜리 영상이 나온다는게 얼마나 사람을 갈아서 만드는 건지 알게 되었어요 그렇게 열심히 편집한 영상을 범죄자들 때문에 다시 편집하려면 얼마나 힘드실까요ㅜㅜㅜ 나쁜놈들! 정말 다 감옥가야해요! 커피 너무 많이 드시지 마시구 화이팅이에요ㅜㅜ", replyLike:true},
      {lpk:30, rpk: 0,id: "tigerjelly@gmail.com", date: "2019.12.14", tag: "당신의 하루가 별보다 빛나길", replyText: "사장되고 싶어서 회사차린 스타트업 CEO입니다 꼰대같이 들릴 수 있겠지만 사장이라는게 마냥 좋은 게 아닙니다... 직원일때는 내일만 대충하고 퇴근해도 따박따박 월급 나왔지만 사장은 회사가 정말 자기 일이기 때문에 의식을 가지고 열심히 합니다… 출근 간간히 하신다는 글쓴분 회사 사장님도 분명 이런저런 일로 바쁘실겁니다. 너무 기분나쁘게 듣지 않았으면 좋겠네요. 가끔 사장님께 수고하신다고 응원의 한마디라도 해주세요", replyLike:true},
      {lpk:31, rpk: 0,id: "nekoskii@gmail.com", date: "2019.12.03", tag: "", replyText: "ㅋㅋㅋㅋㅋㅋㅋ아 웃고갑니다ㅋㅋㅋㅋㅋㅋㅋ <br> P.S. :  – · – 　· · · 　· – · · 　· · – 　– · · · 　· – 　　　– – – 　· 　· · – · 　· – · · 　– · 　· – · – · – 　　　– · – 　· · · 　· – · · 　· · – 　– · · · 　· – 　　　– – – 　· 　· · – · 　· – · · 　– · 　· – · – · – (여기도 판교. 여기도 판교.) ", replyLike:true},
      {lpk:32, rpk: 0,id: "hirolike@gmail.com", date: "2019.12.11", tag: "당신의 하루가 별보다 빛나길", replyText: "너무 싱그러운 편지를 읽어서 답장 한 줄 남깁니다. 지금의 그 마음 잃지 않고 간직하셨으면 좋겠어요. 저도 처음 입사했던 때를 생각하면 기대와 설렘에 부풀어있었던 것 같네요. 힘들겠지만 잘 버티시고 좋은 성취 거두시길 바랍니다.", replyLike:true},
      {lpk:33, rpk: 0,id: "heesuk97@naver.com", date: "2019.12.15", tag: "내 감정에 솔직해지세요", replyText: "동그랑땡이 먹고 싶어지는 날입니다 <br> 의정부에 맛있는 전집이 있는데 <br> 합정역에 체인점이 있더라구요 <br> 니니상회라는 곳입니다 <br> 다음에 같이 가실래요?", replyLike:true},
      {lpk:34, rpk: 0,id: "doyeonbb@naver.com", date: "2019.12.02", tag: "", replyText: "안녕하세요! 이번에 임용 합격한 예비 교사입니다! 교사가 되기 위해 지금까지 달려왔는데 처음의 마음을 잊지 않기 위해 정말 노력해야겠다는 생각이 들었어요. 좋은 편지 감사합니다. 선생님께서도 올 한 해 평안하게 보내시길 바라요! ", replyLike:true},
      {lpk:35, rpk: 0,id: "inuskii@gmail.com", date: "2019.12.05", tag: "저도 비슷한 일이 있었어요", replyText: "동년배 디자이너입니다… 오늘 거지같은 피드백을 정말 많이 받았는데 이 글을 보니 디자이너들 다 똑같이 살고 있다는 생각에 위로가 되면서도 왜 이 직업은 이모양인가 화딱지가 나네요 그렇게 자기 맘대로 할거면 디자이너는 왜 고용했나 하는 생각이 요즘 정말 많이 듭니다 왜 퇴근하고 수정사항 지시하는 걸까요? 아무튼 님도 화이팅입니다 더러워도 끝까지 버텨봐요", replyLike:true},
      {lpk:36, rpk: 0,id: "changrenim@gmail.com", date: "2019.12.08", tag: "시간이 해결해 줄 거에요", replyText: "걱정이 되어 답장 남깁니다. 곰팡이를 키우고 남은 시간에 주변 산책도 하고 잠도 자는 게 어떨까요? 인생을 살다보니 가장 중요한 것은 몸과 마음 건강이라는 생각이 참 많이 듭니다. 소중하게 돌봄을 받아야 할 것은 곰팡이가 아니라 자기자신이라는 사실을 잊지 마세요. 곰팡이는 밤에 키우고 낮에 활동을 하시길 바랍니다.", replyLike:true}
      
    ],


//활동추천

    //에디터 큰 카테고리
    editor_contents2:[
      {pk:0, condition:"traffic", url:'css/activity/editor4.png',bigA:"스트레스 뻥!", bigN:"매운 음식"},
      {pk:1, condition:"people", url:'css/activity/editor1.png', bigA:"스트레스 확 풀리는!", bigN:"넷플릭스 5선"},
      {pk:2, condition:"traffic", url:'css/activity/editor1.png',bigA:"지루한 시간 활기를 주는!", bigN:"음악 5선"},
      {pk:3, condition:"people", url:'css/activity/editor1.png',bigA:"혼자 남겨진 것 같다면!", bigN:"인간관계 관련 도서 5선"},
      {pk:4, condition:"traffic", url:'css/activity/editor4.png',bigA:"스트레스 뻥!", bigN:"매운 음식"},
      {pk:5, condition:"money", url:'css/activity/userpick1.png',bigA:"돈 없을 땐 영상이지!", bigN:"유튜브 5선"}
    ],

    //에디터 작은 카테고리
    editor_contents_small2:[
      [
        {pk:0, markNum:11, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26", booked:true, url:"css/activity/editor4.png", contentTitle:"오렌지 이즈 더 뉴 블랙(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:0, markNum:12, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:false, url:"css/activity/userpick1.png", contentTitle:"오렌지 이즈 더 뉴 블랙2(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:0, markNum:13, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:true, url:"css/activity/editor4.png", contentTitle:"오렌지 이즈 더 뉴 블랙3(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."} 
      ],
      [
        {pk:1, markNum:11, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26", booked:true, url:"css/activity/editor4.png", contentTitle:"오렌지 이즈 더 뉴 블랙(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:1, markNum:12, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:false, url:"css/activity/userpick1.png", contentTitle:"오렌지 이즈 더 뉴 블랙2(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:1, markNum:13, category:"movie", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:true, url:"css/activity/editor4.png", contentTitle:"오렌지 이즈 더 뉴 블랙3(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."} 
      ],
      [
        {pk:2, markNum:12, category:"music", dtItem0:"130 mood: TRBL", dtItem1:"2016.03.25", booked:false, url:"css/activity/music.png", contentTitle:"D (harlf moon) (Feat.개코)",shortDetail:"딘 (DEAN)", longDetail:"Love-love the stars <br> Love-love the moon"},
        {pk:2, markNum:62, category:"music", dtItem0:"130 mood: TRBL", dtItem1:"2016.03.25",  booked:false, url:"css/activity/music.png", contentTitle:"D (harlf moon) (Feat.개코)",shortDetail:"딘 (DEAN)", longDetail:"Love-love the stars <br> nbsp; Love-love the moon"},
        {pk:2, markNum:32, category:"music", dtItem0:"130 mood: TRBL", dtItem1:"2016.03.25",  booked:true, url:"css/activity/music.png", contentTitle:"D (harlf moon) (Feat.개코)",shortDetail:"딘 (DEAN)", longDetail:"Love-love the stars <br> Love-love the moon"} 
      ],
      [
        {pk:3, markNum:41, category:"book", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26", booked:false, url:"css/activity/book.png", contentTitle:"오렌지 이즈 더 뉴 블랙(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:3, markNum:20, category:"book", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:false, url:"css/activity/book.png", contentTitle:"오렌지 이즈 더 뉴 블랙2(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:3, markNum:3, category:"book", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:true, url:"css/activity/book.png", contentTitle:"오렌지 이즈 더 뉴 블랙3(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."} 
      ],
      [
        {pk:4,markNum:5, category:"restaurant", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26", booked:true, url:"css/activity/store.png", contentTitle:"오렌지 이즈 더 뉴 블랙(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:4,markNum:2, category:"restaurant", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:false, url:"css/activity/store.png", contentTitle:"오렌지 이즈 더 뉴 블랙2(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:4,markNum:3, category:"restaurant", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:true, url:"css/activity/store.png", contentTitle:"오렌지 이즈 더 뉴 블랙3(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."} 
      ],
      [
        {pk:5, markNum:51, category:"video", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26", booked:true, url:"css/activity/youtube.png", contentTitle:"오렌지 이즈 더 뉴 블랙(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:5, markNum:52, category:"video", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:false, url:"css/activity/youtube.png", contentTitle:"오렌지 이즈 더 뉴 블랙2(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."},
        {pk:5, markNum:53, category:"video", dtItem0:"19세이상", dtItem1:"2019.07.26 ~ 2019.07.26",  booked:true, url:"css/activity/youtube.png", contentTitle:"오렌지 이즈 더 뉴 블랙3(S07)",shortDetail:"미국 드라마", longDetail:"상류층 뉴요커가 과거의 범죄에 발목을 잡힌다. 그녀가 여성 교도소에 수감되면서 벌어지는 일들을 그린 시리즈 드라마 《위즈》의 제작자가 내놓은 마이에미상 수상작이다."} 
      ],

    ],

    //path : "http://203.255.186.215/upimage/"
    
    //사용자 활동추천
    user_contents2:[
      
      {pk:0, booked:true, markNum:11, date:"2019.10.11", condition:"people", url:'css/activity/userpick1.png', uTitle:"일러스트 클래스 수강후기", level:"고래", id:"ideeper", textContent:"고정빈씨의 일러쇼는 최고!"},
      {pk:1, booked:false, markNum:12, date:"2019.10.12", condition:"money", url:'css/activity/write2.png', uTitle:"존맛 라면레시피" , level:"고래", id:"tjdud0123", textContent:"제가 야근할 때 회사에서 자주 끓여 먹는 레시피 여기에서만 공유합니다 ㅠ 저희 회사 직원들도 다 이거 먹어보고 최고라고 했을 만큼 존맛 그자체 라면이예요"},
      {pk:2, booked:true, markNum:13, date:"2019.10.13", condition:"people", url:'css/activity/editor1.png', uTitle:"질러라 락앤롤" , level:"돌고래", id:"mingky", textContent:"인투디 언노우우우오오웅오오온"},
      {pk:3, booked:false, markNum:14, date:"2019.10.14", condition:"traffic", url:'css/activity/editor4.png', uTitle:"소소한 즐겜" , level:"고래", id:"mjkim", textContent:"갓 펭귄의 섬"},
      {pk:4, booked:true, markNum:15, date:"2019.10.15", condition:"money", url:'css/activity/userpick1.png', uTitle:"소일거리" , level:"니모", id:"cykoo9", textContent:"토즈 알바"},
      {pk:5, booked:false, markNum:12, date:"2019.10.14", condition:"night", url:'css/activity/userpick3.png', uTitle:"절대 잠안오는 커피 만들기" , level:"고래", id:"tjdud0123", textContent:"구팡맨한테 배운 3샷 커피만드는 방법 : 게이트에서 3샷으로 시킨다"},
      {pk:6, booked:false, markNum:12, date:"2019.10.09", condition:"night", url:'css/activity/userpick3.png', uTitle:"야근으로 몸이 허약할 때" , level:"고래", id:"xwcjw13", textContent:"따뜻한 레몬차 최고~ 또레따"}
    ],




  },
  methods: {
    level_func:function(score){
      if(score < 150){
        return '니모'
      }
      else if(score < 400){
        return '가오리'
      }
      else if(score < 800){
        return '돌고래'
      }
      else{
        return '고래'
      }
    },

//save and load

    //userTable
     save_userTable: function() {
       put_userTable(this.userTable)
     },
     
     load_userTable: function() {
       this.userTable = get_userTable()
     },

      //userBook
      save_userBook: function() {
        put_userBook(this.userBook)
      },
      
      load_userBook: function() {
        this.userBook = get_userBook()
      },

       //EditorBook
     save_EditorBook: function() {
      put_EditorBook(this.EditorBook)
    },
    
    load_EditorBook: function() {
      this.EditorBook = get_EditorBook()
    },

     //Letters
     save_Letters: function() {
      put_Letters(this.Letters)
    },
    
    load_Letters: function() {
      this.Letters = get_Letters()
    },

     //Replys
     save_Replys: function() {
      put_Replys(this.Replys)
    },
    
    load_Replys: function() {
      this.Replys = get_Replys()
    },

     //editor_contents
     save_editor_contents: function() {
      put_editor_contents(this.editor_contents)
    },
    
    load_editor_contents: function() {
      this.editor_contents = get_editor_contents()
    },

     //editor_contents_small
     save_editor_contents_small: function() {
      put_editor_contents_small(this.editor_contents_small)
    },
    
    load_editor_contents_small: function() {
      this.editor_contents_small = get_editor_contents_small()
    },

     //user_contents
     save_user_contents: function() {
      put_user_contents(this.user_contents)
    },
    
    load_user_contents: function() {
      this.user_contents = get_user_contents()
    },

     


  },

  router,
  render: h => h(App)
}).$mount("#app");
