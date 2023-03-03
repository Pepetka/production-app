import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface ThemeProviderProps {
	children: ReactNode;
}

interface AnimationContextProps {
	Spring?: SpringType;
	Gesture?: GestureType;
	isLoaded: boolean;
}

const AnimationContext = createContext<AnimationContextProps>({
	isLoaded: false,
});

const getAnimationModules = async () => Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const useAnimationsLib = () => useContext(AnimationContext) as Required<AnimationContextProps>;

export const AnimationProvider = ({ children }: ThemeProviderProps) => {
	const SpringRef = useRef<SpringType>();
	const GestureRef = useRef<GestureType>();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getAnimationModules().then(([Spring, Gesture]) => {
			SpringRef.current = Spring;
			GestureRef.current = Gesture;
			setIsLoaded(true);
		});
	}, []);

	const animationValue = useMemo(
		() => ({
			Spring: SpringRef.current,
			Gesture: GestureRef.current,
			isLoaded,
		}),
		[isLoaded],
	);

	return <AnimationContext.Provider value={animationValue}>{children}</AnimationContext.Provider>;
};
