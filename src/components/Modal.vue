<template lang="html">
  <transition
    :enter-active-class="animation.enter"
    :leave-to-class="animation.leave"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @afterLeave="afterLeave"
  >
    <div class="modal is-active animated" v-show="show">
      <div class="modal-background"@click="closeModal"></div>
      <!-- Modal content -->
      <div class="modal-content">
        <slot></slot>
      </div>
      <button class="modal-close is-large"
        aria-label="close"
        @click="closeModal"
        v-if="closable" />
    </div>
  </transition>
</template>

<script>
import BaseMixin from '../mixin/Base';

export default {
  name: 'modal',
  mixins: [BaseMixin],
};
</script>

<style lang="css">
  .animated  {
    animation-duration: 1s;
  }
</style>
