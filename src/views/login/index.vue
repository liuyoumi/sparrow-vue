<script setup>
import {setToken} from "@/utils/auth.js";

const router = useRouter();

const onLogin = () => {
  setToken("test");
  router.push("/");
};
</script>

<template>
  <div class="mx-auto mt-50 w-100">
    <a-form>
      <a-form-item>
        <a-input placeholder="账号"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="密码"></a-input>
      </a-form-item>
      <a-button type="primary" @click="onLogin">登录</a-button>
    </a-form>
  </div>
</template>