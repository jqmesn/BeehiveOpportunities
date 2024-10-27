<script lang="ts">
    import type { PageData } from './$types'
    import Article from "$lib/components/Article.svelte";
  
    export let data: PageData

    //        <div class="text-lg">{article.title}</div>
  </script>




<main>
    <div class="m-[10px] flex justify-center"> <!-- content-wrapper -->
        <div class="flex"> <!-- columns -->
            <div class="flex flex-col justify-center text-center"> 
                <div class="text-left"> <!-- articles -->
                    {#each data.feed as article, i} <!--  (article.id) -->
                        {#if i % 2 == 0}
                            <Article {article} />
                        {/if}
                    {/each}
                </div>
            </div>
            <div class="text-center">
                <div class="text-left">
                    {#each data.feed as article, i} <!--  (article.id) -->
                        {#if i % 2 == 1}
                            <Article {article} />
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>
