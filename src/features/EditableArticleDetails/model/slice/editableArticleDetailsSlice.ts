import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleBlock, ArticleBlockType, ArticleType } from '@/entities/Article';
import { fetchArticleDetailsData } from '../services/fetchArticleDetailsData/fetchArticleDetailsData';
import { updateArticleDetailsData } from '../services/updateArticleDetailsData/updateArticleDetailsData';
import { EditableArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: EditableArticleDetailsSchema = {
	loading: false,
	readOnly: true,
};

export const editableArticleDetailsSlice = createSlice({
	name: 'editableArticleDetails',
	initialState,
	reducers: {
		setTypes: (state, { payload }: PayloadAction<ArticleType>) => {
			if (!state.formData) {
				return;
			}

			if (state.formData.type.includes(payload)) {
				state.formData.type = state.formData.type.filter((prevType) => prevType !== payload);
				return;
			}
			state.formData.type.push(payload);
		},
		setAvatar: (state, { payload }: PayloadAction<string>) => {
			if (!state.formData) {
				return;
			}

			state.formData.img = payload;
		},
		setTitle: (state, { payload }: PayloadAction<string>) => {
			if (!state.formData) {
				return;
			}

			state.formData.title = payload;
		},
		setSubtitle: (state, { payload }: PayloadAction<string>) => {
			if (!state.formData) {
				return;
			}

			state.formData.subtitle = payload;
		},
		setTextParagraphsData: (state, { payload }: PayloadAction<{ id: string; paragraphs: string }>) => {
			if (!state.formData) {
				return;
			}

			const newBlocks = state.formData.blocks.map((block) => {
				if (block.id === payload.id) {
					return {
						...block,
						paragraphs: [...payload.paragraphs.split('\n')],
					};
				}
				return block;
			});
			state.formData = { ...state.formData, blocks: newBlocks };
		},
		setTextTitle: (state, { payload }: PayloadAction<{ id: string; title: string }>) => {
			if (!state.formData) {
				return;
			}

			const newBlocks = state.formData.blocks.map((block) => {
				if (block.id === payload.id) {
					return {
						...block,
						title: payload.title,
					};
				}
				return block;
			});
			state.formData = { ...state.formData, blocks: newBlocks };
		},
		setCode: (state, { payload }: PayloadAction<{ id: string; code: string }>) => {
			if (!state.formData) {
				return;
			}

			const newBlocks = state.formData.blocks.map((block) => {
				if (block.id === payload.id) {
					return {
						...block,
						code: payload.code,
					};
				}
				return block;
			});
			state.formData = { ...state.formData, blocks: newBlocks };
		},
		setImg: (state, { payload }: PayloadAction<{ id: string; img: string }>) => {
			if (!state.formData) {
				return;
			}

			const newBlocks = state.formData.blocks.map((block) => {
				if (block.id === payload.id) {
					return {
						...block,
						src: payload.img,
					};
				}
				return block;
			});
			state.formData = { ...state.formData, blocks: newBlocks };
		},
		setImgTitle: (state, { payload }: PayloadAction<{ id: string; imgTitle: string }>) => {
			if (!state.formData) {
				return;
			}

			const newBlocks = state.formData.blocks.map((block) => {
				if (block.id === payload.id) {
					return {
						...block,
						title: payload.imgTitle,
					};
				}
				return block;
			});
			state.formData = { ...state.formData, blocks: newBlocks };
		},
		cancelEdit: (state) => {
			state.readOnly = true;
			state.formData = state.data;
			state.validateErrors = undefined;
		},
		changeReadOnly: (state, { payload }: PayloadAction<boolean>) => {
			state.readOnly = payload;
		},
		addBlock: (state, { payload }: PayloadAction<ArticleBlockType>) => {
			if (!state.formData) {
				return;
			}
			if (payload === ArticleBlockType.TEXT) {
				const textBlock: ArticleBlock = {
					id: String(state.formData.blocks.length),
					type: ArticleBlockType.TEXT,
					title: '',
					paragraphs: [],
				};

				state.formData.blocks.push(textBlock);
			}
			if (payload === ArticleBlockType.CODE) {
				const codeBlock: ArticleBlock = {
					id: String(state.formData.blocks.length),
					type: ArticleBlockType.CODE,
					code: '',
				};

				state.formData.blocks.push(codeBlock);
			}
			if (payload === ArticleBlockType.IMG) {
				const imgBlock: ArticleBlock = {
					id: String(state.formData.blocks.length),
					type: ArticleBlockType.IMG,
					title: '',
					src: '',
				};

				state.formData.blocks.push(imgBlock);
			}
		},
		deleteBlock: (state, { payload }: PayloadAction<string>) => {
			if (!state.formData) {
				return;
			}

			state.formData.blocks = state.formData.blocks.filter((block) => block.id !== payload).map((block, index) => ({ ...block, id: String(index) }));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleDetailsData.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchArticleDetailsData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchArticleDetailsData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(updateArticleDetailsData.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(updateArticleDetailsData.rejected, (state, action) => {
				state.loading = false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.validateErrors = action.payload;
				}
			});
	},
});

export const { actions: editableArticleDetailsActions, reducer: editableArticleDetailsReducer } = editableArticleDetailsSlice;
