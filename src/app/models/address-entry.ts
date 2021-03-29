export interface AddressEntry {
	id: Number;
	name: String;
	location: String; // string for now; can use a Geo location timestamp
	office: String;
	phone: ChoicePhone;
}

interface ChoicePhone {
	cellular: String;
	office: String;
}
