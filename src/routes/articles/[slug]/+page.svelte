<script lang="ts">
    import type { PageData } from './$types'
  
    export let data: PageData
    const { article } = data
  </script>


    <main>
        <div class=" w-full"> <!-- details-wrapper -->
            <div class="w-full"> <!-- article-details -->
                <div class="m-[100px] mt-[50px]"> <!-- details-content-wrapper -->
                    <div class=""> <!-- details-content-->
                        <div class = "w-full h-[250px] flex justify-center items-center overflow-hidden mb-[30px]"> <!-- banner -->
                            {#if article?.image == ""}
                                <img
                                    class="shrink-0 min-w-full min-h-full"
                                    src="https://storage.googleapis.com/beehivepress/images/articles/article.jpeg"
                                    alt="default article img"
                                />
                            {:else}
                                <img
                                    class="shrink-0 min-w-full min-h-full"
                                    src={article?.image}
                                    alt="article img"
                                />
                            {/if}
                        </div>
                        <div class="text-[3em]"> <!-- title -->
                            {article?.title}
                        </div>
                        <div class="text-[1.2em] text-[#2b2b2b]"> <!-- snippet -->
                            {article?.snippet}
                        </div>
                        <div class="text-[1em] text-[#4e4e4e]"> <!-- author -->
                            {article?.name}
                        </div>
                        <div class="text-[1em] text-[#4e4e4e]"> <!-- date -->
                            {article?.createdAt.toLocaleString('en-us', {timeZone: 'America/Denver'})}
                        </div>
                        <div class="leading-[1.75] text-[18px]"> <!-- content -->
                            {@html article?.sanitizedHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
