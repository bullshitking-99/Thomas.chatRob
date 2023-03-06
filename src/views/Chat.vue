<script lang="ts" setup>
import { ref } from "vue";
import ChatItem from "../components/ChatItem.vue";

// 数据
const MAN = "man";
const ROB = "rob";
interface Imessage {
  content: string;
  from: "man" | "rob";
}

const dialog = ref<Imessage[]>([
  { from: MAN, content: "hello" },
  {
    from: ROB,
    content: "hello, i am your dad",
  },
]);

const inputMessage = ref<string>("");

const outputMessage = "";

// 方法
function submit() {
  // 消息检验
  if (!inputMessage.value.length) return;
  // 将当前消息放入对话
  const message = { content: inputMessage.value, from: MAN as "man" };
  dialog.value.push(message);
  // 清空当前消息
  inputMessage.value = "";
  // 一次只支持发送一条
  // 发送请求，等待回应
  // 将回应放入对话
}
</script>

<template>
  <div class="chat">
    <h1>888号技师为你服务</h1>
    <div class="dialog">
      <ChatItem
        v-for="item in dialog"
        :content="item.content"
        :position="item.from === MAN ? 'right' : 'left'"
      ></ChatItem>
    </div>
    <div class="input">
      <input type="text" v-model="inputMessage" @keydown.enter="submit" />
      <button @click="submit">发送</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  transition: all 0.2s ease;
  position: relative;

  h1 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    color: whitesmoke;
  }

  .dialog {
    width: 100%;
    height: 80%;
    min-height: 500px;
    margin-bottom: 10px;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 10px;
  }

  .input {
    width: 100%;
    min-height: 50px;
    border-radius: 10px 10px 20px 20px;
    padding: 5px;

    input {
      width: 85%;
      min-height: 40px;
      padding: 5px;
      font-size: 16px;
      border: none;
      outline: none;
      margin-right: 3%;
      border-radius: 5px;
      word-break: break-word;
      white-space: pre-line;
      background-color: whitesmoke;
    }
    button {
      display: inline-block;
      height: 35px;
      width: 12%;
      background-color: #98e165;
      border: none;
      border-radius: 5px;
      padding: 0 5px;
    }
  }
}
</style>
