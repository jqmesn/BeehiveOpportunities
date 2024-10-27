<script lang="ts">
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";
    export let article: PageData;

    let titleLength = 39;
    let categoryLength = 81;
    let snippetLength = 81;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-[700px] h-[200px] bg-white m-[40px] p-[20px] flex items-center rounded-[20px] hover:shadow-3xl transition-shadow" on:click={() => goto(`/articles/${article.slug}`)}><!-- article card -->
    <div class="article-img"> <!-- article-img -->
        {#if article.image == ""}
            <img 
                class="w-[175px] h-[175px] rounded-[20px] object-fill float-left shrink-0"
                src="https://storage.googleapis.com/beehivepress/images/articles/article.jpeg"
                alt="default article img" 
            />
        {:else}
            <img
                class="w-[175px] h-[175px] rounded-[20px] object-fill float-left shrink-0"
                src={article.image}
                alt="article img"
            />
        {/if}
    </div>
    <div class="h-[175px] ml-[30px] flex flex-col"> <!-- article-text -->
        {#if article.title.length > titleLength}
            <div class="article-title"> <!-- article-title -->
                <a class="article-link no-underline text-black text-[2em]" href="/">{article.title.substring(0, titleLength) + '...'}...</a> <!-- article-link -->
            </div>

        {:else}
            <div class="article-title"> <!-- article-title -->
                <a class="article-link no-underline text-black text-[2em]" href="/">{article.title}</a> <!-- article-link -->
            </div>
        {/if}
        {#if article.category.length > categoryLength}
            <div class="text-[#4e4e4e] mt-[-5px] mb-[5px]">{article.category.substring(0, categoryLength) + '...'}</div> <!-- article-category -->
        {:else}
            <div class="text-[#4e4e4e] mt-[-5px] mb-[5px]">{article.category}</div> <!-- article-category -->
        {/if}
        {#if article.snippet.length > snippetLength}
            <div class="article-snippet">{article.snippet.substring(0, snippetLength) + '...'}</div> <!-- article-snippet -->
        {:else}
            <div class="article-snippet">{article.snippet}</div> <!-- article-snippet -->
        {/if}
    </div>
</div>
