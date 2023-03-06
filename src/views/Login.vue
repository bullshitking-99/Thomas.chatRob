<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { useApi } from "../api/index";
import Input from "../components/inputWithBtn.vue";

// 数据
const license = ref<string>(localStorage.getItem("license") || "");

// 页面声明及状态广播
const declaration: Ref<string> = ref("本系统超级牛皮");
// 控制声明文字抖动效果
const shaking: Ref<boolean> = ref(false);

// 方法
const router = useRouter();
const { authen } = useApi();

// 提交方法
async function submit() {
  // 提交验证
  if (!license.value) return;
  const res = await authen(license.value);
  console.log(res);
  if (res.code === 200) {
    // 进入聊天页面
    router.push("/chat");
  }
}
</script>

<template>
  <h1>AI-Talking</h1>
  <Input
    class="input"
    placeholder="给我个授权码吧"
    @btnClicked="submit"
    v-model:inputValue="license"
  >
    <span>GO</span>
  </Input>
  <!-- footer 系统说明 -->
  <hr />
  <div class="declaration" :class="{ shaking }">{{ declaration }}</div>
</template>

<style scoped lang="scss">
/* 标题 */
h1 {
  font-size: 36px;
  text-align: center;
  margin: 35px 0;
  color: whitesmoke;
}
.input {
  margin-top: 60px;
}
span {
  color: whitesmoke;
  font-size: 110%;
  user-select: none;
}

hr {
  width: 50%;
  margin: 10px auto;
  margin-top: 100px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
}
.declaration {
  text-align: center;
  opacity: 0.7;
  color: whitesmoke;
}

// 文字抖动效果
.shaking {
  color: #e40438;
  animation-name: shaking;
  animation-duration: 0.5s;
}

@keyframes shaking {
  10% {
    transform: translateX(2px);
  }
  20% {
    transform: translateX(-2px);
  }
  30% {
    transform: translateX(2px);
  }
  40% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  60% {
    transform: translateX(-2px);
  }
  70% {
    transform: translateX(2px);
  }
  80% {
    transform: translateX(-2px);
  }
  90% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
