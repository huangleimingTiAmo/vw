<template>
    <div class="home">

        <div class="header">
            <span><i class="iconfont icon-fanhui"></i></span>
            <span class="icon"></span>
            <span><i class="iconfont icon-xia"></i></span>
        </div>

        <div class="steps">
            <ul class="steps-wrapper">
                <li v-for="(item,index) in steps" :key="index" class="stepsbar">
                    <span class="number" :class="{'active': index===0}">{{item.number}}</span>
                    <span class="name">{{item.name}}</span>
                    <span v-if="index<4" class="line">-</span>
                </li>
            </ul>
        </div>

        <div class="container">
            汽车3D模型
            {{checkedColor}}
        </div>

        <div class="interiorColor">
            <div class="interiorColor-content" ref="interiorColorContent">
                <div v-for="(item,index) in interiorColor" :key="item.id" class="interiorColor-wrapper"> 
                    <div class="interiorColor-div" @click="checkColor(index)" :class="{'interiorColor-div-active': item.isChecked}">
                        <img :src="item.img" class="interiorColor-img" :class="{'interiorColor-img-active':item.isChecked}">
                    </div>
                    <p class="interiorColor-text" :class="{'interiorColor-text-active': item.isChecked}">{{item.color}}</p>
                </div>
            </div>
        </div>
       
        <div class="car-config-desc-title">
            <p>PHIDEON辉昂</p>
            <div class="car-config-desc-content">PHIDEON辉昂是大众品牌历史上的首款C级豪华轿车，搭载诸多越级科技装备，为消费者提供更为豪华舒适的出行体验。</div>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name: 'home',

    data() {
      return {
        checkedColor: '',
        steps: [
          {number:1, name:'颜色'},
          {number:2, name:'引擎'},
          {number:3, name:'配置线'},
          {number:4, name:'内饰'},
          {number:5, name:'选装包'},
        ],
        interiorColor: [
            {id: 0,img:'//static.mysvw.com/carconfig/photo/outside/Deep_Black.png',color:'幻影黑',isChecked:false},
            {id: 1,img:'//static.mysvw.com/carconfig/photo/outside/Opalsilber.png',color:'珠光银',isChecked:false},
            {id: 2,img:'//static.mysvw.com/carconfig/photo/outside/Polar_White.png',color:'极地白',isChecked:false},
            {id: 3,img:'//static.mysvw.com/carconfig/photo/outside/Sommelier_Red.png',color:'熔岩红',isChecked:false},
            {id: 4,img:'//static.mysvw.com/carconfig/photo/outside/Obsidian_Grey_M.png',color:'曜岩灰',isChecked:false},
            {id: 5,img:'//static.mysvw.com/carconfig/photo/outside/Zirkonbraun.png',color:'檀香棕',isChecked:false},
            {id: 6,img:'//static.mysvw.com/carconfig/photo/outside/Tungsten_Silver.png',color:'冰川银',isChecked:false},
            {id: 7,img:'//static.mysvw.com/carconfig/photo/outside/Velvet_Brown_M.png',color:'天鹅绒棕',isChecked:false},
        ]
      }
    },

    mounted() {
        this.$refs.interiorColorContent.style.width = (this.interiorColor.length * 90) + 'px'
        new BScroll('.interiorColor',{
            scrollX: true,
            click:true
        })  
    },

    created() {
        this.checkedColor = this.interiorColor[0].color
        this.interiorColor[0].isChecked = true
    },

    methods: {
        checkColor(index) {
            this.interiorColor.forEach((item)=>{
                item.isChecked = false
            })
            this.interiorColor[index].isChecked = true
            this.checkedColor = this.interiorColor[index].color
        }
    }
}
</script>

<style>
    .header{
        height: 44px;
        background-color: #f6f6f9;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
    }
    .header .icon{
        width: 32px;
        height: 32px;
        background-image: url(https://assets.mysvw.com/17d3c42bb47392b85af609079383aba3.png);
        background-size: 32px 32px;
        background-position: 50%;
        background-repeat: no-repeat;
    }

    .steps{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #ececf0;
        padding: 0 3px;
    }
    .steps-wrapper{
        display: flex;
        align-items: center;
    }
    .steps-wrapper .stepsbar{
        flex: 1 1 auto;
    }
    .steps-wrapper .stepsbar .number{
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background: gray;
        margin-right: 4px;
        color: #fff;
    }
    .steps-wrapper .stepsbar .number.active{
        background: #4798d2;
    }
    .steps-wrapper .stepsbar .name{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: gray;
    }
    .steps-wrapper .stepsbar .line{
        margin: 0 5px;
        color: gray;

    }


    .interiorColor{
        overflow: hidden;
        width: 100%;
        height: 100px;
        background-color: #f7f7f7;
    }
    .interiorColor .interiorColor-content{
        display: flex;
    }
    .interiorColor .interiorColor-wrapper{
        margin-left: 23px;
        text-align: center;
    }
    .interiorColor .interiorColor-div.interiorColor-div-active{
        position: relative;
        width: 56px;
        height: 56px;
        margin: 0 auto;
        background: url(https://assets.mysvw.com/91680f04bea9f984df947715c111821e.png) no-repeat;
        background-size: cover;
        margin-top: 9px;
        margin-bottom: 2px;
    }
    .interiorColor .interiorColor-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 18px;
    }
    .interiorColor .interiorColor-img.interiorColor-img-active{
        position: absolute;
        top: -4px;
        left: 4px;
        width: 48px;
        height: 48px;
        margin-top: 8px;
    }
    .interiorColor .interiorColor-text{
        display: none;
    }
    .interiorColor .interiorColor-text.interiorColor-text-active{
        display: inline;
        font-size: 14px;
    }


    .car-config-desc-title{
        margin: 20px;
    }
    .car-config-desc-title p{
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 700;
    }
    .car-config-desc-content{
        line-height: 14px;
        font-size: 12px;
    }
</style>

