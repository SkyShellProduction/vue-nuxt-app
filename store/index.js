import axios from 'axios';
import Cookie from 'js-cookie';
export const state = () => ({
    posts: [],
    token: null
});
export const mutations = {
    addPost(state, post) {
        state.posts.push(post);
    },
    setPosts(state, posts) {
        state.posts = posts
    },
    editPost (state, post) {
        const postIndex = state.posts.findIndex(item => item.id == post.id);
        state.posts[postIndex] = post;
    },
    setToken (state, token) {
        state.token = token
    },
};
export const actions = {
    //запуститься автоматически при запуске приложения
    // nuxtServerInit ({commit}, context) {
    //     return axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts.json`)
    //     .then(res => {
    //         const postArray = [];
    //         for (const key in res.data) {
    //            postArray.push({...res.data[key], id: key})
    //         }
    //         commit('setPosts', postArray);
    //     })
    //     .catch(e => console.log(e))
    // },
    setPosts({commit}) {
        return axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts.json`)
            .then(res => {
                const postArray = [];
                for (const key in res.data) {
                   postArray.push({...res.data[key], id: key})
                }
                commit('setPosts', postArray);
            })
            .catch(e => console.log(e))
    },
    authUser ({commit}, authData) {
        const key = 'AIzaSyDlFJs-k0xAHq-KCGgw-vYWXQ5UW57UeM4';
        const data = {...authData,  returnSecureToken: true};
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, data)
        .then(res => {
            let token = res.data.idToken
            commit('setToken', token);
            //to localstorage
            localStorage.setItem('token', token);
            //to cookie
            Cookie.set('jwt', token);
        })
        .catch(e => console.log(e))
    },
    initAuth({commit}, req){
        let token;
        if(req) {
            if(!req.headers.cookie) return false;
            const jwtCookie = req.headers.cookie.split(';')
            .find(item => item.trim().startsWith('jwt='));
            if(!jwtCookie) return false;
            token = jwtCookie.split('=')[1];
        }
        else{
            token = localStorage.getItem('token');
            if(!token) return false;
            commit('setToken', token);
        }
    }
    ,
    logoutUser({commit}) {
        commit('setToken', null);
        localStorage.removeItem('token');
        Cookie.remove('jwt');
    },
    addPost({commit}, post) {
        return axios.post(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts.json`, post)
        .then(res => {
            console.log(res);
            commit('addPost', {...post, id: res.data.name});
        })
        .catch(e => console.log(e))
    },
    editPost ({commit, state}, post) {
        return axios.put(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
        .then(res => {
            commit('editPost', post);
        })
        .catch(e => console.log(e))
    },
    addComment({commit}, comment) {
        return axios.post(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/comments.json`, comment)
        .catch(e => console.log(e))
    }
};
export const getters = {
    getPosts: state => state.posts,
    checkAuthUser: state => state.token,
};