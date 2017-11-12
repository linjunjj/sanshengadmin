import Cookies from 'js-cookie';
const user = {
state:{
  token: Cookies.get('Admin-Token'),
  id:'',
  storeName:'',
  storer:'',
  tel:'',
  storelogo:'',
  password:'',
  storeUserID:'',
  roles: [],
},
mutations :{
  SET_TAKEN :(state,token) =>{
    state.token =token;
  },
  SET_ID :(state,id) =>{
    state.token =id;
  },
  SET_STORENAME :(state,storeName) =>{
    state.token =storeName;
  },
  SET_STORER :(state,storer) =>{
    state.token =storer;
  },
  SET_TEL :(state,tel) =>{
    state.token =tel;
  },
  SET_STORERLODO :(state,storelogo) =>{
    state.token =storelogo;
  },
  SET_PASSWORD :(state,password) =>{
    state.token =password;
  },
  SET_STOREUSERID :(state,storeUserID) =>{
    state.token =storeUserID;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
},
  actions:{
    LoginByTel({commit},userinfo) {
      return new Promise((resolve,reject)=>{
        this.$http.get('/api/store/loginByPhone',{
          params:{
            phone:userinfo.username,
            password:userinfo.password,
          },

        }).then(function (response) {
          var code=response.data.errorcode;
          if (code=="200"){
            let times=new Date().getTime();
            Cookies.set('Admin-token',times);
            commit('SET_TAKEN',times);
            commit('SET_ID',response.data.data.id);
            commit('SET_STORENAME',response.data.data.storename);
            commit('SET_STORER',response.data.data.storer);
            commit('SET_TEL',response.data.data.tel);
            commit('SET_STORERLODO',response.data.data.storelogo);
            commit('SET_PASSWORD',response.data.data.passworld);
            commit('SET_STOREUSERID',response.data.data.storeuserid);
            commit('SET_ROLES', ['admin']);
            resolve();
          }else {
            reject();
          }
        }).catch((error)=>{
          reject(error);
        })
      })
    },
       LogOut({commit,state}){
      return new Promise((resolve,reject)=>{
        commit('SET_TAKEN','');
        commit('SET_ID','');
        commit('SET_STORENAME','');
        commit('SET_STORER','');
        commit('SET_TEL','');
        commit('SET_STORERLODO','');
        commit('SET_PASSWORD','');
        commit('SET_STOREUSERID','');
        Cookies.remove('Admin-Token');
        resolve();
      })
       }
  }







};
export  default  user;
