<script>
	import '../styles/styles.css';
</script>

<div class="bg-background dark:bg-background-dark flex flex-col md:flex-row">
	<div
		class="side-bar bg-surface dark:bg-surface-dark h-auto mt-4 md:mt-0 md:w-1/5 md:h-screen flex flex-row md:flex-col justify-center items-center font-sans relative"
	>
		<div class="w-full h-full flex flex-col">
			<div class="order-last md:order-first flex flex-col justify-center items-center mt-16">
				<div class="avatar rounded-full w-24 h-24 mx-auto bg-gray-300 mb-4 z-10" />
				<div class="h-2" />
				<h1 class="text-center text-xl font-medium text-gray-600 dark:text-white z-10">
					@Chungphing LY
				</h1>
				<div class="h-2" />
				<p><span class="text-accent">&gt; </span>dev.</p>
			</div>

			<nav class="hidden md:flex flex-col items-center mb-auto mt-16">
				<a
					class="h-8 px-16 hover:bg-primary m-2 border-b-2 border-transparent hover:border-primary-dark flex items-center justify-center cursor-pointer rounded-sm"
					href="/"
				>
					Home
				</a>
				<a
					class="h-8 px-16 hover:bg-primary m-2 border-b-2 border-transparent hover:border-primary-dark flex items-center justify-center cursor-pointer rounded-sm"
					href="/blog"
				>
					Posts
				</a>
				<a
					class="h-8 px-16 hover:bg-primary m-2 border-b-2 border-transparent hover:border-primary-dark flex items-center justify-center cursor-pointer rounded-sm"
					href="/work"
				>
					Works
				</a>
			</nav>

			<div
				class=" social-strip flex flex-row items-center justify-center mt-auto z-10 bg-primary dark:bg-primary-dark p-2"
			>
				<div class="text-black mx-2 text-sm">@fb</div>
				<div class="text-black mx-2 text-sm">@ig</div>
				<div class="text-black mx-2 text-sm">@gmail</div>
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	.avatar {
		background-image: url('/profile.jpeg');
		background-position: center;
		background-size: contain;
	}

	.portfolio-header {
		border-color: #009688;
	}

	.business-header {
		border-color: #2196f3;
	}

	.mobile-header {
		border-color: #9c27b0;
	}
</style>
