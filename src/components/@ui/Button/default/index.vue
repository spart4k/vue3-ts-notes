<template>
  <button class="button">
    <slot name="icon"></slot>
    <slot class="text">
      <portal to="destination">
      <p>This slot content will be rendered wherever the
      </p>
    </portal>
    </slot>
  </button>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./setup.ts" lang="ts"></script>
