import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/provider/Store';

/**
 * Хук, вызывающий типизированный useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
