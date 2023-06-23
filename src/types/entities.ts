export type Person = {
	email: string;
	password: string;
	address: string;
	phone: string;
};

export type Rider = Person;

export type User = {
	firstName: string;
	lastName: string;
} & Person;

export type TimeTable = {
	monday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	tuesday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	wednesday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	thursday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	friday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	saturday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
	sunday: {
		opening1: string | null;
		closing1: string | null;
		opening2: string | null;
		closing2: string | null;
	};
};

export type Restaurant = {
	name: string;
	url: string | undefined;
	category: string;
	timetable: TimeTable;
} & Person;
