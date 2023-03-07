import { Article } from '@/entities/Article';
import { ValidateEditableArticleDetailsError } from '../consts/consts';

export interface EditableArticleDetailsSchema {
	data?: Article;
	formData?: Article;
	loading: boolean;
	error?: string;
	readOnly: boolean;
	validateErrors?: Array<ValidateEditableArticleDetailsError>;
}
