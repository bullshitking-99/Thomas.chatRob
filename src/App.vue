<script lang="ts" setup></script>

<template>
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  /* min-height 
  1.使全屏可有背景色 
  2.不限制表单长度，防止出现滚动条 
  3.表单长度高于100vh时，背景色伴随表单所在区域 */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(73, 71, 71);

  main {
    width: 60%;
    min-height: 40vh;
    min-width: 350px;
    max-width: 400px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 10px 10px;
    background-color: rgb(82, 80, 78);
  }
}
</style>
