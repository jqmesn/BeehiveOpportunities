<script lang="ts">
    import type { PageData } from './$types'
    import Article from "$lib/components/Article.svelte";
  
    export let data: PageData

    //        <div class="text-lg">{article.title}</div>
  </script>

<div class="w-full">
    <div class="w-full h-[300px] bg-[rgb(254,155,32)] flex justify-center items-center mb-[10px]">
        <p class="text-[80px] m-0 text-white text-center">Beehive Opportunities</p>
    </div>
</div>


<main>
    <div class="w-full flex justify-center"> <!-- container -->
        <div class="w-[80vw] flex justify-around"> <!-- wrapper -->
            <div class="flex flex-col justify-center text-center"> <!-- this-week -->
                <h1 class="font-semibold text-[2em]">New This Month</h1>
                <div class="text-left"> <!-- articles -->
                    {#each data.feed as article, i} <!--  (article.id) -->
                        {#if article.createdAt.getMonth().toString() == new Date().getMonth().toString() && article.createdAt.getFullYear().toString() == new Date().getFullYear().toString()}
                            <Article {article} />
                        {/if}
                    {/each}
                </div>
            </div>
            <div class="text-center">
                <h1 class="font-semibold text-[2em]">Monthly Recap</h1>
                <div class="text-left">
                    {#each data.feed as article, i} <!--  (article.id) -->
                        {#if article.category.toLowerCase() == "monthly recap"}
                            <Article {article} />
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>
