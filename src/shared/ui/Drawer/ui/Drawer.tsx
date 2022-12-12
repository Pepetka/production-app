import {
	memo, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AnimationProvider, useAnimationsLib } from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onCloseDrawer?: () => void
	callback?: () => void
	height?: number
}

const DrawerContent = memo(
	({
		className, children, isOpen, onCloseDrawer, callback, height = window.innerHeight - 200,
	}: DrawerProps) => {
		const { theme } = useTheme();
		const { Spring, Gesture } = useAnimationsLib();
		const [isOpened, setIsOpened] = useState(isOpen);
		const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

		const openDrawer = useCallback(() => {
			api.start({ y: 0, immediate: false });
		}, [api]);

		const onCloseDrawerWithCallback = useCallback(() => {
			onCloseDrawer?.();
			callback?.();
		}, [callback, onCloseDrawer]);

		const close = useCallback((callback?: () => void) => (velocity = 0) => {
			api.start({
				y: height,
				immediate: false,
				config: { ...Spring.config.stiff, velocity },
				onResolve: () => {
					callback?.();
					setIsOpened(false);
				},
			});
		}, [Spring.config.stiff, api]);

		const {
			closeDrawer,
			closeDrawerWithCallback,
		} = useMemo(() => ({
			closeDrawer: close(onCloseDrawer),
			closeDrawerWithCallback: close(onCloseDrawerWithCallback),
		}), [close, onCloseDrawer, onCloseDrawerWithCallback]);

		const onKeyDown = useCallback((event: KeyboardEvent) => {
			if (event.key === 'Escape') closeDrawer();
		}, [closeDrawer]);

		useEffect(() => {
			if (isOpen) {
				window.addEventListener('keydown', onKeyDown);
			}

			return () => {
				window.removeEventListener('keydown', onKeyDown);
			};
		}, [isOpen, onKeyDown]);

		useEffect(() => {
			if (isOpen) {
				setIsOpened(true);
				openDrawer();
			} else {
				closeDrawerWithCallback();
			}
		}, [closeDrawerWithCallback, isOpen, openDrawer]);

		const bind = Gesture.useDrag(
			({
				last,
				velocity: [, vy],
				direction: [, dy],
				movement: [, my],
				cancel,
			}) => {
				if (my < -70) cancel();

				if (last) {
					if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
						closeDrawer();
					} else {
						openDrawer();
					}
				} else {
					api.start({ y: my, immediate: true });
				}
			},
			{
				from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
			},
		);

		const display = y.to((py) => (py < height ? 'block' : 'none'));

		if (!isOpened) {
			return null;
		}

		return (
			<Portal>
				<div
					className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}
				>
					<Overlay onClick={() => closeDrawer()} />
					<Spring.a.div {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} className={cls.content}>
						{children}
					</Spring.a.div>
				</div>
			</Portal>
		);
	},
);

const DrawerAsync = memo((props: DrawerProps) => {
	const { isLoaded } = useAnimationsLib();

	if (!isLoaded) return null;

	return (
		<DrawerContent {...props} />
	);
});

export const Drawer = memo((props: DrawerProps) => (
	<AnimationProvider>
		<DrawerAsync {...props} />
	</AnimationProvider>
));
