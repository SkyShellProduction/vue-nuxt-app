//middleware прогружается до того момента, как прогрузится страница
export default function ({store, redirect}) { 
    if(!store.getters.checkAuthUser){
        redirect('/admin/auth');
    }
}