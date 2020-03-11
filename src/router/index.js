import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login.vue";
import Home from "../views/home.vue";
import SignUp from "../views/signUp.vue";
import MyPage from "../views/myPage.vue";
import Edit from "../views/edit.vue";

import FromMe  from "../views/fromMe.vue";
import FromMeDetail from "../views/fromMeDetail.vue";
import LetterRead from "../views/letterRead.vue";
import LetterReply from "../views/letterReply.vue";
import LetterWrite from "../views/letterWrite.vue";
import MyLetterDt from "../views/myLetterDt.vue";
import Myletters from "../views/myletters.vue";
import ToMe from "../views/toMe.vue";

import ActHome from "../views/actHome.vue";
import BookMark from "../views/bookMark.vue";
import EditorDetail from "../views/editorDetail.vue";
import MyActivity from "../views/myActivity.vue";
import PickList1 from "../views/pickList1.vue";
import PickList2 from "../views/pickList2.vue";
import UserActDt from "../views/userActDt.vue";
import UserList from "../views/userList.vue";
import UserWrite from "../views/userWrite.vue";


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit
  },
  {
    path: "/fromMe",
    name: "FromMe",
    component: FromMe
  },
  {
    path: "/fromMeDetail",
    name: "FromMeDetail",
    component: FromMeDetail
  },
  {
    path: "/letterRead",
    name: "LetterRead",
    component: LetterRead
  },
  {
    path: "/letterReply",
    name: "LetterReply",
    component: LetterReply
  },
  {
    path: "/letterWrite",
    name: "LetterWrite",
    component: LetterWrite
  },
  {
    path: "/myLetterDt",
    name: "MyLetterDt",
    component: MyLetterDt
  },
  {
    path: "/myletters",
    name: "Myletters",
    component: Myletters
  },
  {
    path: "/toMe",
    name: "ToMe",
    component: ToMe
  },
  {
    path: "/actHome",
    name: "ActHome",
    component: ActHome
  },
  {
    path: "/bookMark",
    name: "BookMark",
    component: BookMark
  },
  {
    path: "/editorDetail",
    name: "EditorDetail",
    component: EditorDetail
  },
  {
    path: "/myActivity",
    name: "MyActivity",
    component: MyActivity
  },
  {
    path: "/pickList1",
    name: "PickList1",
    component: PickList1
  },
  {
    path: "/pickList2",
    name: "PickList2",
    component: PickList2
  },
  {
    path: "/userActDt",
    name: "UserActDt",
    component: UserActDt
  },
  {
    path: "/userList",
    name: "UserList",
    component: UserList
  },
  {
    path: "/userWrite",
    name: "UserWrite",
    component: UserWrite
  }
  



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
