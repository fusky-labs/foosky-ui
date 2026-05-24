<script lang="ts">
  import { browser } from "$app/environment";
  import { moveDom } from "../hooks/moveDOM";
  import type { WithChildrenSnippet } from "../types";

  const { children }: WithChildrenSnippet = $props();
</script>

{#if browser}
  {#if children}
    <div data-portal="" use:moveDom={"body"}>
      {@render children?.()}
    </div>
  {/if}
{/if}

<style>
  [data-portal] {
    @apply contents empty:hidden;
  }
</style>
