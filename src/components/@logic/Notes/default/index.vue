<template>
  <div class="notes">
    <Note v-for="(note, index) in notes" @click="open(note.id)" :note="note" :key="index"/>
  </div>
</template>
<style src="./style.scss" lang="sss" scoped></style>
<script src="./setup.ts" lang="ts"></script>
