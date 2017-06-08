/**
 * @author rubyisapm
 */
import Vue from 'vue';
import components from '../../index.js';
import Img from '../src/adc-img.vue';
import Buttons from '../src/buttons.vue';
import RtInput from '../src/rt-input.vue';

Vue.component('adc-table-operator',Buttons);
Vue.component('adc-img',Img);
Vue.component('rt-input',RtInput);

Vue.filter('a',function(v){
    return v*2;
});
var tableData = [
    {
        name: 'ruby',
        age: 12,
        dep:1,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby2',
        age: 15,
        dep:1,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby',
        age: 12,
        dep:1,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby2',
        age: 15,
        dep:1,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby',
        dep:3,
        age: 12,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby2',
        age: 15,
        dep:1,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby',
        age: 12,
        dep:2,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }, {
        name: 'ruby2',
        age: 15,
        dep:3,
        img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        html:'hello'
    }
];

new Vue({
    components: {
        'adc-table-column': components['adc-table-column'],
        'adc-table': components['adc-table']
    },
    el: '#app',
    data: {
        tableData: tableData,
        visibleFilter(item, index, data){
            return item.age>13;
        },
        deps:[
            {
                key:1,
                val:'系统研发'
            },{
                key:2,
                val:'移动平台'
            },{
                key:3,
                val:'移动发行'
            }
        ],
        htmlResolve(item){
            return `<b>${item}</b>`
        },
        vms:{
            img:{
                name:'adc-img',
                config:{
                    width:80,
                    height:80
                }
            },
            operator:{
                name:'adc-table-operator'
            },
            order:{
                name:'rt-input'
            }
        }
    },
    methods:{
        getChecked(){
            console.log(this.$refs.table.getChecked())
        },
        change(){
            this.vms.img.config={
                width:100,
                height:100
            }
        }
    }
});