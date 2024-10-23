<script>
	import '../app.css';
</script>

<div class=" font-[475] m-0">
    <div class="bg-white h-8 flex justify-between items-center h-30 px-8 py-8">
        <div class="no-underline text-[#fe9b20] text-3xl"><a href="/">Beehive Opportunities</a></div>
    
        <div class="flex text-xl justify-between">
            <div class="no-underline text-black hover:text-[#fe9b20] px-3">
                <a href="/">Home</a>
            </div>
            <div class="no-underline text-black hover:text-[#fe9b20] px-3">
                <a href="/">Articles</a>
            </div>
            <div class="no-underline text-black hover:text-[#fe9b20] px-3">
                <a href="/">About</a>
            </div>
            <div class="no-underline text-black hover:text-[#fe9b20] px-3">
                <a href="/">Settings</a>
            </div>
        </div>
    </div>

    <div class="w-full">
        <div class="w-full h-[300px] bg-[#fe9b20] flex justify-center items-center mb-[10px]">
            <p class="text-[80px] m-0 text-white text-center">Beehive Opportunities</p>
        </div>
    </div>
    
    <div class="bg-slate-600 text-white p-30 flex justify-center items-center text-center absolute bottom-0 w-full h-18">
        This blog is student ran and all content is produced by students
    </div>
    
    <slot></slot>
</div>

