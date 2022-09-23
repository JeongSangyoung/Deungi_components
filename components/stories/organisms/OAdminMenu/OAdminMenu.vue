<script setup lang="ts">

const menuItems = [
  {
    text: '관리자 홈',
    icon: '',
    to: '/home',
  },
  {
    text: '내 정보',
    icon: '',
    to: '/profile',
  },
  {
    text: '매니저',
    icon: '',
    to: '/managers',
  },
  {
    text: '회원',
    icon: '',
    to: '/userinfo',
  },
  {
    text: '회원가입',
    icon: '',
    to: '/signup',
  },
  {
    text: '주문내역',
    icon: '',
    to: '/orderList',
  },
]
</script>

<template>
<div class="adminMenu">
  <ul>
    <li
      v-for="item in menuItems" 
      :key="item.text"
      class="adminMenu-list"
    >
      {{ item.text }}
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.adminMenu {
  background: #f8f9fa;
  min-height: 100vh;

  &-list {
    padding: 16px 12px;
    cursor: pointer;

  }
}

</style>