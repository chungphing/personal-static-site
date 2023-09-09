<div class="flex-1 flex flex-col items-center m-16">
	<section class="mb-4">
		<div
			class="w-full flex flex-row items-center items-center border-b-4 border-solid border-accent mb-4 pb-1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-arrow-right"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="var(--color-accent)"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<line x1="5" y1="12" x2="19" y2="12" />
				<line x1="13" y1="18" x2="19" y2="12" />
				<line x1="13" y1="6" x2="19" y2="12" />
			</svg>
			<h1 class="text-lg mx-2 font-bold text-gray-800 dark:text-white">What do I do?</h1>
		</div>
		<div class="h-4" />
		<h1>I Make</h1>
		<div class="h-2" />
		<div class="flex flex-col lg:flex-row w-full gap-4">
			<div class="flex flex-col bg-surface dark:bg-surface-dark p-4">
				<span class="portfolio-header flex flex-row pt-2 pb-1 border-b-2 border-solid border-gray">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-browser"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#009688"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<rect x="4" y="4" width="16" height="16" rx="1" />
						<line x1="4" y1="8" x2="20" y2="8" />
						<line x1="8" y1="4" x2="8" y2="8" />
					</svg>
					<h1 class="font-medium text-base text-gray-800 dark:text-white mx-2">Websites</h1>
				</span>
				<p class="paragraph my-4 text-sm text-gray-800 dark:text-white leading-relaxed">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima
					voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum,
					corporis beatae commodi. Inventore, voluptate ipsa.
				</p>
			</div>
			<div class="flex flex-col bg-surface dark:bg-surface-dark p-4">
				<span class="business-header flex flex-row pt-2 pb-1 border-b-2 border-solid">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-briefcase"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#2196F3"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<rect x="3" y="7" width="18" height="13" rx="2" />
						<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
						<line x1="12" y1="12" x2="12" y2="12.01" />
						<path d="M3 13a20 20 0 0 0 18 0" />
					</svg>
					<h1 class="font-medium text-base text-gray-800 dark:text-white mx-2">Complex Web Apps</h1>
				</span>
				<p class="paragraph my-4 text-sm text-gray-800 dark:text-white leading-relaxed">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima
					voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum,
					corporis beatae commodi. Inventore, voluptate ipsa.
				</p>
			</div>
			<div class="flex flex-col bg-surface dark:bg-surface-dark p-4">
				<span class="mobile-header flex flex-row pt-2 pb-1 border-b-2 border-solid border-gray">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-device-mobile"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#9C27B0"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<rect x="7" y="4" width="10" height="16" rx="1" />
						<line x1="11" y1="5" x2="13" y2="5" />
						<line x1="12" y1="17" x2="12" y2="17.01" />
					</svg>
					<h1 class="font-medium text-base text-gray-800 dark:text-white mx-2">Mobile App</h1>
				</span>
				<p class="paragraph my-4 text-sm text-gray-800 dark:text-white leading-relaxed">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima
					voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum,
					corporis beatae commodi. Inventore, voluptate ipsa.
				</p>
			</div>
		</div>
	</section>
	<div class="h-16" />
	<div class="text-center text-sm">
		some text to overflow
		<br />
		<br />
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore architecto obcaecati officia fuga
		ab atque, nisi quo omnis cupiditate eum. Magni dolorum consequuntur animi similique, perferendis
		distinctio laudantium iusto tempore!
	</div>
	<div class="h-16" />
	<section class="mb-4">
		<h1>Posts</h1>
		<div class="h-2" />
		<div class="snap-x snap-mandatory overflow-x-scroll flex flex-col lg:flex-row w-full gap-4">
			{#each Array(5) as _, index (index)}
				<div
					class="snap-always snap-start shrink-0 basis-1/3 flex flex-col bg-surface dark:bg-surface-dark p-4 aspect-square"
				>
					<!-- <div class="h-0.5 w-full bg-primary dark:bg-primary-dark my-2" /> -->
					<div class="flex flex-row mb-8">
						<span class="text-xs mr-auto">tags: </span>
						<span class="text-xs text-primary-dark mr-2">/front-end</span>
						<span class="text-xs text-primary-dark">/design</span>
					</div>
					<span
						class="portfolio-header flex flex-row pt-2 pb-1 border-b-2 border-solid border-gray"
					>
						<h1 class="font-medium text-base text-gray-800 dark:text-white mx-2">
							First step to Flutter
						</h1>
					</span>
					<p class="paragraph my-4 text-sm text-gray-800 dark:text-white leading-relaxed">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima
						voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores
						voluptatum, corporis beatae commodi. Inventore, voluptate ipsa.
					</p>

					<button class="self-end bg-primary hover:bg-primary-light py-1 px-8"> Read -> </button>
				</div>
			{/each}
		</div>
	</section>
</div>
