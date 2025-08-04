import { VueElementConstructor } from 'vue';

export declare interface ArrayItem {
    id?: string;
    [key: string]: string | number | boolean | undefined;
}

export declare interface CategorizedPartSections {
    common: PartSection[];
    individual: PartSection[];
}

export declare interface Component {
    id: string;
    type: string;
    module_name: string;
    body?: string;
    nested_parts?: Component[];
    props?: ComponentProps;
    [key: string]: unknown;
}

export declare interface ComponentField {
    propKey: string;
    label: string;
    type: 'radio' | 'checkbox';
    options: string[];
    defaultValue?: string;
}

export declare type ComponentPath = string[];

export declare interface ComponentProps {
    [key: string]: string | number | boolean | undefined;
}

export declare type DataTabType = 'rendered' | 'source' | 'page';

export declare interface EditingText {
    componentId: string;
    paramName: string;
    content: string;
    path?: string;
}

/**
 * エディタの型定義
 */
export declare interface EditingTextState {
    componentId: string;
    paramName: string;
    hierarchyPath: number[];
    depth: number;
    arrayName?: string;
    itemIndex?: number;
}

export declare interface EditorEvent {
    type: 'save' | 'update' | 'delete';
    componentId: string;
    data?: Component;
}

export declare interface EditorMethods {
    getFieldInfo: (component: Component) => FieldInfo[];
    getArrayItemFieldInfo: (component: Component, arrayKey: string, item: ArrayItem) => FieldInfo[];
    shouldShowBasicField: (key: string, value: unknown, component: Component) => boolean;
    shouldShowArrayField: (key: string, value: unknown, component: Component) => boolean;
    shouldShowArrayItemField: (key: string, value: unknown, component: Component, arrayKey: string, item: ArrayItem) => boolean;
    getInputType: (key: string) => string;
    isCheckboxChecked: (item: Component | ArrayItem, key: string, option: string) => boolean;
    updateCheckboxValue: (item: Component | ArrayItem, key: string, option: string, checked: boolean) => void;
}

export declare interface EditorProps {
    parts: PartSection[];
    initialData?: Component[];
}

export declare interface EditorState {
    currentComponent: Component | null;
    editingText: EditingText | null;
    selectedTab: TabType;
    selectedDataTab: DataTabType;
    currentPath: ComponentPath;
}

export declare interface ExtendedFieldInfo extends FieldInfo {
    paramName: string;
}

export declare interface Field {
    label: string;
    type: 'text' | 'select' | 'textarea' | 'number';
    options?: FieldOption[];
}

export declare interface FieldInfo {
    propKey: string;
    label: string;
    type: FieldType;
    options?: string[];
    defaultValue?: string | string[];
    required?: boolean;
    description?: string;
}

export declare interface FieldOption {
    value: string;
    label: string;
}

export declare type FieldType = 'text' | 'radio' | 'checkbox' | 'select' | 'select-multiple';

export declare interface ImageCollection {
    common: ImageData_2[];
    individual: ImageData_2[];
}

declare interface ImageData_2 {
    id: string;
    name: string;
    originalName: string;
    url: string;
    alt: string;
    size: number;
    type: string;
    uploadedAt: string;
    category: 'common' | 'individual';
    componentId?: string;
    fileData: {
        base64: string;
    };
    metadata?: Record<string, any>;
}
export { ImageData_2 as ImageData }

export declare interface InputField {
    key: string;
    type: 'text' | 'number' | 'checkbox' | 'radio';
    label: string;
    value: string | number | boolean;
}

export declare interface Part {
    title: string;
    body: string;
    fields?: FieldInfo[];
    arrayFields?: {
        [key: string]: {
            fields: FieldInfo[];
            label: string;
        };
    };
}

export declare interface PartSection {
    type: string;
    module: Part[];
}

declare interface Props {
    parts?: PartSection[];
    commonParts?: PartSection[];
    individualParts?: PartSection[];
    page?: Component[];
    commonImages?: ImageData_2[];
    individualImages?: ImageData_2[];
}

export declare type TabType = 'editor' | 'preview' | 'parts' | 'images';

declare const ZeroCodeElement: VueElementConstructor<Props>;
export { ZeroCodeElement as ZeroCode }
export default ZeroCodeElement;

export { }
