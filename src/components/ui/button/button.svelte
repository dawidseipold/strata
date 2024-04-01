<script lang="ts">
	import { Button } from 'bits-ui';

	// Types
	import { buttonStyles, type ButtonProps } from '.';
	import { cn } from '$utils/styles.ts';

	type $$Props = ButtonProps;

	// Props
	let variant: $$Props['variant'] = 'primary';

	export { variant };
</script>

<Button.Root
	class={cn(buttonStyles({ variant }))}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</Button.Root>
