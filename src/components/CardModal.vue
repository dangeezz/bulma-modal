<template lang="html">
  <transition
    :enter-active-class="animation.enter"
    :leave-to-class="animation.leave"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @afterLeave="afterLeave"
  >
    <div class="modal is-active animated" v-show="showModal">
      <div class="modal-background" />
        <div class="modal-card">
         <header class="modal-card-head">
           <p class="modal-card-title">
             {{ title }}
             <slot name="title" />
           </p>
           <button class="delete" aria-label="close"
            @click="closeModal"></button>
         </header>

         <section class="modal-card-body">
            <template v-if="hasSlot">
              <slot></slot>
            </template>
           <template v-else-if="!hasSlot && body">
             <div v-html="body"></div>
           </template>
         </section>

         <footer class="modal-card-foot">
           <slot name="actions">
             <button class="button is-success">{{ saveText }}</button>
             <button class="button" @click="closeModal">{{ cancelText }}</button>
           </slot>
         </footer>
       </div>
    </div>
 </transition>
</template>

<script>
import BaseMixin from '../mixin/Base';

export default {
  name: 'cardmodal',
  props: {
    cancelText: {
      default: 'Cancel',
    },
    saveText: {
      default: 'Save',
    },
    title: String,
    body: String,
  },
  mixins: [BaseMixin],
  computed: {
    hasSlot() {
      return !this.isEmpty(this.$slots);
    },
  },
  methods: {
    isEmpty(object) {
      return Object.keys(object)
        .filter(prop => prop).length === 0;
    },
  },
};
</script>

<style lang="css">
</style>
