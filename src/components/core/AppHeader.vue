<script setup>
import { RouterLink } from 'vue-router'
import AppLogo from '@/components/core/AppLogo.vue'
</script>
<template>
  <header>
    <div class="container-fluid">
      <nav aria-label="Main Navigation">
        <RouterLink aria-label="netflix logo" to="/" class="applogo" rel="noopener noreferrer">
          <AppLogo />
        </RouterLink>
        <!-- <NavLinks /> -->
      </nav>
    </div>
  </header>
</template>
