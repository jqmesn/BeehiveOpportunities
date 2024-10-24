<script lang="ts">
    import type { PageData } from "./$types";
    export let article: PageData;

    let titleLength = 39;
    let categoryLength = 81;
    let snippetLength = 81;
</script>

<div class="article card">
    <div class="article image">
        {#if article.image = ""}
            <img 
                src="https://storage.googleapis.com/beehivepress/images/articles/article.jpeg"
                alt="default article img" 
            />
        {:else}
            <img 
                src={article.image}
                alt="article img"
            />
        {/if}
    </div>
    <div class="article-text">

    </div>
</div>
    <div>{article.title}</div>
