<template>
  <div class="container">
    <h1 class="title">关于我们</h1>
    <p class="lead">
      skpr
      是一个集合前端学习的博客空间,我们不定时发布前端学习知识，欢迎投稿或者加入我们！
    </p>
    <p class="lead">投稿邮箱：542634879@qq.com</p>
    <h1 class="title">团队成员</h1>
    <div class="team">
      <div class="teamMember" v-for="item,index in teamMember" key="index">
        <img
          class="avatar"
          :src="item.avatarUrl"
          alt=""
          srcset=""
        />
        <div class="content">
          <div class="name">{{item.name}}</div>
          <div>{{item.label}}</div>
          <div>擅长:{{item.great}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "关于我们",

  data() {
    return {
      teamMember: [
        { 
         name: "april",
         label: "精致的猪猪女士" ,
         great:'Vue',
         avatarUrl:'/images/teamMember1.png'
        },{ 
         name: "晓",
         label: "美少年前端一枚" ,
         great:'Vue',
         avatarUrl:'/images/teamMember2.png'
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  .title {
    line-height: 40px;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #213547;
  }
  .lead {
    padding-top: 8px;
    font-size: 16px;
    font-weight: 500;
    max-width: 512px;
    color: rgb(60 60 60 / 70%);
    padding-bottom: 32px;
  }
  .team {
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .teamMember {
      padding: 40px;
      border-radius: 8px;
      background-color: #f9f9f9;
      transition: background-color 0.5s;
      display: flex;
      margin-bottom: 20px;
      .avatar {
        width: 80px;
        height: 80px;
        transform: translate(0);
        border-radius: 50%;
        margin-right: 20px;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .name {
        font-weight: 700;
      }
    }
  }
}
</style>