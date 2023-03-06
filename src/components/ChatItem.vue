<script lang="ts" setup>
interface IchatItem {
  content: string;
  position: "left" | "right";
}

const props = defineProps<IchatItem>();

// 获取图片的动态路径
const getSrc = (name: string) =>
  new URL(`../assets/${name}`, import.meta.url).href;
const avatar = props.position === "left" ? "rob.jpg" : "girl.png";
</script>

<template>
  <div class="chatItem" :class="props.position">
    <img :src="getSrc(avatar)" alt="avatar" class="avatar" />
    <div class="message">
      <div class="triangle"></div>
      <span class="chatContent">{{ props.content }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chatItem {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  img {
    width: 38px;
    height: 38px;
    border-radius: 8px;
  }

  .message {
    margin-top: 8px;
    width: 100%;
    .chatContent {
      max-width: 75%;
      word-break: break-word;
      white-space: pre-line;
      font-size: 16px;
    }
  }
  &.left {
    .message {
      margin-left: 5px;
      position: relative;
      padding: 0 0 0 5px;

      .triangle {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid rgb(95, 93, 93);
        position: absolute;
        left: 0.9px;
        top: 6px;
      }

      .chatContent {
        float: left;
        padding: 5px 10px;
        background-color: rgb(95, 93, 93);
        border-radius: 2px;
        color: whitesmoke;
      }
    }
  }
  &.right {
    flex-direction: row-reverse;
    .message {
      margin-right: 5px;
      position: relative;
      padding: 0 5px 0 0;

      .triangle {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #98e165;
        position: absolute;
        right: 0.9px;
        top: 6px;
      }
      .chatContent {
        float: right;
        padding: 5px 10px;
        background-color: #98e165;

        border-radius: 2px;
      }
    }
  }
}
</style>
