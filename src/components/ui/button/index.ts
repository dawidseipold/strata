import { tv, type VariantProps } from 'tailwind-variants';
import Root from './button.svelte';
import type { Button } from 'bits-ui';

const buttonStyles = tv({
	base: 'bg-blue-500 text-white',
	variants: {
		variant: {
			primary: 'bg-blue-500 text-white',
			secondary: 'bg-gray-500 text-white',
			outline: 'bg-red-500 text-white',
			ghost: 'bg-green-500 text-white'
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
});

type ButtonVariant = VariantProps<typeof buttonStyles>['variant'];

type ButtonProps = Button.Props & {
	variant?: ButtonVariant;
};

export { buttonStyles, Root as Button, type ButtonProps };
