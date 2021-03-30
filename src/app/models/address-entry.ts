export interface AddressEntry {
	select: String;
	id: String;
	name: String;
	location: String; // string for now; can use a Geo location timestamp
	office: String;
	phone: ChoicePhone;
}

interface ChoicePhone {
	cellular: String;
	office: String;
}
