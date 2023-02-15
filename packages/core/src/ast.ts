export type EmptyObject = Record<string, never>;

export type ExistencePropertyRule = { isEmpty: true } | { isNotEmpty: true };

export type TextPropertyRule =
  | { equals: string }
  | { doesNotEqual: string }
  | { contains: string }
  | { doesNotContain: string }
  | { startsWith: string }
  | { endsWith: string }
  | ExistencePropertyRule;

export type NumberPropertyRule =
  | { equals: number }
  | { doesNotEqual: number }
  | { greaterThan: number }
  | { lessThan: number }
  | { greaterThanOrEqualTo: number }
  | { lessThanOrEqualTo: number }
  | ExistencePropertyRule;

export type CheckboxPropertyRule =
  | { equals: boolean }
  | { doesNotEqual: boolean };

export type SelectPropertyRule =
  | { equals: string }
  | { doesNotEqual: string }
  | ExistencePropertyRule;

export type MultiSelectPropertyRule =
  | { contains: string }
  | { doesNotContain: string }
  | ExistencePropertyRule;

export type DatePropertyRule =
  | { equals: string }
  | { before: string }
  | { after: string }
  | { onOrBefore: string }
  | { onOrAfter: string }
  | { thisWeek: EmptyObject }
  | { pastWeek: EmptyObject }
  | { pastMonth: EmptyObject }
  | { pastYear: EmptyObject }
  | { nextWeek: EmptyObject }
  | { nextMonth: EmptyObject }
  | { nextYear: EmptyObject }
  | ExistencePropertyRule;

export type PropertyFilter<Rule> = {
  property: string;
  rule: Rule;
};

export type Filter<Rule> =
  | {
      or: Array<Filter<PropertyFilter<Rule>>>;
    }
  | {
      and: Array<Filter<PropertyFilter<Rule>>>;
    }
  | PropertyFilter<Rule>;
