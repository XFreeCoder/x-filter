// reference https://github.com/makenotion/notion-sdk-js/blob/ebf5c7411b331b8e4930151d22c539a248ac749c/src/api-endpoints.ts#L9219

export type EmptyObject = Record<string, never>;

export type ExistencePropertyFilter =
  | { is_empty: true }
  | { is_not_empty: true };

export type TextPropertyFilter =
  | { equals: string }
  | { does_not_equal: string }
  | { contains: string }
  | { does_not_contain: string }
  | { starts_with: string }
  | { ends_with: string }
  | ExistencePropertyFilter;

export type NumberPropertyFilter =
  | { equals: number }
  | { does_not_equal: number }
  | { greater_than: number }
  | { less_than: number }
  | { greater_than_or_equal_to: number }
  | { less_than_or_equal_to: number }
  | ExistencePropertyFilter;

export type CheckboxPropertyFilter =
  | { equals: boolean }
  | { does_not_equal: boolean };

export type SelectPropertyFilter =
  | { equals: string }
  | { does_not_equal: string }
  | ExistencePropertyFilter;

export type MultiSelectPropertyFilter =
  | { contains: string }
  | { does_not_contain: string }
  | ExistencePropertyFilter;

export type StatusPropertyFilter =
  | { equals: string }
  | { does_not_equal: string }
  | ExistencePropertyFilter;

export type DatePropertyFilter =
  | { equals: string }
  | { before: string }
  | { after: string }
  | { on_or_before: string }
  | { on_or_after: string }
  | { this_week: EmptyObject }
  | { past_week: EmptyObject }
  | { past_month: EmptyObject }
  | { past_year: EmptyObject }
  | { next_week: EmptyObject }
  | { next_month: EmptyObject }
  | { next_year: EmptyObject }
  | ExistencePropertyFilter;

export type FormulaPropertyFilter =
  | { string: TextPropertyFilter }
  | { checkbox: CheckboxPropertyFilter }
  | { number: NumberPropertyFilter }
  | { date: DatePropertyFilter };

export type PropertyFilter =
  | { title: TextPropertyFilter; property: string; type?: "title" }
  | { rich_text: TextPropertyFilter; property: string; type?: "rich_text" }
  | { number: NumberPropertyFilter; property: string; type?: "number" }
  | { checkbox: CheckboxPropertyFilter; property: string; type?: "checkbox" }
  | { select: SelectPropertyFilter; property: string; type?: "select" }
  | {
      multi_select: MultiSelectPropertyFilter;
      property: string;
      type?: "multi_select";
    }
  | { status: StatusPropertyFilter; property: string; type?: "status" }
  | { date: DatePropertyFilter; property: string; type?: "date" }
  | { files: ExistencePropertyFilter; property: string; type?: "files" }
  | { url: TextPropertyFilter; property: string; type?: "url" }
  | { email: TextPropertyFilter; property: string; type?: "email" }
  | {
      phone_number: TextPropertyFilter;
      property: string;
      type?: "phone_number";
    }
  | {
      created_time: DatePropertyFilter;
      property: string;
      type?: "created_time";
    }
  | {
      last_edited_time: DatePropertyFilter;
      property: string;
      type?: "last_edited_time";
    }
  | { formula: FormulaPropertyFilter; property: string; type?: "formula" };

export type TimestampCreatedTimeFilter = {
  created_time: DatePropertyFilter;
  timestamp: "created_time";
  type?: "created_time";
};

export type TimestampLastEditedTimeFilter = {
  last_edited_time: DatePropertyFilter;
  timestamp: "last_edited_time";
  type?: "last_edited_time";
};

export type Filter =
  | {
      or: Array<
        | PropertyFilter
        | TimestampCreatedTimeFilter
        | TimestampLastEditedTimeFilter
        | { or: Array<PropertyFilter> }
        | { and: Array<PropertyFilter> }
      >;
    }
  | {
      and: Array<
        | PropertyFilter
        | TimestampCreatedTimeFilter
        | TimestampLastEditedTimeFilter
        | { or: Array<PropertyFilter> }
        | { and: Array<PropertyFilter> }
      >;
    }
  | PropertyFilter
  | TimestampCreatedTimeFilter
  | TimestampLastEditedTimeFilter;
