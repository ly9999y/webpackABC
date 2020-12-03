import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'


$(function(){
    $("li:odd").css('backgroundColor', 'pink');
    $("li:even").css('backgroundColor', 'lightblue');
})

// ----------------------------
import Vue from 'vue'
import App from './components/App.vue'

const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})