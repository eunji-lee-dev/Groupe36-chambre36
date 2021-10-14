<template>
  <transition name="modal" appear>
    <section class="modal">
      <div class="modal__window">
        <div class="modal__title">
          <slot name="title" />
        </div>
        <div class="modal__content">
          <slot name="content" />
        </div>
        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
      <div class="modal__overlay" @click.self="$emit('close')"></div>
    </section>
  </transition>
</template>
