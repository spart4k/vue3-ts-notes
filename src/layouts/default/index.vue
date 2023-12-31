<template>
  <div class="layout">
    <Header></Header>
    <div class="main">
      <slot></slot>
    </div>
    <portal-target name="destination">
      <!--
      This component can be located anywhere in your App.
      The slot content of the above portal component will be rendered here.
      -->
    </portal-target>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./setup.ts" lang="ts"></script>
