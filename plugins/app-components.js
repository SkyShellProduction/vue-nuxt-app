import Vue from 'vue';
//автоимпорт этих компонентов в другие, там их не придется импортировать
//controls
import AppButton from '@/components/UI/controls/Button.vue';
import AppInput from '@/components/UI/controls/Input.vue';
import AppTextArea from '@/components/UI/controls/TextArea.vue';
//UI
import Message from '@/components/UI/Message.vue';
import Intro from '@/components/UI/Intro.vue';
import PostsList from '@/components/blog/PostsList.vue';
Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);
Vue.component('Message', Message);
Vue.component('Intro', Intro);
Vue.component('PostsList', PostsList);