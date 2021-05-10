<template>
  <div class="tab-bar-item" @click="itemclick">
      <div v-if="!IsActive">
          <slot name="item-image"></slot>
      </div>
      <div v-else>
          <slot name="item-image-act"></slot>
      </div>
      <div :style="TextColour">
          <slot name="item-text"></slot>
      </div> 
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColour:{
            type:String,
            default:"red"
        }
    },
    data() {
        return {
            
        }
    },
    computed:
    {
        IsActive(){
            return this.$route.path.indexOf(this.path)!=-1
        },
        TextColour(){
            return this.IsActive?{color:this.activeColour}:{}
        }
    },
    methods:{
        itemclick(){
            console.log(this.path)
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    height: 25px;
    width: 25px;
    margin-top: 3px;
    vertical-align: middle;
    
}
</style>