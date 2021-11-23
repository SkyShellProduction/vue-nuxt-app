<template>
    <section class="auth">
        <div class="container">
            <form class="auth__form" @submit.prevent="onSubmit">
                <AppInput v-model="user.email" type="email">Login:</AppInput>
                <AppInput v-model="user.password" type="password" minlength="6">Password:</AppInput>
                <div class="controls">
                    <AppButton>Login!</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('authUser', this.user)
            .then(res => {
                this.$router.push('/admin');
            })
            .catch(e => {
                this.user.email = '';
                this.user.password = '';
                console.log(e);
            })
        }
    }

}
</script>
<style lang="scss">
    .auth{
    //  max-width: 400px;
     text-align: center;   
    }
    .auth__form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70vh;
        .control{
            max-width: 400px;
            width: 100%;
            display: block;
        }
    }
</style>