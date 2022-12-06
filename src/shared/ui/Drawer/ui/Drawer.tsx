import {
	memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/Theme';
import { useAnimationsLib } from 'shared/lib/components/AnimationProvider/AnimationProvider';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onCloseDrawer?: () => void
}

const height = window.innerHeight - 200;

const DrawerContent = memo(
	({
		className, children, isOpen, onCloseDrawer,
	}: DrawerProps) => {
		const { theme } = useTheme();
		const { Spring, Gesture } = useAnimationsLib();
		const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

		const openDrawer = useCallback(() => {
			api.start({ y: 0, immediate: false });
		}, [api]);

		useEffect(() => {
			if (isOpen) {
				openDrawer();
			}
		}, [isOpen, openDrawer]);

		const close = (velocity = 0) => {
			api.start({
				y: height,
				immediate: false,
				config: { ...Spring.config.stiff, velocity },
				onResolve: onCloseDrawer,
			});
		};

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
						close();
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

		if (!isOpen) {
			return null;
		}

		return (
			<Portal>
				<div
					className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}
				>
					<Overlay onClick={() => close()} />
					<Spring.a.div {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} className={cls.content}>
						{children}
					</Spring.a.div>
				</div>
			</Portal>
		);
	},
);

export const Drawer = memo((props: DrawerProps) => {
	const { isLoaded } = useAnimationsLib();

	if (!isLoaded) return null;

	return (
		<DrawerContent {...props} />
	);
});
